<template>
    <ThemeWidgetsChartTotalSale />
    <ThemeWidgetsChartTotalProject />
    <ThemeWidgetsChartTotalProduct />
    <CommonCard1 colClass="col-md-12 box-col-12" cardClass="o-hidden" bodyClass="bar-chart-widget" title="Monthly  History"
        :headerTop="false">
        <div class="bottom-content">
            <div class="row">
                <div class="col-12">
                    <div id="chart-widget4">
                        <CommonChartsChartWidget4 />
                    </div>
                </div>
            </div>
        </div>
    </CommonCard1>
    <CommonCard1 colClass="col-xl-6 col-lg-12 box-col-6 xl-50" title="Skill Status" :headerTop="false">
        <div class="chart-container skill-chart">
            <div id="circlechart">
                <CommonChartsCircleChart />
            </div>
        </div>
    </CommonCard1>
    <CommonCard1 colClass="col-xl-6 col-lg-12 box-col-6 xl-50" title="Order Status">
        <div class="chart-container progress-chart">
            <ThemeWidgetsChartOrderStatus />
        </div>
    </CommonCard1>
    <div class="xl-50 col-xl-7 col-lg-12">
        <CommonCard1 colClass="small-chart-widget chart-widgets-small" :headerTop="false" title="Live Products">
            <div class="chart-container">
                <div class="row">
                    <div class="col-12">
                        <div id="chart-widget6">
                            <CommonChartsChartWidget6 />
                        </div>
                    </div>
                </div>
            </div>
        </CommonCard1>
    </div>
    <CommonCard1 class="xl-50 col-xl-5 col-lg-12" :headerTop="false" title="Turn over">
        <div class="chart-container">
            <div class="row">
                <div class="col-12">
                    <div id="chart-widget7">
                        <CommonChartsChartWidget7 />
                    </div>
                </div>
            </div>
        </div>
    </CommonCard1>
    <ThemeWidgetsChartCurrency />
</template>
<script setup lang="ts">
import { useDashboardStore } from '~/stores/dashboard'
let store = useDashboardStore()
</script>

