<template>
    <CommonCard3 colClass="col-sm-12" cardClass="title-line" cardbodyClass="dark-alert" pre="true" preClass="f-m-light mt-2"
        headerTitle="true" title="Additional content" :desc="desc">
        <div class="alert " :class="item.class" role="alert" v-for="(item, index) in addition" :key="index">
            <h5 class="f-w-500 alert-heading pb-2 " :class="item.alertclass">{{ item.title }}</h5>
            <p>{{ item.text }}</p>
            <hr>
            <p class="mb-0">{{ item.text1 }}</p>
        </div>

    </CommonCard3>
</template>
<script lang="ts" setup>
import { addition } from "~/core/data/uikits"
let desc = ref<string>("Use the <code>.alert </code> utility class to quickly provide additional content within any alerts.")
</script>