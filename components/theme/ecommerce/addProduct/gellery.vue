<template>
   <div class="product-upload">
        <p>Product Image </p>
         <ClientOnly>
            <DropZone :maxFileSize="Number(60000000)" class="bg-light-primary" :uploadOnDrop="true" :multipleUpload="true"  :parallelUpload="2" />
        </ClientOnly>
   </div>
     <div class="product-upload">
        <p>Product Gallery </p>
         <ClientOnly>
            <DropZone :maxFileSize="Number(60000000)" class="bg-light-primary" :uploadOnDrop="true" :multipleUpload="true"  :parallelUpload="2" />
        </ClientOnly>
   </div>
   <div class="product-buttons">
        <button class="btn me-1" @click="emit('clicked',0)">
            <div class="d-flex align-items-center gap-sm-2 gap-1">
            <svg>
                <use href="/svg/icon-sprite.svg#back-arrow"></use>
            </svg>Previous
            </div>
        </button>
        <button class="btn" @click="emit('clicked',2)">
            <div class="d-flex align-items-center gap-sm-2 gap-1">Next
            <svg>
                <use href="/svg/icon-sprite.svg#front-arrow">     </use>
            </svg>
            </div>
        </button>
    </div>
</template>

<script setup lang="ts">
import DropZone from "dropzone-vue";
let emit = defineEmits(['clicked'])
</script>

<style scoped>
@import 'dropzone-vue/dist/dropzone-vue.common.css';
</style>