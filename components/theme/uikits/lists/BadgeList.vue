<template>
    <CommonCard3 colClass="col-xxl-4 col-md-6" cardClass="title-line" pre="true" preClass="f-m-light mt-2"
        headerTitle="true" title="Numbered & badge lists" :desc="desc">
        <ol class="list-group list-group-numbered badge-list">
            <li class="list-group-item d-flex justify-content-between align-items-start flex-wrap"
                v-for="(item, index) in badge" :key="index">
                <div class="ms-2 me-auto">{{ item.title }}</div><span class="badge  rounded-pill p-2" :class="item.class">{{
                    item.badge }}</span>
            </li>
        </ol>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { badge } from "~/core/data/uikits"
let desc = ref<string>("Use the<code> .list-group-numbered</code> modifier class to  numbered list group items.Numbers are generated via CSS for better placement inside list group items.")
</script>