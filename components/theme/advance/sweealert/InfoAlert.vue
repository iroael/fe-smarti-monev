<template>
    <CommonCard3 colClass="col-xxl-3 col-lg-4 col-sm-6 col-12" cardClass="title-line" cardheaderClass=" height-equal"
        cardbodyClass=" btn-showcase" pre="true" preClass="f-m-light mt-1" headerTitle="true" title="Info Alert"
        :desc="desc">
        <button class="btn btn-info sweet-4" type="button" @click="infoAlert()">Informational</button>
    </CommonCard3>
</template>
<script lang="ts" setup>
const swal = inject("$swal")
let desc = ref<string>("Print the informational message.")
function infoAlert() {
    swal.fire({
        text: ' Click on either the button or outside the modal.',
        confirmButtonColor: 'var(--theme-default)',
    }).then((result) => {
        if (result.value) {
            swal.fire({
                text: 'Thank you for visit Yuri theme: ' + result.value,
                confirmButtonColor: 'var(--theme-default)',
            });
        } else {
            swal.fire({
                confirmButtonColor: 'var(--theme-default)',
                text: 'Thank you for visit Yuri theme: ' + result.value
            });
        }
    });
}
</script>