<template>
    <div class="col-xl-5 order-xl-vi col-xl-100 col-md-6 col-12">
        <div class="row">

            <CommonCard4 colClass="col-12 col-xl-50" topClass="header-top" cardClass="card visitor-customer title-line"
                cardhaderClass="card-no-border" meet="true" header="true" title="Weekly Visitors" dropdown="true"
                rightClass="square-legend" box="true" boxitem="Male" boxitem1="Female" dropdownClass="Report" item="Monthly"
                item1="weekly" item2="yearly">
                <div class="row">
                    <div class="col-xl-7 col-xl-100 col-md-7 col-sm-8">
                        <div class="weekly-visitor" id="weekly-visitor">
                            <CommonChartsWeeklyVisitor />
                        </div>
                    </div>
                    <div class="col-xl-5 d-xl-none1 col-md-5 col-sm-4">
                        <div class="average-Visitors">
                            <div> <span class="f-12 f-light f-w-500">Average Male Visitors</span>
                                <div class="order-content">
                                    <h3 class="f-w-600">3,908</h3>
                                    <div> <span class="txt-success f-12 f-w-600">
                                            <Icon class="stroke-success" name="lucide:trending-up"></Icon>-27%
                                        </span></div>
                                </div>
                            </div>
                            <div> <span class="f-12 f-light f-w-500">Average Female Visitors</span>
                                <div class="order-content">
                                    <h3 class="f-w-600">1,204</h3>
                                    <div> <span class="txt-danger f-12 f-w-600">
                                            <Icon class="stroke-danger" name="lucide:trending-down"></Icon> -0.10%
                                        </span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CommonCard4>

            <CommonCard4 colClass="col-12 col-xl-50" rightClass="customer-header" topClass="header-top"
                cardClass="card height-equal title-line" cardhaderClass="card-no-border" meet="true" header="true"
                addClass="Live view" icon="true" add="true" svg="eye-contact" title="Customer Rate" cardbodyClass=" pt-0">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="customer-rate">
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="76.8"
                                aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar"></div>
                            </div><span class="f-light f-12 f-w-500">First time buying</span>
                            <h3 class="f-w-600">76.8%</h3>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="customer-rate">
                            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="76.8"
                                aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar progress_1"></div>
                            </div><span class="f-light f-12 f-w-500">Returning</span>
                            <h3 class="f-w-600">25.4%</h3>
                        </div>
                    </div>
                </div>
            </CommonCard4>

        </div>
    </div>
</template>

<script setup lang="ts">
import { visitorOption, visitorSeries } from '~/core/data/chartOption'
</script>

