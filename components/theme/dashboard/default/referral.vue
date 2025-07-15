<template>
  <CommonCard4 colClass="col-xl-6 col-md-6 order-md-ii" topClass="header-top" cardClass="card title-line"
    cardhaderClass="card-no-border report-optio" text="true" meet="true" header="true"
    spanclass="f-light f-12 d-block f-w-500" spantitle="Up to $100 per referral" title="Top Referrals Pages"
    dropdown="true" dropdownClass="Generate Report" item="Monthly" item1="weekly" item2="yearly" cardbodyClass="pt-0">
    <div class="referral-content">
      <div class="referral-left-details">
        <div class="d-flex gap-1">
          <h2>129,900</h2><span class="badge badge-light-warning">
            <Icon class="me-1" name="material-symbols:trending-up"></Icon>4.5%
          </span>
        </div><span class="f-light f-12 f-w-500">vs. previous month</span>
      </div>
      <div class="referral-image"> <img src="/images/dashboard/1.png" alt="vector"></div>
    </div>
    <div class="progress-stacked referral-progress">
      <div class="progress" role="progressbar" aria-label="Segment one" aria-valuenow="40" aria-valuemin="0"
        aria-valuemax="100" :style="item.width" v-for="(item, index) in store.referralsData.progress" :key="index">
        <div class="progress-bar" :class="item.color"></div>
      </div>
    </div>
    <ul class="referral-list">
      <li v-for="(item, index) in store.referralsData.list" :key="index">
        <div :class="item.color"></div><nuxt-link class="f-light f-w-500" to="/pages/search">{{ item.name
        }}</nuxt-link><span class="f-12 f-w-500">{{ item.amount }}%</span>
      </li>
    </ul>
  </CommonCard4>
</template>

<script setup lang="ts">
import { useDashboardStore } from '~/stores/dashboard'
let store = useDashboardStore();
</script>

