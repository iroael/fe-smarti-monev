<template>
    <CommonCard3 colClass="col-sm-12" headerTitle="true" title="Business">
        <div class="row icon-lists">

            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(bu, index) in business" :key="index"
                v-on:click="icon_bar(bu.name)">
                <i class="icofont" :class="'icofont-' + bu.name"></i>{{ bu.name }}
            </div>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { business } from "~/composables/common/flagIcon"


let emit = defineEmits(['selected'])


function icon_bar(icon: string) {
    emit('selected', icon);

}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/vendors/animate.scss"
</style>