<template>
    <CommonCard4 colClass="col-xl-6 order-md-iii" topClass="header-top"
        cardClass="card title-line overflow-hidden member-wrapper" cardhaderClass="card-no-border" meet="true" header="true"
        spanclass="f-12 f-w-500 f-light d-block" addClass="+ Add New Member" text="true" spantitle="Over 10k members"
        add="true" title="Members Statistics" cardbodyClass="member-datatable p-0 custom-scrollbar">
        <table class="table datatable-table" id="member-table">
            <thead>
                <tr>
                    <th></th>
                    <th @click="sortBy('name')"> <span class="f-light f-w-600">Authors</span></th>
                    <th @click="sortBy('company')"> <span class="f-light f-w-600">Company</span></th>
                    <th @click="sortBy('progress')"> <span class="f-light f-w-600">Progress</span></th>
                    <th> <span class="f-light f-w-600">Action</span></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in sortedData" :key="index">
                    <td>
                        <div class="checkbox-checked">
                            <div class="form-check">
                                <input class="form-check-input" id="checkbox-2" type="checkbox" value="">
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="d-flex gap-2"> <img :src="item.img" alt="user">
                            <div>
                                <h6 class="f-w-500">{{ item.name }}</h6><span class="f-light f-12 f-w-500">{{ item.post
                                }}</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <h6 class="f-w-500">{{ item.company }}</h6><span class="f-light f-12 f-w-500">{{ item.companyPost
                        }}</span>
                    </td>
                    <td> <span class="f-w-500 f-12 f-light">{{ item.progress }}%</span>
                        <div class="progress mt-2" :class="'progress-stripe-' + item.color" style="height: 5px">
                            <div class="progress-bar-animated progress-bar-striped" role="progressbar"
                                :style="'width:' + item.progress + '%'" aria-valuenow="10" aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                    </td>
                    <td>
                        <div class="d-flex action-buttons"><a class="light-card" href="#!">
                                <svg>
                                    <use href="/svg/icon-sprite.svg#edit-2"></use>
                                </svg></a><a class="light-card" href="#!">
                                <svg>
                                    <use href="/svg/icon-sprite.svg#trash-fill"></use>
                                </svg></a></div>
                    </td>
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
    if (!sortedColumn.value) return store.memberData;

    return store.memberData.slice().sort((a, b) => {
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

