<template>
    <div class="container-fluid product-wrapper" :class="store.filtered ? 'sidebaron' : ''">
        <div class="product-grid">
            <ThemeEcommerceProduct />
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: "Product | Yuri - Premium Nuxt Admin Template"
})
import { useProductStore } from "~/stores/ecommerce"
let store = useProductStore();
</script>

