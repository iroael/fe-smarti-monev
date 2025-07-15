<template>
    <CommonCard3 colClass="col-xl-4 col-md-6" cardClass="title-line" cardbodyClass="dark-list" pre="true"
        preClass="f-m-light mt-2" headerTitle="true" title="Lists with checkbox" :desc="desc">
        <ul class="list-group">
            <li class="list-group-item" v-for="(item, index) in checkbox" :key="index">
                <input class="form-check-input me-1 " :class="item.class" :id="item.ids" type="checkbox" value="">
                <label class="form-check-label  mb-0" :class="item.text" :for="item.ids">{{ item.title }}</label>
            </li>
        </ul>
    </CommonCard3>

    <CommonCard3 colClass="col-xl-4 col-md-6" pre="true" preClass="f-m-light mt-2" headerTitle="true"
        title="Lists with radios" :desc="desc">
        <ul class="list-group">
            <li class="list-group-item" v-for="(item, index) in radio" :key="index">
                <input class="form-check-input me-1 " :class="item.class" :id="item.ids" type="radio" name="listGroupRadio"
                    value="" :checked="item.checked">
                <label class="form-check-label mb-0" :for="item.ids">{{ item.title }}</label>
            </li>
        </ul>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { checkbox, radio } from "~/core/data/uikits"
let desc = ref<string>("Use the <code>.form-check-input </code>to check your checkbox.")
let desc1 = ref<string>("Use the <code>.form-check-input </code>to check your radio buttons.")
</script>