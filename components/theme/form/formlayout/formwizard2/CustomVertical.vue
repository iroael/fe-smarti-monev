<template>
    <CommonCard3 colClass="col-md-12" headerTitle="true" title="Custom vertical wizard">
        <div class="horizontal-wizard-wrapper vertical-options">
            <div class="row g-3">
                <div class="col-md-3 main-horizontal-header">

                    <div class="nav nav-pills horizontal-options" id="vertical-wizard-tab" role="tablist"
                        aria-orientation="vertical"><a class="nav-link "
                            v-bind:class="{ 'active': item.id === activeclass }" :id="item.id"
                            v-for="(item, index) in vertical" :key="index" data-bs-toggle="pill" :href="item.href"
                            role="tab" aria-controls="wizard-v-info" aria-selected="true">
                            <div class="horizontal-wizard">
                                <div class="stroke-icon-wizard"><i class="fa " :class="item.icon"></i></div>
                                <div class="horizontal-wizard-content">
                                    <h6>{{ item.label }}</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="tab-content dark-field" id="vertical-wizard-tabContent">
                        <ThemeFormFormlayoutFormwizard2WizardInfo element="wizard-v-info" />
                        <ThemeFormFormlayoutFormwizard2BankWizard element="bank-v-wizard" />
                        <ThemeFormFormlayoutFormwizard2InquiryWizard element="inquiry-v-wizard" :data="inquirytwo" />
                        <div class="tab-pane fade" id="successful-v-wizard" role="tabpanel"
                            aria-labelledby="successful-v-wizard-tab">
                            <CommonSuccessfulWizard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { vertical, inquirytwo } from "~/core/data/forms"
let desc = ref<string>("Fill up your true details and next proceed.")
let activeclass = ref<string>('wizard-v-info-tab')
</script>