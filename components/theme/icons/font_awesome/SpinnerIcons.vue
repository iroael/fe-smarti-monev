<template>
    <CommonCard3 colClass="col-sm-12" headerTitle="true" title="Spinner Icons">
        <div class="row icon-lists">
            <div class="col-sm-6 col-md-4 col-xl-3" v-for="(spi, index) in spinner" :key="index"
                v-on:click="icon_bar(spi.name)">
                <i class="" :class="'fa fa-' + spi.name"></i>fa-{{ spi.name }}
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>



let emit = defineEmits(['selected'])

let spinner = ref([{ name: 'circle-o-notch fa-spin' }, { name: 'cog fa-spin' }, { name: 'gear fa-spin' }, { name: 'refresh fa-spin' }, { name: 'spinner fa-spin' }])
function icon_bar(icon: string) {

    emit('selected', icon);
}
</script>
