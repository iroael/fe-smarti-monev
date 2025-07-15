<template>
    <div id="profit_chart">
        <ClientOnly>
            <apexchart type="line" height="255" :options="chartOptions" :series="series"></apexchart>
        </ClientOnly>
    </div>
</template>
<script lang="ts" setup>
let primary: Ref<string>;
let secondary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
secondary = ref<string>(useCookie('secondary_color').value || '#F94C8E');
    const series = ref([
    {
        name: "Income",
        type: "line",
        data: [60, 80, 30, 60, 30, 90],
    },
    {
        name: "Earnings",
        type: "line",
        data: [55, 65, 55, 80, 40, 65],
    },
    {
        name: "Profit",
        type: "line",
        data: [50, 40, 70, 40, 100, 70],
    },
])

const chartOptions = computed(() => ({
    chart: {
        height: 255,
        type: "line",
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            top: 4,
            left: 0,
            blur: 2,
            colors: [primary.value, "#83BF6E", "#F99B0D"],
            opacity: 0.02,
        },
    },
    grid: {
        show: true,
        borderColor: "var(--chart-border)",
        strokeDashArray: 6,
        position: "back",
    },
    colors: [primary.value, "#83BF6E", "#F99B0D"],
    stroke: {
        width: 3,
        curve: "smooth",
        opacity: 1,
    },
    markers: {
        discrete: [
            {
                seriesIndex: 1,
                dataPointIndex: 3,
                fillColor: "#54BA4A",
                strokeColor: "var(--white)",
                size: 6,
            },
        ],
    },
    xaxis: {
        categories: ["Jan 02", "Jan 05", "Jan 08", "Jan 11", "Jan 14", "Jan 17"],
    },
    yaxis: {
        tickAmount: 5,
    },
    legend: {
        show: false,
    },
    responsive: [
        {
            breakpoint: 651,
            options: {
                chart: {
                    height: 210,
                },
            },
        },
    ],
}))
</script>