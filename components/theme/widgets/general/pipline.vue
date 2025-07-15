<template>
    <CommonCard4 colClass="col-xl-3 col-md-5 col-sm-4 order-md-v" header="true"
        cardClass="card title-line widget-1 sales-pipeline pipeline-chart1" cardhaderClass="card-no-border" text="true"
        spanclass="f-w-500 f-12 f-light mt-0" spantitle="Special Discount" txt="true" txtClass="txt-primary" off="60% OFF"
        title="Sales Pipeline" cardbodyClass="pt-0">
        <div class="pipeline-chart-container">
            <div id="pipeline-chart">
                <CommonChartsPipelineChart1 />
            </div>
        </div>
    </CommonCard4>

    <CommonCard4 colClass="col-xl-2 col-sm-6 col-md-3 order-md-i" header="true"
        cardClass="card title-line widget-1 revenue-wrapper" cardhaderClass="card-no-border" text="true"
        spanclass="f-w-500 f-12 f-light mt-0" spantitle="Today Revenue" txt="true" off="30%
                                OFF" title="Revenue" cardbodyClass="pt-0">
        <div class="revenue-chart-container">
            <div id="revenue-chart">
                <CommonChartsRevenueChart />
            </div>
        </div>
    </CommonCard4>
    <div class="col-xl-6 box-col-6 col-md-9 order-md-ii">
        <div class="row tread-cards">

            <CommonCard4 colClass="col-xl-6 col-sm-6" v-for="(item, index) in store.cardsData" :key="index"
                cardbodyClass="common-box" cardClass="card widget-1">
                <div class="widget-icon widget-round" :class="item.color">
                    <svg>
                        <use :href="'/svg/icon-sprite.svg#' + item.svg"> </use>
                    </svg>
                </div>
                <div>
                    <h3 class="f-w-600">{{ item.title }}</h3><span class="f-w-500 f-light f-12">{{ item.desc }} </span>
                </div>
            </CommonCard4>
        </div>
    </div>
    <div class="col-xl-4 order-xl-vi col-xl-100 col-md-7 col-sm-8 order-md-vi">
        <div class="row">
            <CommonCard4 colClass="col-12 " topClass="header-top"
                cardClass="card card visitor-customer title-line widget-visitor" cardhaderClass="card-no-border" meet="true"
                header="true" title="Weekly Visitors" dropdown="true" rightClass="square-legend" box="true" boxitem="Male"
                boxitem1="Female" dropdownClass="Report" item="Monthly" item1="weekly" item2="yearly"
                cardbodyClass="visitor-wrapper">
                <div class="row">
                    <div class="col-xl-7 col-xl-100 col-md-7 col-sm-8">
                        <div class="weekly-visitor" id="weekly-visitor">
                            <CommonChartsWeeklyVisitor />
                        </div>
                    </div>
                    <div class="col-xl-5 d-xl-none1 col-md-5 col-sm-4">
                        <div class="average-Visitors">
                            <div> <span class="f-12 f-light f-w-500">Average Male Visitors</span>
                                <div class="order-content">

                                    <div> <span class="txt-success f-12 f-w-600">
                                            <Icon class="stroke-success" name="lucide:trending-up"></Icon> -27%
                                        </span></div>
                                </div>
                            </div>
                            <div> <span class="f-12 f-light f-w-500">Average Female Visitors</span>
                                <div class="order-content">

                                    <div> <span class="txt-danger f-12 f-w-600">
                                            <Icon class="stroke-danger" name="lucide:trending-down"></Icon> -0.10%
                                        </span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CommonCard4>
        </div>
    </div>
    <ThemeWidgetsGeneralEarning />
</template>

<script setup lang="ts">

import { useDashboardStore } from '~/stores/dashboard'
let store = useDashboardStore();
</script>

