<template>
    <CommonCard3 colClass="col-xxl-4 col-md-6" cardClass="title-line" pre="true" preClass="f-m-light mt-1"
        headerTitle="true" title="Badges Scrollbar" :desc="desc">
        <div class="vertical-scroll scroll-demo scroll-b-none custom-scrollbar">
            <ol class="list-group list-group-numbered scroll-rtl">
                <li class="list-group-item d-flex align-items-start flex-wrap" v-for="(item, index) in Badges" :key="index">
                    <div class="ms-2 me-auto">{{ item.title }}</div><span :class="item.badge">{{ item.span }}</span>
                </li>
            </ol>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { Badges } from "~/core/data/scrollable"
let desc = ref<string>("Use the<code>.badge </code> class through create more badges and <code>.vertical-scroll </code>used as vertical scroll.")

</script>