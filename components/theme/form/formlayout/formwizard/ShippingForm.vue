<template>
    <CommonCard3 colClass="col-md-12" pre="true" preClass="f-m-light mt-1" cardClass="title-line" headerTitle="true"
        title="Shipping form" :desc="desc">
        <div class="row shopping-wizard">
            <div class="col-12">
                <div class="row shipping-form g-5">
                    <div class="col-xl-8 shipping-border">
                        <div class="nav nav-pills horizontal-options shipping-options" id="cart-options-tab" role="tablist"
                            aria-orientation="vertical"><a class="nav-link b-r-0 " v-for="(item, index) in tab" :key="index"
                                :id="item.id" data-bs-toggle="pill" :href="item.href" role="tab" aria-controls="bill-wizard"
                                v-bind:class="{ 'active': item.id === activeclass }" aria-selected="true">
                                <div class="cart-options">
                                    <div class="stroke-icon-wizard"><i class="fa " :class="item.icon"></i></div>
                                    <div class="cart-options-content">
                                        <h6>{{ item.label }}</h6>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="tab-content dark-field shipping-content" id="cart-options-tabContent">
                            <ThemeFormFormlayoutFormwizardBillingfrom />
                            <ThemeFormFormlayoutFormwizardShippingForms />
                            <ThemeFormFormlayoutFormwizardPaymentWizard />
                            <ThemeFormFormlayoutFormwizardFinishWizard />
                        </div>
                    </div>
                    <ThemeFormFormlayoutFormwizardCurrentCart />
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { tab } from "~/core/data/forms"
let desc = ref<string>("Fill up your true details and next proceed.")
let activeclass = ref<string>('bill-wizard-tab')
</script>