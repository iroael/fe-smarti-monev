<template>
  <table class="table table-bordered table-hover">
    <thead class="table-light">
      <tr>
        <th>No</th>
        <th>Nama</th>
        <th>Alamat</th>
        <th>Status</th>
        <th>Uplink</th>
        <th>Data Monitoring</th>
        <th>Tanggal Akad</th>
        <th>Aksi</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(unit, index) in filteredUnits" :key="unit.id" class="table-row">
        <td>{{ index + 1 }}</td>
        <td>{{ unit.nama_mbr || '-' }}</td>
        <td>{{ unit.alamat_rum }}</td>
        <td>{{ statusText(unit.status_mbr) }}</td>
        <td>
          <div :class="isOnline(unit.last_uplink_time) ? 'text-success' : 'text-danger'">
            {{ isOnline(unit.last_uplink_time) ? 'Online' : 'Offline' }} 
            <small v-if="unit.last_uplink_time">
              <br>{{ formatDateTime(unit.last_uplink_time) }} WIB
            </small>
          </div>
          <small>
            <br>SN {{ unit.serialnumber }}
            <br>IMEI {{ unit.nbonet_net_imei }}
          </small>
        </td>
        <td>
          <div>
            Rata-rata Pemakaian Listrik
            <div v-for="(d, i) in recentDose(unit.dose)" :key="i">
              <strong>{{ formatMonth(d.bln) }} {{ d.thn }}:</strong> 
              {{ d.read || d.dos }} kwh/hari
            </div>
          </div>
        </td>
        <td>
          <div>
            {{ formatDate(unit.tgl_akad) }}
            <br><small>({{ akadDiff(unit.tgl_akad) }})</small>
          </div>
        </td>
        <td>
          <button class="btn btn-success btn-sm">Detail</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import duration from 'dayjs/plugin/duration'
dayjs.extend(relativeTime)
dayjs.extend(duration)

const filteredUnits = ref<Unit[]>([]) // ← ganti dengan hasil fetchUnitsByKdl

function formatDateTime(dt: string) {
  return dayjs(dt).format('DD MMM YYYY, HH:mm:ss')
}

function formatDate(dt: string) {
  return dt ? dayjs(dt).format('DD-MM-YYYY') : '-'
}

function formatMonth(bulan: string) {
  const map = {
    '1': 'Jan', '2': 'Feb', '3': 'Mar', '4': 'Apr', '5': 'Mei',
    '6': 'Jun', '7': 'Jul', '8': 'Agu', '9': 'Sep',
    '10': 'Okt', '11': 'Nov', '12': 'Des'
  }
  return map[bulan] || bulan
}

function isOnline(dt: string) {
  return dayjs().diff(dayjs(dt), 'day') <= 3
}

function statusText(status: number) {
  switch (status) {
    case 1: return 'Belum Akad'
    case 2: return 'Sudah Akad'
    case 3: return 'Sudah Akad'
    default: return '-'
  }
}

function akadDiff(tgl: string) {
  if (!tgl) return '-'
  const start = dayjs(tgl)
  const now = dayjs()
  const dur = dayjs.duration(now.diff(start))
  const months = dur.months()
  const days = dur.days()
  return `${months} bulan dan ${days} hari dari akad`
}

function recentDose(doses: any[] = []) {
  if (!doses || doses.length === 0) return []
  const sorted = [...doses].sort((a, b) => (b.dtgl || b.thn + b.bln) > (a.dtgl || a.thn + a.bln) ? 1 : -1)
  return sorted.slice(0, 2)
}
</script>
