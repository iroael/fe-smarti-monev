<template>
    <CommonCard3 colClass="col-sm-12" cardClass="title-line" cardbodyClass="grid-showcase" titleClass="mb-0" pre="true"
        preClass="f-m-light mt-2" headerTitle="true" title="Grid for column" :desc="desc">
        <div class="row">
            <div class=" text-center" :class="item.class" v-for="(item, index) in columm" :key="index">
                <span>{{ item.class }}</span>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { columm } from "~/core/data/uikits"
let desc = ref<string>("You may use predefined grid classes. Using <code>.col-md-* </code>you can set the grid system..")
</script>