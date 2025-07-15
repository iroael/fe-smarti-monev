<template>
    <apexchart type="bar" height="70" ref="chart" :options="chartOptions9" :series="series9">
    </apexchart>
</template>
<script lang="ts" setup>
const series9 = [
    {
        name: "Out for delivery",
        data: [60],
    },
]
const chartOptions9 = {
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
                backgroundBarColors: ["#F99B0D"],
                backgroundBarOpacity: 0.2,
                backgroundBarRadius: 10,
            },
        },
    },
    colors: ["#F99B0D"],
    stroke: {
        width: 0,
    },

    fill: {
        colors: ["#F99B0D"],
        type: "gradient",
        gradient: {
            gradientToColors: ["#F99B0D"],
        },
    },
    title: {
        floating: true,
        offsetX: -10,
        offsetY: 5,
        text: "Out for delivery",
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
        text: "60%",
        style: {
            fontSize: "14px",
        },
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        categories: ["Out for delivery"],
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