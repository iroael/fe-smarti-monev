<template>
    <CommonCard3 colClass="col-xl-4 col-md-6" cardClass="title-line" pre="true" preClass="f-m-light mt-2" headerTitle="true"
        title="Flush lists" :desc="desc">
        <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="(item, index) in flushs" :key="index"><i class="icofont icofont-arrow-right">
                </i>{{ item.title }}</li>
        </ul>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { flushs } from "~/core/data/uikits"
let desc = ref<string>("Use <code> .list-group-flush</code> to remove some borders and rounded corners to render list group items.")
</script>