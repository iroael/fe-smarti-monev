<template>
    <CommonCard3 colClass="col-xl-4 col-sm-6" cardbodyClass="common-flex flex-column switch-wrapper"
        cardClass="title-line height-equal" pre="true" preClass="f-m-light mt-1" headerTitle="true" title="Icons switch"
        :desc="desc">
        <div class="d-flex" v-for="(item, index) in iconswich" :key="index">
            <div class="text-end icon-state">
                <label class="switch mb-0">
                    <input type="checkbox" :checked="item.checked"><span class="switch-state " :class="item.class"></span>
                </label>
            </div>
            <label class="col-form-label m-l-10">{{ item.label }}</label>
        </div>

    </CommonCard3>
</template>
<script lang="ts" setup>
import { iconswich } from "~/core/data/forms"
let desc = ref<string>("Use the <code>.switch-state </code>and <code>icon-state </code>through defined icons switches.")
</script>