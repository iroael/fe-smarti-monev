<template>
    <CommonCard3 colClass="col-md-6" cardheaderClass="pb-0" cardClass="title-line" headerTitle="true"
        title="Full Colored Variant">
        <div class="mb-2" v-for="(item, index) in fullColored" :key="index">
            <div class="col-form-label">{{ item.label }}</div>
            <select class="form-select " :class="item.class" name="select">
                <option value="opt1">Select One Value Only</option>
                <option value="opt2">Type 2</option>
                <option value="opt3">Type 3</option>
                <option value="opt4">Type 4</option>
                <option value="opt5">Type 5</option>
                <option value="opt6">Type 6</option>
                <option value="opt7">Type 7</option>
                <option value="opt8">Type 8</option>
            </select>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { fullColored } from "~/core/data/forms"
</script>