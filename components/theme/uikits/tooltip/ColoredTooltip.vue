<template>
    <commonCard3 colClass="col-md-6" cardClass="title-line" pre="true" preClass="f-m-light mt-2" headerTitle="true"
        title="Colored tooltip" :desc="desc">
        <div class="common-flex">
            <button class="mb-0 me-0 btn" :class="item.color" v-for="(item, index) in colortooltip" :key="index"
                data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Primary" v-tooltip="item.title">{{
                    item.title }}</button>
        </div>
    </commonCard3>
</template>
<script lang="ts" setup>
import { colortooltip } from '~/core/data/uikits'
let desc = ref<string>("Use the <code>btn- *</code> to change dark background color and <code>data-bs-placement='*' </code>to tooltip positions change.")
</script>