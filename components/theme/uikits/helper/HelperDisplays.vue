<template>
    <CommonCard3 colClass="col-12" cardClass="title-line" cardheaderClass="card-no-border pb-0" titleClass="mb-0" pre="true"
        preClass="f-m-light mt-1" headerTitle="true" title="Borders and displays" :desc="desc">
        <div class="row g-3">
            <div class="col-xl-4 col-sm-6" v-for="(item, index) in border" :key="index">
                <div class="border-wrapper h-100 border">
                    <h4 class=" mb-3">{{ item.title }} </h4>
                    <div class="helper-common-box" v-for="(items, index) in item.children" :key="index">
                        <div :class="items.class"></div><span>{{ items.title }}</span>
                    </div>

                </div>
            </div>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { border } from "~/core/data/uikits"
let desc = ref<string>("Use border utilities to add or remove an element's borders.")
</script>