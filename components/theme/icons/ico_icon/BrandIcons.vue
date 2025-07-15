<template>
    <CommonCard3 colClass="col-sm-12" headerTitle="true" title="Brand">
        <div class="row icon-lists">

            <div class="col-sm-6 col-md-4 col-xl-3" v-for="(br, index) in brand" :key="index"
                v-on:click="icon_bar(br.name)">
                <i class="icofont" :class="'icofont-' + br.name"></i>{{ br.name }}
            </div>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { brand } from "~/composables/common/flagIcon"


let emit = defineEmits(['selected'])


function icon_bar(icon: string) {
    emit('selected', icon);

}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/vendors/animate.scss"
</style>