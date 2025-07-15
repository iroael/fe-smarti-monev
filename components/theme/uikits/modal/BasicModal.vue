<template>
    <CommonCard3 colClass="col-lg-6" cardClass="title-line" cardbodyClass="badge-spacing" titleClass="mb-0" pre="true"
        preClass="f-m-light mt-2" headerTitle="true" title="Basic modal" :desc="desc">

        <button class="btn " :class="item.class" v-for="(item, index) in basicmodal" :key="index" type="button"
            data-bs-toggle="modal" data-original-title="test" :data-bs-target="item.id">{{ item.title
            }}</button>
        <ThemeUikitsModalModalsSimpleModel />
        <ThemeUikitsModalModalsScrollingModal />
        <ThemeUikitsModalModalsTooltipsModal />
        <ThemeUikitsModalModalsOpenModel />

    </CommonCard3>
</template>
<script lang="ts" setup>
import { basicmodal } from "~/core/data/uikits"
import { getImages } from "~/composables/common/getImages"
let desc = ref<string>("Different types of basic modals using like <code>simple/scrolling/tooltips/grid/varying modal</code>.")
</script>
