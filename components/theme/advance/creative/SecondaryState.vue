<template>
    <CommonCard3 colClass="col-xxl-4 col-md-6" cardClass="height-equal " cardhaderClass="border-l-secondary border-3 card-no-border"
        pre="true" preClass="f-m-light mt-1" headerTitle="true" title="Border Secondary State" :desc="desc">
        <ol class="list-group list-group-numbered scroll-rtl">
            <li class="list-group-item d-flex align-items-start flex-wrap" v-for="(item, index) in secondarystate"
                :key="index">
                <div class="me-auto ms-2">{{ item.name }}</div><span class="badge  rounded-pill p-2"
                    :class="item.badgeColor">{{ item.badgeText }}</span>
            </li>
        </ol>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { secondarystate } from "~/core/data/advance"
let desc = ref<string>("Use the class of<code>.b-l-* </code>for left border and <code>.border-3 </code>is used to increase the width of the border.")

</script>