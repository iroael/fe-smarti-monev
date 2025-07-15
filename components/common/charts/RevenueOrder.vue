<template>
    <ClientOnly>
        <apexchart type="line" height="225" :options="chartOptions" :series="series"></apexchart>
    </ClientOnly>
</template>
<script lang="ts" setup>
const series = [
    {
        name: "Earning",
        type: "line",
        data: [330, 60, 370, 240, 250, 70, 280, 60, 185, 60],
    },
    {
        name: "Order",
        type: "line",
        data: [70, 330, 60, 200, 100, 250, 100, 350, 110, 300],
    },
]
const chartOptions = {
    chart: {
        height: 225,
        type: "line",
        stacked: false,
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true, top: 2, left: 0, blur: 4, color: "#000", opacity: 0.08,
        },
    },
    stroke: {
        width: [2, 2, 2],
        curve: "smooth",
    },
    grid: {
        show: false,
        padding: {
            top: 0, right: 0, bottom: 0, left: 0,
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "20%",
        },
    },
    colors: ["#009DB5", "#83BF6E"],
    fill: {
        opacity: 1,
        type: "solid",
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct",],
    xaxis: {
        type: "category",
        tickAmount: 8,
        tickPlacement: "between",
        tooltip: {
            enabled: false,
        },
        axisBorder: {
            color: "var(--chart-border)",
        },
        axisTicks: {
            show: false,
        },
    },
    markers: {
        discrete: [
            {
                seriesIndex: 0, dataPointIndex: 3, fillColor: "#009DB5", strokeColor: "var(--white)", size: 6, sizeOffset: 2,
            },
        ],
        hover: {
            size: 6,
            sizeOffset: 0,
        },
    },
    legend: {
        show: false,
    },
    yaxis: {
        min: 0,
        tickAmount: 4,
        tickPlacement: "between",
        labels: {
            formatter: function (val: string) {
                return val + "K";
            },
            offsetX: -5,
        },
    },
    
    responsive: [
        {
            breakpoint: 1365,
            options: {
                chart: {
                    height: 140,
                },
            },
        },
        {
            breakpoint: 1200,
            options: {
                chart: { height: 225, },
            },
        },
        {
            breakpoint: 781,
            options: {
                chart: { height: 235, },
            },
        },
        {
            breakpoint: 400,
            options: {
                chart: { height: 170, },
            },
        },
    ],
}
</script>