<template>
    <CommonCard3 colClass="col-md-12" cardbodyClass="common-flex switch-wrapper" cardClass="title-line" pre="true"
        preClass="f-m-light mt-1" headerTitle="true" title="Switch sizing" :desc="desc">
        <div class="d-flex" v-for="(item, index) in switchsize" :key="index">
            <label class="col-form-label m-r-10">{{ item.label }}</label>
            <div class="flex-grow-1 " :class="item.class">
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
let desc = ref<string>(" Use the <code>.switch-sm</code> and <code>.switch-lg </code>class through defined switch sizing.")
</script>