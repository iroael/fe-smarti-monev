<template>
    <div class="col-xl-4 col-md-12 box-col-12">
        <div class="card overflow-hidden">
            <div class="chart-widget-top">
                <div class="row card-body pb-0 m-0">
                    <div class="col-xl-9 col-lg-8 col-9 p-0">
                        <h5 class="mb-2">Total Product</h5>
                        <h2>93M</h2><span>Compare to last month</span>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-3 text-end p-0">
                        <h5 class="txt-success">+65%</h5>
                    </div>
                </div>
                <div id="chart-widget3">
                    <div class="flot-chart-placeholder" id="chart-widget-top-third">
                        <apexchart type="area" height="200" ref="chart" :options="chartOptions3" :series="series3">
                        </apexchart>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const series3 = [
    {
        data: [70, 60, 82, 80, 60, 90, 70, 120, 50, 60, 0],
    },
]
const chartOptions3 = {
    chart: {
        toolbar: {
            show: false,
        },
        height: 200,
        type: "area",
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 3,
        curve: "smooth",
    },
    xaxis: {
        show: false,
        type: "datetime",
        categories: [
            "2018-09-19T00:00:00",
            "2018-09-19T01:30:00",
            "2018-09-19T02:30:00",
            "2018-09-19T03:30:00",
            "2018-09-19T04:30:00",
            "2018-09-19T05:30:00",
            "2018-09-19T06:30:00",
            "2018-09-19T07:30:00",
            "2018-09-19T08:30:00",
            "2018-09-19T09:30:00",
            "2018-09-19T10:30:00",
        ],
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
    grid: {
        show: false,
        padding: {
            left: -10,
            top: -25,
            right: -60,
            bottom: -40,
        },
    },
    fill: {
        opacity: 0.2,
    },
    colors: ["#83BF6E"],

    tooltip: {
        x: {
            format: "dd/MM/yy HH:mm",
        },
    },
    responsive: [
        {
            breakpoint: 576,
            options: {
                chart: {
                    height: 100,
                },
            },
        },
    ],
}
</script>