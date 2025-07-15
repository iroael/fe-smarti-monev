<template>
    <h6 class="pt-0 mt-0">Layout Type</h6>
    <ul class="main-layout layout-grid">
        <li data-attr="ltr" :class="{ active: layoutType == 'ltr' }" @click="customizeLayoutType('ltr')">
            <div class="header bg-light">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="body">
                <ul>
                    <li class="bg-light sidebar"></li>
                    <li class="bg-light body">
                        <span class="badge badge-primary">LTR</span>
                    </li>
                </ul>
            </div>
        </li>
        <li data-attr="rtl" :class="{ active: layoutType == 'rtl' }" @click="customizeLayoutType('rtl')">
            <div class="header bg-light">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="body">
                <ul>
                    <li class="bg-light body">
                        <span class="badge badge-primary">RTL</span>
                    </li>
                    <li class="bg-light sidebar"></li>
                </ul>
            </div>
        </li>
        <li v-bind:style="storeLayout.boxlayout ? '' : 'display: none;'" data-attr="box"
            :class="{ active: layoutType == 'box-layout' }" @click="customizeLayoutType('box-layout')"
            class="box-layout px-3">
            <div class="header bg-light">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="body">
                <ul>
                    <li class="bg-light sidebar"></li>
                    <li class="bg-light body">
                        <span class="badge badge-primary">Box</span>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</template>
<script lang="ts" setup>
import { uselayoutStore } from "~/stores/layout";
let layoutType = ref<string>("ltr");
let storeLayout = uselayoutStore();
let layout = storeLayout.layouts;
function customizeLayoutType(val: string) {
    layoutType.value = val;
    storeLayout.setLayoutType(layout, val);
}
</script>