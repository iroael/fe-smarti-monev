<template>
    <div class="row">
        <label class="col-xxl-3 box-col-12 text-start">Preloading Time</label>
        <div class="col-xxl-9 box-col-12">
            <div class="input-group">
                <Datepicker class="" v-model="time" timePicker />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
interface Time {
    hours: number;
    minutes: number;
}
const time = ref<Time>({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes()
});
</script>