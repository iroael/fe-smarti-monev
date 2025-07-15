<template>
    <CommonCard3 colClass="col-sm-12 col-xl-6" cardClass="title-line" titleClass="mb-0" pre="true" preClass="f-m-light mt-2"
        headerTitle="true" title="Number of badge" :desc="desc">
        <div class="badge-spacing"><a class="badge" :class="item.class" v-for="(item, index) in number" :key="index"
                href="#">{{ item.title }}</a>
        </div>
    </CommonCard3>


    <CommonCard3 colClass="col-sm-12 col-xl-6" cardClass="title-line" titleClass="mb-0" pre="true" preClass="f-m-light mt-2"
        headerTitle="true" title="Number of pills tags" :desc="desc1">
        <div class="badge-spacing"><span class="badge rounded-circle badge-p-space " :class="item.class"
                v-for="(item, index) in number" :key="index">{{ item.title }}</span>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { number } from "~/core/data/uikits"
let desc = ref<string>("Use the <code>.badge</code> utility class to make number of more badges.")
let desc1 = ref<string>("  Use the <code>.rounded-circle</code> utility class to make badges more rounded with a larger <code>border-radius</code>.")
</script>