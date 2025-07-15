<template>
    <CommonCard3 colClass="col-xl-12" cardClass="title-line" pre="true" preClass="f-m-light mt-2" headerTitle="true"
        title="Link color in light theme" :desc="desc">
        <div class="row">
            <div class="col-xl-6" v-for="(items, index) in lightalert" :key="index">
                <div v-for="(item, index) in items.childern" :key="index">
                    <p class="mb-2 ">{{ item.title }}</p>
                    <div class="alert mb-3" :class="item.class" role="alert">
                        <p :class="item.alertclass">This is a <a class="alert-link" :class="item.alertclass" href="#">{{
                            item.text }}</a>
                            with an example link.Check it out.</p>
                    </div>
                </div>


            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { lightalert } from "~/core/data/uikits"
let desc = ref<string>("Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.")
</script>