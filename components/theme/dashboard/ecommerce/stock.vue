<template>
    <CommonCard4 colClass="col-xl-7 col-xl-100 order-xl-iii col-md-6 col-sm-12" rightClass="stock-report"
        topClass="header-top" cardClass="card height-equal title-line overflow-hidden" cardhaderClass="card-no-border"
        meet="true" header="true" text="true" spanclass="f-12 f-w-500 f-light d-block"
        spantitle="Total 4,998 Items in stock" title="Stock Report" dropdown="true" dropdownClass="View Stock"
        item="Web designer" item1="Development" item2="Marketing" dropdown1="true" dropdownClass1="Category"
        cardbodyClass="project-datatable p-0 stock-table custom-scrollbar">
        <table class="table datatable-table" id="stock-status">
            <thead>
                <tr>
                    <th @click="sortBy('item')"> <span class="f-light f-w-600">Item</span></th>
                    <th @click="sortBy('id')"> <span class="f-light f-w-600">Id</span></th>
                    <th @click="sortBy('amount')"> <span class="f-light f-w-600">Amount</span></th>
                    <th @click="sortBy('date')"> <span class="f-light f-w-600">Date </span></th>
                    <th @click="sortBy('status')"> <span class="f-light f-w-600">Status</span></th>
                    <th @click="sortBy('pcs')"> <span class="f-light f-w-600">QLT</span></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in sortedData" :key="index">
                    <td> <span class="f-light f-w-500">{{ item.item }}</span></td>
                    <td><a class="f-w-500" href="#!">{{ item.id }} </a></td>
                    <td> <span class="txt-success f-w-500">${{ item.amount }}</span></td>
                    <td> <span class="f-light f-w-500">{{ item.date }}</span></td>
                    <td><span :class="'badge f-w-500 badge-light-' + item.color">{{ item.status }}</span></td>
                    <td> <span class="f-light f-w-500">{{ item.pcs }} PCS</span></td>
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
    if (!sortedColumn.value) return store.stockData;

    return store.stockData.slice().sort((a, b) => {
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

