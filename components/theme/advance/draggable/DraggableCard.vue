<template>
  <CommonCard3 colClass="col-xl-4 col-md-6" v-for="(items, index) in draggable" :key="index" :cardClass="items.cardclass"
    pre="true" preClass="f-m-light mt-1" headerTitle="true" :title="items.title" :desc="items.desc">
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, index) in items.children" :key="index"
        :class="item.activeclass == true ? 'active bg-warning-light' : ''"> <i class="icofont icofont-arrow-right"></i>{{
          item.title }}</li>
    </ul>
  </CommonCard3>
</template>
<script lang="ts" setup>
import { draggable } from "~/core/data/advance"
</script>