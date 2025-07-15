<template>
    <div class="tap-top" :style="[display ? { 'display': 'block' } : { 'display': 'none' }]">
        <Icon name="material-symbols:keyboard-double-arrow-up-rounded" size="20" @click="executeScroll()"></Icon>
    </div>
</template>
<script lang="ts" setup>

const display = ref<boolean>(false)

function executeScroll() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}
function handleScroll() {
    if (window.scrollY > 300) {
        display.value = true;
    } else {
        display.value = false;
    }
}
onMounted(() => {
    window.addEventListener('scroll', handleScroll);

})
</script>