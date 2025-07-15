<template>
    <div id="profit_chart1">
        <ClientOnly>
            <apexchart type="line" height="300" :options="chartOptions" :series="series"></apexchart>
        </ClientOnly>
    </div>
</template>
<script lang="ts" setup>
let primary: Ref<string>;
let secondary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
secondary = ref<string>(useCookie('secondary_color').value || '#F94C8E');
const series = [
    {
        name: "Income",
        type: "line",
        data: [60, 80, 30, 60, 30, 90],
    },
    {
        name: "Earnings",
        type: "line",
        data: [55, 65, 55, 80, 40, 65],
    },
    {
        name: "Profit",
        type: "line",
        data: [50, 40, 70, 40, 100, 70],
    },
]
const chartOptions = {
    chart: {
        height: 300,
        type: "line",
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true, top: 4, left: 0, blur: 2, colors: ["#009DB5", "#83BF6E", "#F99B0D"], opacity: 0.02,
        },
    },
    grid: {
        show: true,
        borderColor: "var(--chart-border)",
        strokeDashArray: 6,
        position: "back",
        xaxis: {
            lines: {
                show: false,
            },
        },
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },
    colors: ["#009DB5", "#83BF6E", "#F99B0D"],
    stroke: {
        width: 3,
        curve: "smooth",
        opacity: 1,
    },
    markers: {
        discrete: [
            {
                seriesIndex: 1,
                dataPointIndex: 3,
                fillColor: "#54BA4A",
                strokeColor: "var(--white)",
                size: 6,
            },
        ],
    },
    tooltip: {
        shared: false,
        intersect: false,
        marker: {
            width: 5,
            height: 5,
        },
    },
    xaxis: {
        type: "category",
        categories: ["Jan 02", "Jan 05", "Jan 08", "Jan 11", "Jan 14", "Jan 17"],
        min: 0.9,
        max: undefined,
        crosshairs: {
            show: false,
        },
        labels: {
            style: {
                colors: "var(--chart-text-color)",
                fontSize: "12px",
                fontFamily: "Rubik, sans-serif",
                fontWeight: 400,
            },
        },
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
    },
    fill: {
        opacity: 1,
        type: "gradient",
        gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: 1,
            opacityFrom: 0.95,
            opacityTo: 1,
            stops: [0, 90, 100],
        },
    },
    yaxis: {
        tickAmount: 5,
    },
    legend: {
        show: false,
    },
    responsive: [
        {
            breakpoint: 651, options: { chart: { height: 210, }, },
        },
        {
            breakpoint: 992, options: { chart: { height: 255, }, },
        },
        {
            breakpoint: 1221, options: { chart: { height: 290, }, },
        },
        {
            breakpoint: 1378, options: { chart: { height: 300, }, },
        },
        {
            breakpoint: 1576, options: { chart: { height: 270, }, },
        },
    ],
}
</script>