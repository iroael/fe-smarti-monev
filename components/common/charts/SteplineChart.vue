<template>
    <apexchart type="line" height="350" ref="chart" :options="chartOptions5" :series="series5">
    </apexchart>
</template>
<script lang="ts" setup>
let primary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
const series5 = [
    {
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
    },
]
const chartOptions5 = {
    chart: {
        type: "line",
        height: 350,
        toolbar: {
            show: false,
        },
    },
    stroke: {
        curve: "stepline",
    },
    dataLabels: {
        enabled: false,
    },
    title: {
        text: "Stepline Chart",
        align: "left",
    },
    markers: {
        hover: {
            sizeOffset: 4,
        },
    },
    colors: [primary.value],
}
</script>