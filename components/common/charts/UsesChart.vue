<template>
    <apexchart type="bubble" height="320" ref="chart" :options="chartOptions19" :series="series19">
    </apexchart>
</template>
<script lang="ts" setup>
let primary: Ref<string>;
let secondary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
secondary = ref<string>(useCookie('secondary_color').value || '#F94C8E');
const series19 = [
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
const chartOptions19 = {
    chart: {
        toolbar: {
            show: false,
        },
        height: 320,
        type: "bubble",
    },
    dataLabels: {
        enabled: false,
    },

    fill: {
        type: "gradient",
        gradient: {
            shade: "dark", type: "horizontal", shadeIntensity: 0.4, inverseColors: false, opacityFrom: 1, opacityTo: 0.7, stops: [0, 100],
        },
    },
    colors: [primary.value, secondary.value, "#F99B0D", "#83BF6E",],
    title: {
        text: "Simple Bubble Chart",
    },
    xaxis: {
        tickAmount: 12,
        type: "category",
    },
    yaxis: {
        max: 70,
    },
}
function generateData(baseval: number, count: number, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
        var y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([x, y, z]);
        baseval += 86400000;
        i++;
    }
    return series;
}
</script>