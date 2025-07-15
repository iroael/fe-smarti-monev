<template>
    <div class="col-xl-6 box-col-6">
        <div class="row tread-cards">

            <CommonCardData1 colClass="col-xl-6 col-sm-6" v-for="(item, index) in store.cardsData" :key="index"
                cardbodyClass="common-box" cardClass="card widget-1">
                <div class="widget-icon widget-round" :class="item.color">
                    <svg>
                        <use :href="'/svg/icon-sprite.svg#' + item.svg"> </use>
                    </svg>
                </div>
                <div>
                    <h3 class="f-w-600">{{ item.title }}</h3><span class="f-w-500 f-light f-12">{{ item.desc }} </span>
                </div>
            </CommonCardData1>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useDashboardStore } from '~/stores/dashboard'
let store = useDashboardStore();
</script>