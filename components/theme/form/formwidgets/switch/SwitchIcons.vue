<template>
    <CommonCard3 colClass="col-md-12" cardbodyClass="common-flex switch-wrapper" pre="true" preClass="f-m-light mt-1"
        cardClass="title-line" headerTitle="true" title="Switch With Icons" :desc="desc">
        <div class="d-flex" v-for="(item, index) in switchsize" :key="index">
            <label class="col-form-label m-r-10">{{ item.label }}</label>
            <div class="flex-grow-1 icon-state" :class="item.class">
                <label class="switch">
                    <input type="checkbox" :checked="item.checked" :disabled="item.disabled"><span
                        class="switch-state"></span>
                </label>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { switchsize } from "~/core/data/forms"
let desc = ref<string>("Use the <code>.icon-state</code> class through visible icons in switches.")
</script>