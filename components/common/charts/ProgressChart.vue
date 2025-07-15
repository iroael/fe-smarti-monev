<template>
    <apexchart type="bar" height="70" ref="chart" :options="chartOptions6" :series="series6">
    </apexchart>
</template>
<script lang="ts" setup>
let primary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
const series6 = [
    {
        name: "Process 1",
        data: [44],
    },
]
const chartOptions6 = {
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
                backgroundBarColors: [primary.value],
                backgroundBarOpacity: 0.2,
            },
        },
    },
    colors: [primary.value],
    stroke: {
        width: 0,
    },
    fill: {
        colors: [primary.value],
        type: "gradient",
        gradient: {
            gradientToColors: [primary.value],
        },
    },
    title: {
        floating: true,
        offsetX: -10,
        offsetY: 5,
        text: "Packed",
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
        text: "44%",
        style: {
            fontSize: "14px",
        },
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        categories: ["Packed"],
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