<template>
    <CommonCard4 colClass="col-xl-6 col-md-6" topClass="header-top" cardClass="card height-equal title-line"
        cardhaderClass="card-no-border" text="true" meet="true" header="true" spanclass="f-light f-12 d-block f-w-500"
        spantitle="Special Discount" txt="true" txtClass="txt-primary" off="60%
                                OFF" title="Total Profit" dropdown="true" dropdownClass="Weekly" item="Monthly"
        item1="weekly" item2="yearly" cardbodyClass="pt-0">
        <div class="profit-data">
            <h2>$15,087<span class="f-light f-w-500 f-12">(Another <span class="txt-primary me-1">$35,098 </span>to Goal)
                </span></h2>
        </div>
        <div class="profit-chart-container">
            <CommonChartsProfitChart />
        </div>
    </CommonCard4>

    <CommonCard4 colClass="col-md-6" topClass="header-top" cardClass="card title-line" cardhaderClass="card-no-border"
        meet="true" header="true" spanclass="d-block f-w-500 f-light f-12" text="true" spantitle="Weekly Earning Overview"
        title="Earning Reports" cardbodyClass="pt-0">
        <div class="report-chart-container">
            <CommonChartsEarningChart />
        </div>
        <ul class="report-list">
            <li>
                <div class="light-card report-icon">
                    <svg>
                        <use href="/svg/icon-sprite.svg#status-up"></use>
                    </svg>
                </div>
                <div> <span class="f-12 f-w-500 f-light">Profit</span>
                    <h4 class="mt-1 f-w-600">$98.50<span class="badge badge-light-primary ms-1">
                            <Icon class="me-1" name="material-symbols:trending-up"></Icon>13.5%
                        </span></h4>
                </div>
            </li>
            <li>
                <div class="light-card report-icon">
                    <svg>
                        <use href="/svg/icon-sprite.svg#expense"></use>
                    </svg>
                </div>
                <div> <span class="f-12 f-w-500 f-light">Expense</span>
                    <h4 class="mt-1 f-w-600">$109.90<span class="badge badge-light-warning ms-1">
                            <Icon class="me-1" name="material-symbols:trending-down"></Icon>1.05%
                        </span></h4>
                </div>
            </li>
        </ul>
    </CommonCard4>
    <CommonCard4 colClass="col-md-6 order-md-i" topClass="header-top" header="true" cardClass="card title-line "
        cardhaderClass="card-no-border transaction-header" text="true" meet="true" spanclass="f-light f-12 d-block f-w-500"
        spantitle="Special Discount" txt="true" txtClass="txt-primary" off="60%
                                OFF" title="Upcoming Transaction" dropdown="true" dropdownClass="Weekly" item="Monthly"
        item1="weekly" item2="yearly" cardbodyClass="pt-0 transaction-list">
        <ul>
            <li class="transaction-title"> <span class="f-w-500 f-light f-12">Today</span></li>
            <li v-for="(item, index) in store.transactionData" :key="index" v-show="index == 0">
                <div class="transaction-content">
                    <div class="transaction-icon" :class="item.bg">
                        <svg>
                            <use :href="'/svg/icon-sprite.svg#' + item.svg"></use>
                        </svg>
                    </div>
                    <div class="transaction-right-content">
                        <div>
                            <h6>{{ item.title }}</h6><span class="f-light f-w-400">{{ item.type }}</span>
                        </div><span class="f-w-500" :class="item.color">{{ item.amount }}</span>
                    </div>
                </div>
            </li>
            <li class="transaction-title"> <span class="f-w-500 f-light f-12">Tomorrow</span></li>
            <li v-for="(item, index) in store.transactionData" :key="index" v-show="index !== 0">
                <div class="transaction-content">
                    <div class="transaction-icon" :class="item.bg">
                        <svg>
                            <use :href="'/svg/icon-sprite.svg#' + item.svg"></use>
                        </svg>
                    </div>
                    <div class="transaction-right-content" :class="index == 1 ? 'border-0' : ''">
                        <div>
                            <h6>{{ item.title }}</h6><span class="f-light f-w-400">{{ item.type }}</span>
                        </div><span class="f-w-500" :class="item.color">{{ item.amount }}</span>
                    </div>
                </div>
            </li>
        </ul>
    </CommonCard4>
</template>

<script setup lang="ts">
import { useDashboardStore } from '~/stores/dashboard'
let store = useDashboardStore();
</script>