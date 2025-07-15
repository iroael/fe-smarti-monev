<template>
    <div>
        <div class="row product-page-main p-0">
            <ThemeEcommerceProductDetailsSlider :product="product" />
            <ThemeEcommerceProductDetailsSummery :product="product" />
            <ThemeEcommerceProductDetailsFilterblock />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useProductStore } from "~/stores/ecommerce"
let store = useProductStore();
let route = useRoute();

let product = store.listingData.find((item) => {
    if (Number(route.params.sku) == item.sku) return item
})
</script>

