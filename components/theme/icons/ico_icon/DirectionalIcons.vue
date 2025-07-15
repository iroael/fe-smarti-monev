<template>
    <CommonCard3 colClass="col-sm-12" headerTitle="true" title="Directional">
        <div class="row icon-lists">

            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(dire, index) in directional" :key="index"
                v-on:click="icon_bar(dire.name)">
                <i class="icofont" :class="'icofont-' + dire.name"></i>{{ dire.name }}
            </div>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { directional } from "~/composables/common/flagIcon"


let emit = defineEmits(['selected'])


function icon_bar(icon: string) {
    emit('selected', icon);

}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/vendors/animate.scss"
</style>