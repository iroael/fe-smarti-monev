<template>
    <CommonCard3 colClass="col-xl-4 col-md-6" cardClass="title-line" pre="true" preClass="f-m-light mt-2" headerTitle="true"
        title="Default lists" :desc="desc">
        <ul class="list-group">
            <li class="list-group-item" v-for="(item, index) in defaults" :key="index"> <i
                    class="icofont icofont-arrow-right"></i>{{ item.title }}</li>

        </ul>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { defaults } from "~/core/data/uikits"
let desc = ref<string>("Use the <code>.list-group </code>define the list of items. and used <code>.list-group-item </code>to indicate the current content.")
</script>