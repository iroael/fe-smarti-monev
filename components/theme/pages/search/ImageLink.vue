<template>
    <div class="tab-pane fade" id="image-links" role="tabpanel" aria-labelledby="image-link">
        <div>
            <h6 class="mb-2">About 12,120 results (0.50 seconds)</h6>
            <div class="my-gallery row gallery-with-description" id="aniimated-thumbnials" itemscope>
                <figure class="col-xl-3 col-sm-6" v-for="(src, index) in search" :key="index" @click="() => showImg(index)"
                    itemprop="associatedMedia" itemscope>
                    <a>
                        <img :src="getImgUrl(src.image)" itemprop="thumbnail" alt="Image description">
                        <div class="caption">
                            <h4> {{ src.title }}</h4>
                            <p>{{ src.descr }}</p>
                        </div>
                    </a>

                </figure>

            </div>
            <vue-easy-lightbox :index="indexRef" :visible="visible" :imgs="lightBoxImages" @hide="handleHide">
            </vue-easy-lightbox>

        </div>
        <div class="m-t-30">
            <nav aria-label="...">
                <ul class="pagination pagination-primary">
                    <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item active"><a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { search } from "~/core/data/masonry"
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
    search.forEach(item => {
        lightBoxImages.value.push({ src: '/images/' + item.image, title: item.descr })

    })
})
</script>