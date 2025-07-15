<template>
    <ClientOnly>
        <apexchart type="bar" height="100" :options="chartOptions" :series="series">
        </apexchart>
    </ClientOnly>
</template>
<script lang="ts" setup>
let primary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
const series = [
    {
        name: "Earning",
        data: [4, 3, 3, 3, 4, 3, 3, 4, 5, 3.5, 2.5, 2.5],
    },
]
const chartOptions = {
    chart: {
        height: 100,
        type: "bar",
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            top: 10,
            left: 0,
            blur: 3,
            color: primary.value,
            opacity: 0.25,
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 2,
            borderRadiusApplication: "around",
            borderRadiusWhenStacked: "last",
            columnWidth: "25%",
        },
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        categories: ["S", "M", "T", "W", "T", "F", "S", "s", "m", "t", "w", "t"],
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
    yaxis: {
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
        },
    },
    grid: {
        show: false,
    },
    colors: [primary.value],
}
</script>