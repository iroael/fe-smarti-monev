<template>
    <apexchart type="radar" height="300" ref="chart" :options="chartOptions18" :series="series18">
    </apexchart>
</template>
<script lang="ts" setup>
let primary: Ref<string>;
let secondary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
secondary = ref<string>(useCookie('secondary_color').value || '#F94C8E');
const series18 = [
    {
        name: "Series 1",
        data: [80, 50, 30, 40, 100, 20],
    },
    {
        name: "Series 2",
        data: [20, 30, 40, 80, 20, 80],
    },
]
const chartOptions18 = {
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            type: "Reflected",
            shadeIntensity: 0.1,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 100],
        },
    },
    colors: [primary.value, secondary.value],
    chart: {
        height: 300,
        type: "radar",
        dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1,
        },
    },

    title: {
        text: "Radar Chart - Multi Series",
    },
    stroke: {
        width: 0,
    },
    markers: {
        size: 0,
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
}
</script>