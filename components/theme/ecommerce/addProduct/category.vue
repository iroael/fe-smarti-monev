<template>
    <form>
        <div class="row g-lg-4 g-3">
            <div class="col-12">
                <div class="row g-3">
                    <div class="col-sm-6">
                        <div class="row g-2">
                            <div class="col-12">
                                <label class="form-label m-0" for="validationServer01">Add Category</label>
                            </div>
                            <div class="col-12">
                                <CommonInputFieldsSelectBox classes="form-select"
                                    :options="['Toys & games', 'Sportswear', 'Jewellery', 'Furniture and Decor', 'Health, Personal Care, and Beauty', 'Auto and Parts', 'Baby Care Products']" />
                                <p class="f-light">A product can be added to a category</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="row g-2 product-tag">
                            <div class="col-12">
                                <label class="form-label d-block m-0" for="validationServer01">Add Tag</label>
                            </div>
                            <div class="col-12">
                                <vue3-tags-input :tags="options" placeholder="input tags" />
                                <p class="f-light">Products can be tagged</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="category-buton"><a class="btn button-primary bg-light-primary font-primary" href="#!"
                                data-bs-toggle="modal" data-bs-target="#category-pill-modal"><i class="me-2 fa fa-plus">
                                </i>Create New Category </a></div>
                        <ThemeEcommerceAddProductCategoryModal />
                    </div>
                    <div class="col-12">
                        <div class="row g-3">
                            <div class="col-sm-6">
                                <div class="row">
                                    <div class="col-12">
                                        <label class="form-label" for="validationServer01">Publish Status</label>
                                        <CommonInputFieldsSelectBox classes="form-select"
                                            :options="['Publish', 'Drafts', 'Unpublish']" />
                                        <p class="f-light">Choose the status</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="row">
                                    <div class="col-12">
                                        <label class="form-label" for="validationServer01">Publish Date & Time</label>
                                        <div class="input-group flatpicker-calender product-date">
                                            <VueDatePicker v-model="date" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <div class="product-buttons">
        <button class="btn me-1" @click="emit('clicked', 1)">
            <div class="d-flex align-items-center gap-sm-2 gap-1">
                <svg>
                    <use href="/svg/icon-sprite.svg#back-arrow"></use>
                </svg>Previous
            </div>
        </button>
        <button class="btn" @click="emit('clicked', 3)">
            <div class="d-flex align-items-center gap-sm-2 gap-1">Next
                <svg>
                    <use href="/svg/icon-sprite.svg#front-arrow"></use>
                </svg>
            </div>
        </button>
    </div>
</template>
<script setup lang="ts">
import Vue3TagsInput from 'vue3-tags-input';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
let emit = defineEmits(['clicked'])
let options = ['watches', 'sports', 'clothes', 'bottles']
let date = ref()
</script>

<style scoped></style>