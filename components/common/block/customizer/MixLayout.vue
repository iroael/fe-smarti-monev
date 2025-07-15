<template>
    <h6 class="">Mix Layout</h6>
    <ul class="layout-grid customizer-mix">
        <li class="color-layout" data-attr="light-only" :class="{ active: mixLayout == 'light-only' }"
            @click="customizeMixLayout('light-only')">
            <div class="bg-light header">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="body">
                <ul>
                    <li class="bg-light sidebar"></li>
                    <li class="bg-light body"></li>
                </ul>
            </div>
        </li>
        <li class="color-layout" data-attr="dark-sidebar" :class="{ active: mixLayout == 'dark-sidebar' }"
            @click="customizeMixLayout('dark-sidebar')">
            <div class="bg-light header">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="body">
                <ul>
                    <li class="sidebar bg-dark"></li>
                    <li class="bg-light body"></li>
                </ul>
            </div>
        </li>
        <li class="color-layout" data-attr="dark-only" :class="{ active: mixLayout == 'dark-only' }"
            @click="customizeMixLayout('dark-only')">
            <div class="header bg-dark">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="body">
                <ul>
                    <li class="bg-dark sidebar"></li>
                    <li class="bg-dark body"></li>
                </ul>
            </div>
        </li>
    </ul>
</template>
<script lang="ts" setup>
import { uselayoutStore } from '~/stores/layout'
let mixLayout = ref('light-only')
let storeLayout = uselayoutStore()
function customizeMixLayout(values: string) {
    mixLayout.value = values
    storeLayout.setLayout({ class: values })
}
</script>