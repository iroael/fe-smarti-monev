<template>
    <CommonCard3 cardbodyClass="progress-showcase" cardClass="title-line" titleClass="mb-0" pre="true"
        preClass="f-m-light mt-2" headerTitle="true" title="Custom Progress Bars" :desc="desc">
        <div class="row">
            <div class="col">
                <h6 class="mb-2">0% Getting Started </h6>
                <div class="progress mb-4">
                    <div class="progress-bar-animated progress-bar-striped text-center" role="progressbar" aria-valuenow="0"
                        aria-valuemin="0" aria-valuemax="100"> </div>
                </div>
                <div v-for="(item, index) in custom" :key="index">
                    <h6 class="mb-2">{{ item.title }}</h6>
                    <div class="progress mb-4">
                        <div class="progress-bar-animated progress-bar-striped  text-center" :class="item.class"
                            role="progressbar" :style="{ 'width': item.width }" aria-valuenow="30" aria-valuemin="0"
                            aria-valuemax="100">30%</div>
                    </div>
                </div>


            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { custom } from "~/core/data/uikits"
let desc = ref<string>("Use the <code>.progress-bar-animated </code>and <code>.progress-bar-striped </code>to animate the stripes right to left.")
</script>