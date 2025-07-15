<template>
    <div class="container-fluid default-dashboard">
        <div class="row size-column">
            <div class="col-xl-9 col-xl-100 box-col-12">
                <div class="row">
                    <CommonCard4 colClass="col-xl-6 box-col-6" data="true"
                        cardClass="card title-line upgrade-card overflow-hidden">
                        <div class="row align-items-end">
                            <div class="col-sm-8 col-11">
                                <div class="card-header">
                                    <h2>Hi, Welcome back <span class="txt-primary">Wade! </span></h2>
                                    <p class="mt-2 f-light">Amet minim mollit non deserunt ullamco est sit aliqua
                                        dolor
                                        do amet sint. </p><nuxt-link class="btn btn-primary btn-hover-effect btn-sm f-w-500"
                                        to="/ecommerce/pricing">Upgrade Plan
                                        <svg class="svg-sprite">
                                            <use href="/svg/icon-sprite.svg#logout"> </use>
                                        </svg></nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div class="cartoon-image"> <img class="img-fluid" src="/images/dashboard/welcome.png" alt="vector">
                        </div><img class="img-fluid pattern-image" src="/images/dashboard/bg-1.png" alt="vector pattern">
                    </CommonCard4>
                    <div class="col-xl-6 box-col-6">
                        <div class="row tread-cards">
                            <CommonCard4 colClass="col-xl-6 col-sm-6" v-for="(item, index) in store.cardsData" :key="index"
                                cardbodyClass="common-box" cardClass="card widget-1">
                                <div class="widget-icon widget-round" :class="item.color">
                                    <svg>
                                        <use :href="'/svg/icon-sprite.svg#' + item.svg"> </use>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="f-w-600">{{ item.title }}</h3><span class="f-w-500 f-light f-12">{{
                                        item.desc }} </span>
                                </div>
                            </CommonCard4>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="row small-charts">

                            <CommonCard4 colClass="col-xl-6 col-sm-6" header="true" cardClass="card title-line widget-1"
                                cardhaderClass="card-no-border" text="true" spanclass="f-w-500 f-12 f-light mt-0"
                                spantitle="Today Revenue" txt="true" off="30%
                                OFF" title="Revenue" cardbodyClass="pt-0">
                                <div class="revenue-chart-container">
                                    <CommonChartsRevenueChart />
                                </div>
                            </CommonCard4>

                            <CommonCard4 colClass="col-xl-6 col-sm-6" header="true"
                                cardClass="card title-line widget-1 sales-pipeline" cardhaderClass="card-no-border"
                                text="true" spanclass="f-w-500 f-12 f-light mt-0" spantitle="Special Discount" txt="true"
                                txtClass="txt-primary" off="60%
                                OFF" title="Sales Pipeline" cardbodyClass="pt-0">
                                <div class="pipeline-chart-container">
                                    <CommonChartsPipelineChart />
                                </div>
                            </CommonCard4>

                            <ThemeDashboardDefaultCard />
                        </div>
                    </div>
                    <ThemeDashboardDefaultRevenue />
                    <ThemeDashboardDefaultMembers />
                    <ThemeDashboardDefaultReferral />
                </div>
            </div>
            <ThemeDashboardDefaultSidebar />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useDashboardStore } from '~/stores/dashboard'
let store = useDashboardStore();
</script>