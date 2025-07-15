<template>
    <CommonCard3 colClass="col-sm-12 col-xl-6" cardClass="title-line" titleClass="mb-0" pre="true" preClass="f-m-light mt-2"
        headerTitle="true" title="Badges contextual variations" :desc="desc">
        <div class="badge-spacing"><span class="badge " :class="item.class" v-for="(item, index) in badges" :key="index">{{
            item.title }}</span>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { badges } from "~/core/data/uikits"
let desc = ref<string>("Use the <code>.badge</code> utility class to make more badges.")
</script>