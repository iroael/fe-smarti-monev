<template>
    <div class="row">
        <label class="col-xxl-3 box-col-12 text-start"> Range</label>
        <div class="col-xxl-9 box-col-12">
            <div class="input-group flatpicker-calender">
                <datepicker class="" v-model="date" range />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const date = ref<Date | null>();
onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];
})
</script>