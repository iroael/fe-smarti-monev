<template>
    <div class="row">
        <label class="col-xxl-3 box-col-12 text-start">TimePicker with Min/Max Time Range</label>
        <div class="col-xxl-9 box-col-12">
            <div class="input-group flatpicker-calender">
                <Datepicker class="" v-model="date" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
let date = ref<Date | null>(null);
</script>