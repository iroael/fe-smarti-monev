<template>
    <CommonCard4 colClass="col-xl-4 col-md-6 order-md-ix" topClass="header-top"
        cardClass="card height-equal title-line delivery-card" cardhaderClass="card-no-border" text="true" meet="true"
        header="true" spanclass="f-12 f-w-500 f-light d-block" spantitle="Total 10,987 Items Delivery"
        title="Product Delivery" dropdown="true" dropdownClass="Order Details" item="Web designer" item1="Development"
        item2="Marketing" cardbodyClass="pt-0 delivery-content">
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

    <CommonCard4 colClass="col-xl-4 col-md-6 order-md-iv" topClass="header-top" cardClass="card height-equal title-line"
        cardhaderClass="card-no-border" text="true" meet="true" header="true" spanclass="f-light f-12 d-block f-w-500"
        spantitle="Special Discount" txt="true" txtClass="txt-primary" off="60%
                                OFF" title="Total Profit" dropdown="true" dropdownClass="Weekly" item="Monthly"
        item1="weekly" item2="yearly" cardbodyClass="pt-0">
        <div class="profit-data">
            <h2>$15,087<span class="f-light f-w-500 f-12">(Another <span class="txt-primary me-1">$35,098
                    </span>to
                    Goal) </span></h2>
        </div>
        <div class="profit-chart-container">
            <CommonChartsProfitChart1 />
        </div>
    </CommonCard4>
</template>

<script setup lang="ts">
import { useDashboardStore } from '~/stores/dashboard'
let store = useDashboardStore();
</script>

