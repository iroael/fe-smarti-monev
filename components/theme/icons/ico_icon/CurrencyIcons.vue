<template>
    <CommonCard3 colClass="col-sm-12" headerTitle="true" title="Currency">
        <div class="row icon-lists">

            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(cur, index) in currency" :key="index"
                v-on:click="icon_bar(cur.name)">
                <i class="icofont" :class="'icofont-' + cur.name"></i>{{ cur.name }}
            </div>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { currency } from "~/composables/common/flagIcon"


let emit = defineEmits(['selected'])


function icon_bar(icon: string) {
    emit('selected', icon);

}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/vendors/animate.scss"
</style>