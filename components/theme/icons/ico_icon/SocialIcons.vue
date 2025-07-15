<template>
    <CommonCard3 colClass="col-sm-12" headerTitle="true" title="Social">
        <div class="row icon-lists">

            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(soci, index) in social" :key="index"
                v-on:click="icon_bar(soci.name)">
                <i class="icofont" :class="'icofont-' + soci.name"></i>{{ soci.name }}
            </div>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { social } from "~/composables/common/flagIcon"


let emit = defineEmits(['selected'])


function icon_bar(icon: string) {
    emit('selected', icon);

}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/vendors/animate.scss"
</style>