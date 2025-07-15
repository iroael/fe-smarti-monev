<template>
    <CommonCard1 colClass="col-xxl-5 box-col-6 order-xxl-0 order-1" :header="false">
        <div class="product-page-details ">
            <h2>{{ product.name }}</h2>
        </div>
        <div class="product-price"> ${{ product.price }}
            <del>${{ product.salePrice }}</del>
        </div>
        <ul class="product-color">
            <li class="bg-primary"></li>
            <li class="bg-secondary"></li>
            <li class="bg-success"></li>
            <li class="bg-info"></li>
            <li class="bg-warning"></li>
        </ul>
        <hr>
        <p>{{ product.description }}</p>
        <hr>
        <table class="product-page-width">
            <tbody>
                <tr>
                    <td> <b>Brand &nbsp;&nbsp;&nbsp;:</b></td>
                    <td>Pixelstrap</td>
                </tr>
                <tr>
                    <td> <b>Availability &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b></td>
                    <td class="txt-success">In stock</td>
                </tr>
                <tr>
                    <td> <b>Seller &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b></td>
                    <td>ABC</td>
                </tr>
                <tr>
                    <td> <b>Fabric &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b></td>
                    <td>Cotton</td>
                </tr>
            </tbody>
        </table>
        <hr>
        <div class="row">
            <div class="col-md-4">
                <h4 class="product-title">share it</h4>
            </div>
            <div class="col-md-8">
                <div class="product-icon">
                    <ul class="product-social">
                        <li class="d-inline-block"><a href="https://www.facebook.com/" target="_blank"><i
                                    class="fa fa-facebook"></i></a></li>
                        <li class="d-inline-block"><a href="https://accounts.google.com/" target="_blank"><i
                                    class="fa fa-google-plus"></i></a></li>
                        <li class="d-inline-block"><a href="https://twitter.com/" target="_blank"><i
                                    class="fa fa-twitter"></i></a></li>
                        <li class="d-inline-block"><a href="https://www.instagram.com/" target="_blank"><i
                                    class="fa fa-instagram"></i></a></li>
                        <li class="d-inline-block"><a href="https://rss.app/" target="_blank"><i class="fa fa-rss"></i></a>
                        </li>
                    </ul>
                    <form class="d-inline-block f-right"></form>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-4">
                <h6 class=" product-title">Rate Now</h6>
            </div>
            <div class="col-md-8">
                <div class="d-flex align-items-center">
                    <rate :length="5" :value="2" /><span>(250 review)</span>
                </div>
            </div>
        </div>
        <hr>
        <div class="m-t-15 common-flex">
            <nuxt-link :to="'/ecommerce/cart'" class="btn btn-primary" @click="addToCart(product)"> <i
                    class="fa fa-shopping-basket me-2"></i>Add To Cart</nuxt-link>
            <nuxt-link class="btn btn-success" to='/ecommerce/checkout'><i class="fa fa-shopping-cart me-2"></i>Buy
                Now</nuxt-link>
            <nuxt-link :to="'/ecommerce/wishList'" class="btn btn-secondary"><i class="fa fa-heart me-2"></i>Add To
                WishList</nuxt-link>

        </div>
    </CommonCard1>
</template>

<script setup lang="ts">
import type { product } from '~/core/data/ecommerce'
import { useProductStore } from "~/stores/ecommerce"
defineProps({
    product: Object
})
let store = useProductStore();
function addToCart(product: product) {
    store.addToCart(product);
}
</script>