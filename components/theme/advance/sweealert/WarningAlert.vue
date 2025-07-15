<template>
    <CommonCard3 colClass="col-xxl-3 col-lg-4 col-sm-6 col-12" cardClass="title-line" cardheaderClass=" height-equal"
        cardbodyClass=" btn-showcase" pre="true" preClass="f-m-light mt-1" headerTitle="true" title="Warning Alert"
        :desc="desc">
        <button class="btn btn-warning sweet-5" type="button" @click="warningAlert()">Warning</button>
    </CommonCard3>
</template>
<script lang="ts" setup>
const swal = inject("$swal")
let desc = ref<string>("Warning for imaginary files.")
function warningAlert() {
    swal.fire({
        icon: 'warning',
        title: "Are you sure?",
        text: 'Once deleted, you will not be able to recover this imaginary file!',
        showCancelButton: true,
        confirmButtonText: 'Ok',
        confirmButtonColor: 'var(--theme-default)',
        cancelButtonText: 'Cancel',
        cancelButtonColor: '#efefef',
    }).then((result) => {
        if (result.value) {
            swal.fire({
                icon: 'success',
                text: 'Poof! Your imaginary file has been deleted!',
                confirmButtonColor: 'var(--theme-default)',
            });
        } else {
            swal.fire({
                text: 'Your imaginary file is safe!',
                confirmButtonColor: 'var(--theme-default)',
            });
        }
    });
}
</script>