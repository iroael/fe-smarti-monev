<template>
    <div class="row">
        <label class="col-xxl-3 box-col-12 text-start">Multiples Dates</label>
        <div class="col-xxl-9 box-col-12">
            <div class="input-group flatpicker-calender">
                <datepicker class="" v-model="date" multiDates />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
let date = ref<Date | null>(null);

</script>