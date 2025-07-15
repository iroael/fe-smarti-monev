<template>
    <div class="touchspin-wrapper">
        <button class="decrement-touchspin btn-touchspin touchspin-warning" @click="warningDecrement()"><i
                class="fa fa-minus">
            </i></button>
        <input class="input-touchspin  mx-1 spin-outline-warning" type="number" v-model="conter">
        <button class="increment-touchspin btn-touchspin touchspin-warning" @click="warningIncrement()"><i
                class="fa fa-plus"> </i></button>
    </div>
</template>
<script lang="ts" setup>
let conter = ref<number>(3)
function warningIncrement() {
    conter.value++
}
function warningDecrement() {
    if (conter.value > 0) {
        conter.value--
    }
}
</script>