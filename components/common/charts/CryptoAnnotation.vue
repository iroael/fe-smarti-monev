<template>
    <apexchart type="line" height="400" ref="chart" :options="chartOptions14" :series="series14">
    </apexchart>
</template>
<script lang="ts" setup>
import { monthDataSeries1 } from "~/core/data/chart-data"
let primary: Ref<string>;
let secondary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
secondary = ref<string>(useCookie('secondary_color').value || '#F94C8E');
const series14 = [
    {
        name: "STOCK ABC",
        data: monthDataSeries1[0].prices,
    },
]
const chartOptions14 = {
    chart: {
        height: 400,
        type: "line",
        toolbar: {
            show: false,
        },
    },
    annotations: {
        yaxis: [
            {
                y: 8200,
                y2: 8400,
                borderColor: "#F99B0D",
                fillColor: "#F99B0D",
                opacity: 0.1,
                label: {
                    borderColor: "#F99B0D",
                    offsetX: -30,
                    style: {
                        fontSize: "10px",
                        color: "#fff",
                        background: "#F99B0D",
                    },
                    text: "Y-axis range",
                },
            },
        ],
        xaxis: [
            {
                x: new Date("15 Nov 2017").getTime(),
                strokeDashArray: 0,
                borderColor: primary.value,
                label: {
                    borderColor: primary.value,
                    offsetY: 20,
                    style: {
                        color: "#fff",
                        background: primary.value,
                    },
                    text: "Anno Test",
                },
            },
            {
                x: new Date("17 Nov 2017").getTime(),
                x2: new Date("18 Nov 2017").getTime(),
                fillColor: "#83BF6E",
                opacity: 0.1,
                label: {
                    borderColor: "##83BF6E",
                    style: {
                        fontSize: "10px",
                        color: "#fff",
                        background: "#83BF6E",
                    },
                    offsetY: 20,
                    text: "X-axis range",
                },
            },
        ],
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 3,
        curve: "smooth",
    },
    grid: {
        padding: {
            right: 30,
            left: 20,
        },
    },
    title: {
        text: "Line with Annotations",
        align: "left",
        style: {
            fontSize: "18px",
            fontFamily: "Rubik, sans-serif",
            fontWeight: 500,
        },
    },
    colors: [secondary.value],
    labels: monthDataSeries1[0].dates,
    xaxis: {
        type: "datetime",
    },
    responsive: [
        {
            breakpoint: 576,
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