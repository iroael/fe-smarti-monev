<template>
  <div class="email-app-sidebar">
    <button class="btn btn-primary emailbox" type="button" data-bs-toggle="modal" data-bs-target="#compose_mail"><i
        class="fa fa-plus"></i>Compose Email</button>
    <ul class="nav nav-pills main-menu email-category" id="email-pills-tab" role="tablist">
      <li class="nav-item"><a class="nav-link" :class="index == 0 ? 'active' : ''" id="inbox-pill-tab" data-bs-toggle="pill"
          :href="'#' + item.id" role="tab" aria-controls="inbox-pill" aria-selected="false"
          v-for="(item, index) in store.letterboxSidebarData" :key="index">
          <svg class="stroke-icon" :class="item.color ? item.color : ''">
            <use :href="'/svg/icon-sprite.svg#' + item.svg"></use>
          </svg>
          <div>{{ item.name }}<span class="badge" v-if="index == 0">12</span>
          </div>
        </a></li>
      <li class="nav-item"><a class="nav-link" type="button" data-bs-toggle="modal" data-bs-target="#label-pill-modal"><i
            class="fa fa-plus"></i>Add Label</a></li>
    </ul>
  </div>
  <teleport to='body'>
    <CommonModalsAddLabel />
    <CommonModalsCompose />
  </teleport>
</template>

<script setup lang="ts">
import {useAppStore} from '~/stores/app'
let store = useAppStore();
</script>

