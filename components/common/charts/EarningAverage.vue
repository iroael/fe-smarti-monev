<template>
    <ClientOnly>
        <apexchart type="line" height="160" :options="chartOptions" :series="series"></apexchart>
    </ClientOnly>
</template>
<script lang="ts" setup>
let primary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
const series = [
    {
        data: [20, 40, 60, 20, 100, 60, 20, 80, 40, 10, 80, 100, 100],
    },
]
const chartOptions = {
    chart: {
        type: "line",
        height: 160,
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true, top: 0, left: 0, blur: 20, color: primary.value, opacity: 0.5,
        },
    },
    grid: {
        show: true,
        borderColor: "var(--chart-border)",
        strokeDashArray: 6,
        position: "back",
        xaxis: {
            lines: {
                show: true,
            },
        },
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },
    stroke: {
        curve: "stepline",
        width: 2,
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
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
        labels: {
            show: false,
        },
        min: 0,
        tickAmount: 5,
        tickPlacement: "between",
    },
    markers: {
        size: 3, colors: "var(--white)", strokeColors: "#009DB5", strokeWidth: 2, strokeOpacity: 0.9, strokeDashArray: 0, fillOpacity: 1, shape: "circle", offsetX: 2, offsetY: 2, radius: 2,
        hover: {
            size: 3,
        },
    },
    colors: ["#009DB5"],

    responsive: [
        {
            breakpoint: 1200,
            options: {
                chart: {
                    height: 122,
                },
            },
        },
        {
            breakpoint: 768,
            options: {
                chart: {
                    height: 160,
                },
            },
        },
    ],
}
</script>