<template>
    <div class="col-xl-9 xl-60 box-col-12">
        <div class="card" v-for="(job, index) in jobs" :key="index"
            :class="{ 'ribbon-vertical-left-wrapper': job.priority == 1 || job.priority == 7, }">
            <div v-if="job.priority == 1" class="ribbon ribbon-bookmark ribbon-vertical-left ribbon-primary"><i
                    class="icofont icofont-globe-alt"></i></div>
            <div v-if="job.priority == 7" class="ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary"><i
                    class="icofont icofont-award"></i></div>
            <div class="job-search">
                <div class="card-body">
                    <div class="d-flex"><img class="img-40 img-fluid m-r-20" :src="getImages(job.image)" alt="">
                        <div class="flex-grow-1">
                            <h6 class="f-w-600"> <nuxt-link :to="`/job_search/details/${job.id}`">{{
                                job.title
                            }}</nuxt-link><span class="pull-right" v-if="job.date" v-text="job.date"></span>
                                <span class="badge badge-primary pull-right" v-else>New</span>
                            </h6>
                            <p>{{ job.company }} <span>{{ job.city }}, {{ job.country }} </span> <span
                                    v-html="stars(job.stars)"></span></p>
                        </div>
                    </div>
                    <p v-text="job.description"></p>
                </div>
            </div>
        </div>
        <div class="job-pagination">
            <nav aria-label="Page navigation example">
                <ul class="pagination pagination-primary">
                    <li class="page-item"><a class="page-link" @click="prev()">Previous</a></li>
                    <li class="page-item" v-for="i in num_pages()" :key="i"
                        v-bind:class="[i == currentPage ? 'active' : '']" v-on:click="change_page(i)">
                        <a class="page-link">{{ i }}</a>
                    </li>
                    <li class="page-item"><a class="page-link" @click="change()">Next</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { jobs } from "~/core/data/job"
import { getImages } from "~/composables/common/getImages"
let elementsPerPage = ref<number>(10)
let currentPage = ref<number>(1)
function stars(count: number) {
    var stars = '';
    for (var i = 0; i < 5; i++) {
        if (count > i) {
            stars = stars + '<i class="fa fa-star font-warning"></i>';
        } else {
            stars = stars + '<i class="fa fa-star-o font-warning"></i>';
        }
    }
    return stars;
}
function num_pages() {
    return Math.ceil(jobs.length / elementsPerPage.value);
}
function change_page(page: number) {
    currentPage.value = page;
}
function change() {
    if (currentPage.value < Math.ceil(jobs.length / elementsPerPage.value)) {
        currentPage.value++;
    }
}
function prev() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}
</script>