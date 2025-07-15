<template>
    <CommonCard3 colClass="col-xxl-4 col-md-6" cardClass="height-equal " cardhaderClass="border-l-primary border-3 card-no-border"
        pre="true" preClass="f-m-light mt-1" headerTitle="true" title="Border Primary State" :desc="desc">
        <div class="list-group"><a class="list-group-item list-group-item-action " v-for="(item, index) in primarystate"
                :key="index" :class="item.active == true ? 'active' : ''" href="javascript:void(0)"><img
                    class="rounded-circle" :src="getImages(item.img)" alt="user">{{ item.name }}</a></div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { primarystate } from "~/core/data/advance"
import { getImages } from "~/composables/common/getImages"
let desc = ref<string>("Use the class of<code>.b-l-* </code>for left border and <code>.border-3 </code>is used to increase the width of the border.")

</script>