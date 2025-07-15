<template>
    <div class="row">
        <label class="col-xxl-3 box-col-12 text-start">Disabled Dates </label>
        <div class="col-xxl-9 box-col-12">
            <div class="input-group flatpicker-calender">
                
                <datepicker :disabledDates="disabledDates" v-model="dates"></datepicker>
               
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
let dates = ref(new Date());
const disabledDates = computed(() => {
    const today = new Date();

    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const afterTomorrow = new Date(tomorrow);
    afterTomorrow.setDate(tomorrow.getDate() + 1);

    return [tomorrow, afterTomorrow]
})
</script>