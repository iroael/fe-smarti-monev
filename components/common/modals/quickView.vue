<template>
    <div class="modal fade" id="exampleModal" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="product-box row">
                        <div class="product-img col-lg-6"><img class="img-fluid" v-if="product?.images"
                                :src="getImages(product?.images[0])" /></div>
                        <div class="product-details col-lg-6 text-start">
                            <h4 @click.prevent="$router.push('/ecommerce/details/' + product?.sku)" data-bs-dismiss="modal">
                                {{ product?.name }}</h4>
                            <div class="product-price">
                                ${{ product?.price }}
                                <del>${{ product?.salePrice }} </del>
                            </div>
                            <div class="product-view">
                                <h6 class="f-w-600">Product Details</h6>
                                <p class="mb-0">{{ product?.description }}</p>
                            </div>
                            <div class="product-size">
                                <ul>
                                    <li>
                                        <button class="btn btn-outline-primary" type="button">M</button>
                                    </li>
                                    <li class="mx-1">
                                        <button class="btn btn-outline-primary" type="button">L</button>
                                    </li>
                                    <li>
                                        <button class="btn btn-outline-primary" type="button">Xl</button>
                                    </li>
                                </ul>
                            </div>
                            <div class="product-qnty">
                                <h6 class="f-w-600">Quantity</h6>
                                <fieldset>
                                    <div class="input-group bootstrap-touchspin">
                                        <button class="btn btn-primary btn-square bootstrap-touchspin-down"
                                            v-on:click="decrement()" type="button"><i class="fa fa-minus"></i></button>
                                        <input class="touchspin text-center form-control" v-model="counter"
                                            name="item.quantity" type="text">
                                        <button class="btn btn-primary btn-square bootstrap-touchspin-up"
                                            v-on:click="increment()" type="button"> <i class="fa fa-plus"></i></button>
                                    </div>
                                </fieldset>
                                <div class="addcart-btn mt-3">
                                    <nuxt-link to="/ecommerce/cart">
                                        <button class="btn btn-primary m-r-10" type="button"
                                            data-original-title="btn btn-info-gradien" @click="addToCart(product)"
                                            data-bs-dismiss="modal"> Add To Cart </button>
                                    </nuxt-link>
                                    <a href="javascript:void(0)" class="btn btn-primary cart-btn-transform"
                                        @click.prevent="$router.push('/ecommerce/checkout')" data-bs-dismiss="modal">Buy
                                        Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-close" type="button" data-bs-dismiss="modal"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useProductStore } from "~/stores/ecommerce"
import type { product } from '~/core/data/ecommerce'
interface myProps {
    product: product
}
let props = defineProps<myProps>()
let store = useProductStore()
let counter = ref(0)
function increment() {
    if (counter.value < props.product.stock) counter.value++;
}
function decrement() {
    if (counter.value > 1) counter.value--;
}
function addToCart(product: product) {

}
function getImages(path: string) {
    return '/images/' + path
}
</script>

