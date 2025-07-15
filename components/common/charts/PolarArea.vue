<template>
    <ClientOnly>
        <apexchart type="polarArea" height="250" :options="chartOptions" :series="series"></apexchart>
    </ClientOnly>
</template>
<script lang="ts" setup>
const series = [14, 23, 21, 19, 17, 14, 12, 10]
const chartOptions = {
    chart: {
        type: "polarArea",
        height: 250,
    },
    stroke: {
        colors: ["#fff"],
    },
    colors: ["#009DB5", "#F99B0D", "#83BF6E"],
    fill: {
        opacity: 0.8,
    },
    legend: {
        show: false,
    },
}
</script>