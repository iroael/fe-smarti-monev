<template>
    <CommonCard3 colClass="col-md-12" headerTitle="true" title="Business horizontal wizard">
        <div class="horizontal-wizard-wrapper vertical-variations">
            <div class="row g-3">
                <div class="col-12 main-horizontal-header">
                    <div class="nav nav-pills horizontal-options" id="business-n-wizard-tab" role="tablist"
                        aria-orientation="vertical"><a class="nav-link "
                            v-bind:class="{ 'active': item.id === activeclass }" v-for="(item, index) in businessvertical"
                            :key="index" :id="item.id" data-bs-toggle="pill" :href="item.href" role="tab"
                            aria-controls="business-n-info" aria-selected="true">
                            <div class="horizontal-wizard">
                                <div class="stroke-icon-wizard"><span>{{ item.num }}</span></div>
                                <div class="horizontal-wizard-content business-wizard">
                                    <h6>{{ item.label }}</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-12">
                    <div class="tab-content dark-field" id="business-n-wizard-tabContent">
                        <ThemeFormFormlayoutFormwizard2ChooseAccount element="business-n-info" />
                        <ThemeFormFormlayoutFormwizard2BusinessSettings element="business-bank-wizard" />
                        <ThemeFormFormlayoutFormwizard2ContactDetails element="business-inquiry-wizard" />
                        <ThemeFormFormlayoutFormwizard2PayDetails element="business-pay-wizard" />
                        <div class="tab-pane fade" id="business-successful-wizard" role="tabpanel"
                            aria-labelledby="business-successful-wizard-tab">
                            <CommonSuccessfulWizard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { businessvertical } from "~/core/data/forms"
let desc = ref<string>("Fill up your true details and next proceed.")
let activeclass = ref<string>('business-n-info-tab')
</script>
