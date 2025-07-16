<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTableData } from '~/composables/useTableData'

const route = useRoute()
const kdl = route.params.kdl as string
const searchTerm = ref('')
const currentPage = ref(1)
const itemsPerPage = ref(10)

const { fetchUnitsByKdl, filteredUnits, isLoading, error } = useTableData()

const searchedUnits = computed(() => {
  if (!searchTerm.value) return filteredUnits.value
  return filteredUnits.value.filter(unit => 
    unit.nama_mbr.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
    unit.serialnumber.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
    unit.nbonet_net_imei.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})

const paginatedUnits = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return searchedUnits.value.slice(start, end)
})

const totalPages = computed(() => 
  Math.ceil(searchedUnits.value.length / itemsPerPage.value)
)

onMounted(() => {
  if (kdl) fetchUnitsByKdl(kdl)
})

function formatStatus(status: number) {
  switch (status) {
    case 1: return 'Belum Akad'
    case 2:
    case 3: return 'Sudah Akad'
    default: return '-'
  }
}

function getStatusBadge(status: number) {
  switch (status) {
    case 1: return 'badge-warning'
    case 2:
    case 3: return 'badge-success'
    default: return 'badge-secondary'
  }
}

function formatTanggal(tanggal: string | null | undefined): string {
  if (!tanggal) return '-'
  const date = new Date(tanggal)
  if (isNaN(date.getTime())) return '-'
  return date.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}

function formatNamaPerum(nama: string): string {
  if (!nama) return '-'
  return nama.split('+')[0].trim()
}

function formatUplink(uplink: string | null | undefined): string {
  if (!uplink) return '-'
  const date = new Date(uplink)
  if (isNaN(date.getTime())) return '-'
  return date.toLocaleString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

function isUnitOnline(lastUplink: string | null | undefined): boolean {
  if (!lastUplink) return false
  const lastUplinkDate = new Date(lastUplink).toLocaleDateString('id-ID')
  const currentDate = new Date().toLocaleDateString('id-ID')
  return lastUplinkDate === currentDate
}

function changePage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}
</script>

<template>
  <div class="container-fluid px-4 py-6">
    <!-- Header Card -->
    <div class="card shadow-sm border-0 mb-4">
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col-md-8">
            <h1 class="h3 mb-1 text-dark fw-bold">Detail Unit</h1>
            <p class="text-muted mb-0">
              <i class="fas fa-code me-2"></i>
              KDL: <span class="badge bg-primary">{{ kdl }}</span>
            </p>
          </div>
          <div class="col-md-4 text-md-end">
            <div class="d-flex align-items-center justify-content-md-end gap-2">
              <div class="text-muted small">
                <i class="fas fa-clock me-1"></i>
                {{ new Date().toLocaleDateString('id-ID') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Controls Card -->
    <div class="card shadow-sm border-0 mb-4">
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col-md-8">
            <div class="position-relative">
              <i class="fas fa-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
              <input
                v-model="searchTerm"
                type="text"
                class="form-control ps-5"
                placeholder="Cari berdasarkan nama, serial number, atau IMEI..."
                style="border-radius: 12px; border: 1px solid #e3e6f0;"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="d-flex align-items-center justify-content-md-end gap-3">
              <label class="form-label mb-0 text-muted small">Tampilkan:</label>
              <select
                v-model="itemsPerPage"
                class="form-select form-select-sm"
                style="width: auto; border-radius: 8px;"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="card shadow-sm border-0">
      <div class="card-body text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-3 text-muted">Memuat data...</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="card shadow-sm border-0">
      <div class="card-body text-center py-5">
        <div class="text-danger mb-3">
          <i class="fas fa-exclamation-triangle fa-2x"></i>
        </div>
        <p class="text-danger">Terjadi kesalahan: {{ error }}</p>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else-if="!filteredUnits.length" class="card shadow-sm border-0">
      <div class="card-body text-center py-5">
        <div class="text-muted mb-3">
          <i class="fas fa-inbox fa-3x"></i>
        </div>
        <h5 class="text-muted">Tidak ada unit ditemukan</h5>
        <p class="text-muted small">Silakan periksa kembali KDL atau coba lagi nanti.</p>
      </div>
    </div>

    <!-- Main Table Card -->
    <div v-else class="card shadow-sm border-0">
      <div class="card-header bg-white border-bottom">
        <div class="d-flex justify-content-between align-items-center">
          <h6 class="mb-0 text-dark fw-semibold">
            <i class="fas fa-table me-2"></i>
            Daftar Unit ({{ searchedUnits.length }})
          </h6>
          <div class="text-muted small">
            Halaman {{ currentPage }} dari {{ totalPages }}
          </div>
        </div>
      </div>

      <div class="card-body p-0">
        <!-- Desktop Table -->
        <div class="table-responsive">
          <table class="table table-hover table-striped mb-0">
            <thead class="table-light">
              <tr>
                <th class="text-center" style="width: 60px;">#</th>
                <th>Nama Member</th>
                <th>Alamat</th>
                <th class="text-center" style="width: 120px;">Status</th>
                <th style="width: 200px;">Informasi Device</th>
                <th class="text-center" style="width: 140px;">Monitoring</th>
                <th class="text-center" style="width: 120px;">Tgl Akad</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(unit, index) in paginatedUnits" :key="unit.id">
                <td class="text-center align-middle">
                  <div class="fw-semibold text-primary">
                    {{ (currentPage - 1) * itemsPerPage + index + 1 }}
                  </div>
                </td>
                
                <td class="align-middle">
                  <div class="fw-semibold text-dark">{{ unit.nama_mbr }}</div>
                </td>
                
                <td class="align-middle">
                  <div class="text-dark">{{ formatNamaPerum(unit.nama_perum) }}</div>
                  <div class="text-muted small">{{ unit.alamat_rum }}</div>
                </td>
                
                <td class="text-center align-middle">
                  <span :class="getStatusBadge(unit.status_mbr)" class="badge">
                    {{ formatStatus(unit.status_mbr) }}
                  </span>
                </td>
                
                <td class="align-middle">
                  <div class="mb-2">
                    <span class="d-inline-flex align-items-center">
                      <div 
                        class="rounded-circle me-2" 
                        :class="isUnitOnline(unit.last_uplink_time) ? 'bg-success' : 'bg-danger'"
                        style="width: 8px; height: 8px;"
                      ></div>
                      <span :class="isUnitOnline(unit.last_uplink_time) ? 'text-success' : 'text-danger'" class="fw-semibold small">
                        {{ isUnitOnline(unit.last_uplink_time) ? 'Online' : 'Offline' }}
                      </span>
                    </span>
                  </div>
                  <div class="text-muted small mb-1">
                    <i class="fas fa-clock me-1"></i>
                    {{ formatUplink(unit.last_uplink_time) }}
                  </div>
                  <div class="text-muted small mb-1">
                    <i class="fas fa-barcode me-1"></i>
                    SN: {{ unit.serialnumber }}
                  </div>
                  <div class="text-muted small">
                    <i class="fas fa-mobile-alt me-1"></i>
                    IMEI: {{ unit.nbonet_net_imei }}
                  </div>
                </td>
                
                <td class="text-center align-middle">
                  -
                </td>
                
                <td class="text-center align-middle">
                  <div class="text-dark fw-semibold">
                    {{ formatTanggal(unit.tgl_akad) }}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="card-footer bg-white border-top">
        <nav aria-label="Page navigation">
          <div class="d-flex justify-content-between align-items-center">
            <div class="text-muted small">
              Menampilkan {{ (currentPage - 1) * itemsPerPage + 1 }} - {{ Math.min(currentPage * itemsPerPage, searchedUnits.length) }} dari {{ searchedUnits.length }} unit
            </div>
            <ul class="pagination pagination-sm mb-0">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link" @click="changePage(currentPage - 1)" href="#">
                  <i class="fas fa-chevron-left"></i>
                </a>
              </li>
              
              <li 
                v-for="page in Math.min(5, totalPages)" 
                :key="page"
                class="page-item"
                :class="{ active: page === currentPage }"
              >
                <a class="page-link" @click="changePage(page)" href="#">{{ page }}</a>
              </li>
              
              <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                <a class="page-link" @click="changePage(currentPage + 1)" href="#">
                  <i class="fas fa-chevron-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>
.badge-warning {
  background-color: #ffc107 !important;
  color: #212529 !important;
}

.badge-success {
  background-color: #198754 !important;
  color: white !important;
}

.badge-secondary {
  background-color: #6c757d !important;
  color: white !important;
}

.card {
  border-radius: 12px !important;
}

.table > :not(caption) > * > * {
  padding: 1rem 0.75rem;
}

.table-hover > tbody > tr:hover > td {
  background-color: rgba(0, 123, 255, 0.05);
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.page-link {
  border-radius: 8px !important;
  margin: 0 2px;
  border: 1px solid #dee2e6;
}

.page-item.active .page-link {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: #667eea;
}

.form-control:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
}

.text-primary {
  color: #667eea !important;
}

.bg-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
}

.spinner-border {
  color: #667eea !important;
}
</style>