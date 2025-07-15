<template>
    <CommonCard3 :colClass="item.col" cardClass="bg-primary articles-cards" v-for="(item, index) in wid" :key="index">
        <div class="d-flex faq-widgets">

            <div class="flex-grow-1">
                <h3 class="f-w-600 txt-light mb-2"> {{ item.title }}</h3>
                <p>{{ item.desc }}</p>
            </div>
            <Icon :name="item.icon"></Icon>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { wid } from "~/core/data/faq"
</script>