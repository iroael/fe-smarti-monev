<template>
   <CommonCard1 colClass="col-sm-12" :header="false">
         <div class="form theme-form project-page">
            <div class="row">
                <div class="col">
                    <div class="mb-3">
                        <label>Project Title</label>
                        <CommonInputFieldsCommonField v-model="store.projectData.projectName" errorMessage="Title is required" type="text" classes="form-control" placeholder="Project name *"/>
                    </div>
                </div>
            </div>
             <div class="row">
                <div class="col">
                    <div class="mb-3">
                        <label>Client name</label>
                        <CommonInputFieldsCommonField v-model="store.projectData.clientname" errorMessage="Client is required" type="text" classes="form-control" placeholder="Name client or company name"/>
                    </div>
                </div>
            </div>
             <div class="row">
                <div class="col-sm-4">
                    <div class="mb-3">
                        <label>Project Rate</label>
                        <CommonInputFieldsCommonField type="text" classes="form-control" placeholder="Enter project Rate"/>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="mb-3">
                    <label>Project Type</label>
                    <CommonInputFieldsSelectBox :options="['Hourly','Fix price']" classes="form-select"/>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="mb-3">
                    <label>Priority</label>
                    <CommonInputFieldsSelectBox :options="['Low','Medium','High','Urgent']" classes="form-select"/>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                     <div class="mb-3">
                    <label>Project Size</label>
                    <CommonInputFieldsSelectBox :options="['Small','Medium','Big']" classes="form-select"/>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="mb-3">
                    <label>Starting date</label>
                   <VueDatePicker v-model="start" class="datepicker-here form-control" />
                    </div>
                </div>
                 <div class="col-sm-4">
                    <div class="mb-3">
                    <label>Ending date</label>
                   <VueDatePicker v-model="end" class="datepicker-here form-control" />
                    </div>
                </div>
            </div>
             <div class="row">
                <div class="col">
                    <div class="mb-3">
                    <label>Enter some Details</label>
                    <textarea class="form-control" v-model="store.projectData.details.data" id="exampleFormControlTextarea4" rows="3"></textarea>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="mb-3">
                        <label>Upload project file</label>
                         <ClientOnly>
                            <DropZone :maxFileSize="Number(60000000)" class="bg-light-primary" :uploadOnDrop="true" :multipleUpload="true"  :parallelUpload="2" />
                        </ClientOnly>
                    </div>
                </div>
            </div>
             <div class="row">
                <div class="col">
                    <div class="text-end"><a class="btn btn-success me-3" href="#" @click="store.addProject()">Add</a><a class="btn btn-danger" href="#">Cancel</a></div>
                </div>
            </div>
         </div>
   </CommonCard1>
</template>
<script setup lang="ts">
import {useAppStore} from '~/stores/app'
import VueDatePicker from '@vuepic/vue-datepicker';
import DropZone from "dropzone-vue";
import '@vuepic/vue-datepicker/dist/main.css'
let store = useAppStore();
let start = ref('')
let end = ref('')
</script>
<style scoped>
@import 'dropzone-vue/dist/dropzone-vue.common.css';
</style>