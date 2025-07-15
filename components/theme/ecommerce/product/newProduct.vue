<template>
    <div class="product-filter pb-0 new-products">
        <swiper :loop="true" navigation :modules="modules" class="owl-carousel owl-theme" id="testimonial">
            <swiper-slide class="item" v-for="(item, index) in store.newProductData" :key="index">
                <div class="product-box row mb-2" v-for="(product, index) in item.productbox" :key="index">
                    <div class="product-img col-md-3"><img class="img-fluid img-100" :src="product.img" alt=""
                            data-original-title="" title=""></div>
                    <div class="product-details col-md-5 text-start"><span><i class="fa fa-star font-warning me-1"></i><i
                                class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning me-1"></i><i
                                class="fa fa-star font-warning me-1"></i><i class="fa fa-star font-warning"></i></span>
                        <p class="mb-0">{{ product.name }}</p>
                        <div class="product-price">${{ product.price }}</div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup lang="ts">
import { useProductStore } from "~/stores/ecommerce"
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
let store = useProductStore();
let modules = [Navigation]
</script>

