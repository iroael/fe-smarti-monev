<template>
    <CommonCard3 colClass="col-md-6" pre="true" cardbodyClass="card-wrapper input-group-wrapper" preClass="f-m-light mt-1"
        headerTitle="true" title="Sizing" :desc="desc">
        <div class="input-group  " :class="item.class" v-for="(item, index) in size" :key="index"><span
                class="input-group-text" :id="item.id">{{ item.label }}</span>
            <input class="form-control" type="text" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm">
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { size } from "~/core/data/forms"
let desc = ref<string>(" Add the relative form sizing classes to the<code> .input-group</code> itself and contents within will automatically resize—no need for repeating the form control size classes on each element.")
</script>