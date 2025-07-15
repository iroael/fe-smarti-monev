<template>
    <div class="container-fluid">
        <div class="row">

            <ThemeIconsThemifyIconDirectionIcons @selected="icon_bar" />
            <ThemeIconsThemifyIconWebAppIcons @selected="icon_bar" />
            <ThemeIconsThemifyIconControlIcons @selected="icon_bar" />
            <ThemeIconsThemifyIconTextEditor @selected="icon_bar" />
            <ThemeIconsThemifyIconBrandIcons @selected="icon_bar" />
        </div>
    </div>
    <div class="icon-hover-bottom p-fixed fa-fa-icon-show-div" :class="{ 'opecity-0': !icon_bar_status }"
        :style="[icon_bar_status ? { 'display': 'block' } : { 'display': 'none' }]">
        <div class="container-fluid">
            <div class="row">
                <div class="icon-popup">
                    <div class="close-icon" v-on:click="close_icon_bar"><i class="icofont icofont-close"></i></div>
                    <div class="icon-first"><i class="fa-2x" :class="[select_icon.class]"></i></div>
                    <div class="icon-class">
                        <label class="icon-title">Class</label><span>icon-drupal</span>
                    </div>
                    <div class="icon-last icon-last">
                        <label class="icon-title">Markup</label>
                        <div class="form-inline">
                            <div class="form-group">
                                <input class="inp-val form-control m-r-10" type="text" ref="text" :value="select_icon.tag">
                                <button class="btn btn-primary notification" v-on:click="copy_icon">Copy text</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
useHead({
    title: "Icons Themify | Yuri - Premium Nuxt Admin Template"
})
import { icon_bar_status, select_icon, } from "~/composables/common/flagIcon"
import { toast } from 'vue3-toastify';
function icon_bar(icon: string) {

    select_icon.value.class = icon;
    select_icon.value.tag = '<i class="' + icon + '"></i>';

    icon_bar_status.value = true;
}
function close_icon_bar() {
    icon_bar_status.value = false;
}
function copy_icon() {
    toast.info(' Code Copied to clipboard! ', {
        hideProgressBar: true, autoClose: 2000, theme: 'colored', position: 'bottom-right',
    });
    navigator.clipboard.writeText(select_icon.value.tag);
}
</script>