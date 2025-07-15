<template>
    <CommonCard3 colClass="col-sm-12" cardClass="title-line" headerTitle="true" title="20 Icons">
        <div class="row icon-lists">
            <div class="col-sm-6 col-md-4 col-xl-3" v-for="(ico, index) in icons" :key="index"
                v-on:click="icon_bar(ico.name)">
                <i class="" :class="'fa fa-' + ico.name"></i>fa fa-{{ ico.name }}
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>



let emit = defineEmits(['selected'])

let icons = ref([{ name: 'bluetooth' }, { name: 'bluetooth-b' }, { name: 'codiepie' }, { name: 'credit-card-alt' }, { name: 'edge' }, { name: 'fort-awesome' }, { name: 'hashtag' }, { name: 'mixcloud' }, { name: 'modx' }, { name: 'pause-circle' }, { name: 'pause-circle-o' }, { name: 'percent' }, { name: 'product-hunt' }, { name: 'reddit-alien' }, { name: 'scribd' }, { name: 'shopping-bag' }, { name: 'shopping-basket' }, { name: 'stop-circle' }, { name: 'stop-circle-o' }, { name: 'usb' }])
function icon_bar(icon: string) {

    emit('selected', icon);
}
</script>
