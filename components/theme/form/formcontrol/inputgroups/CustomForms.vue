<template>
    <CommonCard3 colClass="col-md-6" pre="true" cardbodyClass="common-flex main-custom-form" preClass="f-m-light mt-1"
        headerTitle="true" title="Custom forms" :desc="desc">
        <div class="input-group" v-for="(item, index) in customform" :key="index">

            <label class="input-group-text" for="inputGroupSelect01" v-if="item.option">Options</label>
            <button class="btn btn-outline-success" type="button" v-if="item.iconbutton"> <i
                    class="icofont icofont-credit-card"></i></button>
            <select class="form-select" id="inputGroupSelect01">
                <option v-for="(items, index) in item.children" :key="index">{{ items.title }}</option>

            </select>
            <label class="input-group-text" for="inputGroupSelect02" v-if="item.options">Options</label>
            <button class="btn btn-outline-success" type="button" v-if="item.submit">Submit</button>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { customform } from "~/core/data/forms"
let desc = ref<string>(" Input groups include support for <code>custom selects and custom file inputs</code>. Browser default versions of these are not supported.")
</script>