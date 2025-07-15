<template>
    <CommonCard3 :colClass="item.col" v-for="(item, index) in footers" :key="index" footer="true"
        :footerclass="item.footerclass" :footersClass="item.footerClass" :cardbodyClass="item.bodyclass"
        :titleClass="item.class" :cardhaderClass="item.haderclass" headerTitle="true" :title="item.title"
        footertitle="Yuri Theme">
        <h5 :class="item.bodyClass"> {{ item.bodytitle }} </h5>
        <p class="mb-0">{{ item.bodydesc }}</p>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { footers } from "~/core/data/advance"
</script>