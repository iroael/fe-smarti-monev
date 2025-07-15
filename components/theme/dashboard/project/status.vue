<template>
    <CommonCard4 colClass="col-xl-7" topClass="header-top" cardClass="card height-equal title-line"
        cardhaderClass="card-no-border" meet="true" header="true" addClass="View all" icon="true" add="true"
        svg="arrow-two-tone" title="Projects Status" cardbodyClass="project-datatable custom-scrollbar p-0">
        <table class="table datatable-table" id="project-status">
            <thead>
                <tr>
                    <th @click="sortBy('project')"> <span class="f-light f-w-600">Project</span></th>
                    <th @click="sortBy('more')"> <span class="f-light f-w-600">Team</span></th>
                    <th @click="sortBy('start')"> <span class="f-light f-w-600">Start Date</span></th>
                    <th @click="sortBy('end')"> <span class="f-light f-w-600">Due Date</span></th>
                    <th @click="sortBy('width')"> <span class="f-light f-w-600">Progress</span></th>
                    <th @click="sortBy('status')"> <span class="f-light f-w-600">Status</span></th>
                    <th> <span class="f-light f-w-600">Action</span></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in sortedData" :key="index">
                    <td>{{ item.project }}</td>
                    <td>
                        <div class="customers">
                            <ul>
                                <li class="d-inline-block" v-for="(img, index) in item.img" :key="index"><img
                                        class="img-30 rounded-circle" :src="img" alt="user"></li>
                                <li class="d-inline-block">
                                    <div class="light-card"><span class="f-w-500 f-light f-12">{{ item.more }} </span></div>
                                </li>
                            </ul>
                        </div>
                    </td>
                    <td> <span class="f-light">{{ item.start }}</span></td>
                    <td> <span class="f-light">{{ item.end }} </span></td>
                    <td>
                        <div class="d-flex">
                            <div :class="'progress progress-stripe-' + item.color" style="height: 5px">
                                <div class="progress-bar-animated progress-bar-striped" role="progressbar"
                                    :style="'width: ' + item.width" aria-valuenow="10" aria-valuemin="0"
                                    aria-valuemax="100">
                                </div>
                            </div><span class="f-12 f-light">{{ item.width }}</span>
                        </div>
                    </td>
                    <td><span :class="'badge btn-lighten-' + item.color">{{ item.status }}</span></td>
                    <td>
                        <div class="dropdown icon-dropdown text-center">
                            <button class="btn dropdown-toggle" id="tableButton1" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <svg>
                                    <use href="/svg/icon-sprite.svg#more-horizontal"></use>
                                </svg>
                            </button>
                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="tableButton1"><a
                                    class="dropdown-item" href="#">Edit</a><a class="dropdown-item" href="#">Delete</a>
                            </div>
                        </div>
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
    if (!sortedColumn.value) return store.projectStatusData;

    return store.projectStatusData.slice().sort((a, b) => {
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