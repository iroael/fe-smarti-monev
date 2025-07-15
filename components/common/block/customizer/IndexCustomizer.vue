<template>
    <div class="customizer-links" :class="{ open: store.customizer }">
        <div class="flex-column nac-pills nav" id="c-pills-tab" role="tablist" aria-orientation="vertical">
            <CommonBlockCustomizerSetting />
            <CommonBlockCustomizerSupport />
            <CommonBlockCustomizerDocumentSection />
            <CommonBlockCustomizerCheckFeatures />
            <CommonBlockCustomizerBuyNow />
        </div>
    </div>
    <div class="customizer-contain" :class="{ open: store.customizer }">
        <div class="tab-content" id="c-pills-tabContent">
            <CommonBlockCustomizerConfigurationView />
            <div class="customizer-body custom-scrollbar">
                <CommonBlockCustomizerCustomSetting />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useSidebarStore } from '~/stores/sidebar'
let store = useSidebarStore()
</script>