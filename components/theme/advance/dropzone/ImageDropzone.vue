<template>
    <CommonCard3 colClass="col-lg-6" cardClass="title-line" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        title="Image Preview" :desc="desc">
        <DropZone :maxFileSize="Number(60000000)" class="show-preview" :uploadOnDrop="true" :multipleUpload="true"
            :parallelUpload="2" />
    </CommonCard3>
</template>
<script lang="ts" setup>
import DropZone from "dropzone-vue";
let desc = ref<string>("We use the create method to turn a<code> &lt;input type='file'&gt;</code> into a FilePond drop area.<code>[https://pqina.nl/filepond/]</code>")
</script>
<style scoped>
@import 'dropzone-vue/dist/dropzone-vue.common.css';
</style>