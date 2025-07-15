<template>
    <CommonCard3 title="Combo Chart" headerTitle="true" cardBodyClass=" chart-block" colClass="col-sm-12 box-col-12">
        <GChart class="chart-overflow" id="combo-chart" type="ComboChart" :data="combo_chart.chartData_1"
            :options="combo_chart.options_1" />
    </CommonCard3>
    <CommonCard3 title="bar-chart2" headerTitle="true" cardBodyClass=" chart-block"
        colClass="col-sm-12 col-xl-6 box-col-12">
        <GChart id="bar-chart2" type="BarChart" :data="bar_chart.chartData_1" :options="bar_chart.options_1" />
    </CommonCard3>
</template>
<script lang="ts" setup>
import { GChart } from "vue-google-charts";
let primary: Ref<string>;
let secondary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
secondary = ref<string>(useCookie('secondary_color').value || '#F94C8E');
const combo_chart = {
    chartData_1: [
        ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
        ['2004/05', 165, 938, 522, 998, 450, 614.6],
        ['2005/06', 135, 1120, 599, 1268, 288, 682],
        ['2006/07', 157, 1167, 587, 807, 397, 623],
        ['2007/08', 139, 1110, 615, 968, 215, 609.4],
        ['2008/09', 136, 691, 629, 1026, 366, 569.6]
    ],
    options_1: {
        title: 'Monthly Coffee Production by Country',
        vAxis: { title: 'Cups' },
        hAxis: { title: 'Month' },
        seriesType: 'bars',
        series: { 5: { type: 'line' } },
        height: 500,
        fullWidth: true,
        colors: [primary.value, secondary.value, "#51bb25", "#25C5F7", "#f8d62b"]
    }
}
const bar_chart = {
    chartData_1: [
        ["Element", "Density", {
            role: "style"
        }],
        ["Copper", 10, "#25C5F7"],
        ["Silver", 12, "#f8d62b"],
        ["Gold", 14, "#e24175"],
        ["Platinum", 16, "color: #009DB5"],
    ],
    options_1: {
        title: 'Density of Precious Metals, in g/cm^3',
        width: '100%',
        height: 400,
        bar: { groupWidth: '95%' },
        legend: { position: 'none' },
    }
}
</script>