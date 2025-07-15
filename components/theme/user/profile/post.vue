<template>
    <div class="col-sm-12">
        <div class="card">
            <div class="profile-img-style">
                <div class="row">
                    <div class="col-sm-8">
                        <div class="d-flex"><img class="img-thumbnail rounded-circle me-3" src="/images/user/7.jpg"
                                alt="Generic placeholder image">
                            <div class="flex-grow-1 align-self-center">
                                <h5 class="mt-0 user-name">William C. Jennings</h5>
                                <div class="tour-wrapper"><span>26 Jan</span><i class="tour-dot fa fa-circle"></i><span
                                        class="txt-danger">6 min read</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 align-self-center mt-0 text-end">
                        <div class="social-media social-tour" data-intro="This is your social details">
                            <ul class="list-inline">
                                <li class="list-inline-item" v-for="(item, index) in social" :key="index"><a
                                        :href="item.link" target="_blank"><i class="fa " :class="item.icon"></i></a></li>
                            </ul>
                        </div>
                        <div class="float-sm-end"><small>10 Hours ago</small></div>
                    </div>
                </div>
                <hr>
                <h5 class="pb-2">Wonderful piece that successfully conveys the magnificence of the mountains and the natural
                    world.</h5>
                <p class="block-ellipsis">English Romantic painter, printer, and watercolourist <em
                        class="txt-danger">William C. Jennings</em> Is most renowned for his expressive colorization,
                    creative landscapes, and stormy, sometimes violent maritime works. However, this moody image of the
                    Devil's Bridge in Switzerland, close to the Gotthard Pass, feels incredibly authentic and accurately
                    depicts historical occasions when Russian general Suvorov crossed the Alps and fought not only far
                    larger enemy troops!</p>
                <div class="img-container">
                    <div class="my-gallery" id="aniimated-thumbnials" itemscope>
                        <figure itemprop="associatedMedia" itemscope v-for="(src, index) in img" :key="index"
                            @click="() => showImg(index)"><img class="img-fluid rounded" :src="getImages(src.image)"
                                itemprop="thumbnail" alt="Image description">
                        </figure>
                    </div>
                    <vue-easy-lightbox :index="indexRef" :visible="visible" :imgs="imgs"
                        @hide="handleHide"></vue-easy-lightbox>
                </div>
                <div class="like-comment">
                    <ul class="list-inline">
                        <li class="list-inline-item border-right pe-3">
                            <label class="m-0"><a href="#"><i class="fa fa-heart"></i></a>  Like</label><span
                                class="ms-2 counter">
                                <number class="bold counter" ref="number1" :from="0" :to="2659" :duration="5" :delay="0"
                                    easing="Power1.easeOut" />
                            </span>
                        </li>
                        <li class="list-inline-item ms-2">
                            <label class="m-0"><a href="#"><i class="fa fa-comment"></i></a>  Comment</label><span
                                class="ms-2 counter">
                                <number class="bold counter" ref="number1" :from="0" :to="569" :duration="5" :delay="0"
                                    easing="Power1.easeOut" />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { social } from "~/core/data/ecommerce"
const lightBoxImages = ref([])
const visible = ref<boolean>(false)
const indexRef = ref<number>(0)
const imgs = ref([{ src: '/images/other-images/profile-style-img3.png', title: 'Image caption  1' },])
const img = ref([{ image: 'other-images/profile-style-img3.png' },])
function getImages(path: string) {
    return '/images/' + path
}
function showImg(index: number) {
    indexRef.value = index
    visible.value = true
}
function handleHide() {
    visible.value = false
}
</script>

