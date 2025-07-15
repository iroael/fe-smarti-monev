<template>
    <CommonCard3 colClass="col-sm-12" headerTitle="true" title="Currency Icons">
        <div class="row icon-lists">
            <div class="col-sm-6 col-md-4 col-xl-3" v-for="(cur, index) in currencyicons" :key="index"
                v-on:click="icon_bar(cur.name)">
                <i class="" :class="'fa fa-' + cur.name"></i>fa-{{ cur.name }}
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>


let emit = defineEmits(['selected'])

let currencyicons = ref([{ name: 'bitcoin' }, { name: 'btc' }, { name: 'cny' }, { name: 'dollar' }, { name: 'eur' }, { name: 'euro' }, { name: 'gbp' }, { name: 'inr' }, { name: 'jpy' }, { name: 'krw' }, { name: 'money' }, { name: 'rmb' }, { name: 'rouble' }, { name: 'rub' }, { name: 'ruble' }, { name: 'rupee' }, { name: 'try' }, { name: 'turkish-lira' }, { name: 'usd' }, { name: 'won' }, { name: 'yen' }])
function icon_bar(icon: string) {

    emit('selected', icon);
}
</script>
