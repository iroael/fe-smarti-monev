<template>
    <input :class="classes" type="radio" :name="name" :value="value">
</template>

<script setup lang="ts">
defineProps({
    classes:String,
    value:String,
    name:String
})
</script>

