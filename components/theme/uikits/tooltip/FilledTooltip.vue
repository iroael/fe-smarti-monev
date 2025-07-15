<template>
    <CommonCard3 colClass="col-md-6" cardClass="title-line" cardbodyClass="fill-tooltip" pre="true"
        preClass="f-m-light mt-2" headerTitle="true" title="Filled tooltip" :desc="desc">
        <div class="common-flex">
            <button class="btn btn-outline-primary mb-0 me-0" type="button" data-bs-toggle="tooltip" data-bs-html="true"
                data-bs-placement="top" v-tooltip="'Tooltip Primary'" data-bs-title="">Tooltip Primary</button>
            <button class="btn btn-outline-secondary mb-0 me-0" type="button" data-bs-toggle="tooltip"
                data-bs-placement="top" data-bs-html="true" v-tooltip="'Tooltip Secondary'" data-bs-title="">Tooltip
                Secondary</button>
            <button class="btn btn-outline-success mb-0 me-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-html="true" v-tooltip="'Tooltip Success'" data-bs-title="">Tooltip Success</button>
            <button class="btn btn-outline-info mb-0 me-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-html="true" v-tooltip="'Tooltip Info'" data-bs-title="">Tooltip Info</button>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("Tooltip in hover effect through fill dark color.<code>[.btn-outline-*]</code>. and <code>data-bs-title </code>to the content under the HTML Tag.")
</script>