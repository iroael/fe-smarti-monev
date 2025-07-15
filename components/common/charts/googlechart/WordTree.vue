<template>
    <CommonCard3 title="word tree" headerTitle="true" cardBodyClass=" chart-block" colClass="col-sm-12 col-xl-6 box-col-12">
        <div class="word-tree" id="wordtree_basic">
            <GChart class="word-tree" id="wordtree_basic" :type="chartTypes" :data="chartDatas" :options="chartOptions1"
                :settings="settings1" />
        </div>

    </CommonCard3>
</template>
<script lang="ts" setup>
import { GChart } from "vue-google-charts";
const chartTypes: string = 'WordTree';
const chartDatas = [
    ['Phrases'],
    ['cats are better than dogs'],
    ['cats eat kibble'],
    ['cats are better than hamsters'],
    ['cats are awesome'],
    ['cats are people too'],
    ['cats eat mice'],
    ['cats meowing'],
    ['cats in the cradle'],
    ['cats eat mice'],
    ['cats in the cradle lyrics'],
    ['cats eat kibble'],
    ['cats for adoption'],
    ['cats are family'],
    ['cats eat mice'],
    ['cats are better than kittens'],
    ['cats are evil'],
    ['cats are weird'],
    ['cats eat mice'],
];
const chartOptions1 = {
    wordtree: {
        format: 'implicit',
        word: 'cats',
    },
    height: 400,
}
const settings1 = {
    packages: ['wordtree'],
}
</script>