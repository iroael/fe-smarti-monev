<template>
    <CommonCard3 colClass="col-xl-6" cardClass="title-line" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        title="Horizontal Scrollbar" :desc="desc">
        <div class="horizontal-scroll scroll-demo custom-scrollbar">
            <div class="horz-scroll-content">
                <div class="row">
                    <div class="col-2" v-for="(item, index) in horizontal" :key="index">
                        <div class="horizontal-img"><img class="img-fluid" :src="getImages(item.img)" alt="girl">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { horizontal } from "~/core/data/scrollable"
import { getImages } from "~/composables/common/getImages"
let desc = ref<string>("Use the <code>.horizontal-scroll </code>through move content horizontally.")
</script>