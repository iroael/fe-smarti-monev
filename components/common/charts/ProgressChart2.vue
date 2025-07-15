<template>
    <apexchart type="bar" height="70" ref="chart" :options="chartOptions8" :series="series8">
    </apexchart>
</template>
<script lang="ts" setup>
const series8 = [
    {
        name: "Reach Station",
        data: [50],
    },
]
const chartOptions8 = {
    chart: {
        height: 70,
        type: "bar",
        stacked: true,
        sparkline: {
            enabled: true,
        },
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: "15%",
            colors: {
                backgroundBarColors: ["#25C5F7"],
                backgroundBarOpacity: 0.2,
                backgroundBarRadius: 10,
            },
        },
    },
    colors: ["#25C5F7"],
    stroke: {
        width: 0,
    },
    series: [
        {
            name: "Reach Station",
            data: [50],
        },
    ],
    fill: {
        colors: ["#25C5F7"],
        type: "gradient",
        gradient: {
            gradientToColors: ["#25C5F7"],
        },
    },
    title: {
        floating: true,
        offsetX: -10,
        offsetY: 5,
        text: "Reach Station",
        style: {
            fontSize: "18px",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 500,
        },
    },
    subtitle: {
        floating: true,
        align: "right",
        offsetY: 0,
        text: "50%",
        style: {
            fontSize: "14px",
        },
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        categories: ["Reach Station"],
    },
    yaxis: {
        max: 100,
    },
    responsive: [
        {
            breakpoint: 767,
            options: {
                title: {
                    style: {
                        fontSize: "16px",
                    },
                },
            },
        },
    ],
}
</script>