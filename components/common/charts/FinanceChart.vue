<template>
    <apexchart type="line" height="350" ref="chart" :options="chartOptions16" :series="series16">
    </apexchart>
</template>
<script lang="ts" setup>
var trigoStrength = 3;
let primary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
const series16 = [
    {
        name: "Load Average",
        type: "column",
        data: generateMinuteWiseTimeSeries(
            new Date("12/12/2016 00:20:00").getTime(),
            12,
            {
                min: 10, max: 110,
            }
        ),
    },
    {
        name: "Social Media",
        type: "line",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
    },
]
const chartOptions16 = {
    chart: {
        height: 350,
        type: "line",

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
        width: 0,
    },

    title: {
        text: "Average",
        align: "left",
        style: {
            fontSize: "12px",
        },
    },
    subtitle: {
        text: "17%",
        floating: true,
        align: "right",
        offsetY: 0,
        style: {
            fontSize: "20px",
            fontWeight: 500,
        },
    },
    fill: {
        colors: [primary.value],
        type: "gradient",
        gradient: {
            shade: "light", type: "vertical", shadeIntensity: 0.4, inverseColors: false, opacityFrom: 1, opacityTo: 0.8, stops: [0, 100],
        },
    },
    xaxis: {
        type: "datetime",
        range: 2700000,
    },
    yaxis: {
        decimalsInFloat: 1,
    },
    legend: {
        show: false,
    },
    responsive: [
        {
            breakpoint: 1366,
            options: {
                subtitle: {
                    style: { fontSize: "18px", },
                },
            },
        },
        {
            breakpoint: 992,
            options: {
                subtitle: {
                    style: { fontSize: "16px" },
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