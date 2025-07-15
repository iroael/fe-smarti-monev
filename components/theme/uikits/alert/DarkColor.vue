<template>
    <CommonCard3 colClass="col-xl-12" cardClass="title-line" pre="true" preClass="f-m-light mt-2" headerTitle="true"
        title="Link color in dark theme" :desc="desc">
        <div class="row">
            <div class="col-xl-6" v-for="(items, index) in alert" :key="index">
                <div v-for="(item, index) in items.childern" :key="index">
                    <p class="mb-2 ">{{ item.title }}</p>
                    <div class="alert  dark mb-3" :class="item.class" role="alert">
                        <p>This is a <a :class="item.alertclass" href="#">{{ item.text }}</a> with an example
                            link. Check it out.</p>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { alert } from "~/core/data/uikits"
let desc = ref<string>("Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.")
</script>