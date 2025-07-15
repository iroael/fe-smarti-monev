<template>
    <form class="price-wrapper">
        <div class="row g-3 custom-input">
            <div class="col-sm-6">
                <label class="form-label" for="exampleFormControlInput1">Initial cost <span
                        class="txt-danger">*</span></label>
                <CommonInputFieldsCommonField classes="form-control" type="number" />
            </div>
            <div class="col-sm-6">
                <label class="form-label" for="exampleFormControlInput1">Selling price <span
                        class="txt-danger">*</span></label>
                <CommonInputFieldsCommonField classes="form-control" type="number" />
            </div>
            <div class="col-sm-6">
                <label class="form-label" for="validationServer01">Choose your currency</label>
                <CommonInputFieldsSelectBox :options="currency" class="form-select" />
            </div>
            <div class="col-sm-6">
                <label class="form-label" for="exampleFormControlInput1">Product stocks <span
                        class="txt-danger">*</span></label>
                <CommonInputFieldsCommonField classes="form-control" type="number" />
            </div>
            <div class="col-12">
                <label class="form-label" for="exampleFormControlInput1">Types of product discount<i
                        class="icon-help-alt ms-1" data-bs-toggle="tooltip" data-bs-placement="top"
                        data-bs-title="Choose the kind of discount that will be used on that particular item."></i></label>
                <ul class="radio-wrapper">
                    <li v-for="(item, index) in discount" :key="index">

                        <CommonInputFieldsRadioField classes="form-check-input" name="radio5" :id="item.for"
                            :checked="item.checked" />
                        <label class="form-check-label" :for="item.for">
                            <span>{{ item.title }}</span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    </form>
    <div class="product-buttons">
        <button class="btn me-1" @click="emit('clicked', 2)">
            <div class="d-flex align-items-center gap-sm-2 gap-1">
                <svg>
                    <use href="/svg/icon-sprite.svg#back-arrow"></use>
                </svg>Previous
            </div>
        </button>
        <button class="btn" @click="emit('clicked', 4)">
            <div class="d-flex align-items-center gap-sm-2 gap-1">Next
                <svg>
                    <use href="/svg/icon-sprite.svg#front-arrow"> </use>
                </svg>
            </div>
        </button>
    </div>
</template>

<script setup lang="ts">
import { discount } from "~/core/data/ecommerce"
let emit = defineEmits(['clicked'])
let currency: string[] = ['Dollar $', 'Euro €', 'Rupees ₹', 'British pounds £', 'Russian Ruble ₽', 'Japanese Yen ¥', 'Singapore Dollar S$']
</script>

