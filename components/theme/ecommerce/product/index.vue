<template>
    <div class="feature-products">
        <div class="row">
            <div class="col-md-6 products-total">
                <div class="square-product-setting d-inline-block">
                    <a class="icon-grid grid-layout-view" @click="gridView('col-xl-3 col-md-6')">
                        <Icon name="material-symbols:grid-view-outline-rounded" />
                    </a>
                </div>
                <div class="square-product-setting d-inline-block">
                    <a class="icon-grid m-0 list-layout-view"
                        @click="listView('col-xl-3 col-lg-4 col-sm-6 xl-25 col-xl-12')">
                        <Icon name="ic:twotone-list" />
                    </a>
                </div>
                <span class="d-none-productlist filter-toggle" @click="collapseFilter()">
                    <h4>Filters<span class="ms-2">
                            <Icon name="octicon:chevron-down-12" class="middle fs-1" size="20" />
                        </span>
                    </h4>
                </span>
                <div class="grid-options d-inline-block">
                    <ul>
                        <li @click="gridView('col-md-6')"><a class="product-2-layout-view" data-original-title=""
                                title=""><span class="line-grid line-grid-1 bg-primary"></span><span
                                    class="line-grid line-grid-2 bg-primary"></span></a></li>
                        <li @click="gridView('col-xl-4 col-sm-4')"><a class="product-3-layout-view" data-original-title=""
                                title=""><span class="line-grid line-grid-3 bg-primary"></span><span
                                    class="line-grid line-grid-4 bg-primary"></span><span
                                    class="line-grid line-grid-5 bg-primary"></span></a></li>
                        <li @click="gridView('col-xl-3 col-md-6')"><a class="product-4-layout-view" data-original-title=""
                                title=""><span class="line-grid line-grid-6 bg-primary"></span><span
                                    class="line-grid line-grid-7 bg-primary"></span><span
                                    class="line-grid line-grid-8 bg-primary"></span><span
                                    class="line-grid line-grid-9 bg-primary"></span></a></li>
                        <li @click="gridView('col-xl-2 col-lg-4 col-md-6')"> <a class="product-6-layout-view"
                                data-original-title="" title=""><span class="line-grid line-grid-10 bg-primary"></span><span
                                    class="line-grid line-grid-11 bg-primary"></span><span
                                    class="line-grid line-grid-12 bg-primary"></span><span
                                    class="line-grid line-grid-13 bg-primary"></span><span
                                    class="line-grid line-grid-14 bg-primary"></span><span
                                    class="line-grid line-grid-15 bg-primary"></span></a></li>
                    </ul>
                </div>
            </div>
            <ThemeEcommerceProductLength />
        </div>
        <div class="row">
            <div class="col-sm-3">
                <div class="product-sidebar" :class="store.filtered ? 'open' : ''">
                    <div class="filter-section">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="mb-0 f-w-600 " @click="collapseFilter()"> Filters
                                    <span class="pull-right">
                                        <i class="fa fa-chevron-down toggle-data"></i>
                                    </span>
                                </h4>
                            </div>
                            <ThemeEcommerceProductFilterBar />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-9 col-sm-12">
                <form>
                    <div class="form-group m-0">
                        <input class="form-control" type="search" placeholder="Search.." data-original-title="" title=""><i
                            class="fa fa-search"></i>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <ThemeEcommerceProductListData :gridClass="colClass" :listClass="listview" />
</template>

<script setup lang="ts">
import { useProductStore } from "~/stores/ecommerce"
let colClass = ref('col-xl-3 col-sm-6 xl-4')
let listview = ref('')
let store = useProductStore();
function collapseFilter() {
    store.filtered = !store.filtered

}
function gridView(value: string) {
    colClass.value = value
    listview.value = ''
}
function listView(value: string) {
    colClass.value = value
    listview.value = 'list-view'
}
</script>

