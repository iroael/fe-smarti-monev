<template>
    <h6>Unlimited Color</h6>
    <ul class="layout-grid unlimited-color-layout">
        <input id="ColorPicker1" type="color" v-model="primary" name="Background">
        <input id="ColorPicker2" type="color" v-model="secondary" name="Background">
        <button type="button" class="color-apply-btn btn btn-primary color-apply-btn" @click="customizeColor">Apply</button>
    </ul>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue"
import { uselayoutStore } from '~/stores/layout'
let primary = ref<string | null>('#009DB5')
let secondary = ref<string | null>('#F94C8E')
let storeLayout = uselayoutStore()
function customizeColor() {
    let primarycol = useCookie('primary_color').value;
    let secondarycol = useCookie('secondary_color').value;
    storeLayout.setColorScheme({ primary: primary.value, secondary: secondary.value });
    primary.value = primarycol
    secondary.value = secondarycol

}
onMounted(() => {
    let primarycol = useCookie('primary_color').value;
    let secondarycol = useCookie('secondary_color').value;
    primary.value = primarycol ? primarycol : '#009DB5'
    secondary.value = secondarycol ? secondarycol : '#F94C8E'
})
</script>