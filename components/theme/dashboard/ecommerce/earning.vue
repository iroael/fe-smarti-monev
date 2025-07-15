<template>
    <CommonCard1 colClass="col-xl-12 col-sm-6" cardClass="height-equal title-line earning-chart-option"
        headerClass="card-no-border" title="$78,098" :dropdown="false" :report="true">
        <template #titleDesc><span class="txt-success f-12 f-w-600 ms-2">
                <Icon class="stroke-success" name="lucide:trending-up"></Icon> -29%
            </span><span class="f-12 f-w-500 f-light d-block">Expected
                Earnings</span></template>
        <div id="polar-area">
            <CommonChartsPolarArea />
        </div>
    </CommonCard1>

    <CommonCard4 colClass="col-xl-12 col-md-6" topClass="header-top" rightClass="detail-option"
        cardClass="card height-equal title-line" cardhaderClass="card-no-border" text="true" meet="true" header="true"
        spanclass="f-12 f-w-500 f-light d-block" spantitle="780,765 Sales" title="Activities" dropdown="true"
        dropdownClass="Order Details" item="Web designer" item1="Development" item2="Marketing"
        cardbodyClass="pt-0 notification to-do-list activities-wrapper">
        <ul class="activity-details custom-scrollbar">
            <li class="d-flex align-items-center" v-for="(item, index) in store.activitiesData" :key="index">
                <div :class="'activity-dot-' + item.color"></div>
                <div class="d-flex w-100 align-items-center" v-if="item.desc">
                    <div> <span class="f-w-500 f-12 f-light">{{ item.desc }}</span></div><span
                        class="badge ms-auto f-light">{{ item.time }} </span>
                </div>
                <div class="d-flex w-100 align-items-center" v-else>
                    <div>
                        <h6>{{ item.title }} <a href="#!">{{ item.id }}</a></h6>
                    </div><span class="badge ms-auto f-light">{{ item.time }}</span>
                </div>
            </li>
        </ul>
    </CommonCard4>

    <CommonCard4 colClass="col-xl-12 col-md-6" topClass="header-top" cardClass="card height-equal title-line delivery-card"
        cardhaderClass="card-no-border" text="true" meet="true" header="true" spanclass="f-12 f-w-500 f-light d-block"
        spantitle="Total 10,987 Items Delivery" title="Product Delivery" dropdown="true" dropdownClass="Order Details"
        item="Web designer" item1="Development" item2="Marketing" cardbodyClass="pt-0 delivery-content">
        <ul class="order-list mb-0 custom-scrollbar">
            <li v-for="(item, index) in store.productData" :key="index">
                <div class="light-card"> <img class="img-fluid" :src="item.img" alt="T-shirt"></div>
                <div class="order-content">
                    <div>
                        <h6 class="mb-1">{{ item.title }}</h6><span> <span class="f-light f-w-500 f-12">To :
                                {{ item.to }}</span></span>
                    </div>
                    <div class="text-end">
                        <div class="dropdown icon-dropdown">
                            <button class="btn dropdown-toggle mb-1" id="order-2" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <svg>
                                    <use href="/svg/icon-sprite.svg#more-horizontal"></use>
                                </svg>
                            </button>
                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="order-2"><nuxt-link
                                    class="dropdown-item" to="/ecommerce/cart">Add to cart</nuxt-link><a
                                    class="dropdown-item" href="#">Cancel</a></div>
                        </div><span :class="'badge f-12 badge-light-' + item.color">{{ item.status }}</span>
                    </div>
                </div>
            </li>
        </ul>
    </CommonCard4>
</template>

<script setup lang="ts">
import { polarOption, polarSeries } from '~/core/data/chartOption'
import { useDashboardStore } from '~/stores/dashboard'
let store = useDashboardStore();
</script>

