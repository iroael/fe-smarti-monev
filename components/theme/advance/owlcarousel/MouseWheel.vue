<template>
    <CommonCard3 colClass="col-xl-6 col-12" cardClass="title-line" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        title="Mouse Wheel Variant" :desc="desc">
        <swiper :slidesPerView="3" :spaceBetween="10" :mousewheel="true" :loop="true" :pagination="{
            clickable: true,
        }" :modules="modules" class="mySwiper">
            <swiper-slide v-for="(item, index) in autoplay" :key="index">
                <div><img :src="getImages(item.img)" class="img-fluid" alt="" style="object-fit:cover"></div>
            </swiper-slide>
        </swiper>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { autoplay } from "~/core/data/owlcarousel"
import { getImages } from "~/composables/common/getImages"
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
let desc = ref<string>("Use the <code>.owl-carousel </code>through slides.")
let modules = [Pagination, Autoplay, Mousewheel]
</script>