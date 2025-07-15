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
                                <div class="tour-wrapper"><span>05 Feb</span><i class="tour-dot fa fa-circle"></i><span
                                        class="txt-danger">5 min read</span></div>
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
                <div class="row">
                    <div class="col-lg-12 col-xl-4">
                        <div class="my-gallery" id="aniimated-thumbnials-3" itemscope>
                            <figure itemprop="associatedMedia" v-for="(src, index) in img" :key="index"
                                @click="() => showImg(index)"><img class="img-fluid rounded" :src="getImages(src.image)"
                                    itemprop="thumbnail" alt="Image description">
                            </figure>
                        </div>
                        <vue-easy-lightbox :index="indexRef" :visible="visible" :imgs="imgs"
                            @hide="handleHide"></vue-easy-lightbox>
                        <div class="like-comment mt-4 like-comment-sm-mb">
                            <ul class="list-inline">
                                <li class="list-inline-item border-right pe-3">
                                    <label class="m-0"><a href="#"><i class="fa fa-heart"></i></a>  Like</label><span
                                        class="ms-2 counter">
                                        <number class="bold counter" ref="number1" :from="0" :to="2659" :duration="5"
                                            :delay="0" easing="Power1.easeOut" />
                                    </span>
                                </li>
                                <li class="list-inline-item ms-2">
                                    <label class="m-0"><a href="#"><i class="fa fa-comment"></i></a>  Comment</label><span
                                        class="ms-2 counter">
                                        <number class="bold counter" ref="number1" :from="0" :to="569" :duration="5"
                                            :delay="0" easing="Power1.easeOut" />
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                            Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                            words, consecteturContrary to popular belief, Lorem Ipsum is not simply random text. It has
                            roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
                            the more obscure Latin words, consectetur</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { social } from "~/core/data/ecommerce"
const visible = ref<boolean>(false)
const indexRef = ref<number>(0)
const imgs = ref([{ src: '/images/blog/img.png' },])
const img = ref([{ image: 'blog/img.png' },])
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