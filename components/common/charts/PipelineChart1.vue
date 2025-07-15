<template>
    <apexchart type="donut" height="270" width="270" ref="chart" :options="chartOptions13" :series="series13">
    </apexchart>
</template>
<script lang="ts" setup>
const series13 = [10, 60, 30]
const chartOptions13 = {
    labels: ["Store", "Ad", "Search"],
    chart: {
        width: 270,
        height: 270,
        type: "donut",
    },
    plotOptions: {
        pie: {
            startAngle: -90,
            endAngle: 270,
            donut: {
                labels: {
                    show: true,
                    name: {
                        offsetY: 4,
                    },
                    total: {
                        show: true,
                        fontSize: "12px",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        label: "88%",
                        color: "#000",
                    },
                },
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    colors: ["#f99b0d", "#009DB5", "#7fbe71"],
    fill: {
        type: "gradient",
    },
    legend: {
        formatter: function (val: number, opts: any) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
    },
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 200,
                },
                legend: {
                    position: "bottom",
                },
            },
        },
        {
            breakpoint: 680,
            options: {
                chart: {
                    width: "100%",
                    height: 155,
                },
                legend: {
                    show: false,
                },
            },
        },
        {
            breakpoint: 735,
            options: {
                chart: {
                    width: 165,
                    height: 165,
                },
                legend: {
                    show: false,
                },
            },
        },
        {
            breakpoint: 1263,
            options: {
                chart: {
                    offsetX: 10,
                    width: 150,
                    height: 150,
                },
                legend: {
                    show: false,
                },
            },
        },
        {
            breakpoint: 1466,
            options: {
                chart: {
                    offsetX: 10,
                    width: 140,
                    height: 140,
                },
                legend: {
                    show: false,
                },
            },
        },
    ],
}
</script>