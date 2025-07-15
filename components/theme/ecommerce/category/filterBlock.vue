<template>
   <div class="list-product-header">
      <div>
         <div class="light-box" @click="showFilter()"><a data-bs-toggle="collapse" href="#collapseProduct" role="button"
               aria-expanded="false" aria-controls="collapseProduct">
               <Icon class="filter-icon " :class="show ? 'hide' : 'show'" name="material-symbols:filter-alt"></Icon><i
                  class="icon-close filter-close " :class="show ? 'show' : 'hide'"></i>
            </a></div><nuxt-link class="btn btn-primary" to="/ecommerce/add_Product"><i class="fa fa-plus"></i>Add
            Product</nuxt-link>
      </div>
      <div :class="show ? 'show' : 'd-none'" id="collapseProduct">
         <div class="card card-body list-product-body">
            <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 g-3">
               <div class="col">
                  <CommonInputFieldsSelectBox :options="productOption" classes="form-select" />
               </div>
               <div class="col">
                  <CommonInputFieldsSelectBox :options="categoryOption" classes="form-select" />
               </div>
               <div class="col">
                  <CommonInputFieldsSelectBox :options="subCategoryOption" classes="form-select" />
               </div>
               <div class="col">
                  <CommonInputFieldsSelectBox :options="statusOption" classes="form-select" />
               </div>
               <div class="col">
                  <CommonInputFieldsSelectBox :options="priceOption" classes="form-select" />
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
let productOption: string[] = ['Choose Product', 'Apple iphone 13 Pro', 'Wood Chair', 'M185 Compact Wireless Mouse']
let categoryOption: string[] = ['Choose Category', 'Furniture', 'Smart Gadgets', 'Electrics']
let subCategoryOption: string[] = ['Choose Sub Category', 'Smart Phones', 'Smart Watches', 'Wireless headphone']
let statusOption: string[] = ['Status', 'Sold Out', 'In Stock', 'Pre Order', 'Limited Stock']
let priceOption: string[] = ['Price', '56000.00', '19000.00', '10000.00', '15000.00', '99000.00']
let show = ref<boolean>(false)
function showFilter() {
   show.value = !show.value
}
</script>

