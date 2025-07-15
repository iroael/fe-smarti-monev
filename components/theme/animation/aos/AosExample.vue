<template>
    <CommonCard3 headerTitle="true" title="AOS Example animation">
        <ClientOnly>
            <MasonryWall class="row gallery grid my-gallery" :items="aos" :column-width="350" :gap="15">

                <template v-slot:default="{ item, index }" class="grid-item col-md-3 col-sm-6">
                    <aos-vue :animation="item.animation">
                        <a @click="showImg(index)">
                            <img :src="getImages(item.image)" alt="Image description" class="img-thumbnail" />
                        </a>
                    </aos-vue>
                </template>
            </MasonryWall>
        </ClientOnly>
        <vue-easy-lightbox :index="indexRef" :visible="visible" :imgs="lightBoxImages" @hide="handleHide">
        </vue-easy-lightbox>
    </CommonCard3>
    <div></div>
</template>
<script lang="ts" setup>
import { aos } from "~/core/data/masonry"
import { getImages } from "~/composables/common/getImages"
interface value {
    image: string,
    animation: string
}
let lightBoxImages = ref<object[]>([])
let indexRef = ref<number>(0)
let visible = ref<boolean>(false)

function showImg(index: number) {
    aos.forEach((item: value) => {
        lightBoxImages.value.push({ src: '/images/' + item.image })
    })
    indexRef.value = index
    visible.value = true
}
function handleHide() {
    visible.value = false
}

</script>