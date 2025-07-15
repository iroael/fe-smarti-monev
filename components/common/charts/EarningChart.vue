<template>
    <div id="earning-chart">
        <ClientOnly>
            <apexchart type="bar" height="245" :options="chartOptions" :series="series"></apexchart>
        </ClientOnly>
    </div>
</template>
<script lang="ts" setup>
let primary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
const series = [
    {
        name: "Net Profit",
        data: [90, 40, 114, 56, 90, 80, 90],
    },
    {
        name: "Revenue",
        data: [60, 75, 90, 80, 61, 30, 70],
    },
]
const chartOptions = {
    chart: {
        type: "bar",
        height: 245,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 4, horizontal: false, columnWidth: "40%", endingShape: "rounded",
        },
    },
    grid: {
        show: true,
        borderColor: "var(--chart-border)",
        position: "back",
        xaxis: {
            lines: {
                show: true,
            },
        },
        padding: { top: 0, right: 0, bottom: 0, left: 0, },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: false,
        width: 0,
    },
    xaxis: {
        categories: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
    },
    yaxis: {
        labels: {
            show: false,
        },
    },
    colors: [primary.value, "#F99B0D"],
    fill: {
        type: ["solid", "gradient"],
        opacity: 1,
    },
    legend: {
        show: false,
    },
    responsive: [
        {
            breakpoint: 1531,
            options: {
                chart: { height: 255, },
            },
        },
        {
            breakpoint: 1200,
            options: {
                chart: { height: 272, },
            },
        },
        {
            breakpoint: 992,
            options: {
                chart: { height: 265, },
            },
        },
        {
            breakpoint: 963,
            options: {
                chart: { height: 272, },
            },
        },
    ],
}
</script>