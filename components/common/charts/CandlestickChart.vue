<template>
    <apexchart height="350" type="candlestick" :options="chartOptions10" :series="series10"></apexchart>
</template>
<script lang="ts" setup>
import { chartDatas } from "~/core/data/chart-data"
let primary: Ref<string>;
let secondary: Ref<string>;

primary = ref<string>(useCookie('primary_color').value || '#009DB5');
secondary = ref<string>(useCookie('secondary_color').value || '#F94C8E');
const series10 = [
    {
        name: chartDatas[1].name,
        type: chartDatas[1].type,
        data: chartDatas[1].data
    }
]
const chartOptions10 = {
    chart: {
        height: 350,
        type: 'candlestick',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        candlestick: {
            colors: {
                upward: primary.value,
                downward: secondary.value
            }
        }
    },
    title: {
        text: 'CandleStick Chart',
        align: 'left'
    },
    xaxis: {
        type: 'datetime'
    },
    yaxis: {
        tooltip: {
            enabled: true
        }
    },
    colors: ['#000000']
}
</script>