<template>
    <CommonCard3 colClass="col-xxl-3 col-lg-4 col-sm-6 col-12" cardClass="title-line" cardheaderClass=" height-equal"
        cardbodyClass=" btn-showcase" pre="true" preClass="f-m-light mt-1" headerTitle="true" title="Danger Alert"
        :desc="desc">
        <button class="btn btn-danger sweet-7" type="button" @click="dangerAlert()">Danger mode</button>
    </CommonCard3>
</template>
<script lang="ts" setup>
const swal = inject("$swal")
let desc = ref<string>("Print the danger message.")
function dangerAlert() {
    swal.fire({
        icon: "error",
        title: "It's danger",
        text: "Something went wrong!",
        confirmButtonColor: 'var(--theme-default)',
    });
}
</script>