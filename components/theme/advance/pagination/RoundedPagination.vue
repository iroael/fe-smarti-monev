<template>
    <CommonCard3 colClass="col-md-6" cardClass="title-line height-equal" pre="true" preClass="f-m-light mt-1"
        headerTitle="true" title="Rounded Pagination" :desc="desc">
        <nav aria-label="Page navigation example">
            <ul class="pagination pagination-dark pagin-border-dark gap-2">
                <li class="page-item"><a class="page-link rounded-circle" href="javascript:void(0)"
                        aria-label="Previous"><span aria-hidden="true">«</span><span class="sr-only">Previous</span></a>
                </li>
                <li class="page-item"><a class="page-link rounded-circle" href="javascript:void(0)">1</a></li>
                <li class="page-item"><a class="page-link rounded-circle" href="javascript:void(0)">2</a></li>
                <li class="page-item"><a class="page-link rounded-circle" href="javascript:void(0)">...</a></li>
                <li class="page-item"><a class="page-link rounded-circle" href="javascript:void(0)">9</a></li>
                <li class="page-item"><a class="page-link rounded-circle" href="javascript:void(0)" aria-label="Next"><span
                            aria-hidden="true">»</span><span class="sr-only">Next</span></a>
                </li>
            </ul>
        </nav>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("Used in rounded pagination.Use an icon or symbol in place of text for some pagination links. <code>[.rounded-circle]</code>")
</script>