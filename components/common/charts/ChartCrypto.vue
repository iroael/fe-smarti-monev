<template>
    <apexchart type="area" height="400" ref="chart" :options="chartOptions13" :series="series13">
    </apexchart>
</template>
<script lang="ts" setup>
let primary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
const series13 = [
    {
        data: [
            20, 120, 15, 100, 120, 60, 150, 70, 100, 80, 105, 20, 70, 60, 10, 12,
            10, 130, 60, 80, 40, 140, 110, 150, 30, 75, 20, 45, 15, 130, 10, 30,
            15, 110, 65, 130, 0,
        ],
    },
]
const chartOptions13 = {
    chart: {
        toolbar: {
            show: false,
        },
        height: 400,
        type: "area",
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 3,
        curve: "smooth",
    },
    xaxis: {
        categories: ["Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        ],
        tickAmount: 5,
        tickPlacement: "between",
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
    },
    grid: {
        borderColor: "rgba(196,196,196, 0.3)",
        padding: {
            top: -20,
            right: -16,
            bottom: 0,
        },
    },
    fill: {
        opacity: 0.2,
    },
    colors: [primary.value],

    tooltip: {
        x: {
            format: "dd/MM/yy HH:mm",
        },
    },
    responsive: [
        {
            breakpoint: 576,
            options: {
                chart: {
                    height: 200,
                },
            },
        },
    ],
}
</script>