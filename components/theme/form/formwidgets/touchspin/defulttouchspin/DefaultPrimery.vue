<template>
    <div class="touchspin-wrapper">
        <button class="decrement-touchspin btn-touchspin touchspin-primary" @click="primeryDecrement()"><i
                class="fa fa-minus">
            </i></button>
        <input class="input-touchspin  mx-1 spin-outline-primary" type="number" v-model="conter">
        <button class="increment-touchspin btn-touchspin touchspin-primary" @click="primeryIncrement()"><i
                class="fa fa-plus"> </i></button>
    </div>
</template>
<script lang="ts" setup>

let conter = ref<number>(0)
function primeryIncrement() {
    conter.value++
}
function primeryDecrement() {
    if (conter.value > 0) {
        conter.value--
    }
}
</script>