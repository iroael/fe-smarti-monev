<template>
    <CommonCard1 colClass="col-xl-3 col-sm-6" cardClass="project-widget overflow-hidden widget-1 title-line"
        headerClass="card-no-border pb-0" bodyClass="p-0" :dropdown="false" iconDropdown="icon-dropdown"
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

    <CommonCard4 colClass="col-xxl-7 col-xl-6 col-lg-6 col-md-6 box-col-6" rightClass="right-xl-dropdown"
        topClass="header-top" cardClass="card height-equal title-line" cardhaderClass="card-no-border" meet="true"
        header="true" title="Projects Overview" dropdown="true" dropdownClass="Monthly" item="Monthly" item1="weekly"
        item2="yearly" cardbodyClass="pt-0">
        <div class="project-overview-wrapper">
            <div id="project-overview">
                <CommonChartsProjectOverview />
            </div>
            <div class="project-back-bar">
                <div id="project-bar">
                    <CommonChartsProjectBar />
                </div>
            </div>
        </div>
    </CommonCard4>
</template>
<script lang="ts" setup>
let defaultValue = ref<string>('<svg><use href="/svg/icon-sprite.svg#more-horizontal"></use></svg>')
</script>

