<template>
    <CommonCard3 colClass="col-md-12" headerTitle="true" title="Business vertical wizard">
        <div class="horizontal-wizard-wrapper vertical-options vertical-variations">
            <div class="row g-3">
                <div class="col-xl-3 main-horizontal-header">
                    <div class="nav nav-pills horizontal-options" id="vertical-n-wizard-tab" role="tablist"
                        aria-orientation="vertical">
                        <a class="nav-link " v-bind:class="{ 'active': item.id === activeclass }" :id="item.id"
                            data-bs-toggle="pill" v-for="(item, index) in business" :key="index" :href="item.href"
                            role="tab" aria-controls="wizard-n-info" aria-selected="true">
                            <div class="horizontal-wizard">
                                <div class="stroke-icon-wizard"><span>{{ item.num }}</span></div>
                                <div class="horizontal-wizard-content business-wizard">
                                    <h6>{{ item.label }}</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xl-9">
                    <div class="tab-content dark-field" id="vertical-n-wizard-tabContent">
                        <ThemeFormFormlayoutFormwizard2ChooseAccount />
                        <ThemeFormFormlayoutFormwizard2BusinessSettings />
                        <ThemeFormFormlayoutFormwizard2ContactDetails />
                        <ThemeFormFormlayoutFormwizard2PayDetails />
                        <div class="tab-pane fade" id="successful-n-wizard" role="tabpanel"
                            aria-labelledby="successful-n-wizard-tab">
                            <CommonSuccessfulWizard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { business } from "~/core/data/forms"
let desc = ref<string>("Fill up your true details and next proceed.")
let activeclass = ref<string>('wizard-n-info-tab')
</script>