<template>
    <CommonCard3 colClass="col-xxl-4 col-md-6" cardClass="height-equal " cardhaderClass="border-l-warning border-3 card-no-border"
        pre="true" preClass="f-m-light mt-1" headerTitle="true" title="Border Warning State" :desc="desc">
        <ol class="list-group list-group-numbered">
            <li class="list-group-item  fw-bold" :class="item.colorClass" v-for="(item, index) in warningstate"
                :key="index">{{
                    item.text }}</li>
        </ol>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { warningstate } from "~/core/data/advance"
let desc = ref<string>("Use the class of<code>.b-l-* </code>for left border and <code>.border-3 </code>is used to increase the width of the border.")
</script>