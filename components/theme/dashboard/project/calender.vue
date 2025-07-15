<template>
    <CommonCard4 colClass="col-xxl-5 col-xl-6 col-lg-6 col-md-6 box-col-6" rightClass="customer-header"
        topClass="header-top" cardClass="card height-equal title-line" cardhaderClass="card-no-border" meet="true"
        header="true" addClass="Report" icon="true" add="true" svg="arrow-two-tone" title="Calendar" cardbodyClass=" pt-0">
        <div class="calendar-wrapper">
            <ul class="calendar-date-list custom-scrollbar">
                <li v-for="(item, index) in store.calendarData" :key="index" :class="item.date == '19' ? 'today-date' : ''">
                    <span class="f-12 f-light">{{ item.day }}</span>
                    <h4 class="f-w-500">{{ item.date }}</h4>
                </li>
            </ul>
            <div class="table-responsive custom-scrollbar">
                <table class="table client-content">
                    <tbody>
                        <tr>
                            <td> <img class="img-fluid" src="/images/dashboard-3/client/1.png" alt="client"></td>
                            <td>
                                <h4 class="mb-1">Meeting with Client</h4>
                                <ul class="client-sub-content">
                                    <li class="d-flex">
                                        <svg>
                                            <use href="/svg/icon-sprite.svg#video"></use>
                                        </svg><span class="f-12 f-light f-w-500">Zoom Meeting</span>
                                    </li>
                                    <li class="d-flex">
                                        <svg>
                                            <use href="/svg/icon-sprite.svg#dashboard-clock"></use>
                                        </svg><span class="f-12 f-light f-w-500">09 am</span>
                                    </li>
                                    <li class="d-flex f-12 f-light f-w-500">Lead by <span class="txt-warning">Jaskion
                                            Raio</span></li>
                                </ul>
                            </td>
                            <td><a class="btn btn-light f-12 f-w-500" href="#!">View</a></td>
                        </tr>
                        <tr>
                            <td> <img class="img-fluid" src="/images/dashboard-3/client/2.png" alt="client"></td>
                            <td>
                                <h4 class="mb-1">Deal with New Client</h4>
                                <ul class="client-sub-content">
                                    <li class="d-flex">
                                        <svg>
                                            <use href="/svg/icon-sprite.svg#video"></use>
                                        </svg><span class="f-12 f-light f-w-500">Zoom Meeting</span>
                                    </li>
                                    <li class="d-flex">
                                        <svg>
                                            <use href="/svg/icon-sprite.svg#dashboard-clock"></use>
                                        </svg><span class="f-12 f-light f-w-500">09 am</span>
                                    </li>
                                    <li class="d-flex f-12 f-light f-w-500">Lead by <span class="txt-warning">Ashkista
                                            Jain</span></li>
                                </ul>
                            </td>
                            <td> <a class="btn btn-light f-12 f-w-500" href="#!">View</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </CommonCard4>
</template>

<script setup lang="ts">
import { useDashboardStore } from '~/stores/dashboard'
let store = useDashboardStore();
</script>