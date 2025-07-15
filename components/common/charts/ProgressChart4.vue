<template>
    <apexchart type="bar" height="70" ref="chart" :options="chartOptions10" :series="series10">
    </apexchart>
</template>
<script lang="ts" setup>
const series10 = [
    {
        name: "Delivered",
        data: [74],
    },
]
const chartOptions10 = {
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
                backgroundBarColors: ["#83BF6E"],
                backgroundBarOpacity: 0.2,
                backgroundBarRadius: 10,
            },
        },
    },
    colors: ["#83BF6E"],
    stroke: {
        width: 0,
    },

    fill: {
        colors: ["#83BF6E"],
        type: "gradient",
        gradient: {
            gradientToColors: ["#83BF6E"],
        },
    },
    title: {
        floating: true,
        offsetX: -10,
        offsetY: 5,
        text: "Delivered",
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
        text: "74%",
        style: {
            fontSize: "14px",
        },
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        categories: ["Delivered"],
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