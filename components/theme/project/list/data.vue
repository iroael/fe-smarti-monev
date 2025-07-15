<template>
    <div class="row">
        <div class="col-xxl-4 col-md-6" v-for="(project, index) in data" :key="index"
            :class="index < 3 ? 'mb-0' : ''">
            <div class="project-box" :class="project.badge == 'Doing' ? 'b-light1-primary' : 'b-light1-success'"><span
                    class="badge" :class="project.badge == 'Doing' ? 'badge-primary' : 'badge-success'">{{ project.badge
                    }}</span>
                <h4>{{ project.title }}</h4>
                <div class="d-flex"><img class="img-20 me-2 rounded-circle" :src='getImages(project.img)' alt=""
                        data-original-title="" title="">
                    <div class="flex-grow-1">
                        <p class="mb-0">{{ project.sites }}</p>
                    </div>
                </div>
                <p>{{ project.desc }}</p>
                <div class="row details">
                    <div class="col-6"><span>Issues </span></div>
                    <div class="col-6 " :class="project.badge == 'Doing' ? 'font-primary' : 'font-success'">{{ project.issue
                    }}
                    </div>
                    <div class="col-6"> <span>Resolved</span></div>
                    <div class="col-6 " :class="project.badge == 'Doing' ? 'font-primary' : 'font-success'">{{
                        project.resolved
                    }}</div>
                    <div class="col-6"> <span>Comment</span></div>
                    <div class="col-6 " :class="project.badge == 'Doing' ? 'font-primary' : 'font-success'">{{
                        project.comment
                    }}</div>
                </div>
                <div class="customers">
                    <ul>
                        <li class="d-inline-block"><img class="img-30 rounded-circle"
                                :src='getImages(project.customers_img1)' alt="" data-original-title="" title=""></li>
                        <li class="d-inline-block"><img class="img-30 rounded-circle"
                                :src='getImages(project.customers_img2)' alt="" data-original-title="" title=""></li>
                        <li class="d-inline-block"><img class="img-30 rounded-circle"
                                :src='getImages(project.customers_img3)' alt="" data-original-title="" title=""></li>
                        <li class="d-inline-block ms-2">
                            <p class="f-12">{{ project.like }} More</p>
                        </li>
                    </ul>
                </div>
                <div class="project-status mt-4">
                    <div class="d-flex mb-0">
                        <p>{{ project.progress }}% </p>
                        <div class="flex-grow-1 text-end"><span>Done</span></div>
                    </div>
                    <div class="progress" style="height: 5px">
                        <div class="progress-bar-animated progress-bar-striped"
                            :class="project.badge == 'Doing' ? 'bg-primary' : 'bg-success'" role="progressbar"
                            :style="{ 'width': project.progress + '%' }" aria-valuenow="10" aria-valuemin="0"
                            aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
defineProps({
    data: Array
})
function getImages(imgPath: string) {
    return '/images/' + imgPath
}
</script>

