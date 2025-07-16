import { ref } from 'vue'

export interface Dose {
  dos: number | string
}

export interface Unit {
  id: number
  nama_perum: string
  alamat_rum: string
  provinsi: string
  kabupaten: string
  status_mbr: number
  dose: Dose[]
  is_ready_stock: boolean
  tgl_akad: string
  tgl_aktiv: string
}

export interface HousingGroup {
  namaPerumahan: string
  lokasi: string
  kdl: string
  kprSubsidi: number
  tidakDihuni: number
  terindikasiTidakDihuni: number
  dihuni: number
  readyStock: number
  units: Unit[]
}

export function useTableData() {
  const summary = ref<HousingGroup[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const filteredUnits = ref<Unit[]>([])
  const units = ref<Unit[]>([])

  const API_URL = 'https://api.smarti.id/data/modja/smarti'

  // Fungsi untuk mendapatkan tanggal yang lebih muda (yang lebih baru)
  const getYoungerDate = (tglAkad: string, tglAktiv: string): Date => {
    const akad = new Date(tglAkad)
    const aktiv = new Date(tglAktiv)
    
    // Pastikan tanggal valid
    if (isNaN(akad.getTime()) || isNaN(aktiv.getTime())) {
      console.warn('Invalid date format:', { tglAkad, tglAktiv })
      return new Date() // fallback ke tanggal sekarang
    }
    
    // Ambil tanggal yang lebih baru (younger = lebih muda = lebih baru)
    const younger = akad > aktiv ? akad : aktiv
    
    console.log('Date comparison:', {
      akad: akad.toISOString().split('T')[0],
      aktiv: aktiv.toISOString().split('T')[0],
      younger: younger.toISOString().split('T')[0]
    })
    
    return younger
  }

  // Fungsi untuk menghitung selisih bulan
  const getMonthDiff = (from: Date, to: Date): number => {
    const years = to.getFullYear() - from.getFullYear()
    const months = to.getMonth() - from.getMonth()
    const days = to.getDate() - from.getDate()
    
    let total = years * 12 + months
    
    // Jika hari masih negatif, berarti belum genap bulan
    if (days < 0) {
      total -= 1
    }
    
    console.log('Month difference calculation:', {
      from: from.toISOString().split('T')[0],
      to: to.toISOString().split('T')[0],
      years,
      months,
      days,
      total
    })
    
    return Math.max(0, total) // Pastikan tidak negatif
  }

  // Fungsi untuk mengklasifikasi unit berdasarkan periode akad
  const classifyByAkadPeriod = (unit: Unit): string => {
    // Validasi field tanggal
    if (!unit.tgl_akad || !unit.tgl_aktiv) {
      console.log(`Unit ${unit.id} missing date fields:`, {
        tgl_akad: unit.tgl_akad,
        tgl_aktiv: unit.tgl_aktiv
      })
      return 'unknown'
    }
    
    try {
      const youngerDate = getYoungerDate(unit.tgl_akad, unit.tgl_aktiv)
      const now = new Date()
      const monthDiff = getMonthDiff(youngerDate, now)
      
      console.log(`Unit ${unit.id} date analysis:`, {
        tgl_akad: unit.tgl_akad,
        tgl_aktiv: unit.tgl_aktiv,
        youngerDate: youngerDate.toISOString().split('T')[0],
        monthDiff: monthDiff
      })
      
      let classification = 'unknown'
      
      if (monthDiff < 3) {
        classification = 'under3'
      } else if (monthDiff < 6) {
        classification = 'under6'
      } else if (monthDiff < 12) {
        classification = 'under12'
      } else if (monthDiff < 60) {
        classification = 'under60'
      } else {
        classification = 'above60'
      }
      
      console.log(`Unit ${unit.id} classified as: ${classification}`)
      return classification
      
    } catch (error) {
      console.error(`Error classifying unit ${unit.id}:`, error)
      return 'unknown'
    }
  }

  // Fungsi untuk mengklasifikasi status hunian
  const classifyUnit = (unit: Unit): 'Dihuni' | 'Terindikasi Tidak Dihuni' | 'Tidak Dihuni' => {
    // Cek apakah ada penggunaan yang valid
    const hasValidUsage = unit.dose?.some(d => {
      const dosValue = typeof d.dos === 'number' ? d.dos : parseFloat(d.dos as string)
      return !isNaN(dosValue) && dosValue > 0
    })
    
    if (!hasValidUsage) {
      return 'Tidak Dihuni'
    }
    
    // Jika ada penggunaan tapi status_mbr = 2, maka terindikasi tidak dihuni
    if (unit.status_mbr === 2) {
      return 'Terindikasi Tidak Dihuni'
    }
    
    return 'Dihuni'
  }

  const fetchAndProcess = async () => {
    isLoading.value = true
    error.value = null

    try {
      console.log('=== FETCH DATA DEBUG ===')
      console.log('Fetching from:', API_URL)
      
      const response = await fetch(API_URL)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const json = await response.json()

      console.log('API Response structure:', {
        hasData: !!json?.data,
        isArray: Array.isArray(json?.data),
        dataLength: json?.data?.length || 0
      })

      if (!Array.isArray(json?.data)) {
        throw new Error('Format data tidak sesuai - data bukan array')
      }

      const data: Unit[] = json.data
      console.log('Sample unit data:', data.slice(0, 2))
      
      // Gunakan Map untuk mengelompokkan berdasarkan nama perumahan
      const map = new Map<string, HousingGroup>()
      let processedUnits = 0
      let skippedUnits = 0

      for (const unit of data) {
        // Validasi unit memiliki dose yang valid
        const hasValidDose = unit.dose?.some(d => {
          const dosValue = typeof d.dos === 'number' ? d.dos : parseFloat(d.dos as string)
          return !isNaN(dosValue)
        })
        
        if (!hasValidDose) {
          skippedUnits++
          continue
        }
        
        processedUnits++
        
        // Parse nama perumahan dan KDL
        const [perumName, kdl] = unit.nama_perum.split('+')
        const key = unit.nama_perum // Gunakan nama lengkap sebagai key

        // Buat group baru jika belum ada
        if (!map.has(key)) {
          map.set(key, {
            namaPerumahan: perumName?.trim() || 'Tidak Diketahui',
            kdl: kdl?.trim() || '-',
            lokasi: `${unit.provinsi || 'Tidak Diketahui'}, ${unit.kabupaten || 'Tidak Diketahui'}`,
            kprSubsidi: 0,
            tidakDihuni: 0,
            terindikasiTidakDihuni: 0,
            dihuni: 0,
            readyStock: 0,
            units: []
          })
        }

        const group = map.get(key)!
        group.kprSubsidi += 1
        group.units.push(unit) // Simpan unit untuk filtering nanti

        // Klasifikasi status hunian
        const status = classifyUnit(unit)
        if (status === 'Dihuni') {
          group.dihuni += 1
        } else if (status === 'Terindikasi Tidak Dihuni') {
          group.terindikasiTidakDihuni += 1
        } else {
          group.tidakDihuni += 1
        }

        // Hitung ready stock
        if (unit.is_ready_stock) {
          group.readyStock += 1
        }
      }

      // Konversi Map ke Array
      summary.value = Array.from(map.values())
      
      console.log('Processing complete:', {
        totalUnits: data.length,
        processedUnits,
        skippedUnits,
        housingGroups: summary.value.length
      })
      
      console.log('Sample housing groups:', summary.value.slice(0, 2))
      console.log('=== END FETCH DATA DEBUG ===')
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Gagal mengambil atau memproses data'
      error.value = errorMessage
      console.error('Fetch error:', err)
    } finally {
      isLoading.value = false
    }
  }

  // Fungsi untuk memfilter data berdasarkan periode akad
  const filterByAkadPeriod = (period: string): HousingGroup[] => {
    console.log('=== COMPOSABLE FILTER DEBUG ===')
    console.log('Filter period:', period)
    console.log('Total summary groups:', summary.value.length)
    
    // Jika period 'all', kembalikan semua data
    if (period === 'all') {
      console.log('Returning all data')
      console.log('=== END COMPOSABLE FILTER DEBUG ===')
      return summary.value
    }

    // Filter setiap group berdasarkan periode
    const result = summary.value.map(group => {
      console.log(`Processing group: ${group.namaPerumahan}`)
      console.log(`Group has ${group.units.length} units`)
      
      // Filter unit berdasarkan periode akad
      const filteredUnits = group.units.filter(unit => {
        if (!unit.tgl_akad || !unit.tgl_aktiv) {
          console.log(`Unit ${unit.id} missing date fields`)
          return false
        }
        
        const akadPeriod = classifyByAkadPeriod(unit)
        const match = akadPeriod === period
        
        if (match) {
          console.log(`Unit ${unit.id} matches period ${period} (classified as ${akadPeriod})`)
        }
        
        return match
      })

      console.log(`Filtered ${filteredUnits.length} units for ${group.namaPerumahan}`)

      // Jika tidak ada unit yang cocok, kembalikan group dengan nilai 0
      if (filteredUnits.length === 0) {
        return {
          ...group,
          kprSubsidi: 0,
          tidakDihuni: 0,
          terindikasiTidakDihuni: 0,
          dihuni: 0,
          readyStock: 0
        }
      }

      // Hitung ulang statistik berdasarkan unit yang difilter
      let tidakDihuni = 0
      let terindikasiTidakDihuni = 0
      let dihuni = 0
      let readyStock = 0

      filteredUnits.forEach(unit => {
        const status = classifyUnit(unit)
        if (status === 'Dihuni') {
          dihuni += 1
        } else if (status === 'Terindikasi Tidak Dihuni') {
          terindikasiTidakDihuni += 1
        } else {
          tidakDihuni += 1
        }

        if (unit.is_ready_stock) {
          readyStock += 1
        }
      })

      const newGroup = {
        ...group,
        kprSubsidi: filteredUnits.length,
        tidakDihuni,
        terindikasiTidakDihuni,
        dihuni,
        readyStock
      }
      
      console.log(`New stats for ${group.namaPerumahan}:`, {
        kprSubsidi: newGroup.kprSubsidi,
        tidakDihuni: newGroup.tidakDihuni,
        terindikasiTidakDihuni: newGroup.terindikasiTidakDihuni,
        dihuni: newGroup.dihuni,
        readyStock: newGroup.readyStock
      })

      return newGroup
    }).filter(group => {
      // Hanya tampilkan group yang memiliki unit sesuai filter
      const keep = group.kprSubsidi > 0
      if (!keep) {
        console.log(`Removing ${group.namaPerumahan} - no matching units`)
      }
      return keep
    })
    
    console.log(`Final result: ${result.length} groups`)
    console.log('=== END COMPOSABLE FILTER DEBUG ===')
    return result
  }

  const fetchUnitsByKdl = async (kdl: string) => {
    isLoading.value = true
    error.value = null
    filteredUnits.value = []

    try {
      const response = await fetch(API_URL)
      const json = await response.json()

      if (!Array.isArray(json?.data)) {
        throw new Error('Format data tidak sesuai - data bukan array')
      }

      const allUnits: Unit[] = json.data

      filteredUnits.value = allUnits.filter((unit: Unit) => {
        if (!unit.nama_perum || typeof unit.nama_perum !== 'string') return false

        const parts = unit.nama_perum.split('+')
        if (parts.length < 2) return false

        const unitKdl = parts[1].trim()
        const doseValid = unit.dose?.some(d => {
          const value = typeof d.dos === 'number' ? d.dos : parseFloat(d.dos)
          return !isNaN(value) && value >= 0
        })

        const match = unitKdl === kdl && doseValid
        return match
      })
      console.log('filteredUnit', filteredUnits.value)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Gagal memuat data detail'
      error.value = message
      console.error('fetchUnitsByKdl error:', err)
    } finally {
      isLoading.value = false
    }
  }




  return {
    summary,
    isLoading,
    error,
    units, // <-- ini penting!
    fetchAndProcess,
    filterByAkadPeriod,
    getYoungerDate,
    getMonthDiff,
    classifyByAkadPeriod, // Export untuk debugging
    // fetchFilteredUnits,
    fetchUnitsByKdl,
    filteredUnits
  }
}