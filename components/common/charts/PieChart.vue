<template>
    <apexchart width="380" type="pie" :options="chartOptions6" :series="series6" :responsive="chartOptions6.responsive">
    </apexchart>
</template>
<script lang="ts" setup>
let primary: Ref<string>;
let secondary: Ref<string>;

primary = ref<string>(useCookie('primary_color').value || '#009DB5');
secondary = ref<string>(useCookie('secondary_color').value || '#F94C8E');
const series6 = [
    44, 55, 13, 43, 22
]
const chartOptions6 = {
    chart: {
        width: 380,

        type: "pie",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 280,
                },
                legend: {
                    position: "bottom",
                },
            },
        },
    ],
    colors: [
        primary.value,
        secondary.value,
        "#83BF6E",
        "#25C5F7",
        "#F99B0D",
    ],
}
</script>