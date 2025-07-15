<template>
    <CommonCard3 colClass="col-xxl-3 col-lg-4 col-sm-6 col-12" cardClass="title-line" cardheaderClass=" height-equal"
        cardbodyClass=" btn-showcase" pre="true" preClass="f-m-light mt-1" headerTitle="true" title="Username Alert"
        :desc="desc">
        <button class="btn btn-secondary sweet-13" type="button" @click="usernameAlert()">Username</button>
    </CommonCard3>
</template>
<script lang="ts" setup>
const swal = inject("$swal")
let desc = ref<string>("Print the basic sweet-alert")
function usernameAlert() {
    swal.fire({
        text: 'Please! Submit Your Username :',
        input: 'text',
        confirmButtonColor: 'var(--theme-default)',
    }).then((result) => {
        if (result.value) {
            swal.fire({
                text: 'Your name is :' + result.value,
                confirmButtonColor: 'var(--theme-default)',
            });
        } else {
            swal.fire({
                text: 'Your name is :' + result.value,
                confirmButtonColor: 'var(--theme-default)',
            });
        }
    });
}
</script>