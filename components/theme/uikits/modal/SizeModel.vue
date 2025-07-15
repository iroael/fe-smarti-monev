<template>
    <CommonCard3 colClass="col-lg-6" cardClass="title-line" cardbodyClass="badge-spacing" titleClass="mb-0" pre="true"
        preClass="f-m-light mt-2" headerTitle="true" title="Sizes modal" :desc="desc">
        <div class="btn " :class="item.class" v-for="(item, index) in sizemodal" :key="index" data-bs-toggle="modal"
            :data-bs-target="item.id">{{ item.title }}</div>
        <ThemeUikitsModalModalsFullsereenModa />
        <ThemeUikitsModalModalsExtralargeModal />
        <ThemeUikitsModalModalsLargeModal />
        <ThemeUikitsModalModalsSmallModal />
    </CommonCard3>
</template>
<script lang="ts" setup>
import { sizemodal } from "~/core/data/uikits"
let desc = ref<string>("Modals have three optional sizes, available via modifier classes to be placed on a <code>.modal-dialog</code>")
</script>