<template>
    <CommonCard3 colClass="col-sm-12" headerTitle="true" title="Device">
        <div class="row icon-lists">

            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(devi, index) in device" :key="index"
                v-on:click="icon_bar(devi.name)">
                <i class="icofont" :class="'icofont-' + devi.name"></i>{{ devi.name }}
            </div>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { device } from "~/composables/common/flagIcon"


let emit = defineEmits(['selected'])


function icon_bar(icon: string) {
    emit('selected', icon);

}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/vendors/animate.scss"
</style>