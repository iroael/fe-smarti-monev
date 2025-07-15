<template>
    <CommonCard3 colClass="col-sm-12" cardClass="title-line" cardbodyClass="grid-showcase mb-0" titleClass="mb-0" pre="true"
        preClass="f-m-light mt-1" headerTitle="true" title="Vertical alignment" :desc="desc" footer="true" grid="true"
        content=".align-items-*" startClass=" start / center / end / baseline / stretch">
        <div class="row">
            <div class="col-lg-4" v-for="(item, index) in vertical" :key="index">
                <div class="row grid-vertical m-1 g-2 bg-light" :class="item.class">
                    <div class="col-6"><span class="bg-white">one column</span></div>
                    <div class="col-6"><span class="bg-white">two column</span></div>
                </div>
            </div>
        </div>
    </CommonCard3>

    <CommonCard3 colClass="col-sm-12" cardClass="title-line" cardbodyClass="grid-showcase grid-align" titleClass="mb-0"
        pre="true" preClass="f-m-light mt-1" headerTitle="true" footer="true" title="Horizontal alignment" :desc="desc1"
        grid="true" content=".justify-content-*" startClass="start / center / end / around / between">
        <div class="row  bg-light" :class="item.class" v-for="(item, index) in horizoltal" :key="index">
            <div class="col-5"><span class="bg-white text-dark">One column</span></div>
            <div class="col-5"><span class="bg-white text-dark">Two column</span></div>
        </div>

    </CommonCard3>
</template>
<script lang="ts" setup>
import { vertical, horizoltal } from "~/core/data/uikits"
let desc = ref<string>("You can use the <code>align-items-*</code> class to set the vertical alignment.")
let desc1 = ref<string>("You can use the <code>justify-content-*</code> class to set the horizontal alignment.")
</script>