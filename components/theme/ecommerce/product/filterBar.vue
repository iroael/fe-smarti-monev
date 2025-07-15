<template>
    <div class="left-filter">
        <div class="card-body filter-cards-view animate-chk">
            <div class="product-filter">
                <h4 class="f-w-600 mb-2">Category</h4>
                <div class="checkbox-animated mt-0">
                    <label class="d-block" for="edo-ani5" v-for="(product, index) in store.getCategory" :key="index">
                        <input :value="product.category" v-model="store.applyFilter" class="checkbox_animated"
                            :id="product.category" type="checkbox">{{ product.category }}
                    </label>
                </div>
            </div>
            <div class="product-filter">
                <h4 class="f-w-600 mb-2">Brand</h4>
                <div class="checkbox-animated mt-0">
                    <label class="d-block" v-for="(brand, index) in store.getBrands" :key="index">
                        <input class="checkbox_animated" :value="brand" v-model="store.applyFilter" :id="brand"
                            type="checkbox"> {{ brand }}
                    </label>
                </div>
            </div>
            <div class="product-filter slider-product">
                <h4 class="f-w-600 mb-2">Colors</h4>
                <div class="color-selector">
                    <ul>
                        <li :style="{ 'background-color': color.color }" :class="applyFilter ? 'm-1' : 'active m-1'"
                            v-for="(color, index) in store.getColors" :key="'color' + index"
                            @click="getColorValue(color.color)">
                        </li>

                    </ul>
                </div>
            </div>
            <div class="product-filter pb-0">
                <h4 class="f-w-500 mb-2">Price</h4>
                <ClientOnly>
                    <VueSimpleRangeSlider :min="100" :max="1000" :exponential="true" bar-color="#e1e4e9"
                        active-bar-color="#009DB5" :popover-content-editable="true" v-model="state.range">
                        <template #prefix="{ value }">$</template>
                    </VueSimpleRangeSlider>
                </ClientOnly>
                <h4 class="f-w-600">New Products</h4>
            </div>
            <ThemeEcommerceProductNewProduct />
            <div class="product-filter text-center"><img class="img-fluid banner-product" src="/images/ecommerce/banner.jpg"
                    alt="" data-original-title="" title=""></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProductStore } from "~/stores/ecommerce"
import VueSimpleRangeSlider from "vue-simple-range-slider";
import "vue-simple-range-slider/css";
let store = useProductStore()
let { applyFilter } = storeToRefs(store)
const state = ref({ range: [100, 885] });
function getColorValue(color: string) {
    if (applyFilter.value.includes(color)) return false
    else applyFilter.value.push(color)
}
</script>

