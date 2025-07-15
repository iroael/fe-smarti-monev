<template>
       <div class="container-fluid">
              <div class="row">
                     <CommonCard1 colClass="col-sm-12" :header="false">
                            <ThemeEcommerceCategoryFilterBlock />
                            <ThemeEcommerceCategory :Data="filterData">
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
                                                 <input class="datatable-input form-control" placeholder="Search..." type="search"
                                                        v-model="search" title="Search within table"
                                                        aria-controls="project-status">
                                          </div>
                                   </div>
                                   <template #bottom>
                                          <div class="datatable-bottom">
                                                 <div class="datatable-info">Showing 1 to {{ perPageData }} of
                                                        {{ store.CategoryPageData.length }} entries</div>
                                                 <nav class="datatable-pagination">
                                                        <ul class="datatable-pagination-list">
                                                               <li class="datatable-pagination-list-item datatable-hidden datatable-disabled"
                                                                      @click="currentPage > 1 ? currentPage-- : null"><a
                                                                             data-page="1"
                                                                             class="datatable-pagination-list-item-link">‹</a>
                                                               </li>
                                                               <li class="datatable-pagination-list-item"
                                                                      v-for="(page, index) in Math.ceil(store.CategoryPageData.length / perPageData)"
                                                                      :key="index"
                                                                      :class="page == currentPage ? 'datatable-active' : ''"
                                                                      @click="currentPage = page"><a data-page="1"
                                                                             class="datatable-pagination-list-item-link">{{ page }}</a>
                                                               </li>
                                                               <li class="datatable-pagination-list-item"
                                                                      @click="currentPage < Math.ceil(store.CategoryPageData.length / perPageData) ? currentPage++ : null">
                                                                      <a data-page="2"
                                                                             class="datatable-pagination-list-item-link">›</a>
                                                               </li>
                                                        </ul>
                                                 </nav>
                                          </div>
                                   </template>
                            </ThemeEcommerceCategory>
                     </CommonCard1>
              </div>
       </div>
</template>

<script setup lang="ts">
import {useProductStore} from '~/stores/ecommerce'
useHead({
    title: "Category Page | Yuri - Premium Nuxt Admin Template"
})
interface category{
    image:string,
    name:string,
    category:string,
    color:string,
    status:string
  }
let store = useProductStore();
let perPageData = ref(10)
let currentPage = ref(1)
let search = ref('')
function getPaginateData(){
    let start = (currentPage.value - 1) * perPageData.value;
    let end = currentPage.value * perPageData.value
    return store.CategoryPageData.slice(start,end)
}
let NumOfPages = ref(Math.ceil(store.CategoryPageData.length / perPageData.value))
let filterData = computed(() => {
      return getPaginateData().filter((item:category) => {
              return item.name.toLowerCase().includes(search.value.toLowerCase())
       })
})

</script>

