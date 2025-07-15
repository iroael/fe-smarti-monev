<template>
    <CommonCard3 colClass="col-xl-6" pre="true" cardClass="height-equal" preClass="f-m-light mt-1" headerTitle="true"
        title="Animated buttons" :desc="desc">
        <div class="row g-3">
            <div class="col-sm-6">
                <div class="card-wrapper border rounded-3 checkbox-checked">
                    <h6 class="sub-title">Select your payment method</h6>
                    <div v-for="(item, index) in payment" :key="index">
                        <label class="d-block" :for="item.id"></label>
                        <input class="radio_animated" :id="item.id" type="radio" name="rdo-ani" :checked="item.checked">{{
                            item.label }}
                    </div>

                </div>
            </div>
            <div class="col-sm-6">
                <div class="card-wrapper border rounded-3 checkbox-checked">
                    <h6 class="sub-title">What is your favorite social media? </h6>
                    <div v-for="(item, index) in social" :key="index">
                        <label class="d-block" :for="item.id"></label>
                        <input class="checkbox_animated" :id="item.id" type="checkbox" :checked="item.checked">{{ item.label
                        }}
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { payment, social } from "~/core/data/forms"
let desc = ref<string>(" Use the <code>.radio_animated </code>through animated checkbox and radios.")
</script>