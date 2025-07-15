<template>
    <CommonCard3 colClass="col-xxl-4 col-md-6" cardClass="title-line" pre="true" preClass="f-m-light mt-2"
        headerTitle="true" title="Disabled lists " :desc="desc">
        <div class="list-group">
            <a class="list-group-item list-group-item-action " :class="item.class" v-for="(item, index) in disabld"
                :key="index" href="javascript:void(0)"><img class="rounded-circle" :src="getImages(item.img)" alt="user">{{
                    item.title }}</a>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { disabld } from "~/core/data/uikits"
import { getImages } from "~/composables/common/getImages"
let desc = ref<string>(" Use<code> .disabled </code>to a <code>.list-group-item</code> to make it appear disabled.")
</script>