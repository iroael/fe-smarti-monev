<template>
    <CommonCard1 colClass="col-sm-12" :headerTop="false" title="Datatable order history">
        <div class="order-history table-responsive custom-scrollbar">
            <form>
                <div class="mb-3 row justify-content-end">
                    <label for="table-complete-search" class="col-xs-3 col-sm-auto col-form-label">Search:</label>
                    <div class="col-xs-3 col-sm-auto">
                        <input id="table-complete-search" type="text" class="form-control" v-model="filterQuery">
                    </div>
                </div>
                <table class="table display border" id="basic-1">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Product name</th>
                            <th scope="col">Size</th>
                            <th scope="col">Color</th>
                            <th scope="col">Article number</th>
                            <th scope="col">Units</th>
                            <th scope="col">Price</th>
                            <th scope="col"><i class="fa fa-angle-down"></i></th>
                        </tr>
                    </thead>
                    <tbody v-if="!get_rows().length">
                        <tr class="odd">
                            <td valign="top" colspan="6" class="dataTables_empty">No matching records found</td>
                        </tr>
                    </tbody>
                    <tbody v-if="get_rows().length">
                        <tr v-for="(row, index) in get_rows()" :key="index">
                            <td><nuxt-link to="/ecommerce/details/1"><img class="img-fluid img-30" :src="getImages(row.img)"
                                        :alt="row.product"></nuxt-link></td>
                            <td>
                                <div class="product-name"><a href="#">{{ row.product }}</a>
                                    <div class="order-process"><span class="order-process-circle"
                                            :class="row.status == 'Shipped' ? 'shipped-order' : ''"></span>{{ row.status }}
                                    </div>
                                </div>
                            </td>
                            <td>{{ row.size }}</td>
                            <td>{{ row.color }}</td>
                            <td>{{ row.articleNumber }}</td>
                            <td>{{ row.units }}</td>
                            <td>${{ row.price }}</td>
                            <td>
                                <Icon name="ic:outline-more-vert" size="20"></Icon>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <ul class="pagination mt-2 justify-content-end pagination-primary" v-if="get_rows().length">
                    <li class="page-item"> <a class="page-link" v-on:click="prev()" aria-label="Previous"><span
                                aria-hidden="true">&laquo;</span></a></li>
                    <li class="page-item" v-for="i in num_pages()" :key="i"
                        v-bind:class="[i == currentPage ? 'active' : '']" v-on:click="change_page(i)">
                        <a class="page-link">{{ i }}</a>
                    </li>
                    <li class="page-item"><a class="page-link" v-on:click="change()" aria-label="Next"><span
                                aria-hidden="true">&raquo;</span></a></li>
                </ul>
            </form>
        </div>
    </CommonCard1>
</template>

<script setup lang="ts">
import { useProductStore } from '~/stores/ecommerce'
let store = useProductStore();
const filterQuery = ref<string>("")
const elementsPerPage = ref<number>(10)
const currentPage = ref<number>(1)
let allData = ref(store.historyData)
watch(filterQuery, (search: string) => {
    var filteredData = allData.value.filter((row) => {
        return (
            row.product.toLowerCase().includes(search.toLowerCase()) || row.size.toLowerCase().includes(search.toLowerCase()) || row.color.toLowerCase().includes(search.toLowerCase())
        )
    });
    search == "" ? allData.value = store.historyData : allData.value = filteredData
})
function get_rows() {
    var start = (currentPage.value - 1) * elementsPerPage.value;
    var end = start + elementsPerPage.value;
    return allData.value.slice(start, end);
}
function num_pages() {
    return Math.ceil(allData.value.length / elementsPerPage.value);
}
function change_page(page: number) {
    currentPage.value = page;
}
function change() {
    currentPage.value++
}
function prev() {
    currentPage.value--;
}
function getImages(path: string) {
    return '/images/' + path
}
</script>