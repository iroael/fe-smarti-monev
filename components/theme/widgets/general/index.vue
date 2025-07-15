<template>
    <CommonCard1 colClass="col-xl-3 col-md-4 col-sm-6" cardClass="project-widget widget-1 title-line"
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
                        <Icon class="me-1" name="material-symbols:trending-up-rounded"></Icon><span>+50%</span>
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
    <CommonCard1 colClass="col-xl-3 col-md-4 col-sm-6" cardClass="project-widget widget-1 title-line"
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
    <CommonCard1 colClass="col-xl-3 col-md-4 col-sm-6" cardClass="project-widget overflow-hidden widget-1 title-line"
        headerClass="card-no-border pb-0" :dropdown="false" bodyClass="p-0" iconDropdown="icon-dropdown"
        :defaultValue="defaultValue">
        <template #topContent>
            <div>
                <h3 class="f-w-600">Total Clients</h3><span class="f-12 f-light f-w-500">Compare to last month</span>
            </div>
        </template>
        <template #headingBottom>
            <div class="widget-middle-content">
                <div class="d-flex align-items-center">
                    <h2>930</h2><span class="f-w-500 txt-warning f-12">
                        <Icon class="me-1" name="material-symbols:trending-up-rounded"></Icon><span>+20%</span>
                    </span>
                </div>
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
        <div class="earning-chart-container tooltip-small">
            <div id="earnings-chart">
                <CommonChartsTotalClients />
            </div>
        </div>
    </CommonCard1>
    <ThemeWidgetsGeneralPipline />
</template>
<script setup lang="ts">
let defaultValue = '<svg><use href="/svg/icon-sprite.svg#more-horizontal"></use></svg>'
</script>