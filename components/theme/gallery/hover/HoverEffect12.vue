<template>
    <div class="row">

        <CommonCard3 colClass="col-sm-12" headerTitle="true" title="Hover Effect 12">
            <div class="row gallery my-gallery" id="aniimated-thumbnials11" itemscope>
                <figure class="col-md-3 col-6 img-hover hover-12" v-for="(n, index) in hover" :key="index"
                    @click="() => showImg(index)" itemprop="associatedMedia" itemscope>
                    <a>
                        <div>
                            <img :src="getImgUrl(n.image)" itemprop="thumbnail" alt="Image description" class="img-fluid">
                        </div>
                    </a>
                </figure>
            </div>
            <vue-easy-lightbox :index="indexRef" :visible="visible" :imgs="lightBoxImages" @hide="handleHide">
            </vue-easy-lightbox>
        </CommonCard3>
    </div>
</template>
<script lang="ts" setup>

import { hover } from "~/core/data/masonry"

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
    hover.forEach(item => {
        lightBoxImages.value.push({ src: '/images/' + item.image })

    })
})
</script>