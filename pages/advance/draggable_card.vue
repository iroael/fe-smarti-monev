<template>
    <div class="container-fluid">
        <draggable class="row">
            <ThemeAdvanceDraggableCard />
            <ThemeAdvanceDraggableFooterCard />
        </draggable>
    </div>
</template>
<script lang="ts" setup>
useHead({
    title: "Bonus UI  Draggable Card | Yuri - Premium Nuxt Admin Template"
})
import { VueDraggableNext } from 'vue-draggable-next'
const draggable = VueDraggableNext
</script>