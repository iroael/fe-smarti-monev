<template>
    <CommonCard3 colClass="col-md-12" headerTitle="true" title="Custom horizontal wizard">
        <div class="horizontal-wizard-wrapper">
            <div class="row g-3">
                <div class="col-12 main-horizontal-header">
                    <div class="nav nav-pills horizontal-options" id="horizontal-wizard-tab" role="tablist"
                        aria-orientation="vertical"><a class="nav-link "
                            v-bind:class="{ 'active': item.id === activeclass }" :id="item.id"
                            v-for="(item, index) in customwizard" :key="index" data-bs-toggle="pill" :href="item.href"
                            role="tab" aria-controls="wizard-info" aria-selected="true">
                            <div class="horizontal-wizard">
                                <div class="stroke-icon-wizard"><i class="fa " :class="item.icon"></i></div>
                                <div class="horizontal-wizard-content">
                                    <h6>{{ item.label }}</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-12">
                    <div class="tab-content dark-field" id="horizontal-wizard-tabContent">
                        <ThemeFormFormlayoutFormwizard2WizardInfo />
                        <ThemeFormFormlayoutFormwizard2BankWizard />
                        <ThemeFormFormlayoutFormwizard2InquiryWizard :data="inquiry" />
                        <div class="tab-pane fade" id="successful-wizard" role="tabpanel"
                            aria-labelledby="successful-wizard-tab">

                            <CommonSuccessfulWizard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { customwizard, inquiry } from "~/core/data/forms"
let desc = ref<string>("Fill up your true details and next proceed.")
let activeclass = ref<string>('wizard-info-tab')
</script>