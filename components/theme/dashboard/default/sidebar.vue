<template>
  <div class="col-xl-3 col-xl-100">
    <div class="card">
      <div class="row">
        <CommonCard4 colClass="col-xl-12 col-xl-40 col-sm-6 order-xl-ii discount-report" topClass="header-top"
          cardhaderClass="card-no-border" meet="true" header="true" spanclass="d-block f-w-500 f-light f-12" text="true"
          spantitle="Special Discount" txt="true" txtClass="txt-primary" off="60% OFF" title="Total Transactions"
          cardbodyClass="transaction-report">
          <div class="total-transaction-wrapper">
            <div id="total-transaction-chart">
              <CommonChartsTotalTransactionChart />
            </div>
          </div>
          <div class="report-content">
            <h5>Report</h5>
            <ul>
              <li> <span class="f-12 f-light f-w-500">This Week</span>
                <h6>+78.32 %</h6>
                <div class="progress progress-stripe-primary with-light-background" style="height: 5px">
                  <div class="progress-bar-animated progress-bar-striped" role="progressbar" style="width: 70%"
                    aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </li>
              <li> <span class="f-12 f-light f-w-500">This Week</span>
                <h6>-34.52 %</h6>
                <div class="progress progress-stripe-success with-light-background" style="height: 5px">
                  <div class="progress-bar-animated progress-bar-striped" role="progressbar" style="width: 70%"
                    aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </li>
            </ul>
          </div>
          <div class="report-button">
            <div>
              <h5 class="f-w-600">+95.62 % <span class="f-light f-12 f-w-500">Performance</span></h5>
            </div><a class="btn btn-primary f-w-500 f-12" href="#!">New report
              <svg class="svg-sprite">
                <use href="/svg/icon-sprite.svg#logout"></use>
              </svg></a>
          </div>
        </CommonCard4>
        <CommonCard4 colClass="col-xl-12 col-xl-30 col-sm-6 order-xl-ii customer-order" topClass="header-top order-lists"
          cardhaderClass="card-no-border" text="true" meet="true" header="true" spanclass="d-block f-w-500 f-light f-12"
          spantitle="80 Orders in a December" title="Recent Orders" dropdown="true" dropdownClass="All Orders"
          item="Success" item1="Pending" item2="Deliver" cardbodyClass="transaction-list recent-orders">
          <ul class="order-list mb-0">
            <li v-for="(item, index) in store.ordersData" :key="index">
              <div class="light-card"> <img :src="item.img" alt="TV"></div>
              <div class="order-content">
                <div>
                  <h6 class="mb-1">{{ item.name }}</h6><span> <span class="badge badge-light-primary">{{ item.no
                  }}</span><span class="f-light f-w-500 f-12 ms-2">{{ item.qty }}</span></span>
                </div>
                <div class="text-end">
                  <div class="dropdown icon-dropdown">
                    <button class="btn dropdown-toggle" id="order-1" type="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <svg>
                        <use href="/svg/icon-sprite.svg#more-horizontal"></use>
                      </svg>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end" aria-labelledby="order-1"><nuxt-link
                        class="dropdown-item" to="/ecommerce/cart">Add to cart</nuxt-link><a class="dropdown-item"
                        href="#">Cancel</a></div>
                  </div><span class="f-light f-w-500 f-12">${{ item.amount }}</span>
                </div>
              </div>
            </li>
          </ul>
        </CommonCard4>
        <div class="col-12 col-xl-100 order-xl-i">
          <div class="offer-banner">
            <div class="offer-content">
              <h2>20% Off Themes</h2>
              <p class="f-w-500 f-12">Get all the latest wordpress theme and plugin coupon in this board.</p>
            </div><img class="img-fluid" src="/images/dashboard/banner.png" alt="vector">
          </div>
        </div>
        <ThemeDashboardDefaultTodo />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
let dropdownValue: string = '<svg><use href="/svg/icon-sprite.svg#more-horizontal"></use></svg>'
import { useDashboardStore } from '~/stores/dashboard'
let store = useDashboardStore();
</script>