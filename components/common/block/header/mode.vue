<template>
    <li>
        <div class="mode" :class="actives ? 'active' : ''">
            <svg v-show="mixLayout == 'light'" @click="customizeMixLayout('dark-only')">
                <use href="/svg/icon-sprite.svg#sun"></use>
            </svg>

            <svg v-show="mixLayout == 'dark-only'" @click="customizeMixLayout('light')">

                <use href="/svg/icon-sprite.svg#moon"></use>
            </svg>
        </div>
    </li>
</template>
<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { uselayoutStore } from "~/stores/layout"
const mixLayout = ref<string>('light')
const actives = ref<boolean>(false)
let store = uselayoutStore()
function customizeMixLayout(val: string) {
    mixLayout.value = val;
    actives.value = !actives.value
    store.setLayout({ class: val })
}

onMounted(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
        mixLayout.value = savedMode;
        actives.value = savedMode === 'dark-only';
        store.setLayout({ class: savedMode });
    }
});

watch(mixLayout, (newValue) => {
    localStorage.setItem('mode', newValue);
});
</script>