<template>
    <h6>SIDEBAR TYPE</h6>
    <ul class="sidebar-type layout-grid">
        <li data-attr="normal-sidebar" @click="customizeSidebarSetting('horizontal-wrapper ', 'Horizontal')">
            <div class="header bg-light">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="body">
                <ul>
                    <li class="bg-dark sidebar"></li>
                    <li class="bg-light body"></li>
                </ul>
            </div>
        </li>
        <li data-attr="compact-sidebar" @click="customizeSidebarSetting('compact-wrapper', 'default')">
            <div class="header bg-light">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="body">
                <ul>
                    <li class="bg-dark sidebar"></li>
                    <li class="bg-light body"></li>
                </ul>
            </div>
        </li>
    </ul>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useSidebarStore } from '~/stores/sidebar'
import { uselayoutStore } from "~/stores/layout";
import { useRouter } from "vue-router";
let router = useRouter();
let store = useSidebarStore();
let storeLayout = uselayoutStore();
function customizeSidebarSetting(val: string, layout: string) {
    storeLayout.layouts.settings.sidebar_setting = val;
    storeLayout.setCustomizeSidebarType(val);
    router.push({ query: { layout: layout } }).catch(err => err);
}
onMounted(() => {
    if (localStorage.getItem("SidebarType") === 'compact-wrapper') {
        storeLayout.layouts.settings.sidebar_setting = 'compact-wrapper';
        storeLayout.setCustomizeSidebarType('compact-wrapper');
    }
    else {
        storeLayout.layouts.settings.sidebar_setting = 'horizontal-wrapper';
        storeLayout.setCustomizeSidebarType('horizontal-wrapper');
    }
})
</script>