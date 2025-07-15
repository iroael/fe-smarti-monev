<template>
    <CommonCard3 colClass="col-sm-12 col-xl-6" cardClass="title-line height-equal" titleClass="mb-0" pre="true"
        preClass="f-m-light mt-2" headerTitle="true" title="Badge headings example" :desc="desc">
        <div class='badge-heading' v-for="(item, index) in badgeheadings" :key="index" v-html="item.title">

        </div>
    </CommonCard3>


    <CommonCard3 colClass="col-sm-12 col-xl-6" cardClass="title-line height-equal" titleClass="mb-0" pre="true"
        preClass="f-m-light mt-2" headerTitle="true" title="Badges as part buttons" :desc="desc1">
        <div class="badge-spacing flex-column align-items-start">
            <button class="btn  d-flex align-items-center" :class="item.class" v-for="(item, index) in buttons" :key="index"
                type="button">{{ item.title }} <span class="badge rounded-circle btn-p-space badge-light text-dark ms-2">
                    <Icon :name="item.icon"></Icon>
                </span></button>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { badgeheadings, buttons } from "~/core/data/uikits"
let desc = ref<string>(" All html headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> , are available in <code>.badge </code>tags.")
let desc1 = ref<string>("<code>.badge</code> can be used as part of <code>.btn</code> to provide a icons.")
</script>