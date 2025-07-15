<template>
    <CommonCard3 title="Pie Chart 3" headerTitle="true" cardBodyClass="p-0 chart-block"
        colClass="col-sm-12 col-xl-6 box-col-6">
        <GChart class="chart-overflow" id="pie-chart4" type="PieChart" :data="pie_chart1.chartData_3"
            :options="pie_chart1.options_3" />
    </CommonCard3>
    <CommonCard3 title="Pie Chart 4" headerTitle="true" cardBodyClass="p-0 chart-block"
        colClass="col-sm-12 col-xl-6 box-col-6">
        <GChart class="chart-overflow" id="pie-chart2" type="PieChart" :data="pie_chart2.chartData_3"
            :options="pie_chart2.options_3" />
    </CommonCard3>
</template>
<script lang="ts" setup>
import { GChart } from "vue-google-charts";
let primary: Ref<string>;
let secondary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
secondary = ref<string>(useCookie('secondary_color').value || '#F94C8E');
const pie_chart1 = {
    chartData_3: [
        ['Language', 'Speakers (in millions)'],
        ['Assamese', 13],
        ['Bengali', 83],
        ['Bodo', 1.4],
        ['Dogri', 2.3],
        ['Gujarati', 46],
        ['Hindi', 300],
        ['Kannada', 38],
        ['Kashmiri', 5.5],
        ['Konkani', 5],
        ['Maithili', 20],
        ['Malayalam', 33],
        ['Manipuri', 1.5],
        ['Marathi', 72],
        ['Nepali', 2.9],
        ['Oriya', 33],
        ['Punjabi', 29],
        ['Sanskrit', 0.01],
        ['Santhali', 6.5],
        ['Sindhi', 2.5],
        ['Tamil', 61],
        ['Telugu', 74],
        ['Urdu', 52]

    ],
    options_3: {
        title: 'Indian Language Use',
        legend: 'none',
        width: '100%',
        height: 300,
        pieSliceText: 'label',
        slices: {
            4: { offset: 0.2 },
            12: { offset: 0.3 },
            14: { offset: 0.4 },
            15: { offset: 0.5 },
        },
        colors: ["#dc3545", primary.value, secondary.value, "#51bb25", "#25C5F7", "#f8d62b", "#dc3545", primary.value, "#f8d62b", "#51bb25", primary.value, secondary.value, "#51bb25", primary.value, "#25C5F7", "#f8d62b", primary.value, primary.value, "#25C5F7", secondary.value, primary.value, "#51bb25"]
    },

}
const pie_chart2 = {
    chartData_3: [
        ['Task', 'Hours per Day'],
        ['Work', 5],
        ['Eat', 10],
        ['Commute', 15],
        ['Watch TV', 20],
        ['Sleep', 25]
    ],
    options_3: {
        title: 'My Daily Activities',
        is3D: true,
        width: '100%',
        height: 300,
        colors: ["#f8d62b", "#25C5F7", "#51bb25", secondary.value, primary.value]
    },

}
</script>