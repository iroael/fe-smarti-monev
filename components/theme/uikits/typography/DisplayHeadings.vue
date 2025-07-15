<template>
    <CommonCard3 colClass="col-12" cardClass="title-line" cardbodyClass="d-flex flex-column gap-2" titleClass="mb-0"
        pre="true" preClass="f-m-light mt-2" headerTitle="true" title="Display headings" :desc="desc">
        <div v-for="(item, index) in display" :key="index" v-html="item.font"></div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { display } from "~/core/data/uikits"
let desc = ref<string>("Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a <mark>display heading</mark>&mdash;a larger, slightly more opinionated heading style.")
</script>