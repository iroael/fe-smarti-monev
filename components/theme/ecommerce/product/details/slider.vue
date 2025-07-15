<template>
    <div class="col-xxl-4 col-md-6 box-col-6">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="product-slider owl-carousel owl-theme" id="sync1">
                        <Swiper :slidesPerView="1" :autoplay="{ delay: 3500, disableOnInteraction: false, }"
                            :spaceBetween="10" :loop="true" :thumbs="{ swiper: thumbsSwiper }" :centeredSlides="true"
                            :modules="modules" class="mySwiper">
                            <Swiper-slide v-for="(product, index) in product.images" :key="index">
                                <img :src="getImages(product)" class="img-fluid bg-img" alt="index" />
                            </Swiper-slide>
                        </Swiper>
                    </div>
                    <div class="owl-carousel owl-theme" id="sync2">
                        <Swiper @swiper="setThumbsSwiper" :slidesPerView="4" :spaceBetween="10" :watchSlidesProgress="true"
                            :pagination="{
                                clickable: true,
                            }" :modules="modules" class="Swiper">
                            <Swiper-slide v-for="(product, index) in product.images" :key="index">
                                <img :src="getImages(product)" class="img-fluid bg-img " alt="index"
                                    style="height:auto; " />
                            </Swiper-slide>
                        </Swiper>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs"
defineProps({
    product: Object
})
const thumbsSwiper = ref()
const modules = [Autoplay, Navigation, Thumbs]
const swiperOptions = {
    breakpoints: {
        320: {
            direction: 'vertical'
        },
        1215: {
            direction: 'horizontal'
        }
    }
}
const setThumbsSwiper = (swiper: string) => {
    thumbsSwiper.value = swiper;
}
function getImages(path: string) {
    return '/images/' + path
}
</script>

