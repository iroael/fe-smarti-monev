<template>
    <apexchart type="bubble" height="350" ref="chart" :options="chartOptions4" :series="series4"></apexchart>
</template>
<script lang="ts" setup>
let primary: Ref<string>;
let secondary: Ref<string>;

primary = ref<string>(useCookie('primary_color').value || '#009DB5');
secondary = ref<string>(useCookie('secondary_color').value || '#F94C8E');
const series4 = [
    {
        name: "Bubble1",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60,
        }),
    },
    {
        name: "Bubble2",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60,
        }),
    },
    {
        name: "Bubble3",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60,
        }),
    },
    {
        name: "Bubble4",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60,
        }),
    },
]
const chartOptions4 = {
    chart: {
        height: 350,
        type: "bubble",
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },

    fill: {
        type: "gradient",
    },
    title: {
        text: "3D Bubble Chart",
    },
    xaxis: {
        tickAmount: 12,
        type: "datetime",

        labels: {
            rotate: 0,
        },
    },
    yaxis: {
        max: 70,
    },
    theme: {
        palette: "palette2",
    },
    stroke: {
        width: 0,
    },
    colors: [primary.value, secondary.value, "#51bb25", "#f8d62b",],
}
function generateData(baseval: number, count: number, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
        series.push([baseval, y, z]);
        baseval += 86400000;
        i++;
    }
    return series;
}
</script>