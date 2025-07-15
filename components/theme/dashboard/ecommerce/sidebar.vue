<template>
    <CommonCard4 colClass="col-xl-12 col-sm-6" cardClass="card title-line deal-card"
        cardbodyClass="left-line deal-animation">
        <div class="row align-items-center">
            <div class="col-12">
                <div class="row g-4">
                    <div class="col-xl-8 col-md-12">
                        <h2>Deal of the day</h2><span class="f-light f-12 f-w-500">Special Discount <span
                                class="txt-primary f-12 f-w-500 discount-offer">60% OFF</span></span>
                        <ul class="timer deal-timer" data-date="Dec 7, 2024 04:15:01">
                            <li>
                                <h6 class="f-20 f-w-600 txt-primary hours" v-text="hours"></h6><span
                                    class="f-12 f-w-500 f-light">Hours</span>
                            </li>
                            <li>
                                <h6 class="f-20 f-w-600 txt-primary minutes" v-text="minutes"></h6><span
                                    class="f-12 f-w-500 f-light">Min</span>
                            </li>
                            <li>
                                <h6 class="f-20 f-w-600 txt-primary seconds" v-text="seconds"></h6><span
                                    class="f-12 f-w-500 f-light">Sec</span>
                            </li>
                        </ul>
                    </div>
                    <div class="col-xl-4 col-md-12">
                        <div class="deal-slider">
                            <div class="swiper deal-swiper">
                                <swiper class="swiper-wrapper" :pagination="{ clickable: true }" :spaceBetween="25"
                                    :modules="modules" :loop="true">
                                    <swiper-slide class="swiper-slide"> <img class="img-fluid"
                                            src="/images/product/product-categories/phone.png" alt="phone"></swiper-slide>
                                    <swiper-slide class="swiper-slide"> <img class="img-fluid"
                                            src="/images/dashboard-2/product/headphone.png" alt="headphone"></swiper-slide>
                                    <swiper-slide class="swiper-slide"> <img class="img-fluid"
                                            src="/images/dashboard-2/product/chair.png" alt="chair"></swiper-slide>
                                </swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </CommonCard4>

    <ThemeDashboardEcommerceEarning />
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
let modules = [Pagination]
const td = ref<number>(0)
const days = ref<number>(0)
const hours = ref<number>(0)
const minutes = ref<number>(0)
const seconds = ref<number>(0)
const startTime = ref<string | number>('')
const endTime = ref<string | number>('')
function timer() {
    setInterval(() => {
        endTime.value = new Date().getTime()
        startTime.value = new Date('Feb 1, 2024 00:00:00').getTime(),
            td.value = endTime.value - startTime.value
        if (td.value >= 0) {
            seconds.value = Math.floor(td.value / 1000 % 60);
            minutes.value = Math.floor(td.value / 1000 / 60 % 60);
            hours.value = Math.floor(td.value / (1000 * 60 * 60) % 24);
            days.value = Math.floor(td.value / (1000 * 60 * 60 * 24));
        } else {
            seconds.value = minutes.value = hours.value = days.value = 0;
        }
    });

}
onMounted(() => {
    timer()
})
</script>

