<template>
    <apexchart type="area" height="350" ref="chart" :options="chartOptions" :series="series">
    </apexchart>
</template>
<script lang="ts" setup>
import { monthDataSeries } from "~/core/data/chart-data"
let primary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
const series = [
    {
        name: "STOCK ABC",
        data: monthDataSeries[0].prices,
    },
]
const chartOptions = {
    chart: {
        height: 350,
        type: "area",
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "straight",
    },
    title: {
        text: "Fundamental Analysis of Stocks",
        align: "left",
    },
    subtitle: {
        text: "Price Movements",
        align: "left",
    },
    labels: monthDataSeries[0].dates,
    xaxis: {
        type: "datetime",
    },
    yaxis: {
        opposite: true,
    },
    legend: {
        horizontalAlign: "left",
    },
    colors: [primary.value],
}
</script>