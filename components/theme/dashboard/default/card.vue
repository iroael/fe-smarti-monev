<template>
    <CommonCard4 colClass="col-xl-6 col-sm-6 rate-column" header="true" cardClass="card title-line widget-1 "
        cardhaderClass="card-no-border" title="Satisfaction Rate" cardbodyClass="pt-0">
        <div class="light-card satisfaction-box common-box">
            <div class="widget-icon primary widget-round">
                <svg>
                    <use href="/svg/icon-sprite.svg#like-shape"></use>
                </svg>
            </div>
            <div>
                <h2>89,786(82%)</h2><span class="f-light f-w-500 f-12">Vote by Consumer</span>
            </div>
        </div>
    </CommonCard4>


    <CommonCard4 colClass="col-xl-6 col-sm-6 revenue-column col-xxl-100 box-col-12" header="true"
        cardClass="card title-line widget-1 " cardhaderClass="card-no-border" title="Revenue by Industry"
        cardbodyClass="pt-0">
        <div class="revenue-slider-wrapper">
            <div class="swiper revenue-swiper">
                <swiper class="swiper-wrapper" :pagination="{ clickable: true }" :modules="modules" :loop="true">
                    <swiper-slide v-for="(item, index) in industry" :key="index">
                        <div class="light-card satisfaction-box progrees-widget">
                            <div class="d-flex justify-content-between align-items-center"><span class="social-content"><i
                                        class="mx-1" :class="item.icon"></i><span class="f-w-500 f-light">{{ item.title
                                        }}</span></span><span class="f-12 f-w-500 f-light">{{ item.total }}</span></div>
                            <div class="progress  with-light-background mt-2" :class="item.progclass" style="height: 5px">
                                <div class="progress-bar-animated progress-bar-striped" role="progressbar"
                                    :style="{ 'width': item.width }" aria-valuenow="10" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </CommonCard4>
</template>

<script setup lang="ts">
import { industry } from '~/core/data/dashboard';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
let modules = [Pagination]
</script>

