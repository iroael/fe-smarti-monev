<template>
    <ClientOnly>
        <apexchart type="bar" height="200" :options="chartOptions" :series="series"></apexchart>
    </ClientOnly>
</template>
<script lang="ts" setup>
let primary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
const series = [
    {
        name: "transaction",
        data: [1.5, 2.1, 2.9, 3.8, 3.2, 2.1],
    },
    {
        name: "traffic",
        data: [-1.4, -2.2, -2.85, -3.7, -3, -2.2],
    },
]
const chartOptions = {
    chart: {
        type: "bar",
        height: 200,
        stacked: true,
        toolbar: {
            show: false,
        },
    },
    colors: ["#83BF6E", primary.value],
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: "40%",
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 1,
        colors: ["#fff"],
    },

    grid: {
        borderColor: "var(--chart-border)",
        strokeDashArray: 2,
        xaxis: {
            lines: {
                show: true,
            },
        },
        yaxis: {
            lines: {
                show: false,
            },
        },
    },
    yaxis: {
        min: -5,
        max: 5,
        labels: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
    },
    xaxis: {
        categories: ["85+", "80-84", "75-79", "70-74", "65-69", "60-64"],
        position: "top",
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
    },
    legend: {
        show: false,
    },

    responsive: [
        {
            breakpoint: 1441,
            options: {
                chart: {
                    height: 180,
                },
            },
        },
    ],
}
</script>