<template>
    <ClientOnly>
        <apexchart type="bar" height="180" :options="chartOptions" :series="series">
        </apexchart>
    </ClientOnly>
</template>
<script lang="ts" setup>
const series = [
    {
        name: "Revenue",
        data: [
            30, 40, 18, 25, 18, 10, 20, 35, 22, 40, 30, 38, 20, 35, 11, 28, 40,
            11, 28, 40, 11, 28, 40, 11, 28, 40, 11, 11, 28, 40, 11, 28, 40, 11,
            28, 40, 11,
        ],
    },
]
const chartOptions = {
    chart: {
        type: "bar",
        height: 180,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "55%",
        },
    },
    colors: ["var(--chart-dashed-border)"],
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
    },
    xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct",
        ],
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    fill: {
        opacity: 0.7,
    },
    tooltip: {
        enabled: false,
    },
    states: {
        normal: {
            filter: {
                type: "none",
            },
        },
        hover: {
            filter: {
                type: "none",
            },
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: "none",
            },
        },
    },
    responsive: [
        {
            breakpoint: 405,
            options: {
                chart: {
                    height: 150,
                },
            },
        },
    ],
}
</script>