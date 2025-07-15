<template>
    <CommonCard3 colClass="col-sm-12" headerTitle="true" title="Form Control Icons">
        <div class="row icon-lists">

            <div class="col-sm-6 col-md-4 col-xl-3" v-for="(form, index) in formicons" :key="index"
                v-on:click="icon_bar(form.name)">
                <i class="" :class="'fa fa-' + form.name"></i>fa-{{ form.name }}
            </div>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>


let emit = defineEmits(['selected'])

let formicons = ref([{ name: 'check-square' }, { name: 'check-square-o' }, { name: 'circle' }, { name: 'circle-o' }, { name: 'dot-circle-o' }, { name: 'minus-square' }, { name: 'minus-square-o' }, { name: 'plus-square' }, { name: 'plus-square-o' }, { name: 'square' }, { name: 'square-o' }])
function icon_bar(icon: string) {

    emit('selected', icon);
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/vendors/animate.scss"
</style>