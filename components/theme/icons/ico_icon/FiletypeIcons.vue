<template>
    <CommonCard3 colClass="col-sm-12" headerTitle="true" title="File Type">
        <div class="row icon-lists">

            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(files, index) in file" :key="index"
                v-on:click="icon_bar(files.name)">
                <i class="icofont" :class="'icofont-' + files.name"></i>{{ files.name }}
            </div>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { file } from "~/composables/common/flagIcon"


let emit = defineEmits(['selected'])


function icon_bar(icon: string) {
    emit('selected', icon);

}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/vendors/animate.scss"
</style>