<template>
    <CommonCard3 colClass="col-sm-12" headerTitle="true" title="Medical Icons">
        <div class="row icon-lists">

            <div class="col-sm-6 col-md-4 col-xl-3" v-for="(medica, index) in medicalicons" :key="index"
                v-on:click="icon_bar(medica.name)">
                <i class="" :class="'fa fa-' + medica.name"></i>fa-{{ medica.name }}
            </div>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>



let emit = defineEmits(['selected'])

let medicalicons = ref([{ name: 'ambulance' }, { name: 'h-square' }, { name: 'hospital-o' }, { name: 'medkit' }, { name: 'plus-square' }, { name: 'stethoscope' }, { name: 'user-md' }, { name: 'wheelchair' }])
function icon_bar(icon: string) {

    emit('selected', icon);
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/vendors/animate.scss"
</style>