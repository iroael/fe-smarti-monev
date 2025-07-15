<template>
    <CommonCard3 colClass="col-12" cardClass="title-line" cardbodyClass="d-flex flex-column gap-3" titleClass="mb-0"
        pre="true" preClass="f-m-light mt-2" headerTitle="true" title="Font weight" :desc="desc">
        <div v-for="(item, index) in weight" :key="index" v-html="item.font">
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { weight } from "~/core/data/uikits"
let desc = ref<string>("Using <code>f-w-*</code> class, you can change the font weight.")
</script>