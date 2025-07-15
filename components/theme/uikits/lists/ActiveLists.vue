<template>
    <CommonCard3 colClass="col-xl-4 col-md-6" cardClass="title-line" pre="true" preClass="f-m-light mt-2" headerTitle="true"
        title="Active lists" :desc="desc">
        <ul class="list-group">
            <li class="list-group-item " :class="item.class" v-for="(item, index) in active" :key="index"
                aria-current="true">
                <i class="icofont icofont-arrow-right"> </i>{{ item.title }}
            </li>
        </ul>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { active } from "~/core/data/uikits"
let desc = ref<string>("Use<code>.active </code>to a<code>.list-group-item</code> to indicate the current active.")
</script>