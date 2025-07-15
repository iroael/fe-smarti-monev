<template>
    <CommonCard3 title="Column Chart 1" headerTitle="true" cardBodyClass="chart-block"
        colClass="col-sm-12 col-xl-6 box-col-6">
        <GChart class="chart-overflow" id="column-chart1" type="ColumnChart" :settings="{ packages: ['bar'] }"
            :data="area_chart.chartData_1" :options="verticalChartOptions"
            :createChart="(el, google) => new google.charts.Bar(el)" @ready="onChartReady" />
    </CommonCard3>

    <CommonCard3 title="Column Chart 2" headerTitle="true" cardBodyClass="chart-block"
        colClass="col-sm-12 col-xl-6 box-col-6">
        <GChart class="chart-overflow" id="column-chart2" type="ColumnChart" :settings="{ packages: ['bar'] }"
            :data="area_chart.chartData_1" :options="horizontalChartOptions"
            :createChart="(el, google) => new google.charts.Bar(el)" @ready="onChartReady" />
    </CommonCard3>
</template>
<script lang="ts" setup>
import { GChart } from "vue-google-charts";
let primary: Ref<string>;
let secondary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
secondary = ref<string>(useCookie('secondary_color').value || '#e24175');
const chartsLib = ref(null)
const area_chart = {
    chartData_1: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1e3, 400, 250],
        ['2015', 1170, 460, 300],
        ['2016', 660, 1120, 400],
        ['2017', 1030, 540, 450]
    ],
}
const verticalChartOptions = computed(() => {
    if (!chartsLib.value) return null;
    return chartsLib.value.charts.Bar.convertOptions({
        chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        },
        bars: 'vertical',
        vAxis: {
            format: 'decimal'
        },
        height: 400,
        width: '100%',
        colors: [primary.value, secondary.value, "#61ae41"]
    });
})
const horizontalChartOptions = computed(() => {
    if (!chartsLib.value) return null;
    return chartsLib.value.charts.Bar.convertOptions({
        chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        },
        bars: 'horizontal',
        vAxis: {
            format: 'decimal'
        },
        height: 400,
        width: '100%',
        colors: [primary.value, secondary.value, "#61ae41"]
    });
})
function onChartReady(chart: any, google: any) {
    chartsLib.value = google;
}
</script>