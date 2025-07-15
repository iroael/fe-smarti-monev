<template>
    <CommonCard3 colClass="col-md-12" pre="true" cardClass="title-line" preClass="f-m-light mt-1" headerTitle="true"
        title="Vertical Validation Wizard" :desc="desc">
        <div class="vertical-main-wizard">
            <div class="row g-3">
                <div class="col-xxl-3 col-xl-4 col-12">
                    <div class="nav flex-column header-vertical-wizard" id="wizard-tab" role="tablist"
                        aria-orientation="vertical"><a v-for="(item, index) in verticalstep" :key="index" class="nav-link"
                            :id="item.id" data-bs-toggle="pill" :href="item.href"
                            v-bind:class="{ 'active': item.id === activeclass }" role="tab" aria-controls="wizard-contact"
                            aria-selected="true">
                            <div class="vertical-wizard">
                                <div class="stroke-icon-wizard"><i class="fa " :class="item.icon"></i></div>
                                <div class="vertical-wizard-content">
                                    <h6>{{ item.label }}</h6>
                                    <p>{{ item.desc }} </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xxl-9 col-xl-8 col-12">
                    <div class="tab-content" id="wizard-tabContent">
                        <ThemeFormFormlayoutFormwizardWizardContact />
                        <ThemeFormFormlayoutFormwizardWizardCart />
                        <ThemeFormFormlayoutFormwizardWizardBanking />
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { verticalstep } from "~/core/data/forms"
let desc = ref<string>(" Fill up your true details and next proceed.")
let activeclass = ref<string>('wizard-contact-tab')
</script>