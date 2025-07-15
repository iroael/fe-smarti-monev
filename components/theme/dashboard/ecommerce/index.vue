<template>
    <CommonCard4 colClass="col-xl-12" topClass="header-top" cardClass="card title-line sales-details"
        cardhaderClass="card-no-border sales-bg" meet="true" header="true" title="Sales Overview "
        cardbodyClass="pt-0 custom-scrollbar">
        <div class="row row-cols-4 row-cols-xl-iii row-cols-md-iii">
            <div class="col" v-for="(item, index) in store.salesOverviewData" :key="index">
                <div class="sales-overview widget-1">
                    <div class="common-box">
                        <div class="rounded-circle2" :class="item.color">
                            <div class="sales-icon">
                                <svg :class="item.name == 'Orders' ? 'fill-primary' : ''">
                                    <use :href="'/svg/icon-sprite.svg#' + item.svg"></use>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 class="f-w-600">{{ item.total }}</h3>
                            <div class="sale-content"><span class="f-w-500 f-light f-12">{{ item.name }}</span>
                                <div class="d-flex align-items-center gap-1">
                                    <Icon :class="'txt-' + item.color" name="lucide:trending-up"></Icon><span
                                        :class="'f-w-600 f-12 txt-' + item.color">{{ item.pr }}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard4>
    <CommonCard1 colClass="col-xl-3 order-xl-iv col-xl-50 col-md-4 col-sm-6 order-sm-ii" cardClass="store-card"
        headerClass="card-no-border" bodyClass="pb-1 text-center" :dropdown="false">
        <template #heading>
            <h3 class="f-w-600">We are working to boost lovely mood</h3><span class="f-light f-w-500 mt-2">Projects this
                month</span><a class="btn btn-primary btn-hover-effect" href="#!">Create a Store</a>
        </template>
        <div class="store-image"><img class="img-fluid" src="/images/dashboard-2/bg3.gif" alt="store"></div>
    </CommonCard1>
    <CommonCard4 colClass="col-xl-9 col-xl-100 order-xl-i col-md-8" topClass="header-top"
        cardClass="card title-line revenue-header" cardhaderClass="card-no-border" meet="true" header="true"
        title="Revenue vs Order" dropdown="true" rightClass="square-legend" box="true" boxitem="Revenue" boxitem1="Order"
        dropdownClass="Monthly" item="Monthly" item1="weekly" item2="yearly">
        <div class="revenue-order" id="revenue-order">
            <CommonChartsRevenueOrder />
        </div>
    </CommonCard4>
    <ThemeDashboardEcommerceCards />
    <ThemeDashboardEcommerceRecentOrder />
    <ThemeDashboardEcommerceStock />
    <ThemeDashboardEcommerceVisitors />
</template>

<script setup lang="ts">
import { orderOption, orderSeries } from '~/core/data/chartOption'
import { useDashboardStore } from '~/stores/dashboard'
let store = useDashboardStore();
let defaultValue = '<svg><use href="/svg/icon-sprite.svg#more-horizontal"></use></svg>'
</script>

