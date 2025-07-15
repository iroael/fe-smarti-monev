<template>
  <CommonCard4 colClass="col-12 col-xl-30 order-xl-ii todo-wrapper" topClass="header-top"
    cardhaderClass="card-no-border order-lists" meet="true" header="true" spanclass="f-light f-12 d-block f-w-500"
    addClass="+ Create" text="true" spantitle="80 Orders in a December" add="true" title="To do List"
    cardbodyClass="notification to-do-list">
    <ul class="custom-scrollbar">
      <li class="d-flex align-items-center" v-for="(item, index) in store.todoListData" :key="index">
        <div :class="'activity-dot-' + item.color"></div>
        <div class="d-flex w-100 align-items-center">
          <div class="checkbox-checked">
            <div class="form-check">
              <input class="form-check-input" id="list-1" type="checkbox" value="">
            </div>
          </div>
          <div>
            <h6>{{ item.name }}</h6><span class="f-w-500 f-12 f-light">{{ item.time }}</span>
          </div><span :class="'badge ms-auto badge-light-' + item.color">{{ item.status }}</span>
        </div>
      </li>
    </ul>
  </CommonCard4>
</template>

<script setup lang="ts">
import { useDashboardStore } from '~/stores/dashboard'
let store = useDashboardStore();
</script>

