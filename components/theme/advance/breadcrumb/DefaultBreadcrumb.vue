<template>
     <CommonCard3 colClass="col-sm-6" cardClass="title-line height-equal" pre="true" preClass="f-m-light mt-1"
          headerTitle="true" title="Default Breadcrumb" :desc="desc">
          <nav class="breadcrumb" v-for="(item, index) in breadcrumb" :key="index"><a class="breadcrumb-item"
                    href="javascript:void(0)">{{ item.main }}</a><span class="breadcrumb-item " :class="item.active"
                    href="javascript:void(0)">{{ item.title }}</span><span v-if="item.actives" class="breadcrumb-item "
                    :class="item.actives">{{
                         item.mains }}</span></nav>
     </CommonCard3>
</template>
<script lang="ts" setup>
import { breadcrumb } from "~/core/data/advance"
let desc = ref<string>("You can set breadcrumb using <code>.breadcrumb </code> class.")

</script>