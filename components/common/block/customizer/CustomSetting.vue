<template>
    <div class="tab-pane fade show active" id="c-pills-home" :class="{ 'active show': store.customizer == 'settings' }"
        role="tabpanel" aria-labelledby="c-pills-home-tab">
        <CommonBlockCustomizerLayoutType />
        <CommonBlockCustomizerSidebarType />
        <CommonBlockCustomizerCustomColor />
        <CommonBlockCustomizerMixLayout />
    </div>
</template>
<script lang="ts" setup>
import { useSidebarStore } from '~/stores/sidebar'
let store = useSidebarStore()
</script>