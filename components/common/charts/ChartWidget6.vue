<template>
    <apexchart type="area" height="320" ref="chart" :options="chartOptions11" :series="series11">
    </apexchart>
</template>
<script lang="ts" setup>
let primary: Ref<string>;
let secondary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
secondary = ref<string>(useCookie('secondary_color').value || '#F94C8E');
const series11 = [
    {
        name: "TEAM A",
        data: [50, 120, 90, 100, 70, 95, 40, 55, 30, 0],
    },
    {
        name: "TEAM B",
        data: [35, 60, 40, 90, 70, 110, 90, 120, 60, 0],
    },
]
const chartOptions11 = {
    chart: {
        height: 320,
        type: "area",
        toolbar: {
            show: false,
        },
    },
    stroke: {
        curve: "smooth",
        width: 0,
    },
    fill: {
        colors: [primary.value, secondary.value],
        type: "gradient",
        gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 0.9,
            opacityTo: 0.8,
            stops: [0, 100],
        },
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        borderColor: "rgba(196,196,196, 0.3)",
        padding: {
            top: 0,
            right: -120,
            bottom: 10,
        },
    },
    colors: [primary.value, secondary.value],
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct",],
    markers: {
        size: 0,
    },
    xaxis: {
        axisTicks: {
            show: false,
        },
        axisBorder: {
            color: "rgba(196,196,196, 0.3)",
        },
    },
    yaxis: [
        {
            title: {
                text: "Dollars in thounand",
            },
        },
    ],
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y: number) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                }
                return y;
            },
        },
    },
}
</script>