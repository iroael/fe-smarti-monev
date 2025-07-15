<template>
    <CommonCard4 colClass="col-xl-3 col-sm-6" data="true" cardClass="card welcome-card">
        <div class="card-body">
            <h4 class="f-light f-w-500 mb-1">Have you tried</h4>
            <h2 class="mb-3">Upgrade Your Plan</h2>
            <button class="btn btn-primary btn-hover-effect" type="button">Upgrade Plan</button>
        </div>
        <div class="welcome-image"> <img class="img-fluid" src="/images/dashboard-3/1.png" alt="upgrade"></div>

    </CommonCard4>

    <CommonCard1 colClass="col-xl-3 col-sm-6" cardClass="project-widget widget-1 title-line"
        headerClass="card-no-border pb-0" :dropdown="false" bodyClass="widget-bottom-content">
        <template #topContent>
            <div>
                <h3 class="f-w-600">Active Projects</h3><span class="f-12 f-light f-w-500">Projects this month</span>
            </div>
        </template>
        <template #rightContent>
            <div class="dropdown icon-dropdown d-xxl-none1">
                <button class="btn dropdown-toggle" id="active-project" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <svg>
                        <use href="/svg/icon-sprite.svg#more-horizontal"></use>
                    </svg>
                </button>
                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="active-project"><a class="dropdown-item"
                        href="#">Today</a><a class="dropdown-item" href="#">Tomorrow</a><a class="dropdown-item"
                        href="#">Yesterday</a></div>
            </div>
        </template>
        <template #headingBottom>
            <div class="widget-middle-content">
                <div class="d-flex align-items-center">
                    <h2>106</h2><span class="f-w-500 txt-warning f-12">
                        <Icon class="me-1" size="25" name="material-symbols:trending-up-rounded"></Icon><span>+50%</span>
                    </span>
                </div>
            </div>
        </template>
        <div class="progress-details">
            <ul>
                <li class="bg-secondary">
                    <svg>
                        <use href="/svg/icon-sprite.svg#car-white"></use>
                    </svg>
                </li>
                <li class="bg-success">
                    <svg>
                        <use href="/svg/icon-sprite.svg#game"></use>
                    </svg>
                </li>
                <li class="bg-primary">
                    <svg>
                        <use href="/svg/icon-sprite.svg#home-white"></use>
                    </svg>
                </li>
            </ul>
            <h6 class="txt-success f-w-600">56%</h6>
        </div>
        <div class="progress" style="height: 5px;">
            <div class="progress-bar bg-success" role="progressbar" style="width: 56%" aria-valuenow="50" aria-valuemin="0"
                aria-valuemax="100"></div>
        </div>
    </CommonCard1>
    <CommonCard1 colClass="col-xl-3 col-sm-6" cardClass="project-widget widget-1 title-line"
        headerClass="card-no-border pb-0" :dropdown="false" bodyClass="pt-0" rightDropdown="d-xxl-none"
        iconDropdown="icon-dropdown" :defaultValue="defaultValue">
        <template #topContent>
            <div>
                <h3 class="f-w-600">Projects Earnings</h3><span class="f-12 f-light f-w-500">From last Week</span>
            </div>
        </template>
        <template #headingBottom>
            <div class="widget-middle-content">
                <div class="d-flex align-items-center">
                    <h2>$202</h2><span class="f-w-500 txt-warning f-12">
                        <Icon class="me-1" name="material-symbols:trending-up-rounded"></Icon><span>+60%</span>
                    </span>
                </div>
            </div>
        </template>
        <div class="earning-chart-container tooltip-small">
            <div id="earnings-chart">
                <CommonChartsProjectEarning />
            </div>
        </div>
    </CommonCard1>
    <ThemeDashboardProjectClient />
    <ThemeDashboardProjectCalender />
    <ThemeDashboardProjectStatus />
    <ThemeDashboardProjectChat />
    <ThemeDashboardProjectUpdate />
    <ThemeDashboardProjectAvgEarning />
    <ThemeDashboardProjectDailyTask />
</template>
<script setup lang="ts">
import { projectEarningSeries, projectEarningOption } from '~/core/data/chartOption'
let defaultValue = ref<string>('<svg><use href="/svg/icon-sprite.svg#more-horizontal"></use></svg>')
</script>

