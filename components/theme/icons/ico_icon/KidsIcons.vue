<template>
    <CommonCard3 colClass="col-sm-12" headerTitle="true" title="Kids & Toys">
        <div class="row icon-lists">

            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(kid, index) in kids" :key="index"
                v-on:click="icon_bar(kid.name)">
                <i class="icofont" :class="'icofont-' + kid.name"></i>{{ kid.name }}
            </div>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { kids } from "~/composables/common/flagIcon"


let emit = defineEmits(['selected'])


function icon_bar(icon: string) {
    emit('selected', icon);

}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/vendors/animate.scss"
</style>