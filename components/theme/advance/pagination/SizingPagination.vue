<template>
    <CommonCard3 colClass="col-xxl-6" cardClass="title-line" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        title="Pagination Sizing" :desc="desc">
        <nav aria-label="Page navigation example" v-for="(item, index) in size" :key="index">
            <ul class="pagination  pagination-info pagin-border-info" :class="item.size">
                <li class="page-item"><a class="page-link" href="javascript:void(0)">Previous</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0)">1</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0)">Next</a></li>
            </ul>
        </nav>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { size } from "~/core/data/advance"
let desc = ref<string>("Use <code>[pagination-lg/pagination-md/pagination-lg]</code> for additional sizes.")

</script>