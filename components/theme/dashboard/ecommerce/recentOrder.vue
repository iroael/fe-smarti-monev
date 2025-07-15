<template>
  <CommonCard4 colClass="col-xl-9 col-xl-100 order-xl-ii col-md-8" rightClass="recent-order-header" topClass="header-top"
    cardClass="card height-equal title-line" cardhaderClass="card-no-border" meet="true" header="true"
    spanclass="f-light f-12 d-block f-w-500" title="Recent Orders" dropdown="true" dropdownClass="Generate Report"
    item="Web designer" item1="Development" item2="Marketing"
    cardbodyClass="project-datatable p-0 order-tables custom-scrollbar">
    <table class="table datatable-table" id="order-status">
      <thead>
        <tr>
          <th @click="sortBy('no')"> <span class="f-light f-w-600">Order ID</span></th>
          <th @click="sortBy('name')"> <span class="f-light f-w-600">Customer</span></th>
          <th @click="sortBy('product')"> <span class="f-light f-w-600">Product</span></th>
          <th @click="sortBy('amount')"> <span class="f-light f-w-600">Amount</span></th>
          <th @click="sortBy('vendor')"> <span class="f-light f-w-600">Vendor</span></th>
          <th @click="sortBy('status')"> <span class="f-light f-w-600">Status</span></th>
          <th @click="sortBy('rate')"> <span class="f-light f-w-600">Rating</span></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in sortedData" :key="index">
          <td> <a class="f-w-500" href="#!">{{ item.no }}</a></td>
          <td>
            <div class="recent-profile"><img class="img-30 rounded-circle img-fluid" :src="item.img" alt="user"><span
                class="f-light f-w-500">{{ item.name }}</span></div>
          </td>
          <td> <span class="f-light">{{ item.product }}</span></td>
          <td> <span class="txt-success f-w-500">${{ item.amount }}</span></td>
          <td> <span class="f-light">{{ item.vendor }}</span></td>
          <td><span :class="'badge badge-light-' + item.color">{{ item.status }}</span></td>
          <td><span class="f-light f-w-600">{{ item.rate }} <span class="f-12 f-w-400">({{ item.votes }})</span></span></td>
        </tr>
      </tbody>
    </table>
  </CommonCard4>
</template>

<script setup lang="ts">
import { useDashboardStore } from '~/stores/dashboard'
let store = useDashboardStore();
let sortedColumn = ref('');
let sortOrder = ref('');
const sortedData = computed(() => {
  if (!sortedColumn.value) return store.recentOrdersData;

  return store.recentOrdersData.slice().sort((a, b) => {
    const aValue = a[sortedColumn.value];
    const bValue = b[sortedColumn.value];

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortOrder.value === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    }

    return sortOrder.value === 'asc' ? aValue - bValue : bValue - aValue;
  });
});
function sortBy(column: string) {
  sortedColumn.value = column;
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
}
</script>
