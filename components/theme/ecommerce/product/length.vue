<template>
    <div class="col-md-6 text-sm-end"><span class="f-w-600 m-r-5">Showing Products 1 - {{
        store.filteredData.length }}
            Results</span>
        <div class="select2-drpdwn-product select-options d-inline-block">
            <select class="form-control btn-square" name="select">
                <option value="Lowest">Lowest Prices</option>
                <option value="Highest">Highest Prices</option>
                <option value="Featured">Featured</option>
            </select>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useProductStore } from "~/stores/ecommerce"
let store = useProductStore();
</script>

