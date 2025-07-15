<template>
    <select :class="classes" :id="idValue" :value="modelValue?.data" @input="update($event.target.value)"
        :multiple="multiple">
        <option v-for="(item, index) in options" :key="index" :selected="index == 0">{{ item }}</option>
    </select>
</template>

<script setup lang="ts">
let props = defineProps({
    options: Array,
    classes: String,
    modelValue: Object,
    errorMessage: String,
    idValue: String,
    multiple: {
        default: false,
        type: Boolean
    },
})
let emit = defineEmits(['update:modelValue'])
function update(value: string) {

    if (value != '') {
        emit('update:modelValue', { data: value, errorMessage: '' })
    }
    else {
        emit('update:modelValue', { data: value, errorMessage: props.errorMessage })
    }
}
</script>

