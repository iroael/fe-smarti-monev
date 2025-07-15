<template>
    <CommonCard3 colClass="col-sm-6" cardClass="title-line height-equal" pre="true" preClass="f-m-light mt-1"
        headerTitle="true" title="Divider Breadcrumb" :desc="desc">
        <nav class="breadcrumb breadcrumb-icon"><a class="breadcrumb-item" href="javascript:void(0)">Home</a><span
                class="breadcrumb-item active">Ui Kits</span></nav>
        <nav class="breadcrumb breadcrumb-icon m-0"><a class="breadcrumb-item" href="javascript:void(0)">Home</a><a
                class="breadcrumb-item" href="javascript:void(0)">Ui Kits</a><span
                class="breadcrumb-item active">Progress</span></nav>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("You can set breadcrumb using <code>.breadcrumb-icon</code> class.")

</script>