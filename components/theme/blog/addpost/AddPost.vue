<template>
    <CommonCard3 colClass="col-sm-12 " cardbodyClass="add-post" headerTitle="true" title="Post Edit">
        <form class="row needs-validation" novalidate>
            <div class="col-sm-12">
                <div class="mb-3">
                    <label for="validationCustom01">Title:</label>
                    <input class="form-control" id="validationCustom01" type="text" placeholder="Post Title" required>
                    <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="mb-3">
                    <label>Type:</label>
                    <div class="m-checkbox-inline">
                        <label :for="item.for" v-for="(item, index) in radioType" :key="index">
                            <input class="radio_animated" :id="item.for" type="radio" name="rdo-ani"
                                :checked="item.checked">{{ item.title }}
                        </label>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="col-form-label">Category:
                        <ClientOnly>
                            <multiselect class="mt-2" v-model="multiValue" tag-placeholder="Add this as new tag"
                                placeholder="Select Your Name" label="name" track-by="code" :options="options"
                                :multiple="true" :taggable="true"></multiselect>
                        </ClientOnly>
                    </div>
                </div>
                <div class="email-wrapper">
                    <div class="theme-form">
                        <div class="mb-3">
                            <label>Content:</label>
                            <ClientOnly>
                                <ckeditor :editor="editor">

                                </ckeditor>
                            </ClientOnly>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <form class="" id="singleFileUpload" action="/upload.php">
            <DropZone :maxFileSize="Number(60000000)" :uploadOnDrop="true">
            </DropZone>
        </form>
        <div class="btn-showcase text-end">
            <button class="btn btn-primary" type="submit">Post</button>
            <input class="btn btn-light" type="reset" value="Discard">
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { radioType } from "~/core/data/blog"
import DropZone from "dropzone-vue";
interface multi {
    code: number,
    name: string
}
let ClassicEditor = inject('ClassicEditor')
const editor = ClassicEditor
const multiValue = ref<object[]>([])
const options = ref<multi[]>([
    { code: 1, name: 'Lifestyle' },
    { code: 2, name: 'Travel' },
    { code: 3, name: 'Food' },
    { code: 4, name: 'Beauty' },
])
</script>
<style scoped>
@import 'dropzone-vue/dist/dropzone-vue.common.css';
</style>