<template>
    <apexchart type="line" height="350" ref="chart" :options="chartOptions17" :series="series17">
    </apexchart>
</template>
<script lang="ts" setup>
var trigoStrength = 3;
let primary: Ref<string>;
let secondary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
secondary = ref<string>(useCookie('secondary_color').value || '#F94C8E');
const series17 = [
    {
        name: "Running",
        data: generateMinuteWiseTimeSeries(
            new Date("12/12/2016 00:20:00").getTime(),
            12,
            { min: 30, max: 110, }
        ),
    },
    {
        name: "Waiting",
        data: generateMinuteWiseTimeSeries(
            new Date("12/12/2016 00:20:00").getTime(),
            12,
            { min: 30, max: 110, }
        ),
    },
]
const chartOptions17 = {
    chart: {
        height: 350,
        type: "line",
        stacked: true,
        animations: {
            enabled: true, easing: "linear", dynamicAnimation: { speed: 1000, },
        },
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "straight",
        width: 5,
    },
    grid: {
        padding: {
            left: 0,
            right: 0,
        },
    },
    fill: {
        opacity: 0.9,
    },
    colors: [primary.value, secondary.value],
    markers: {
        size: 0,
        hover: {
            size: 0,
        },
    },

    xaxis: {
        type: "datetime",
        range: 2700000,
    },
    yaxis: {
        decimalsInFloat: 1,
    },
    title: {
        text: "Processes",
        align: "left",
        style: {
            fontSize: "12px",
        },
    },
    legend: {
        show: true, floating: true, horizontalAlign: "right", onItemClick: { toggleDataSeries: false, }, position: "top", offsetY: -33, offsetX: 60,
    },
    responsive: [
        {
            breakpoint: 1366,
            options: {
                title: {
                    style: { fontSize: "18px", },
                },
            },
        },
        {
            breakpoint: 992,
            options: {
                title: {
                    style: { fontSize: "16px", },
                },
            },
        },
    ],
}
function generateMinuteWiseTimeSeries(baseval: number, count: number, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = baseval;
        var y = (Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) *
            (trigoStrength * 2);
        series.push([x, y]);
        baseval += 300000;
        i++;
    }
    return series;
}
</script>