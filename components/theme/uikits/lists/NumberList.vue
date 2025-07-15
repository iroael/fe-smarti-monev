<template>
    <CommonCard3 colClass="col-xl-4 col-12" cardClass="title-line" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        title="Lists with numbers" :desc="desc">
        <ol class="list-group list-group-numbered">
            <li class="list-group-item  fw-bold" :class="item.class" v-for="(item, index) in numbers" :key="index">
                {{ item.title }}</li>
        </ol>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { numbers } from "~/core/data/uikits"
let desc = ref<string>("Use the <code>.list-group-numbered</code> to ordered wise print numbers.")
</script>