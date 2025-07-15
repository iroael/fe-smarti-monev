<template>
    <CommonCard3 colClass="col-12" cardClass="title-line" titleClass="mb-0" pre="true" preClass="f-m-light mt-2"
        headerTitle="true" title="Yuri custom modals" :desc="desc">
        <div class="row g-3">
            <ThemeUikitsModalModalsProfileModal />
            <ThemeUikitsModalModalsResultModal />
            <ThemeUikitsModalModalsBalanceModal />
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { badges } from "~/core/data/uikits"
let desc = ref<string>("Custom Modal make by Yuri.")
</script>