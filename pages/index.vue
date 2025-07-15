<template>
   <ThemeDashboardDefault />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
useHead({
    title: "Yuri - Premium Nuxt Admin Template"
})
const router = useRouter();
onMounted(() => {
    router.replace('/dashboard/default');
})
</script>

