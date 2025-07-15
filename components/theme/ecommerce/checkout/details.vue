<template>
    <div class="col-xl-6 col-sm-12">
        <div class="checkout-details">
            <div class="order-box">
                <div class="title-box">
                    <div class="checkbox-title">
                        <h4>Product </h4><span>Total</span>
                    </div>
                </div>
                <ul class="qty">
                    <li v-for="(item, index) in store.cartData" :key="index">
                        {{ item.name }} x {{ item.quantity }}
                        <span>${{ item.price * item.quantity }}</span>
                    </li>
                </ul>
                <ul class="sub-total">
                    <li>Subtotal <span class="count">${{ getAmount() }}</span></li>
                    <li class="shipping-class">Shipping
                        <div class="shopping-checkout-option">
                            <label class="d-block" for="chk-ani">
                                <input class="checkbox_animated" id="chk-ani" type="checkbox" checked="">Option 1
                            </label>
                            <label class="d-block" for="chk-ani1">
                                <input class="checkbox_animated" id="chk-ani1" type="checkbox">Option 2
                            </label>
                        </div>
                    </li>
                </ul>
                <ul class="sub-total total">
                    <li>Total <span class="count">${{ getAmount() }}</span></li>
                </ul>
                <div class="animate-chk">
                    <div class="row">
                        <div class="col">
                            <label class="d-block" for="edo-ani">
                                <input class="radio_animated" id="edo-ani" type="radio" name="rdo-ani" checked=""
                                    data-original-title="" title="">Check Payments
                            </label>
                            <label class="d-block" for="edo-ani1">
                                <input class="radio_animated" id="edo-ani1" type="radio" name="rdo-ani"
                                    data-original-title="" title="">Cash On Delivery
                            </label>
                            <label class="d-block" for="edo-ani2">
                                <input class="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" checked=""
                                    data-original-title="" title="">PayPal<img class="img-paypal"
                                    src="/images/other-images/paypal1.png" alt="">
                            </label>
                        </div>
                    </div>
                </div>
                <div class="order-place"><a class="btn btn-primary" href="#">Place Order </a></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useProductStore } from "~/stores/ecommerce"
let store = useProductStore();
function getAmount() {
    return store.cartData.reduce((prev: any, curr: any) => {
        return prev + curr.price * curr.quantity;
    }, 0);
}
</script>

