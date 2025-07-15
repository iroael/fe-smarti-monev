<template>
    <div id="revenue-chart">
        <ClientOnly>
            <apexchart type="line" height="140" :options="chartOptions" :series="series"></apexchart>
        </ClientOnly>
    </div>
</template>
<script lang="ts" setup>
const series = [
    {
        name: "Sales",
        data: [5, 25, 3, 20, 15],
    },
    {
        name: "Revenue",
        data: [5, 15, 3, 14, 15],
    },
]
const chartOptions = {
    chart: {
        height: 140,
        type: "line",
        toolbar: {
            show: false,
        },
    },
    stroke: {
        width: 2,
        curve: "smooth",
    },
    xaxis: {
        type: "category",
        categories: ["Sat", "Sun", "Mon", "Tue", "Wed"],
        tickAmount: 6,
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            style: {
                colors: ["var(--body-light-font-color)"],
            },
        },
    },
    grid: {
        show: true,
        borderColor: "var(--chart-border)",
        strokeDashArray: 6,
        position: "back",
    },
    colors: ["#80be70", "#c8e7e5"],
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            gradientToColors: ["#029eb4"],
            shadeIntensity: 1,
            type: "horizontal",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100],
        },
    },
    legend: {
        show: false,
    },
    yaxis: {
        min: 0,
        max: 30,
        tickAmount: 3,
    },
}
</script>