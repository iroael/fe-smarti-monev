<template>
    <CommonCard3 colClass="col-12" pre="true" preClass="f-m-light mt-1" headerTitle="true" title="Variation radio"
        :desc="desc">
        <div class="row g-3">
            <div class="col-xl-4 col-md-6">
                <div class="card-wrapper border rounded-3 h-100 checkbox-checked">
                    <h6 class="sub-title">Select your payment method</h6>
                    <div class="payment-wrapper" v-for="(item, index) in yourpayment" :key="index">
                        <div class="payment-first">
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" :id="item.id" type="radio" name="radio1" value="option1"
                                    :checked="item.checked">
                                <label class="form-check-label mb-0" :for="item.id">{{ item.label }}</label>
                            </div>
                        </div>
                        <div class="payment-second"><img class="img-fluid" :src="getImages(item.img)" alt="card">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-6">
                <div class="card-wrapper border rounded-3 h-100 checkbox-checked">
                    <h6 class="sub-title">What are the most important things to learn about web design?</h6>
                    <div class="payment-wrapper" v-for="(item, index) in web" :key="index">
                        <div class="payment-first">
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" :id="item.id" type="radio" name="radio3" value="option1"
                                    :checked="item.checked">
                                <label class="form-check-label mb-0" :for="item.id">{{ item.label }} </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4">
                <div class="card-wrapper border rounded-3 h-100 checkbox-checked">
                    <h6 class="sub-title">Radios With Creative Options & SVG Icons</h6>
                    <div class="payment-wrapper" v-for="(item, index) in svg" :key="index">
                        <div class="payment-first">
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" :id="item.id" type="radio" name="radio2" value="option1"
                                    :checked="item.checked">
                                <label class="form-check-label mb-0" :for="item.id">{{ item.label }}</label>
                            </div>
                        </div>
                        <div class="payment-second">
                            <svg class="mega-icons " :class="item.class">
                                <use :href="'/svg/icon-sprite.svg' + item.icon">
                                </use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { yourpayment, web, svg } from "~/core/data/forms"
import { getImages } from "~/composables/common/getImages"
let desc = ref<string>("Use the <code>radio </code>attribute through create variation of radio designs.")
</script>