<template>
    <CommonCard3 colClass="col-12" headerTitle="true" title="Product Form">
        <div class="row g-xl-5 g-3">
            <div class="col-xxl-3 col-xl-4 box-col-4e sidebar-left-wrapper">
                <ul class="sidebar-left-icons nav nav-pills" id="add-product-pills-tab" role="tablist">
                    <li class="nav-item" v-for="(item, index) in store.addProductTabsData" :key="index"> <a
                            class="nav-link" :class="item.id == '#detail-product' ? 'active' : ''"
                            :id="'detail-product-tab' + index" data-bs-toggle="pill" :href="item.id" role="tab"
                            aria-controls="detail-product" aria-selected="false">
                            <div class="nav-rounded">
                                <div class="product-icons">
                                    <svg class="stroke-icon">
                                        <use :href="'/svg/icon-sprite.svg#' + item.svg"></use>
                                    </svg>
                                </div>
                            </div>
                            <div class="product-tab-content">
                                <h5>{{ item.name }}</h5>
                                <p>{{ item.desc }}</p>
                            </div>
                        </a></li>
                </ul>
            </div>
            <div class="col-xxl-9 col-xl-8 box-col-8 position-relative">
                <div class="tab-content" id="add-product-pills-tabContent">
                    <div class="tab-pane fade show active" id="detail-product" role="tabpanel"
                        aria-labelledby="detail-product-tab">
                        <div class="sidebar-body">
                            <ThemeEcommerceAddProductDetails @clicked="changeTab" />
                        </div>
                    </div>
                    <div class="tab-pane fade" id="gallery-product" role="tabpanel" aria-labelledby="gallery-product-tab">
                        <div class="sidebar-body">
                            <ThemeEcommerceAddProductGellery @clicked="changeTab" />
                        </div>
                    </div>
                    <div class="tab-pane fade" id="category-product" role="tabpanel" aria-labelledby="category-product-tab">
                        <div class="sidebar-body">
                            <ThemeEcommerceAddProductCategory @clicked="changeTab" />
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pricings" role="tabpanel" aria-labelledby="pricings-tab">
                        <div class="sidebar-body">
                            <ThemeEcommerceAddProductSelling @clicked="changeTab" />
                        </div>
                    </div>
                    <div class="tab-pane fade" id="advance-product" role="tabpanel" aria-labelledby="pricings-tab">
                        <div class="sidebar-body advance-options">
                            <ul class="nav nav-tabs border-tab mb-0" id="advance-option-tab" role="tablist">
                                <li class="nav-item"><a class="nav-link active" id="manifest-option-tab"
                                        data-bs-toggle="tab" href="#manifest-option" role="tab"
                                        aria-controls="manifest-option" aria-selected="true">Inventory</a></li>
                                <li class="nav-item"><a class="nav-link" id="additional-option-tab" data-bs-toggle="tab"
                                        href="#additional-option" role="tab" aria-controls="additional-option"
                                        aria-selected="false">Additional Options</a></li>
                                <li class="nav-item"><a class="nav-link" id="dropping-option-tab" data-bs-toggle="tab"
                                        href="#dropping-option" role="tab" aria-controls="dropping-option"
                                        aria-selected="false">Shipping</a></li>
                            </ul>
                            <div class="tab-content" id="advance-option-tabContent">
                                <div class="tab-pane fade show active" id="manifest-option" role="tabpanel"
                                    aria-labelledby="manifest-option-tab">
                                    <div class="meta-body">
                                        <ThemeEcommerceAddProductInventory />
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="additional-option" role="tabpanel"
                                    aria-labelledby="additional-option-tab">
                                    <div class="meta-body">
                                        <ThemeEcommerceAddProductAdditional />
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="dropping-option" role="tabpanel"
                                    aria-labelledby="dropping-option-tab">
                                    <div class="meta-body">
                                        <ThemeEcommerceAddProductShipping />
                                    </div>
                                </div>
                                <div class="product-buttons">
                                    <button class="btn me-1" @click="changeTab(3)">
                                        <div class="d-flex align-items-center gap-sm-2 gap-1">
                                            <svg>
                                                <use href="/svg/icon-sprite.svg#back-arrow"></use>
                                            </svg>Previous
                                        </div>
                                    </button>
                                    <button class="btn">
                                        <div class="d-flex align-items-center gap-sm-2 gap-1">Submit
                                            <svg>
                                                <use href="/svg/icon-sprite.svg#front-arrow"></use>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</CommonCard3></template>
<script setup lang="ts">
import { useAppStore } from '~/stores/app'
let store = useAppStore();
function changeTab(id: number) {
    document.getElementById("detail-product-tab" + id)?.click()
}
</script>