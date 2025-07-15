<template>
    <CommonCard3 colClass="col-lg-6" cardClass="title-line" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        title="Single File Upload" :desc="desc">
        <form id="singleFileUpload" action="/upload.php">
            <DropZone :maxFileSize="Number(60000000)" :uploadOnDrop="true" :maxFiles="1">
            </DropZone>
        </form>
    </CommonCard3>
</template>
<script lang="ts" setup>
import DropZone from "dropzone-vue";
let desc = ref<string>("Use the <code>.dropzone </code> class through create upload files.<code>[https://www.dropzone.dev/].")
</script>
<style scoped>
@import 'dropzone-vue/dist/dropzone-vue.common.css';
</style>