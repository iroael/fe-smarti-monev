<template>
    <div class="col-xl-9 xl-60 box-col-12">
        <div class="card">
            <div class="job-search">
                <div class="card-body pb-0">
                    <div class="d-flex"><img class="img-40 img-fluid m-r-20" :src="getImages(job.image)" alt="">
                        <div class="flex-grow-1">
                            <h6 class="f-w-700 mb-0"><nuxt-link :to="`/job_search/details/${job.id}`">{{
                                job.title }}</nuxt-link>
                                <span class="pull-right">
                                    <button class="btn btn-primary" type="button"><span><i
                                                class="fa fa-check text-white"></i></span> Save this job</button></span>
                            </h6>
                            <p>{{ job.company }} <span>{{ job.city }}, {{ job.country }} </span> <span
                                    v-html="stars(job.stars)"></span></p>
                        </div>
                    </div>
                    <ThemeJobApplyPersonalDetails />
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary me-1" type="submit">Submit</button>
                    <input class="btn btn-light" type="reset" value="Cancel">
                </div>
            </div>
        </div>
    </div>
    <div></div>
</template>
<script lang="ts" setup>
import { jobs } from "~/core/data/job"
import { getImages } from "~/composables/common/getImages"
import { useRouter } from 'vue-router'
const router = useRouter()

const job: any = jobs.find(job => {
    if (parseInt(router.currentRoute._rawValue.params.id) === job.id)
        return job;
})

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
</script>