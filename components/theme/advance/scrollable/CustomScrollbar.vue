<template>
    <CommonCard3 titleClass="mb-0" colClass="col-xl-6" cardClass="title-line" pre="true" preClass="f-m-light mt-1"
        headerTitle="true" title="Custom Scrollbar" :desc="desc">
        <div class="vertical-scroll scroll-demo custom-scrollbar">
            <h5 class="pb-2">Custom Scrollbar </h5>
            <p>I'm quite interested in learning more about <em class="txt-danger">custom scrollbars</em> because
                they are becoming more and more common.</p>
            <div class="scrollbar-images"><img class="img-fluid" src="/images/banner/1.jpg" alt="banner">
            </div>
            <p v-for="(item, index) in custom" :key="index" v-html="item.desc">
            </p>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { custom } from "~/core/data/scrollable"
let desc = ref<string>("Used <code>.vertical-scroll </code>and <code>.scroll-demo </code>through design scrollbar.")

</script>