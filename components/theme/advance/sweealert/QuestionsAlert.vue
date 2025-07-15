<template>
    <CommonCard3 colClass="col-xxl-3 col-lg-4 col-sm-6 col-12" cardClass="title-line" cardheaderClass=" height-equal"
        cardbodyClass=" btn-showcase" pre="true" preClass="f-m-light mt-1" headerTitle="true" title="Questions Alert"
        :desc="desc">
        <button class="btn btn-primary sweet-11" type="button" @click="questionsAlert()">Questions state</button>
    </CommonCard3>
</template>
<script lang="ts" setup>
const swal = inject("$swal")
let desc = ref<string>("Print the questionary and give answers.")
function questionsAlert() {
    swal.fire({
        text: 'Are you sure you want to do this?',
        showCancelButton: true,
        confirmButtonText: 'Aww yiss!',
        confirmButtonColor: 'var(--theme-default)',
        cancelButtonText: 'Oh noez!',
        cancelButtonColor: '#efefef',
        reverseButtons: true
    });
}
</script>