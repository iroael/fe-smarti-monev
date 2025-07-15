<template>
    <div class="col-xxl-3 col-md-6 box-col-12">
        <div class="card">
            <div class="card-body">
                <div class="filter-block">
                    <h3>Brand</h3>
                    <ul>
                        <li v-for="(item, index) in store.brandData" :key="index">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="collection-filter-block">
                    <ul class="pro-services">
                        <li v-for="(item, index) in store.servicesData" :key="index">
                            <div class="d-flex">
                                <Icon :name="item.icon" color="#009DB5" />
                                <div class="flex-grow-1">
                                    <h5>{{ item.icon }} </h5>
                                    <p>{{ item.desc }}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useProductStore } from "~/stores/ecommerce"
let store = useProductStore()
</script>

