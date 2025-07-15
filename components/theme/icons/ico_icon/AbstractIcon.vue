<template>
    <CommonCard3 colClass="col-sm-12" headerTitle="true" cardClass="title-line" pre="true" preClass="f-m-light mt-1"
        title="Abstract" text="true" desc="New">
        <div class="row icon-lists">

            <div class="col-sm-6 col-md-4 col-xl-3" v-for="(ab, index) in abstract" :key="index"
                v-on:click="icon_bar(ab.name)">
                <i class="icofont" :class="'icofont-' + ab.name"></i>{{ ab.name }}
            </div>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { abstract } from "~/composables/common/flagIcon"


let emit = defineEmits(['selected'])


function icon_bar(icon: string) {
    emit('selected', icon);

}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/vendors/animate.scss"
</style>