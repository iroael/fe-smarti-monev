<template>
    <CommonCard3 colClass="col-xxl-3 col-lg-4 col-sm-6 col-12" cardClass="title-line" cardheaderClass=" height-equal"
        cardbodyClass=" btn-showcase" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        title="Title With A Text Under" :desc="desc">
        <button class="btn btn-secondary sweet-2" type="button" @click="textAlert()">Surprise!</button>
    </CommonCard3>
</template>
<script lang="ts" setup>
const swal = inject("$swal")
let desc = ref<string>("Print the title with text.")
function textAlert() {
    swal.fire({
        confirmButtonColor: 'var(--theme-default)',
        title: "It's Magic!",
        text: 'Thank you for visiting Yuri theme',
    });
}
</script>