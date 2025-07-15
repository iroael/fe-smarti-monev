<template>
    <apexchart type="radialBar" height="375" ref="chart" :options="chartOptions5" :series="series5">
    </apexchart>
</template>
<script lang="ts" setup>
let primary: Ref<string>;
let secondary: Ref<string>;
primary = ref<string>(useCookie('primary_color').value || '#009DB5');
secondary = ref<string>(useCookie('secondary_color').value || '#F94C8E');
const series5 = [90, 63, 50]
const chartOptions5 = {
    chart: {
        type: "radialBar", height: 375, offsetY: -30, offsetX: 20,
    },
    plotOptions: {
        radialBar: {
            size: undefined,
            inverseOrder: false,
            hollow: {
                margin: 10,
                size: "30%",
                background: "transparent",
            },
            track: {
                show: true, background: "#f2f2f2", strokeWidth: "10%", opacity: 1, margin: 3,
            },
        },
    },

    labels: ["Skill 01", "Skill 02", "Skill 03"],
    legend: {
        show: true, fontSize: "16px", fontFamily: "Roboto, sans-serif", fontWeight: 500,
        labels: {
            colors: "#2C323F",
        },
        markers: {
            width: 86,
            height: 18,
            radius: 3,
        },
    },
    colors: [secondary.value, primary.value, "#83BF6E"],
    responsive: [
        {
            breakpoint: 767,
            options: {
                title: {
                    style: {
                        fontSize: "16px",
                    },
                },
            },
        },
        {
            breakpoint: 436,
            options: {
                chart: {
                    height: 500,
                    offsetX: 10,
                },
                title: {
                    style: {
                        fontSize: "12px",
                    },
                },

                legend: {
                    fontSize: "13px",
                    markers: {
                        width: 50,
                        height: 15,
                    },
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: "20%",
                        },
                        track: {
                            strokeWidth: "10%",
                        },
                    },
                },
            },
        },
        {
            breakpoint: 344,
            options: {
                chart: {
                    height: 1000,
                    offsetX: 10,
                },
                title: {
                    style: {
                        fontSize: "12px",
                    },
                },

                legend: {
                    fontSize: "12px",
                    markers: {
                        width: 10,
                        height: 10,
                    },
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: "10%",
                        },
                        track: {
                            strokeWidth: "10%",
                        },
                    },
                },
            },
        },
    ],
}
</script>