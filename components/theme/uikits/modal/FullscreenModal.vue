<template>
    <CommonCard3 colClass="col-xl-12" cardClass="title-line" cardbodyClass="badge-spacing" titleClass="mb-0" pre="true"
        preClass="f-m-light mt-1" headerTitle="true" title="Fullscreen modal" :desc="desc">
        <button class="btn " :class="item.class" v-for="(item, index) in fullsecreenmodel" :key="index" type="button"
            data-bs-toggle="modal" :data-bs-target="item.id">{{ item.title }}</button>
        <ThemeUikitsModalModalsFullscreenModallabel />
        <ThemeUikitsModalModalsFullscreenSm />
        <ThemeUikitsModalModalsFullscreenMd />
        <ThemeUikitsModalModalsFullscreenLg />
        <ThemeUikitsModalModalsFullscreenXl />
        <ThemeUikitsModalModalsFullscreenXxl />
    </CommonCard3>
</template>
<script lang="ts" setup>
import { fullsecreenmodel } from "~/core/data/uikits"
let desc = ref<string>("Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a<code> .modal-dialog</code>. ")
</script>