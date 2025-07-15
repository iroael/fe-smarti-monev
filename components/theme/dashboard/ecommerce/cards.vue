<template>
    <div class="col-xl-3 order-xl-v col-xl-50 col-md-4 col-sm-6 order-sm-i">
        <div class="row">
            <CommonCard1 colClass="col-12" cardClass="widget-1" bodyClass="common-space order-card" :header="false">
                <div> <span class="f-w-500 f-light">Today Orders</span>
                    <h2>120k Orders</h2>
                    <div class="order-content"><span class="f-light f-12 f-w-500">Last week </span>
                        <div><span class="txt-danger f-12 f-w-600">
                                <Icon class="stroke-danger reverse-icon" name="material-symbols:trending-up"></Icon>-10%
                            </span></div>
                    </div>
                </div>
                <div class="delivery-image"><img class="img-fluid" :src="getImages('dashboard-2/orders/1.png')" alt="order"></div>
            </CommonCard1>
            <CommonCard1 colClass="col-12" cardClass="widget-1" bodyClass="common-space order-card" :header="false">
                <div> <span class="f-w-500 f-light">Delivery Successful</span>
                    <h2>390k</h2>
                    <div class="order-content"><span class="f-light f-12 f-w-500">Last week </span>
                        <div><span class="txt-success f-12 f-w-600">
                                <Icon class="stroke-success reverse-icon" name="material-symbols:trending-up"></Icon>-10%
                            </span></div>
                    </div>
                </div>
                <div class="delivery-image"><img class="img-fluid" :src="getImages('dashboard-2/orders/1.png')" alt="order"></div>
            </CommonCard1>
            <CommonCard4 colClass="col-12" cardClass="card widget-1" cardbodyClass=" order-card">
                <div class="customer-month"><span class="f-w-500 f-light">New Customers this month</span>
                    <h2>10,987</h2>
                    <div class="order-content"><span class="f-light f-12 f-w-500">Last week </span>
                        <div><span class="txt-success f-12 f-w-600">
                                <Icon class="stroke-success reverse-icon" name="material-symbols:trending-up"></Icon>-10%
                            </span></div>
                    </div>
                </div>
                <div class="customer-profile"><span class="f-w-500">Today's Heroes</span>
                    <ul class="d-inline-block">
                        <li class="d-inline-block">
                            <div class="profile-letter bg-warning"><span class="f-w-600 txt-white f-12">A</span></div>
                        </li>
                        <li class="d-inline-block"><img class="img-fluid rounded-circle" :src="getImages('dashboard/user/1.jpg')"
                                alt="user"></li>
                        <li class="d-inline-block"><img class="img-fluid rounded-circle" :src="getImages('dashboard/user/3.jpg')"
                                alt="user"></li>
                        <li class="d-inline-block">
                            <div class="profile-letter bg-success"><span class="f-w-600 txt-white f-12">R</span></div>
                        </li>
                        <li class="d-inline-block"><img class="img-fluid rounded-circle" :src="getImages('dashboard/user/6.jpg')"
                                alt="user"></li>
                        <li class="d-inline-block">
                            <div class="light-card profile-letter"><span class="f-w-600 f-light f-12">+80</span></div>
                        </li>
                    </ul>
                </div>
            </CommonCard4>
        </div>
    </div>
</template>

<script setup lang="ts">
import {getImages} from "@/composables/common/getImages"
</script>

