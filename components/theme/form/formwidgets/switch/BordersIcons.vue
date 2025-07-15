<template>
    <CommonCard3 colClass="col-xl-4" cardbodyClass="common-flex flex-column switch-wrapper"
        cardClass="title-line height-equal" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        title="Borders with icons" :desc="desc">
        <div class="d-flex" v-for="(item, index) in borders" :key="index">
            <div class="text-end icon-state switch-outline">
                <label class="switch mb-0">
                    <input type="checkbox" :checked="item.checked"><span class="switch-state " :class="item.class"> </span>
                </label>
            </div>
            <label class="col-form-label m-l-10">{{ item.label }}</label>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { borders } from "~/core/data/forms"
let desc = ref<string>("Use the <code>.switch-outline </code>and <code>.icon-state</code> class through created outline and icons.")
</script>