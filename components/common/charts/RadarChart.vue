<template>
    <ClientOnly>
        <apexchart height="350" type="radar" :options="chartOptions11" :series="series11"></apexchart>
    </ClientOnly>
</template>
<script lang="ts" setup>
const series11 = [
    {
        name: 'Series 1',
        data: [20, 100, 40, 30, 50, 80, 33],
    },
]
const chartOptions11 = {
    chart: {
        height: 350,
        type: 'radar',
        toolbar: {
            show: false
        }
    },
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    plotOptions: {
        radar: {
            size: 140,
            polygons: {
                strokeColor: '#e9e9e9',
                fill: {
                    colors: ['#f8f8f8', '#fff']
                }
            }
        }
    },
    title: {
        text: 'Radar with Polygon Fill'
    },
    colors: ['#FF4560'],
    markers: {
        size: 4,
        colors: ['#fff'],
        strokeColor: '#FF4560',
        strokeWidth: 2,
    },
    tooltip: {
        y: {
            formatter: function (val: number) {
                return val;
            },
        },
    },
    yaxis: {
        tickAmount: 7,
        labels: {
            formatter: function (val: number, i: number) {
                if (i % 2 === 0) {
                    return val;
                } else {
                    return "";
                }
            },
        },
    },
}
</script>