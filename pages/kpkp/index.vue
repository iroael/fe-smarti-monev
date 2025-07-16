<template>
  <CommonCard3 colClass="col-sm-12" text="true" headerTitle="true" pre="true" preClass="f-m-light mt-1"
    title="Rekapitulasi Hunian per Perumahan" :desc="desc">
    <div class="table-responsive theme-scrollbar">
      <!-- Enhanced Tabs with Bootstrap styling -->
      <div class="d-flex flex-wrap gap-2 my-4">
        <button
          v-for="option in options"
          :key="option.value"
          @click="handleTabChange(option.value)"
          :class="[
            'btn btn-sm px-3 py-2 rounded-pill fw-semibold transition-all',
            activeTab === option.value
              ? `btn-${option.activeColor} text-white shadow-sm`
              : `btn-outline-${option.activeColor}`
          ]"
        >
          <i :class="option.icon" class="me-1"></i>
          {{ option.label }}
        </button>
      </div>

      <!-- Enhanced Search with Bootstrap styling -->
      <div class="row justify-content-between align-items-center mb-4">
        <div class="col-md-6">
          <div class="d-flex align-items-center">
            <label class="form-label me-2 mb-0 fw-medium">Show:</label>
            <select v-model="elementsPerPage" class="form-select form-select-sm" style="width: auto;">
              <option value="6">6</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span class="ms-2 text-muted small">entries</span>
          </div>
        </div>
        <div class="col-md-4">
          <div class="input-group">
            <span class="input-group-text bg-light border-end-0">
              <i class="fas fa-search text-muted"></i>
            </span>
            <input 
              id="table-complete-search" 
              type="text" 
              class="form-control border-start-0 ps-0" 
              placeholder="Cari perumahan atau lokasi..."
              v-model="filterQuery"
            >
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="mt-2 text-muted">Memuat data...</div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="alert alert-danger" role="alert">
        <i class="fas fa-exclamation-triangle me-2"></i>
        {{ error }}
        <button class="btn btn-outline-danger btn-sm ms-2" @click="fetchAndProcess">
          Coba Lagi
        </button>
      </div>

      <!-- Enhanced Table with modern styling -->
      <div v-else class="table-responsive">
        <table class="table table-hover table-borderless align-middle">
          <thead class="table-light">
            <tr>
              <th class="text-center fw-bold" style="width: 60px;">No</th>
              <th class="fw-bold">Nama Perumahan</th>
              <th class="fw-bold">Provinsi, Kabupaten/Kota</th>
              <th class="text-center fw-bold" style="width: 100px;">KPR Subsidi</th>
              <th class="fw-bold" style="width: 280px;">Status Hunian</th>
              <th class="text-center fw-bold" style="width: 100px;">Ready Stock</th>
              <th class="text-center fw-bold" style="width: 100px;">Aksi</th>
            </tr>
          </thead>
          <tbody v-if="!get_rows().length">
            <tr>
              <td colspan="7" class="text-center py-5 text-muted">
                <i class="fas fa-search fa-2x mb-2 text-muted opacity-50"></i>
                <div>No matching records found</div>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr v-for="(row, index) in get_rows()" :key="index" class="border-bottom">
              <td class="text-center fw-medium">
                <span class="badge bg-light text-dark">
                  {{ index + 1 + (currentPage - 1) * elementsPerPage }}
                </span>
              </td>
              <td>
                <div class="fw-semibold text-primary">{{ row.namaPerumahan }}</div>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <i class="fas fa-map-marker-alt text-muted me-2"></i>
                  <span>{{ row.lokasi }} - {{ row.kdl }}</span>
                </div>
              </td>
              <td class="text-center">
                <span class="badge bg-info fs-6">{{ row.kprSubsidi }}</span>
              </td>
              <td>
                <!-- Tidak Dihuni -->
                <div class="mb-2">
                  <div class="d-flex justify-content-between align-items-center mb-1">
                    <small class="fw-medium text-danger">
                      <i class="fas fa-home me-1"></i>Tidak Dihuni
                    </small>
                    <small class="text-muted">
                      {{ row.kprSubsidi > 0 ? Math.round((row.tidakDihuni / row.kprSubsidi) * 100) : 0 }}% ({{ row.tidakDihuni }} unit)
                    </small>
                  </div>
                  <div class="progress" style="height: 8px;">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      :style="{ width: `${row.kprSubsidi > 0 ? Math.round((row.tidakDihuni / row.kprSubsidi) * 100) : 0}%` }"
                    ></div>
                  </div>
                </div>

                <!-- Terindikasi Tidak Dihuni -->
                <div class="mb-2">
                  <div class="d-flex justify-content-between align-items-center mb-1">
                    <small class="fw-medium text-warning">
                      <i class="fas fa-exclamation-triangle me-1"></i>Terindikasi
                    </small>
                    <small class="text-muted">
                      {{ row.kprSubsidi > 0 ? Math.round((row.terindikasiTidakDihuni / row.kprSubsidi) * 100) : 0 }}% ({{ row.terindikasiTidakDihuni }} unit)
                    </small>
                  </div>
                  <div class="progress" style="height: 8px;">
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      :style="{ width: `${row.kprSubsidi > 0 ? Math.round((row.terindikasiTidakDihuni / row.kprSubsidi) * 100) : 0}%` }"
                    ></div>
                  </div>
                </div>

                <!-- Dihuni -->
                <div>
                  <div class="d-flex justify-content-between align-items-center mb-1">
                    <small class="fw-medium text-success">
                      <i class="fas fa-check-circle me-1"></i>Dihuni
                    </small>
                    <small class="text-muted">
                      {{ row.kprSubsidi > 0 ? Math.round((row.dihuni / row.kprSubsidi) * 100) : 0 }}% ({{ row.dihuni }} unit)
                    </small>
                  </div>
                  <div class="progress" style="height: 8px;">
                    <div
                      class="progress-bar bg-success"
                      role="progressbar"
                      :style="{ width: `${row.kprSubsidi > 0 ? Math.round((row.dihuni / row.kprSubsidi) * 100) : 0}%` }"
                    ></div>
                  </div>
                </div>
              </td>
              <td class="text-center">
                <span class="badge bg-secondary fs-6">{{ row.readyStock }}</span>
              </td>
              <td class="text-center">
                <button 
                  class="btn btn-sm btn-outline-primary rounded-pill px-3"
                  @click.prevent="viewDetail(row)"
                >
                  <i class="fas fa-eye me-1"></i>Lihat
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Enhanced Pagination -->
      <div v-if="!isLoading && !error" class="d-flex justify-content-between align-items-center mt-4">
        <div class="text-muted small">
          Showing {{ (currentPage - 1) * elementsPerPage + 1 }} to 
          {{ Math.min(currentPage * elementsPerPage, allData.length) }} of 
          {{ allData.length }} entries
        </div>
        
        <nav aria-label="Table pagination">
          <ul class="pagination pagination-sm mb-0">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <a class="page-link" @click="prev()" aria-label="Previous">
                <i class="fas fa-chevron-left"></i>
              </a>
            </li>
            
            <li 
              class="page-item" 
              v-for="i in getVisiblePages()" 
              :key="i" 
              :class="{ active: i === currentPage }"
              @click="change_page(i)"
            >
              <a class="page-link">{{ i }}</a>
            </li>
            
            <li class="page-item" :class="{ disabled: currentPage === num_pages() }">
              <a class="page-link" @click="next()" aria-label="Next">
                <i class="fas fa-chevron-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </CommonCard3>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useTableData } from '@/composables/useTableData'
import { useRouter } from 'vue-router'

const router = useRouter()

const desc = ref("Menampilkan data hunian yang dikelompokkan berdasarkan nama perumahan dari KPR Subsidi. Data dihitung berdasarkan klasifikasi hunian aktif, terindikasi tidak dihuni, dan tidak dihuni.")
const filterQuery = ref("")
const currentPage = ref(1)
const elementsPerPage = ref(6)
const activeTab = ref('all')

const { summary, fetchAndProcess, isLoading, error, filterByAkadPeriod } = useTableData()
const allData = ref([])

const options = [
  { 
    label: 'Semua', 
    value: 'all', 
    activeColor: 'primary', 
    icon: 'fas fa-list' 
  },
  { 
    label: 'Akad < 3 Bulan', 
    value: 'under3', 
    activeColor: 'success', 
    icon: 'fas fa-clock' 
  },
  { 
    label: 'Akad < 6 Bulan', 
    value: 'under6', 
    activeColor: 'success', 
    icon: 'fas fa-clock' 
  },
  { 
    label: 'Akad < 1 Tahun', 
    value: 'under12', 
    activeColor: 'warning', 
    icon: 'fas fa-calendar' 
  },
  { 
    label: 'Akad < 5 Tahun', 
    value: 'under60', 
    activeColor: 'warning', 
    icon: 'fas fa-calendar-alt' 
  },
  { 
    label: 'Akad > 5 Tahun', 
    value: 'above60', 
    activeColor: 'info', 
    icon: 'fas fa-calendar-check' 
  }
]

onMounted(async () => {
  console.log('=== COMPONENT MOUNTED ===')
  console.log('Initial active tab:', activeTab.value)
  
  await fetchAndProcess()
  
  console.log('Data fetched, summary length:', summary.value.length)
  updateFilteredData()
  
  console.log('=== COMPONENT MOUNTED COMPLETE ===')
})

// Fungsi untuk memperbarui data yang difilter
const updateFilteredData = () => {
  console.log('=== FILTER UPDATE DEBUG ===')
  console.log('Active tab:', activeTab.value)
  console.log('Filter query:', filterQuery.value)
  
  let filtered = filterByAkadPeriod(activeTab.value)
  console.log('After period filter:', filtered.length, 'items')
  console.log('Filtered data sample:', filtered.slice(0, 2))
  
  if (filterQuery.value) {
    const beforeSearch = filtered.length
    filtered = filtered.filter((row) =>
      row.namaPerumahan.toLowerCase().includes(filterQuery.value.toLowerCase()) ||
      row.lokasi.toLowerCase().includes(filterQuery.value.toLowerCase())
    )
    console.log('After search filter:', filtered.length, 'items (was', beforeSearch, ')')
  }
  
  allData.value = filtered
  currentPage.value = 1
  
  console.log('Final filtered data:', allData.value.length, 'items')
  console.log('=== END FILTER DEBUG ===')
}

// Handle tab change
const handleTabChange = (tabValue: string) => {
  console.log('=== TAB CHANGE DEBUG ===')
  console.log('Previous tab:', activeTab.value)
  console.log('New tab:', tabValue)
  
  activeTab.value = tabValue
  
  // Log data sebelum filtering
  console.log('Total summary data:', summary.value.length)
  console.log('Summary data sample:', summary.value.slice(0, 2))
  
  updateFilteredData()
}

watch(filterQuery, () => {
  updateFilteredData()
})

watch(elementsPerPage, () => {
  currentPage.value = 1
})

// Watch for changes in summary data
watch(summary, () => {
  updateFilteredData()
}, { deep: true })

function get_rows() {
  const start = (currentPage.value - 1) * elementsPerPage.value
  const end = start + elementsPerPage.value
  return allData.value.slice(start, end)
}

function num_pages() {
  return Math.ceil(allData.value.length / elementsPerPage.value)
}

function getVisiblePages() {
  const totalPages = num_pages()
  const current = currentPage.value
  const delta = 2
  
  const range = []
  const rangeWithDots = []
  
  for (let i = Math.max(2, current - delta); i <= Math.min(totalPages - 1, current + delta); i++) {
    range.push(i)
  }
  
  if (current - delta > 2) {
    rangeWithDots.push(1, '...')
  } else {
    rangeWithDots.push(1)
  }
  
  rangeWithDots.push(...range)
  
  if (current + delta < totalPages - 1) {
    rangeWithDots.push('...', totalPages)
  } else {
    rangeWithDots.push(totalPages)
  }
  
  return rangeWithDots.filter((item, index, arr) => arr.indexOf(item) === index && item !== 1 || index === 0)
}

function change_page(page: number) {
  if (typeof page === 'number') {
    currentPage.value = page
  }
}

function next() {
  if (currentPage.value < num_pages()) currentPage.value++
}

function prev() {
  if (currentPage.value > 1) currentPage.value--
}

function viewDetail(row: any) {
  // You can implement a proper modal or navigation here
  alert(`Detail untuk ${row.namaPerumahan} belum diimplementasikan.`)
  router.push(`/kpkp/detail/${row.kdl}`)
}
</script>

<style scoped>
.table-responsive {
  border-radius: 8px;
  overflow: hidden;
}

.table {
  margin-bottom: 0;
}

.table th {
  background-color: #f8f9fa;
  border-bottom: 2px solid #dee2e6;
  font-weight: 600;
  color: #495057;
  padding: 12px;
}

.table td {
  padding: 12px;
  vertical-align: middle;
}

.table-hover tbody tr:hover {
  background-color: #f8f9fa;
}

.progress {
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  transition: width 0.3s ease;
}

.btn {
  transition: all 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.pagination .page-link {
  border: 1px solid #dee2e6;
  color: #6c757d;
  padding: 6px 12px;
}

.pagination .page-item.active .page-link {
  background-color: #007bff;
  border-color: #007bff;
  color: white;
}

.pagination .page-link:hover {
  background-color: #e9ecef;
  border-color: #dee2e6;
}

.badge {
  font-size: 0.875rem;
  font-weight: 500;
}

.input-group .form-control:focus {
  border-color: #80bdff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.transition-all {
  transition: all 0.2s ease;
}

.spinner-border {
  width: 3rem;
  height: 3rem;
}

@media (max-width: 768px) {
  .d-flex.flex-wrap.gap-2 {
    justify-content: center;
  }
  
  .table-responsive {
    font-size: 0.875rem;
  }
  
  .btn-sm {
    font-size: 0.75rem;
    padding: 4px 8px;
  }
}
</style>