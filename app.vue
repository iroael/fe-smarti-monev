<template>
   <div class="loader-wrapper" v-if="showLoader">
      <div class="loader"></div>
   </div>
   <div>

      <NuxtLayout>


         <NuxtPage />


      </NuxtLayout>

   </div>
</template>
<script setup lang="ts">
import { useProductStore } from "~/stores/ecommerce"
const showLoader = ref<boolean>(false)
let store = useProductStore();
useHead({
   title: 'Smarti - Sistem Monitoring Rumah Terintegrasi'
})
onMounted(() => {
   if (process.client) {
      let storeData = localStorage.getItem('cartItem')
      if (storeData) {
         let cart = JSON.parse(storeData)
         store.defaultcart(cart)
      }
   }
})
onMounted(() => {
   showLoader.value = true
   setTimeout(() => {
      showLoader.value = false
   }, 2000);
})
</script>