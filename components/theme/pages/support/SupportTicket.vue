<template>
    <div class="row">
        <div class="col-xl-4 col-sm-6 box-col-6" v-for="(item, index) in ticket" :key="index">
            <div class="card ecommerce-widget">
                <div class="card-body support-ticket-font">
                    <div class="row">
                        <div class="col-5"><span>{{ item.title }}</span>
                            <h3 class="total-num counter">
                                <number class="bold counter" ref="number1" :from="0" :to="item.number" :duration="5"
                                    :delay="0" easing="Power1.easeOut" />
                            </h3>
                        </div>
                        <div class="col-7">
                            <div class="text-end">
                                <ul>
                                    <li>Profit<span class="product-stts txt-success ms-2">8989<i
                                                class="icon-angle-up f-12 ms-1"></i></span></li>
                                    <li>Loss<span class="product-stts txt-danger ms-2">2560<i
                                                class="icon-angle-down f-12 ms-1"></i></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="progress-showcase mt-4">
                        <div class="progress sm-progress-bar">
                            <div class="progress-bar " :class="item.progress" role="progressbar" style="width: 70%"
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ticket } from "~/core/data/support"

</script>