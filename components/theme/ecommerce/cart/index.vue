<template>
    <CommonCard3 colClass="col-sm-12" headerTitle="true" title="Cart">
        <div class="row">
            <div class="col-sm-12 empty-cart-cls text-center" v-if="!store.cartData.length">
                <img :src="getImages('ecommerce/icon-empty-cart.png')" class="img-fluid my-3" />
                <h3><strong>Oops! Your cart empty!!!</strong></h3>
                <h5>Add something to make me happy :)</h5>
                <nuxt-link :to="'/ecommerce/product'" class="btn btn-primary cart-btn-transform my-2">continue
                    shopping</nuxt-link>
            </div>
            <div class="order-history table-responsive wishlist custom-scrollbar" v-if="store.cartData.length">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Prdouct</th>
                            <th>Prdouct Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in store.cartData" :key="index">
                            <td class="text-center"><img class="img-fluid img-40" :src="getImages(item.images[0])" alt="#">
                            </td>
                            <td>
                                <div class="product-name"><a href="#">{{ item.name }}</a></div>
                            </td>
                            <td>${{ item.price }}</td>
                            <td>
                                <fieldset class="qty-box">
                                    <div class="input-group">
                                        <button class="btn btn-primary btn-square bootstrap-touchspin-down" type="button"
                                            @click="item.quantity > 1 ? item.quantity-- : null, store.updateqty(item)"><i
                                                class="fa fa-minus"></i></button>
                                        <input class="touchspin text-center" type="text" v-model="item.quantity">
                                        <button class="btn btn-primary btn-square bootstrap-touchspin-up" type="button"
                                            @click="item.quantity++, store.updateqty(item)"><i
                                                class="fa fa-plus"></i></button>
                                    </div>
                                </fieldset>
                            </td>
                            <td>
                                <Icon name="ph:x-circle-bold" size="25px" @click="store.removeProduct(item)" />
                            </td>
                            <td>${{ item.price * item.quantity }}</td>
                        </tr>
                        <tr>
                            <td colspan="4">
                                <div class="input-group">
                                    <input class="form-control me-2" type="text" placeholder="Enter coupan code"><a
                                        class="btn btn-primary" href="#">Apply</a>
                                </div>
                            </td>
                            <td class="total-amount">
                                <h6 class="m-0 text-end"></h6><span class="f-w-600 f-16">Total Price :</span>
                            </td>
                            <td><span>${{ getAmount() }} </span></td>
                        </tr>
                        <tr>
                            <td class="text-end" colspan="5"><nuxt-link class="btn btn-warning cart-btn-transform"
                                    to="/ecommerce/product">continue shopping</nuxt-link></td>
                            <td><nuxt-link class="btn btn-success cart-btn-transform" href="/ecommerce/checkout">check
                                    out</nuxt-link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </CommonCard3>
</template>

<script setup lang="ts">
import { useProductStore } from "~/stores/ecommerce"
let store = useProductStore();
let cart = ref([])
function getImages(path: string) {
    return '/images/' + path
}
function getAmount() {
    return store.cartData.reduce((prev: any, curr: any) => {
        return prev + curr.price * curr.quantity;
    }, 0);
}
onMounted(() => {
    if (process.client) {
        let storeData = localStorage.getItem('cartItem')
        if (storeData)
            cart.value = JSON.parse(storeData)
    }
})
</script>

