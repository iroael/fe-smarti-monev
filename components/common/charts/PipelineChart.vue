<template>
    <ClientOnly>
        <apexchart type="donut" height="290" width="290" :options="chartOptions" :series="series"></apexchart>
    </ClientOnly>
</template>
<script lang="ts" setup>
const series = [10, 60, 30]
const chartOptions = {
    labels: ["Store", "Ad", "Search"],
    chart: {
        width: 290,
        height: 290,
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
                        fontSize: "14px",
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
            breakpoint: 1750,
            options: {
                chart: {
                    offsetX: 10,
                },
                legend: {
                    show: false,
                },
            },
        },
        {
            breakpoint: 1800,
            options: {
                chart: {
                    width: 154,
                    height: 154,
                    offsetX: 40,
                },
                legend: {
                    show: false,
                },
            },
        },
    ],
}
</script>