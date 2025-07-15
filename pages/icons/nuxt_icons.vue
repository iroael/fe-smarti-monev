<template>
    <div class="container-fluid">
        <div class="row">
            <CommonCard3 colClass="col-sm-12" titleClass="m-b-0" headerTitle="true" cardClass="title-line"
                title="Nuxt Icons">
                <div class="row icon-lists feather-icons">
                    <div class="col-12 col-sm-6 col-xl-4" v-for="(icon, index) in nuxtIcon" :key="index"
                        v-on:click="icon_bar(icon.abbrivation)">
                        <div class="d-flex">
                            
                            <Icon :name="icon.abbrivation" class="fs-1" size="25" />
                            <div class="flex-grow-1 align-self-center">
                                <h6 class="mt-0" v-text="icon.name"></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </CommonCard3>
        </div>
    </div>
    <div class="icon-hover-bottom p-fixed fa-fa-icon-show-div" :class="{ 'opecity-0': !icon_bar_status }"
        :style="[icon_bar_status ? { 'display': 'block' } : { 'display': 'none' }]">
        <div class="container-fluid">
            <div class="row">
                <div class="icon-popup">
                    <div class="close-icon" v-on:click="close_icon_bar"><i class="icofont icofont-close"></i></div>
                    <div class="icon-fir    st">
                        <Icon :name="select_icon.class" class="fs-1 fa-2x" size="25" />

                    </div>
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
    title: "Icons Nuxt | Yuri - Premium Nuxt Admin Template"
})
import { icon_bar_status, nuxtIcon } from "~/composables/common/flagIcon"
import { toast } from 'vue3-toastify';
interface iconss {
    class: string,
    tag: string
}
const select_icon = ref<iconss>({
    class: 'home',
    tag: 'home'
})

function icon_bar(icon: string) {
    select_icon.value.class = icon;
    select_icon.value.tag = '<Icon name="' + icon + '"></Icon >';

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
    document.execCommand('copy');


}
</script>