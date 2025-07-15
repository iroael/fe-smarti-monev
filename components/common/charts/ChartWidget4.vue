<template>
    <apexchart type="bar" height="380" ref="chart" :options="chartOptions" :series="series">
    </apexchart>
</template>
<script lang="ts" setup>
let primary: Ref<string>;
let secondary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
secondary = ref<string>(useCookie('secondary_color').value || '#F94C8E');
const series = [
    {
        name: "Profit",
        data: [100, 50, 25, 50, 30, 50, 70],
    },
    {
        name: "Revenue",
        data: [70, 20, 55, 45, 35, 110, 85],
    },
    {
        name: "Cash Flow",
        data: [85, 55, 100, 35, 90, 60, 80],
    },
]
const chartOptions = {
    chart: {
        type: "bar",
        height: 380,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "30%",
            endingShape: "rounded",
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 1,
        colors: ["transparent"],
        curve: "smooth",
        lineCap: "butt",
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        floating: false,
        axisTicks: {
            show: false,
        },
        axisBorder: {
            color: "#C4C4C4",
        },
    },
    yaxis: {
        title: {
            text: "Dollars in thounand",
            style: {
                fontSize: "14px",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 500,
            },
        },
    },
    colors: [secondary.value, "#83BF6E", primary.value],
    fill: {
        type: "gradient",
        gradient: {
            shade: "light", type: "vertical", shadeIntensity: 0.1, inverseColors: false, opacityFrom: 1, opacityTo: 0.9, stops: [0, 100],
        },
    },
    tooltip: {
        y: {
            formatter: function (val: string) {
                return "$ " + val + " thousands";
            },
        },
    },
    responsive: [
        {
            breakpoint: 576,
            options: {
                chart: {
                    height: 200,
                },
            },
        },
    ],
}
</script>