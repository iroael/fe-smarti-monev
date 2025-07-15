<template>
    <CommonCard3 colClass="col-md-6" cardbodyClass="common-flex " pre="true" cardClass="title-line"
        preClass="f-m-light mt-1" headerTitle="true" title="Disabled outline switch" :desc="desc">
        <div class="d-flex" v-for="(item, index) in disable" :key="index">
            <div class="flex-grow-1 text-end icon-state switch-outline">
                <label class="switch mb-0">
                    <input type="checkbox"><span class="switch-state " :class="item.class"></span>
                </label>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { disable } from "~/core/data/forms"
let desc = ref<string>("Use the <code>.switch-outline </code> class through created outline.  ")
</script>