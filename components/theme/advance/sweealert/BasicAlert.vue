<template>
    <CommonCard3 colClass="col-xxl-3 col-lg-4 col-sm-6 col-12" cardClass="title-line" cardbodyClass=" btn-showcase"
        pre="true" preClass="f-m-light mt-1" headerTitle="true" title="Basic Example" :desc="desc">
        <button class="btn btn-primary sweet-1" type="button" @click="basicAlert()">Click it!</button>
    </CommonCard3>
</template>
<script lang="ts" setup>
const swal = inject("$swal")
let desc = ref<string>("Print the basic message.")
function basicAlert() {
    swal.fire({
        confirmButtonColor: 'var(--theme-default)',
        title: "Welcome! to the Yuri theme",
    });
}
</script>