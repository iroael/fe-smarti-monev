<template>
    <apexchart width="380" type="donut" :options="chartOptions8" :series="series8" :responsive="chartOptions8.responsive">
    </apexchart>
</template>
<script lang="ts" setup>
let primary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
const series8 = [44, 55, 41, 17, 15]
const chartOptions8 = {
    chart: {
        width: 380,
        type: 'donut',
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                show: false
            }
        }
    }],
    colors: ["#F6463A", "#F99B0D", primary.value, "#83BF6E", "#25C5F7"],
}
</script>