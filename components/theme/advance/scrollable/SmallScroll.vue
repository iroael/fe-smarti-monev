<template>
    <CommonCard3 colClass="col-xl-6" cardClass="title-line" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        title="Small Size Scrollbar" :desc="desc">
        <div class="vertical-scroll scroll-demo custom-scrollbar">
            <div class="scrollbar-margins large-margin scroll-demo pe-0">
                <div class="margin-scrollbar">
                    <h5 class="pb-2">Solution for Business Transformation</h5>
                </div>
                <p v-for="(item, index) in small" :key="index" v-html="item.desc">
                </p>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { small } from "~/core/data/scrollable"
let desc = ref<string>("Use the <code>.scrollbar-margins </code>through small scroll and image is draggable.")

</script>