<template>
       <div class="container-fluid">
              <div class="row">
                     <CommonCard1 colClass="col-sm-12" :header="false">
                            <ThemeEcommerceCategoryFilterBlock />
                            <ThemeEcommerceProductList :Data="getPaginateData()">
                                   <div class="datatable-top">
                                          <div class="datatable-dropdown">
                                                 <label>
                                                        <select class="datatable-selector" v-model="perPageData">
                                                               <option value="5">5</option>
                                                               <option value="10" selected="">10</option>
                                                               <option value="15">15</option>
                                                               <option value="20">20</option>
                                                               <option value="25">25</option>
                                                        </select> entries per page
                                                 </label>
                                          </div>
                                          <div class="datatable-search">
                                                 <input class="datatable-input" placeholder="Search..." type="search"
                                                        v-model="search" title="Search within table"
                                                        aria-controls="project-status">
                                          </div>
                                   </div>
                                   <template #bottom>

                                          <div class="datatable-bottom">
                                                 <div class="datatable-info">Showing 1 to {{ perPageData }} of
                                                        {{ store.productListData.length }} entries</div>
                                                 <nav class="datatable-pagination">
                                                        <ul class="datatable-pagination-list">
                                                               <li class="datatable-pagination-list-item datatable-hidden datatable-disabled"
                                                                      @click="currentPage > 1 ? currentPage-- : null"><a
                                                                             data-page="1"
                                                                             class="datatable-pagination-list-item-link">‹</a>
                                                               </li>
                                                               <li class="datatable-pagination-list-item"
                                                                      v-for="(page, index) in Math.ceil(store.productListData.length / perPageData)"
                                                                      :key="index"
                                                                      :class="page == currentPage ? 'datatable-active' : ''"
                                                                      @click="currentPage = page"><a data-page="1"
                                                                             class="datatable-pagination-list-item-link">{{ page }}</a>
                                                               </li>
                                                               <li class="datatable-pagination-list-item"
                                                                      @click="currentPage < Math.ceil(store.productListData.length / perPageData) ? currentPage++ : null">
                                                                      <a data-page="2"
                                                                             class="datatable-pagination-list-item-link">›</a>
                                                               </li>
                                                        </ul>
                                                 </nav>
                                   </div>
                            </template>
                     </ThemeEcommerceProductList>
              </CommonCard1>
       </div>
</div></template>

<script setup lang="ts">
import {useProductStore} from '~/stores/ecommerce'
useHead({
    title: "Product list | Yuri - Premium Nuxt Admin Template"
})
let store = useProductStore();
let perPageData = ref(10)
let currentPage = ref(1)
let search = ref('')
let filterData = computed(() => {
        return store.productListData.filter((item) => {
                return (item.name.toLowerCase().includes(search.value.toLowerCase())||item.category.toLowerCase().includes(search.value.toLowerCase())||item.product.toLowerCase().includes(search.value.toLowerCase()))
        })
})
function getPaginateData(){
    let start = (currentPage.value - 1) * perPageData.value;
    let end = currentPage.value * perPageData.value
    return filterData.value.slice(start,end)
}
let NumOfPages = ref(Math.ceil(store.CategoryPageData.length / perPageData.value))
</script>

