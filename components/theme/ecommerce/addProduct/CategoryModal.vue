<template>
    <div class="modal fade" id="category-pill-modal" tabindex="-1" aria-labelledby="#category-pill-modalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="category-pill-modalLabel">Create new category</h1>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body custom-input">
                    <div class="create-category">
                        <form>
                            <label class="form-label" for="validationServer01">Category Name <span class="txt-danger">
                                    *</span></label>
                            <input class="form-control m-0" id="validationServer01" type="text" required>
                            <div class="toolbar-box">
                                <client-only>
                                    <QuillEditor contentType="html" toolbar="full" v-model:content="editor" theme="snow" />
                                </client-only>
                                <div id="editor3"></div>
                            </div>
                        </form>
                        <p class="f-light">Improve product visibility by adding a compelling description.</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-light" type="button" data-bs-dismiss="modal">Cancel</button>
                    <button class="btn btn-primary" type="button">Add</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
let editor = ref('')
</script>