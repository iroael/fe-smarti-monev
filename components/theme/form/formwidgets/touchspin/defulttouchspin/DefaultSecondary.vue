<template>
    <div class="touchspin-wrapper">
        <button class="decrement-touchspin btn-touchspin touchspin-secondary" @click="secondaryDecrement()"><i
                class="fa fa-minus">
            </i></button>
        <input class="input-touchspin  mx-1 spin-outline-secondary" type="number" v-model="conter">
        <button class="increment-touchspin btn-touchspin touchspin-secondary" @click="secondaryIncrement()"><i
                class="fa fa-plus">
            </i></button>
    </div>
</template>
<script lang="ts" setup>

let conter = ref<number>(2)
function secondaryIncrement() {
    conter.value++
}
function secondaryDecrement() {
    if (conter.value > 0) {
        conter.value--
    }
}
</script>