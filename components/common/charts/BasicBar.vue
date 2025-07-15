<template>
    <apexchart type="bar" height="350" ref="chart" :options="chartOptions2" :series="series2">
    </apexchart>
</template>
<script lang="ts" setup>
let primary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
const series2 = [
    {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }
]
const chartOptions2 = {
    chart: {
        height: 350,
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
    },
    colors: [primary.value]
}
</script>