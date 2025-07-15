<template>
    <apexchart type="line" height="450" ref="chart" :options="chartOptions15" :series="series15">
    </apexchart>
</template>
<script lang="ts" setup>
import { chartDatas } from "~/core/data/chart-data"
interface CustomFunction {
    (params: {
        seriesIndex: number;
        dataPointIndex: number;
        w: any;
    }): any;
}
const customFunction1: CustomFunction = ({ seriesIndex, dataPointIndex, w }) => {
    return w.globals.series[seriesIndex][dataPointIndex];
};

const customFunction2: CustomFunction = ({ seriesIndex, dataPointIndex, w }) => {
    const o = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
    const h = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
    const l = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
    const c = w.globals.seriesCandleC[seriesIndex][dataPointIndex];
    return "";
};
const series15 = chartDatas
const chartOptions15 = {
    plotOptions: {
        candlestick: {
            colors: {
                upward: "#009DB5",
                downward: "#F99B0D",
            },
        },
    },
    legend: {
        show: false,
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0.2,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
        },
    },
    chart: {
        height: 450,
        type: "line",
        toolbar: {
            show: false,
        },
    },
    stroke: {
        curve: "smooth",
        width: [1, 1],
    },
    tooltip: {
        shared: true,
        custom: [
            customFunction1, customFunction2
        ],
    },
    xaxis: {
        type: "datetime",
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    grid: {
        strokeDashArray: 3,
        position: "back",
        row: {
            opacity: 0.5,
        },
        column: {
            opacity: 0.5,
        },
    },
    responsive: [
        {
            breakpoint: 576,
            options: {
                chart: {
                    height: 250,
                },
            },
        },
    ],
}

</script>