<template>
    <CommonCard4 colClass="col-xl-5 box-col-5" cardClass="card  title-line" header="true" cardhaderClass="card-no-border"
        title="Recent Project Update" cardbodyClass="pt-0">
        <div class="recent-update">
            <div class="swiper recent-slider">
                <swiper 
                    class="swiper-wrapper" 
                    :slidesPerView="2" 
                    navigation 
                    :modules="modules" 
                    :grid="{ rows: 2, }"
                    :breakpoints="{
                        300: {
                            slidesPerView: 1,
                            grid: { rows: 2 },
                        },
                        500: {
                            slidesPerView: 2,
                            grid: { rows: 2 },
                        },
                        1200: {
                            slidesPerView: 1,
                            grid: { rows: 2 },
                        },
                        1680: {
                            slidesPerView: 2,
                            grid: { rows: 2 },
                        }
                    }"
                    >
                    <swiper-slide class="swiper-slide" v-for="(item, index) in store.updateData" :key="index">
                        <div class="light-card-2 recent-project-wrapper">
                            <div class="recent-icon" :class="item.color">
                                <svg>
                                    <use :href="'/svg/icon-sprite.svg#' + item.svg"></use>
                                </svg>
                            </div>
                            <div class="recent-content">
                                <div class="d-flex">
                                    <div>
                                        <h6>{{ item.title }} </h6><span class="f-12 f-w-500 f-light">{{ item.sub }}</span>
                                    </div>
                                    <div class="customers">
                                        <ul>
                                            <li class="d-inline-block" v-for="(img, index) in item.custom" :key="index">
                                                <img class="img-30 rounded-circle" :src="'/images/' + img.img" alt="user">
                                            </li>
                                            <li class="d-inline-block">
                                                <div class="light-card"><span class="f-w-500 f-light f-12">{{ item.light
                                                }}</span></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="recent-progress">
                                    <div class="d-flex justify-content-between align-items-center"><span
                                            class="f-light f-w-500 f-12">Progress</span><span
                                            class="f-light f-w-500 f-12">{{ item.width }}</span></div>
                                    <div class="progress with-light-background" :class="item.proclass" style="height: 5px">
                                        <div class="progress-bar-animated progress-bar-striped" role="progressbar"
                                            :style="'width: ' + item.width" aria-valuenow="10" aria-valuemin="0"
                                            aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </CommonCard4>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { useDashboardStore } from '~/stores/dashboard'
let store = useDashboardStore();
let modules = [Grid, Navigation]
</script>

