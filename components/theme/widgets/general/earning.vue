<template>
    <CommonCard4 colClass="col-md-6 order-md-iii" topClass="header-top" cardClass="card title-line"
        cardhaderClass="card-no-border" meet="true" header="true" spanclass="d-block f-w-500 f-light f-12" text="true"
        spantitle="Weekly Earning Overview" title="Earning Reports" cardbodyClass="pt-0">
        <div class="report-chart-container">
            <CommonChartsEarningChart />
        </div>
        <ul class="report-list">
            <li>
                <div class="light-card report-icon">
                    <svg>
                        <use href="/svg/icon-sprite.svg#status-up"></use>
                    </svg>
                </div>
                <div> <span class="f-12 f-w-500 f-light">Profit</span>
                    <h4 class="mt-1 f-w-600">$98.50<span class="badge badge-light-primary ms-1">
                            <Icon class="me-1" name="material-symbols:trending-up"></Icon>13.5%
                        </span></h4>
                </div>
            </li>
            <li>
                <div class="light-card report-icon">
                    <svg>
                        <use href="/svg/icon-sprite.svg#expense"></use>
                    </svg>
                </div>
                <div> <span class="f-12 f-w-500 f-light">Expense</span>
                    <h4 class="mt-1 f-w-600">$109.90<span class="badge badge-light-warning ms-1">
                            <Icon class="me-1" name="material-symbols:trending-down"></Icon>1.05%
                        </span></h4>
                </div>
            </li>
        </ul>
    </CommonCard4>

    <CommonCard4 colClass="col-xl-6 box-col-6 order-md-vii" rightClass="right-xl-dropdown" topClass="header-top"
        cardClass="card height-equal title-line" cardhaderClass="card-no-border" meet="true" header="true"
        title="Projects Overview" dropdown="true" dropdownClass="Monthly" item="Monthly" item1="weekly" item2="yearly"
        cardbodyClass="pt-0">
        <div class="project-overview-wrapper">
            <div id="project-overview">
                <CommonChartsProjectOverview1 />
            </div>
            <div class="project-back-bar">
                <div id="project-bar">
                    <CommonChartsProjectBar1 />
                </div>
            </div>
        </div>
    </CommonCard4>


    <CommonCard4 colClass="col-xl-4 col-md-6 order-md-viii" topClass="header-top" rightClass="detail-option"
        cardClass="card height-equal title-line" cardhaderClass="card-no-border" text="true" meet="true" header="true"
        spanclass="f-12 f-w-500 f-light d-block" spantitle="780,765 Sales" title="Activities" dropdown="true"
        dropdownClass="Order Details" item="Web designer" item1="Development" item2="Marketing"
        cardbodyClass="pt-0 notification to-do-list activities-wrapper">

        <ul class="activity-details custom-scrollbar">
            <li class="d-flex align-items-center" v-for="(item, index) in store.activitiesData" :key="index">
                <div :class="'activity-dot-' + item.color"></div>
                <div class="d-flex w-100 align-items-center" v-if="item.desc">
                    <div> <span class="f-w-500 f-12 f-light">{{ item.desc }}</span></div><span
                        class="badge ms-auto f-light">{{ item.time }} </span>
                </div>
                <div class="d-flex w-100 align-items-center" v-else>
                    <div>
                        <h6>{{ item.title }} <a href="#!">{{ item.id }}</a></h6>
                    </div><span class="badge ms-auto f-light">{{ item.time }}</span>
                </div>
            </li>
        </ul>

    </CommonCard4>
    <ThemeWidgetsGeneralActivity />
</template>

<script setup>

import { useDashboardStore } from '~/stores/dashboard'
let store = useDashboardStore();
</script>

<style lang="scss" scoped></style>