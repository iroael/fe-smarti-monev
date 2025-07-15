<template>
    <CommonCard3 colClass="col-xxl-6 col-sm-12 box-col-12" cardClass="title-line height-equal" pre="true"
        preClass="f-m-light mt-2" headerTitle="true" title="Contextual classes" :desc="desc">
        <div class="list-group"><a class="list-group-item list-group-item-action " :class="item.class"
                v-for="(item, index) in contextual" :key="index" href="#">This
                is {{ item.color }} bg you can use <em :class="item.txt">{{ item.title }}</em>
                class.</a></div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { contextual } from "~/core/data/uikits"
let desc = ref<string>("Use contextual classes to style list items with a stateful background and color.<code>.list-light-*</code> and <code>txt-*</code>.")
</script>