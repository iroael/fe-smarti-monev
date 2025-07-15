<template>
    <apexchart type="area" height="300" ref="chart" :options="chartOptions12" :series="series12">
    </apexchart>
</template>
<script lang="ts" setup>
let primary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
const series12 = [
    {
        data: [70, 60, 82, 80, 60, 90, 70, 120, 50, 60, 0],
    },
]
const chartOptions12 = {
    chart: {
        toolbar: {
            show: false,
        },
        height: 300,
        type: "area",
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 3,
        curve: "smooth",
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov",
        ],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    grid: {
        borderColor: "rgba(196,196,196, 0.3)",
        padding: {
            top: -20,
            right: -55,
            bottom: 0,
        },
    },
    fill: {
        opacity: 0.2,
    },
    colors: [primary.value],
    series: [
        {
            data: [70, 60, 82, 80, 60, 90, 70, 120, 50, 60, 0],
        },
    ],
    tooltip: {
        x: {
            format: "dd/MM/yy HH:mm",
        },
    },
}
</script>