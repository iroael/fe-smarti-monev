<template>
    <CommonCard3 colClass="col-sm-12 col-xl-6" cardClass="card-absolute " v-for="(item, index) in absolute" :key="index"
        :cardhaderClass="item.bgColor" headerTitle="true" titles="true" titleClass="txt-light" :title="item.heading">
        <div class="d-flex list-behavior-1 align-items-center">
            <div class="flex-shrink-0"><img class="tab-img img-fluid" :src="getImages(item.img)" alt="home">
            </div>
            <div class="flex-grow-1">
                <p class="mb-xl-0 mb-sm-4">{{ item.text }}</p>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { absolute } from "~/core/data/advance"
import { getImages } from "~/composables/common/getImages"
</script>