<template>
    <ClientOnly>
        <apexchart height="350" type="radialBar" :options="chartOptions12" :series="series12"></apexchart>
    </ClientOnly>
</template>
<script lang="ts" setup>
let primary: Ref<string>;
let secondary: Ref<string>;

primary = ref<string>(useCookie('primary_color').value || '#009DB5');
secondary = ref<string>(useCookie('secondary_color').value || '#F94C8E');
const series12 = [44, 55, 67, 83]
const chartOptions12 = {
    chart: {
        height: 350,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: '22px',
                },
                value: {
                    fontSize: '16px',
                },
                total: {
                    show: true,
                    label: 'Total',
                    formatter: function () {
                        return 249
                    }
                }
            }
        }
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                height: 250,
            },
            legend: {
                show: false
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            offsetY: -1,
                        },
                        value: {
                            offsetY: 4,
                        },
                    }
                }
            }
        }
    }],
    colors: [
        secondary.value,
        "#83BF6E",
        "#F99B0D",
        primary.value,
    ],
}

</script>