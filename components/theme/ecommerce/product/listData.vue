<template>
    <div class="product-wrapper-grid" :class="listClass">
        <div class="row">
            <div :class="gridClass" v-for="(product, index) in store.filteredData" :key="index">
                <div class="card">
                    <div class="product-box">
                        <div class="product-img">
                            <div class="ribbon ribbon-danger" v-if="product.sale">Sale</div>
                            <div class="ribbon ribbon-success ribbon-right" v-if="product.off">50%</div>
                            <img class="img-fluid" :src="getImages(product.images[0])" />
                            <div class="product-hover">
                                <ul>
                                    <nuxt-link :to="'/ecommerce/cart'">
                                        <li @click="addToCart(product)">
                                            <i class="icon-shopping-cart"> </i>
                                        </li>
                                    </nuxt-link>
                                    <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <li @click="quickView(product)">
                                            <i class="icon-eye"> </i>
                                        </li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                        <CommonModalsQuickView :product="quickviewProduct" />
                        <div class="product-details">
                            <div class="rating" v-html="stars(product.star)"></div>
                            <nuxt-link :to="'/ecommerce/details/' + product.sku">
                                <h4>{{ product.name }}</h4>
                            </nuxt-link>
                            <p>{{ product.shortDescription }}</p>
                            <div class="product-price">
                                ${{ product.price }}
                                <del>${{ product.salePrice }}</del>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { product } from '~/core/data/ecommerce'
import { useProductStore } from "~/stores/ecommerce"
defineProps({
    gridClass: String,
    listClass: String
})
let store = useProductStore()
let quickviewProduct = ref({})
function quickView(product: product) {
    quickviewProduct.value = product
}
function addToCart(product: product) {
    store.addToCart(product)
}
function getImages(path: string) {
    return '/images/' + path
}
function stars(count: number) {
    var stars = '';

    for (var i = 0; i < 5; i++) {
        if (count > i) {
            stars = stars + '<i class="fa fa-star "></i>';
        } else {
            stars = stars + '<i class="fa fa-star-o "></i>';
        }
    }

    return stars;
}
</script>

