<template>
    <CommonCard3 colClass="col-xxl-3 col-lg-4 col-sm-6 col-12" cardClass="title-line" cardheaderClass=" height-equal"
        cardbodyClass=" btn-showcase" pre="true" preClass="f-m-light mt-1" headerTitle="true" title="Warning Mode"
        :desc="desc">
        <button class="btn btn-warning sweet-6" type="button" @click="warningAlert()">Alert mode</button>
    </CommonCard3>
</template>
<script lang="ts" setup>
const swal = inject("$swal")
let desc = ref<string>("Print the warning message.")
function warningAlert() {
    swal.fire({
        icon: "warning",
        title: "Good job!",
        text: "You clicked the button!",
        confirmButtonColor: 'var(--theme-default)',
    });
}
</script>