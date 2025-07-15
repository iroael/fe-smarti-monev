<template>
    <div class="modal fade" id="compose_mail" tabindex="-1" aria-labelledby="compose_mailLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="compose_mailLabel">Compose Message</h1>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body compose-modal">
                    <form>
                        <div class="row mb-3">
                            <label class="col-sm-2 col-form-label" for="composeFrom">From :</label>
                            <div class="col-sm-10">
                                <CommonInputFieldsCommonField errorMessage="Title is required" type="email"
                                    classes="form-control" placeholder="" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label class="col-sm-2 col-form-label" for="composeTo">To :</label>
                            <div class="col-sm-10">
                                <CommonInputFieldsCommonField errorMessage="Title is required" type="email"
                                    classes="form-control" placeholder="" />
                                <div class="add-bcc">
                                    <div class="d-flex gap-2"><a class="btn" data-bs-toggle="collapse" href="#collapseCc"
                                            role="button" aria-expanded="false" aria-controls="collapseCc">Cc </a><a
                                            class="btn" data-bs-toggle="collapse" href="#collapseBcc" role="button"
                                            aria-expanded="false" aria-controls="collapseBcc">Bcc</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="collapse row mb-3" id="collapseCc">
                            <label class="col-sm-2 col-form-label" for="composeTo">Cc:</label>
                            <div class="col-sm-10">
                                <CommonInputFieldsCommonField errorMessage="Title is required" type="email"
                                    classes="form-control" placeholder="" />
                            </div>
                        </div>
                        <div class="collapse row mb-3" id="collapseBcc">
                            <label class="col-sm-2 col-form-label" for="composeTo">Bcc:</label>
                            <div class="col-sm-10">
                                <CommonInputFieldsCommonField errorMessage="Title is required" type="email"
                                    classes="form-control" placeholder="" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label class="col-sm-2 col-form-label" for="composeSubject">Subject :</label>
                            <div class="col-sm-10">
                                <input class="form-control" id="composeSubject" type="email" />
                            </div>
                        </div>
                        <div class="toolbar-box">
                            <client-only>
                                <QuillEditor contentType="html" toolbar="full" v-model:content="editor" theme="snow" />
                            </client-only>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-light" type="button">Save as draft</button>
                    <button class="btn btn-primary" type="button" data-bs-dismiss="modal">Send</button>
                </div>
            </div>
        </div>
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
</script>

