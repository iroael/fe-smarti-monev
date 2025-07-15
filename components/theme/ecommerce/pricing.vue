<template>
    <div class="container-fluid">
        <div class="row">
            <CommonCard1 colClass="col-sm-12" :headerTop="false" title="Become member" cardBodyClass="pricing-content">
                <div class="row pricing-col">
                    <div class="col-lg-3 col-sm-6 box-col-3" v-for="(item, index) in store.pricingData" :key="index">
                        <div class="pricingtable">
                            <div class="pricingtable-header">
                                <h3 class="title">{{ item.title }}</h3>
                            </div>
                            <div class="price-value"><span class="currency">$</span><span class="amount">{{ item.price
                            }}</span><span class="duration">/mo</span></div>
                            <ul class="pricing-content">
                                <li>{{ item.disk }}</li>
                                <li>{{ item.email }}</li>
                                <li>{{ item.Sub }}</li>
                                <li>{{ item.domains }}</li>
                            </ul>
                            <div class="pricingtable-signup"><a class="btn btn-primary btn-lg" href="#">Sign Up</a></div>
                        </div>
                    </div>
                </div>
            </CommonCard1>
            <CommonCard1 colClass="col-sm-12" :headerTop="false" title="Simple Pricing Card"
                cardBodyClass="pricing-content">
                <div class="row g-sm-4 g-3">
                    <div class="col-lg-3 col-sm-6 box-col-3" v-for="(item, index) in store.simplepricingData" :key="index">
                        <div class="card text-center pricing-simple">
                            <div class="card-body">
                                <h3>{{ item.title }}</h3>
                                <h1>{{ item.price }}</h1>
                                <h6 class="mb-0">{{ item.title }} Price</h6>
                            </div><a class="btn btn-lg btn-primary btn-block" href="#">Purchase</a>
                        </div>
                    </div>
                </div>
            </CommonCard1>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useProductStore} from '~/stores/ecommerce'
let store = useProductStore()
</script>

