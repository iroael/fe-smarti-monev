<template>
    <form>
        <div class="row">
            <div class="col-12">
                <div class="row g-3">
                    <div class="col-sm-6">
                        <div class="row custom-input">
                            <div class="col-12">
                                <label class="form-label" for="validationServer01">Additional Tag Title</label>
                            </div>
                            <div class="col-12">
                                <CommonInputFieldsCommonField classes="form-control" type="text" />
                                <p class="f-light">Add a new tag title. Keywords should be simple and accurate.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="row product-tag">
                            <label class="form-label col-12" for="validationServer01">Specific Tags</label>
                            <div class="col-12">
                                <vue3-tags-input :tags="options" placeholder="input tags" />
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-12">
                                <label class="form-label col-12" for="validationServer01">Additional Description</label>
                                <client-only>
                                    <QuillEditor contentType="html" toolbar="full" v-model:content="editor" theme="snow" />
                                </client-only>
                                <p class="f-light">Enhance your SEO ranking with an added tag description for the product.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
 import Vue3TagsInput from 'vue3-tags-input';
 import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
 let options = ['watches','sports','clothes','bottles']
 let editor = ref('')
</script>

