<template>
    <div class="tab-pane fade shipping-wizard" id="ship-wizard" role="tabpanel" aria-labelledby="ship-wizard-tab">
        <h6>Shipping Information</h6>
        <p class="f-light">Fill up the following information to send you the order</p>
        <div class="shipping-title">
            <h6 class="mb-2">Saved Address</h6>
            <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalgetbootstrap"
                data-whatever="@getbootstrap"> <i class="fa fa-plus-square f-20"></i></button>
            <ThemeFormFormlayoutFormwizardShippingModel />
        </div>
        <div class="row g-3">
            <div class="col-xxl-4 col-sm-6" v-for="(item, index) in information" :key="index">
                <div class="card-wrapper border rounded-3 h-100 light-card">
                    <div class="collect-address">
                        <div class="d-flex gap-2 align-items-center">
                            <div class="form-check radio radio-primary">
                                <input class="form-check-input" :id="item.id" type="radio" name="radio1" value="option1"
                                    :checked="item.checked">
                                <label class="form-check-label mb-0" :for="item.id">{{ item.label }}</label>
                            </div>
                        </div>
                        <div class="card-icon"><i class="fa fa-pencil"></i><i class="fa fa-trash-o"></i></div>
                    </div>
                    <div class="shipping-address" v-html="item.add">

                    </div>
                </div>
            </div>

        </div>
        <h6 class="mt-4 mb-2">Shipping Method</h6>
        <div class="row shipping-method g-3">
            <div class="col-sm-6" v-for="(item, index) in method" :key="index">
                <div class="card-wrapper border rounded-3 h-100 light-card">
                    <div class="form-check radio radio-primary">
                        <input class="form-check-input" :id="item.id" type="radio" name="radio2" value="option1"
                            :checked="item.checked">
                        <label class="form-check-label mb-0" :for="item.id">{{ item.label }}</label>
                    </div>
                    <p>{{ item.desc }}</p>
                </div>
            </div>

            <div class="col-12 text-end">
                <button class="btn btn-primary">Proceed to Next<i class="fa fa-truck proceed-next pe-2"></i></button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { information, method } from "~/core/data/forms"
</script>