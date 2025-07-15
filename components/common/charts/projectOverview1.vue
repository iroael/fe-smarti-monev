<template>
    <ClientOnly>
        <apexchart type="line" height="290" :options="chartOptions" :series="series"></apexchart>
    </ClientOnly>
</template>
<script lang="ts" setup>
const series = [
    {
        name: "Earning",
        type: "line",
        data: [120, 250, 70, 330, 140, 230, 90, 280, 40, 150, 350, 150, 350],
    },
    {
        name: "Order",
        type: "line",
        data: [80, 200, 150, 200, 100, 150, 110, 200, 110, 200, 150, 80, 30],
    },
]
const chartOptions = {
    chart: {
        height: 290,
        type: "line",
        stacked: false,
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            color: "#000",
            opacity: 0.08,
        },
    },
    stroke: {
        width: [2, 2, 2],
        curve: "smooth",
    },
    grid: {
        show: true,
        borderColor: "var(--chart-border)",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
            lines: {
                show: true,
            },
        },
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "50%",
        },
    },
    colors: ["#009DB5", "#83BF6E"],
    fill: {
        opacity: 1,
        type: "solid",
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov",],
    xaxis: {
        type: "category",
        tickAmount: 4,
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
    tooltip: {
        shared: false,
        intersect: false,
    },
    responsive: [
        {
            breakpoint: 1200,
            options: {
                chart: { height: 250, },
            },
        },
        {
            breakpoint: 1023,
            options: {
                chart: { height: 260, },
            },
        },
        {
            breakpoint: 1008,
            options: {
                chart: { height: 268, },
            },
        },
        {
            breakpoint: 1007,
            options: {
                chart: { height: 250, },
            },
        },
        {
            breakpoint: 992,
            options: {
                chart: { height: 240, },
            },
        },
    ],
}
</script>