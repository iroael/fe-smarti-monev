<template>
    <CommonCard3 colClass="col-12" cardClass="title-line" cardheaderClass="card-no-border pb-0" titleClass="mb-0" pre="true"
        preClass="f-m-light mt-1" headerTitle="true" title="Border color" :desc="desc">
        <div class="gradient-border">
            <div class="helper-common-box" v-for="(item, index) in bordercolor" :key="index">
                <div class="helper-box border fill-wrapper" :class="item.class"> </div><span>{{ item.title
                }}</span>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { bordercolor } from "~/core/data/uikits"
let desc = ref<string>("Use the <code>.b-*/.b-t-*/.b-b-*/.b-l-*/.b-r-* </code>class for borders.")
</script>