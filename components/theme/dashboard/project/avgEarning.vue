<template>
    <CommonCard4 colClass="col-xl-4 col-md-6 box-col-4" topClass="header-top" cardClass="card title-line earning-tread"
        cardhaderClass="card-no-border" meet="true" header="true" title="Avg. Earnings" cardbodyClass="pt-0">
        <div class="row gy-2">
            <div class="col-xxl-6 col-md-12 col-sm-6">
                <div class="earning-left-content">
                    <h2>$342,091.56</h2>
                    <div><span class="f-12 f-w-500 txt-warning"> <i class="me-1"
                                data-feather="trending-up"></i>+20%</span><span class="f-12 f-w-500 f-light ms-2">Than Last
                            Week</span></div>
                </div>
            </div>
            <div class="col-xxl-6 d-xxl-block d-xl-none col-md-12 col-sm-6">
                <ul class="earning-right-content">
                    <li> <span class="f-12 f-w-500 f-light">10:45 PM</span><span
                            class="f-12 f-w-500 txt-success">+732.67</span></li>
                    <li> <span class="f-12 f-w-500 f-light">03:20 AM</span><span
                            class="f-12 f-w-500 txt-danger">-108.09</span></li>
                </ul>
            </div>
        </div>
        <ul class="earning-buttons">
            <li>
                <button class="btn btn-light" type="button">1d</button>
            </li>
            <li>
                <button class="btn btn-light" type="button">10d</button>
            </li>
            <li>
                <button class="btn btn-light" type="button">1m</button>
            </li>
            <li>
                <button class="btn btn-light" type="button">6m</button>
            </li>
            <li>
                <button class="btn btn-light" type="button">1y</button>
            </li>
        </ul>
        <div class="avg-earning-chart-container">
            <div id="earning-average">
                <CommonChartsEarningAverage />
            </div>
        </div>
    </CommonCard4>
</template>

<script setup lang="ts">
import { avgEarningOption, avgEarningSeries } from '~/core/data/chartOption'
let defaultValue = '<svg><use href="/svg/icon-sprite.svg#more-horizontal"></use></svg>'
</script>

