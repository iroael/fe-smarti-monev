<template>
    <CommonCard3 colClass="col-sm-12" headerTitle="true" title="Payment">
        <div class="row icon-lists">

            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(pay, index) in payment" :key="index"
                v-on:click="icon_bar(pay.name)">
                <i class="icofont" :class="'icofont-' + pay.name"></i>{{ pay.name }}
            </div>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { payment } from "~/composables/common/flagIcon"


let emit = defineEmits(['selected'])


function icon_bar(icon: string) {
    emit('selected', icon);

}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/vendors/animate.scss"
</style>