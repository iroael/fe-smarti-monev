<template>
    <apexchart type="bar" height="70" ref="chart" :options="chartOptions7" :series="series7">
    </apexchart>
</template>
<script lang="ts" setup>
let secondary: Ref<string>;
secondary = ref<string>(useCookie('secondary_color').value || '#F94C8E');
const series7 = [
    {
        name: "Dispatched",
        data: [40],
    },
]
const chartOptions7 = {
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
                backgroundBarColors: [secondary.value],
                backgroundBarOpacity: 0.2,
                backgroundBarRadius: 10,
            },
        },
    },
    colors: [secondary],
    stroke: {
        width: 0,
    },

    title: {
        floating: true,
        offsetX: -10,
        offsetY: 5,
        text: "Dispatched",
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
        categories: ["Process 2"],
    },
    yaxis: {
        max: 100,
    },
    fill: {
        colors: [secondary.value],
        type: "gradient",
        gradient: {
            inverseColors: false,
            gradientToColors: [secondary.value],
        },
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