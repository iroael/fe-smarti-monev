<template>
    <CommonCard3 colClass="col-sm-12" cardClass="title-line height-equal" pre="true" preClass="f-m-light mt-1"
        headerTitle="true" title="Colored Breadcrumb" :desc="desc">
        <ol class="breadcrumb breadcrumb-colored m-b-30 bg-primary">
            <li class="breadcrumb-item"><a class="fw-bold" href="javascript:void(0)">Home</a></li>
            <li class="breadcrumb-item"><a class="fw-bold" href="javascript:void(0)">Bonus Ui</a></li>
            <li class="breadcrumb-item active fw-bold">Breadcrumb</li>
        </ol>
        <ol class="breadcrumb breadcrumb-colored m-b-30 bg-warning">
            <li class="breadcrumb-item"><a class="fw-bold" href="javascript:void(0)">Home</a></li>
            <li class="breadcrumb-item"><a class="fw-bold" href="javascript:void(0)">Icons</a></li>
            <li class="breadcrumb-item active fw-bold">Flag-icon</li>
        </ol>
        <ol class="breadcrumb breadcrumb-colored m-0 bg-secondary">
            <li class="breadcrumb-item"><a class="fw-bold" href="javascript:void(0)">Home</a></li>
            <li class="breadcrumb-item"><a class="fw-bold" href="javascript:void(0)">Gallery</a></li>
            <li class="breadcrumb-item active fw-bold">Gallery-grid</li>
        </ol>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("You can set breadcrumb using <code>.breadcrumb </code> class and set background colors like <code>[.bg-*]</code> .")

</script>