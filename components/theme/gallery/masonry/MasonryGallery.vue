<template>
    <CommonCard3 colClass="col-sm-12 box-col-12" cardbodyClass="photoswipe-pb-responsive" headerTitle="true"
        title="MASONRY GALLERY">

        <MasonryWall class="my-gallery row grid gallery" :items="imags" :column-width="350" :gap="15">
            <template #default="{ item, index }" class="col-md-3 col-sm-6 grid-item">
                <figure itemprop="associatedMedia" itemscope :key="index" @click="() => showImg(index)">
                    <a><img :src="getImgUrl(item.image)" class="img-thumbnail" /></a>
                </figure>
            </template>
        </MasonryWall>

        <template #light-box>
            <vue-easy-lightbox :index="indexRef" :visible="visible" :imgs="lightBoxImages" @hide="handleHide">
            </vue-easy-lightbox>
        </template>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { imags } from "~/core/data/masonry"
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
    imags.forEach(item => {
        lightBoxImages.value.push({ src: '/images/' + item.image })

    })
})
</script>