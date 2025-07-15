<template>
    <div class="list-product table-responsive custom-scrollbar">
        <slot />
        <table class="table datatable-table" id="project-status">
            <thead>
                <tr>
                    <th>
                        <div class="form-check">
                            <input class="form-check-input checkbox-primary" type="checkbox">
                        </div>
                    </th>
                    <th @click="sortBy('name')"> <span class="f-light f-w-600">Product Name</span></th>
                    <th @click="sortBy('sku')"> <span class="f-light f-w-600">SKU</span></th>
                    <th @click="sortBy('category')"> <span class="f-light f-w-600">Category</span></th>
                    <th @click="sortBy('price')"> <span class="f-light f-w-600">Price</span></th>
                    <th @click="sortBy('qty')"> <span class="f-light f-w-600">Qty</span></th>
                    <th @click="sortBy('status')"> <span class="f-light f-w-600">Status</span></th>
                    <th @click="sortBy('rating')"> <span class="f-light f-w-600">Rating</span></th>
                    <th> <span class="f-light f-w-600">Action</span></th>
                </tr>
            </thead>
            <tbody>
                <tr class="product-removes" v-for="(item, index) in sortedData" :key="index">
                    <td>
                        <div class="form-check">
                            <input class="form-check-input checkbox-primary" type="checkbox">
                        </div>
                    </td>
                    <td>
                        <div class="product-names">
                            <div class="light-product-box"><img class="img-fluid" :src="'/images/' + item.img" alt="laptop">
                            </div>
                            <p>{{ item.name }}</p>
                        </div>
                    </td>
                    <td>
                        <p class="f-light">{{ item.sku }}</p>
                    </td>
                    <td>
                        <p class="f-light">{{ item.category }}</p>
                    </td>
                    <td>
                        <p class="f-light">{{ item.price }}</p>
                    </td>
                    <td>
                        <p class="f-light">{{ item.qty }}</p>
                    </td>
                    <td> <span class="badge" :class="item.statusclass">{{ item.status }}</span></td>
                    <td>
                        <div class="rating"><i class="fa fa-star txt-warning" v-for="(i, index) in Number(item.rating)"
                                :key="index"></i><i class="fa fa-star f-light"
                                v-for="(i, index) in (5 - Number(item.rating))" :key="index"></i></div>
                    </td>
                    <td>
                        <div class="product-action"><nuxt-link to="/ecommerce/add_product">
                                <svg>
                                    <use href="/svg/icon-sprite.svg#edit-content"></use>
                                </svg></nuxt-link>
                            <svg>
                                <use href="/svg/icon-sprite.svg#trash1"></use>
                            </svg>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <slot name="bottom" />
    </div>
</template>
<script setup lang="ts">
let props = defineProps({
    Data: Array
})
let sortedColumn = ref('');
let sortOrder = ref('');
const sortedData = computed(() => {
    if (!sortedColumn.value) return props.Data;
    return props.Data.slice().sort((a, b) => {
        const aValue = a[sortedColumn.value];
        const bValue = b[sortedColumn.value];
        if (typeof aValue === 'string' && typeof bValue === 'string') {
            return sortOrder.value === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        }
        return sortOrder.value === 'asc' ? aValue - bValue : bValue - aValue;
    });
});
function sortBy(column: string) {
    sortedColumn.value = column;
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
}
</script>
