<template>
    <CommonCard3 colClass="col-xl-4 col-md-6" cardClass="title-line height-equal" titleClass="mb-0" pre="true"
        preClass="f-m-light mt-2" headerTitle="true" title="Shapes" :desc="desc">
        <div class="avatar-showcase">
            <div class="avatars">
                <div class="avatar" v-for="(item, index) in shapes" :key="index"><img :class="item.class"
                        :src="getImages(item.img)" alt="#"></div>

            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { shapes } from "~/core/data/uikits"
import { getImages } from "~/composables/common/getImages"
let desc = ref<string>("Using the<code>.b-r-* (8/30/35/25)</code> class you can set the shapes of avatar.")
</script>