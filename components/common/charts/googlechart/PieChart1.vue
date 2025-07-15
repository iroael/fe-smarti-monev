<template>
    <CommonCard3 title="Pie Chart 1" headerTitle="true" cardBodyClass="p-0 chart-block"
        colClass="col-sm-12 col-xl-6 box-col-6">
        <GChart class="chart-overflow" id="pie-chart1" type="PieChart" :data="pie_chart.chartData_1"
            :options="pie_chart.options_1" />
    </CommonCard3>
    <CommonCard3 title="Pie Chart 2" headerTitle="true" cardBodyClass="p-0 chart-block"
        colClass="col-sm-12 col-xl-6 box-col-6">
        <GChart class="chart-overflow" id="pie-chart3" type="PieChart" :data="pie_chart.chartData_2"
            :options="pie_chart.options_2" />
    </CommonCard3>
</template>
<script lang="ts" setup>
import { GChart } from "vue-google-charts";
let primary: Ref<string>;
let secondary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
secondary = ref<string>(useCookie('secondary_color').value || '#F94C8E');
const pie_chart = {
    chartData_1: [
        ['Task', 'Hours per Day'],
        ['Work', 5],
        ['Eat', 10],
        ['Commute', 15],
        ['Watch TV', 20],
        ['Sleep', 25]

    ],
    chartData_2: [
        ['Task', 'Hours per Day'],
        ['Work', 2],
        ['Eat', 2],
        ['Commute', 11],
        ['Watch TV', 2],
        ['Sleep', 7]
    ],
    options_1: {
        title: 'My Daily Activities',
        width: '100%',
        height: 300,
        colors: ["#f8d62b", "#51bb25", "#25C5F7", secondary.value, primary.value]
    },
    options_2: {
        title: 'My Daily Activities',
        pieHole: 0.4,
        width: '100%',
        height: 300,
        colors: ["#f8d62b", "#25C5F7", "#51bb25", secondary.value, primary.value]
    }
}
</script>