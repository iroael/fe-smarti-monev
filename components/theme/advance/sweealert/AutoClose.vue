<template>
    <CommonCard3 colClass="col-xxl-3 col-lg-4 col-sm-6 col-12" cardClass="title-line" cardheaderClass=" height-equal"
        cardbodyClass=" btn-showcase" pre="true" preClass="f-m-light mt-1" headerTitle="true" title="Auto Close Timer"
        :desc="desc">
        <button class="btn btn-primary sweet-14" type="button" @click="autoAlert()">Timer</button>
    </CommonCard3>
</template>
<script lang="ts" setup>
const swal = inject("$swal")
let desc = ref<string>("A text message with an automatic timer")
function autoAlert() {
    swal.fire({
        position: 'center',
        title: 'Auto close alert!',
        text: "just a wait!  I will close in 30 second!",
        showConfirmButton: false,
        timer: 4000,
    });
}
</script>