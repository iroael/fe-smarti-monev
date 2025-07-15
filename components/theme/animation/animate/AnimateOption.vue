<template>
    <CommonCard3 colClass="col-sm-12" cardbodyClass="options" pre="true" preClass="f-m-light mt-1" text="true"
        headerTitle="true" title="How to use it?" :desc="desc">
        <div v-for="(item, index) in option" :key="index">{{ item }}</div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { option } from "~/composables/common/animationView"
let desc = ref<string>("All you have to do is to add animation name class attribute to html element, like :<code>Fade</code>")
</script>