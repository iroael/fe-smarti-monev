<template>
    <ClientOnly>
        <apexchart type="line" height="110" :options="chartOptions" :series="series">
        </apexchart>
    </ClientOnly>
</template>
<script lang="ts" setup>
const series = [
    {
        name: "Male",
        type: "line",
        data: [70, 90, 70, 90, 100],
    },
    {
        name: "Female",
        type: "line",
        data: [90, 40, 100, 50, 40],
    },
]
const chartOptions = {

    chart: {
        height: 110,
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
        width: [2, 2],
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
    labels: ["1", "2", "3", "4", "5"],
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

    yaxis: {
        show: false,
    },

    legend: {
        show: false,
    },

    tooltip: {
        shared: false,
        intersect: false,
    },
    responsive: [
        {
            breakpoint: 1365,
            options: {
                chart: {
                    height: 90,
                },
            },
        },
        {
            breakpoint: 1200,
            options: {
                chart: {
                    height: 135,
                },
            },
        },
        {
            breakpoint: 768,
            options: {
                chart: {
                    height: 125, width: "100%",
                },
            },
        },
    ]
}
</script>