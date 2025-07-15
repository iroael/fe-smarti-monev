<template>
    <CommonCard3 title="Area Chart 1 " headerTitle="true" cardBodyClass="chart-block"
        colClass="col-sm-12 col-xl-6 box-col-6">
        <GChart class="chart-overflow" id="area-chart1" type="AreaChart" :data="area_chart.chartData_1"
            :options="area_chart.options_1" />
    </CommonCard3>
    <CommonCard3 title="Area Chart 2 " headerTitle="true" cardBodyClass="chart-block"
        colClass="col-sm-12 col-xl-6 box-col-6">
        <GChart class="chart-overflow" id="area-chart2" type="AreaChart" :data="area_chart1.chartData_2"
            :options="area_chart1.options_2" />
    </CommonCard3>
</template>
<script lang="ts" setup>
import { GChart } from "vue-google-charts";
let primary: Ref<string>;
let secondary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
secondary = ref<string>(useCookie('secondary_color').value || '#F94C8E');
const area_chart = {
    chartData_1: [
        ['Year', 'Sales', 'Expenses'],
        ['2013', 1000, 400],
        ['2014', 1170, 460],
        ['2015', 660, 1120],
        ['2016', 1030, 540]

    ],
    options_1: {
        title: 'Company Performance',
        hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 },
        width: '100%',
        height: 400,
        colors: [primary.value, secondary.value]
    },
}
const area_chart1 = {
    chartData_2: [
        ["Year", "Cars", "Trucks", "Drones", "Segways"],
        ["2013", 100, 400, 2000, 400],
        ["2014", 500, 700, 530, 800],
        ["2015", 2000, 1000, 620, 120],
        ["2016", 120, 201, 2501, 540],

    ],
    options_2: {

        title: 'Company Performance',
        hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 },
        width: '100%',
        height: 400,
        colors: [primary.value, secondary.value, "#51bb25", "#f8d62b"]

    },
}
</script>