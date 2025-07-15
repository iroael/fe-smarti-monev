<template>
    <form class="row g-2">
        <label class="form-label col-12 m-0" for="validationServer01">Product Title <span class="txt-danger">
                *</span></label>
        <div class="col-12 custom-input">
            <input class="form-control is-invalid" id="validationServer01" type="text" required="">
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">A product name is required and recommended to be unique.</div>
        </div>
        <div class="col-12">
            <client-only>
                <QuillEditor contentType="html" toolbar="full" v-model:content="editor" theme="snow" />
            </client-only>
            <p class="f-light">Improve product visibility by adding a compelling description.</p>
        </div>
    </form>
    <div class="product-buttons">
        <button class="btn" @click="emit('clicked', 1)">
            <div class="d-flex align-items-center gap-sm-2 gap-1">
                Next
                <svg>
                    <use href="/svg/icon-sprite.svg#front-arrow"> </use>
                </svg>
            </div>
        </button>
    </div>
</template>

<script setup lang="ts">
if (!process.server) {
      const { QuillEditor } = await import('@vueup/vue-quill');
      const { vueApp } = useNuxtApp();
      vueApp.component('QuillEditor', QuillEditor);
    }
import '@vueup/vue-quill/dist/vue-quill.snow.css';
let editor = ref('')
let emit = defineEmits(['clicked'])
</script>

