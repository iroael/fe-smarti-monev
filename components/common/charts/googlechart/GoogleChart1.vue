<template>
    <CommonCard3 title="Gantt Chart" headerTitle="true" cardBodyClass="chart-block" colClass="col-sm-12 box-col-12">
        <GChart class="chart-overflow" id="gantt_chart" :type="chartType" :data="chartData" :options="chartOptions"
            :settings="settings" />
    </CommonCard3>
    <CommonCard3 title="Line Chart" headerTitle="true" cardBodyClass=" chart-block" colClass="col-sm-12 box-col-12">
        <GChart class="chart-overflow" id="line-chart" type="LineChart" :data="line_chart.chartData_1"
            :options="line_chart.options_1" />
    </CommonCard3>
</template>
<script lang="ts" setup>
import { GChart } from "vue-google-charts";
let primary: Ref<string>;
let secondary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
secondary = ref<string>(useCookie('secondary_color').value || '#F94C8E');
const columns = [
    { type: 'string', label: 'Task ID' },
    { type: 'string', label: 'Task Name' },
    { type: 'date', label: 'Start Date' },
    { type: 'date', label: 'End Date' },
    { type: 'number', label: 'Duration' },
    { type: 'number', label: 'Percent Complete' },
    { type: 'string', label: 'Dependencies' },
];
const rows = [
    ['Research', 'Find sources', new Date(2015, 0, 1), new Date(2015, 0, 5), null, 100, null,],
    ['Write', 'Write paper', null, new Date(2015, 0, 9), daysToMilliseconds(3), 25, 'Research,Outline',],
    ['Cite', 'Create bibliography', null, new Date(2015, 0, 7), daysToMilliseconds(1), 20, 'Research'],
    ['Complete', 'Hand in paper', null, new Date(2015, 0, 10), daysToMilliseconds(1), 0, 'Cite,Write',],
    ['Outline', 'Outline paper', null, new Date(2015, 0, 6), daysToMilliseconds(1), 100, 'Research',],
];
const chartType = 'Gantt';
const chartData = [columns, ...rows];
const chartOptions = {
    height: 275,
    gantt: {
        criticalPathEnabled: false,
        arrow: {
            angle: 100,
            width: 5,
            color: '#51bb25',
            radius: 0
        },

        palette: [
            {
                "color": primary.value,
                "dark": secondary.value,
                "light": "#047afb"
            }
        ]

    }
}
const settings = {
    packages: ['gantt'],
}
const line_chart = {
    chartData_1: [
        ['Month', 'Guardians of the Galaxy', 'The Avengers', 'Transformers: Age of Extinction'],
        [1, 37.8, 80.8, 41.8],
        [2, 30.9, 10.5, 32.4],
        [3, 40.4, 57, 25.7],
        [4, 11.7, 18.8, 10.5],
        [5, 20, 17.6, 10.4],
        [6, 8.8, 13.6, 7.7],
        [7, 7.6, 12.3, 9.6],
        [8, 12.3, 29.2, 10.6],
        [9, 16.9, 42.9, 14.8],
        [10, 12.8, 30.9, 11.6],
        [11, 5.3, 7.9, 4.7],
        [12, 6.6, 8.4, 5.2],

    ],
    options_1: {
        chart: {
            title: 'Box Office Earnings in First Two Weeks of Opening',
            subtitle: 'in millions of dollars (USD)'
        },
        colors: [primary.value, secondary.value, "#51bb25"],
        height: 500,
        width: '100%',

    },
}
function daysToMilliseconds(days: number) {
    return days * 24 * 60 * 60 * 1000;
}
</script>