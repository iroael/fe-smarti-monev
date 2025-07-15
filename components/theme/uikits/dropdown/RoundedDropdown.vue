<template>
    <CommonCard3 colClass="col-xl-6" cardClass="title-line height-equal" cardbodyClass="rtl-dropdown" pre="true"
        preClass="f-m-light mt-2" headerTitle="true" title="Rounded dropdown" :desc="desc">
        <div class="common-flex">
            <div class="btn-group" v-for="(item, index) in round" :key="index">
                <button class="btn  rounded-pill dropdown-toggle" :class="item.class" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">{{ item.title }}</button>
                <ul class="dropdown-menu dropdown-block">
                    <li><a class="dropdown-item" href="#">Dark</a></li>
                    <li><a class="dropdown-item" href="#">Light</a></li>
                    <li><a class="dropdown-item" href="#">Lighter</a></li>
                </ul>
            </div>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { round } from "~/core/data/uikits"
let desc = ref<string>("When the<code>.show </code>class starts, dropdown appears. And <code>.rounded-pill</code> to change rounded dropdowns.")
</script>