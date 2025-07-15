<template>
    <li class="cart-nav onhover-dropdown">
        <div class="cart-box onhover-click">
            <svg>
                <use href="/svg/icon-sprite.svg#stroke-ecommerce"></use>
            </svg><span class="badge rounded-pill badge-primary">{{ store.cartData.length }}</span>
        </div>
        <div class="cart-dropdown onhover-show-div">
            <h6 class="f-18 mb-0 dropdown-title">Cart</h6>
            <ul class="cart-main-wrapper">
                <div class="col-sm-12 empty-cart-cls text-center" v-if="!store.cartData.length">
                    <img :src="getImages('ecommerce/icon-empty-cart.png')" class="img-fluid my-3 img-50" />
                    <h3><strong>Oops! Your cart empty!!!</strong></h3>
                    <h5>Add something to make me happy :)</h5>
                    <nuxt-link :to="'/ecommerce/product'" class="btn btn-primary cart-btn-transform my-2">continue
                        shopping</nuxt-link>
                </div>

                <li class="cart-product" v-for="(item, index) in store.cartData" :key="index">
                    <div class="d-flex"><img class="img-fluid b-r-5 me-3 img-60" :src='getImages(item.images[0])'
                            alt="cosmetic">
                        <div class="flex-grow-1"><span class="f-w-500"><nuxt-link :to="'/ecommerce/details/' + item.sku">{{
                            item.name
                        }}</nuxt-link></span>
                            <div class="qty-box">
                                <div class="touchspin-wrapper">
                                    <button class="decrement-touchspin btn-touchspin"
                                        @click="item.quantity > 1 ? item.quantity-- : null, store.updateqty(item)"><i
                                            class="fa fa-minus text-gray"></i></button>
                                    <input class="input-touchspin" id="inputData" type="number" v-model="item.quantity">
                                    <button class="increment-touchspin btn-touchspin"
                                        @click="item.quantity++, store.updateqty(item)"><i
                                            class="fa fa-plus text-gray"></i></button>
                                </div>
                                <h6 class="font-primary">${{ item.price * item.quantity }} </h6>
                            </div>
                        </div>
                        <div class="close-circle"><a @click='store.removeProduct(item)'>
                                <Icon name="lucide:trash-2" size="25px" />
                            </a>
                        </div>
                    </div>
                </li>

                <li class="total" v-if="store.cartData.length">
                    <h6 class="mb-0">Order Total : <span class="f-right">${{ getAmount() }}</span></h6>
                </li>
                <li class="text-center" v-if="store.cartData.length"><nuxt-link class="d-block mb-3 view-cart f-w-700"
                        to="/ecommerce/cart">Go to your
                        cart</nuxt-link><nuxt-link class="btn btn-primary view-checkout"
                        to="/ecommerce/checkout">Checkout</nuxt-link></li>
            </ul>

        </div>
    </li>
</template>

<script setup lang="ts">
import { useProductStore } from "~/stores/ecommerce"
let store = useProductStore();
function getImages(path: string) {
    return '/images/' + path
}
function getAmount() {
    return store.cartData.reduce((prev: any, curr: any) => {
        return prev + curr.price * curr.quantity;
    }, 0);
}
</script>

