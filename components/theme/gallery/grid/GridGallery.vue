<template>
    <CommonCard3 colClass="col-sm-12" cardbodyClass="gallery my-gallery row" headerTitle="true" title="IMAGE GALLERY">

        <figure v-for="(src, index) in  image" :key="index" class="col-xl-3 col-md-4 col-6" @click="() => showImg(index)">
            <a itemprop="contentUrl" data-size="1600x950">
                <img :src="getImgUrl(src.image)" alt="Image description" class="img-thumbnail" />
            </a>
            <div class="caption">

            </div>
        </figure>
        <template #light-box>
            <vue-easy-lightbox :index="indexRef" :visible="visible" :imgs="lightBoxImages" @hide="handleHide">
            </vue-easy-lightbox>
        </template>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { image } from "~/core/data/masonry"
let lightBoxImages = ref<object[]>([])
let visible = ref<boolean>(false)
let indexRef = ref<number>(0)

function showImg(index: number) {
    indexRef.value = index
    visible.value = true
}
function handleHide() {
    visible.value = false
}
function getImgUrl(path: string) {
    return '/images/' + path;
}
onMounted(() => {
    image.forEach(item => {
        lightBoxImages.value.push({ src: '/images/' + item.image, title: "Image caption " + indexRef.value })

    })
})
</script>