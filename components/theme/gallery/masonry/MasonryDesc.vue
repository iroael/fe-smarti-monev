<template>
    <CommonCard3 colClass="col-sm-12" headerTitle="true" title="MASONRY GALLERY WITH DESCRIPTION">

        <MasonryWall class="my-gallery row grid gallery-with-description" :items="imagearray" :column-width="350" :gap="15">
            <template #default="{ item, index }" class="grid-item col-xl-3 col-sm-6">
                <figure :key="index" @click="() => showImg(index)">
                    <a>
                        <img :src="getImgUrl(item.image)" class="img-fluid" />
                        <div class="caption description">
                            <h4>{{ item.title }}</h4>
                            <p>{{ item.descr }}</p>
                        </div>
                    </a>
                </figure>
            </template>
        </MasonryWall>

        <vue-easy-lightbox :index="indexRef" :visible="visible" :imgs="lightBoxImages" @hide="handleHide">
        </vue-easy-lightbox>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { imagearray } from "~/core/data/masonry"
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
    imagearray.forEach(item => {
        lightBoxImages.value.push({ src: '/images/' + item.image, title: item.descr })

    })
})
</script>