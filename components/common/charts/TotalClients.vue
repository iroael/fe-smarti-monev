<template>
    <ClientOnly>
        <apexchart type="area" height="120" :options="chartOptions" :series="series"></apexchart>
    </ClientOnly>
</template>
<script lang="ts" setup>
const series = [
    {
        data: [0, 15, 15, 10, 10, 20, 20, 25, 25, 25],
    },
]
const chartOptions = {
    chart: {
        type: "area",
        height: 145,
        toolbar: {
            show: false,
        },
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    xaxis: {
        type: "category",
        categories: ["jan", "feb", "mar", "apr", "may", "jun", "july", "aug", "sep", "oct",],
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
    },
    grid: {
        show: false,
        padding: {
            left: -60,
        },
    },
    yaxis: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    markers: {
        hover: {
            sizeOffset: 4,
        },
    },
    colors: ["#F99B0D"],
    fill: {
        type: "gradient",
        gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 0.1,
            inverseColors: true,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 100],
        },
    },
}
</script>