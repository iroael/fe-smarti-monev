<template>
    <CommonCard3 colClass="col-sm-12" title="Text Editor" headerTitle="true">
        <div class="row icon-lists">

            <div class="col-sm-6 col-md-6 col-lg-4" v-for="(texte, index) in texteditor" :key="index"
                v-on:click="icon_bar(texte.name)">
                <i class="" :class="texte.name"></i>{{ texte.name }}
            </div>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>


let emit = defineEmits(['selected'])

let texteditor = ref([{ name: 'icon-paragraph' }, { name: 'icon-uppercase' }, { name: 'icon-underline' }, { name: 'icon-text' }, { name: 'icon-Italic' }, { name: 'icon-smallcap' }, { name: 'icon-list' }, { name: 'icon-list-ol' }, { name: 'icon-align-right' }, { name: 'icon-align-left' }, { name: 'icon-align-justify' }, { name: 'icon-align-center' }, { name: 'icon-quote-right' }, { name: 'icon-quote-left' }])
function icon_bar(icon: string) {

    emit('selected', icon);
}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/vendors/animate.scss"
</style>