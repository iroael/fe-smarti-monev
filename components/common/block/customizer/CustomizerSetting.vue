<template>
    <a class="nav-link" :class="{ 'active show': store.customizer == 'settings' }" id="c-pills-home-tab"
        @click="openCustomizerSetting('settings')" href="javascript:void(0)">
        <div class="settings"><img src="/images/customizer/brush.png" alt="color"></div><span>Quick option</span>
    </a>
</template>
<script lang="ts" setup>
import { useSidebarStore } from '~/stores/sidebar'
let store = useSidebarStore()
function openCustomizerSetting(val: string) {
    store.customizer = val;
}
</script>