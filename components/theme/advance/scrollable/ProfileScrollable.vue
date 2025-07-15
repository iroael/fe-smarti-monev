<template>
    <CommonCard3 colClass="col-xxl-4 col-md-6" cardClass="title-line" pre="true" preClass="f-m-light mt-1"
        headerTitle="true" title="Profile Scrollable" :desc="desc">
        <div class="vertical-scroll scroll-demo scroll-b-none custom-scrollbar">
            <div class="list-group"><a class="list-group-item list-group-item-action list-hover-primary"
                    href="javascript:void(0)" v-for="(item, index) in profile" :key="index"> <img class="rounded-circle"
                        :src="getImages(item.img)" alt="user">{{ item.name }}</a></div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { profile } from "~/core/data/scrollable"
import { getImages } from "~/composables/common/getImages"
let desc = ref<string>(" Use the <code>.list-group-item </code>through made profile and with used <code>.vertical-scroll </code>.")

</script>