<template>
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-start" data-bs-toggle="collapse" data-bs-target="#collapseicon"
          :aria-expanded="isActive ? 'true' : 'false'" aria-controls="collapseicon"
          :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle">Filter</button>
      </h2>
    </div>
    <div :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
      <div class="card-body filter-cards-view animate-chk">
        <div class="job-filter mb-2">
          <div class="faq-form">
            <input class="form-control" type="text" placeholder="Search..">
            <Icon class="search-icon" name="ph:magnifying-glass-bold" size="15"></Icon>
          </div>
        </div>
        <div class="job-filter">
          <div class="faq-form">
            <input class="form-control" type="text" placeholder="location..">
            <Icon class="search-icon" name="ph:map-pin-bold" size="20"></Icon>
          </div>
        </div>
        <div class="checkbox-animated">
          <label class="d-block" :for="item.id" v-for="(item, index) in filter" :key="index">
            <input class="checkbox_animated" :id="item.id" type="checkbox"> {{ item.title }}
          </label>

        </div>
        <button class="btn btn-primary text-center" type="button">Find jobs</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { filter } from "~/core/data/job"
let isActive = ref<boolean>(true)

function toggle() {
  isActive.value = !isActive.value
}
</script>