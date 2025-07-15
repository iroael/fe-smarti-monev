<template>
    <div class="col-xl-3 xl-100 box-col-12">
        <div class="default-according style-1 faq-accordion job-accordion" id="accordionoc1">
            <div class="row">
                <div class="col-xl-12 xl-50 box-col-6 order-xxl-i col-lg-6">
                    <div class="card profile-intro">
                        <div class="card-header">
                            <h5 class="mb-0">
                                <button class="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseicon2"
                                    :aria-expanded="isActive ? 'true' : 'false'" aria-controls="collapseicon2"
                                    :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle">Profile
                                    Intro</button>
                            </h5>
                        </div>
                        <div :class="[isActive ? 'block' : ' show']" v-show="isActive">
                            <div class="card-body filter-cards-view">
                                <span class="mb-3" v-for="(item, index) in intro" :key="index">
                                    <span class="f-w-600 mb-2 d-block">{{ item.title }}</span>
                                    <p>
                                        {{ item.desc }}
                                    </p>
                                </span>
                                <div class="social-network theme-form">
                                    <h6>Social Networks</h6>
                                    <button class="btn social-btn btn-fb mb-2 text-center"><i
                                            class="fa fa-facebook m-r-5"></i>Facebook</button>
                                    <button class="btn social-btn btn-twitter mb-2 text-center"><i
                                            class="fa fa-twitter m-r-5"></i>Twitter</button>
                                    <button class="btn social-btn btn-google text-center"><i
                                            class="fa fa-dribbble m-r-5"></i>Dribbble</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ThemePagesSocialappFollowersView />
                <ThemePagesSocialappFollowingView />
                <ThemePagesSocialappLatestPhotos />
                <ThemePagesSocialappFriendsView />
                <div class="col-xl-12 xl-50 box-col-6">
                    <div class="card"><img class="img-fluid" src="/images/social-app/timeline-4.png" alt=""></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { intro } from "~/core/data/sociall-app"
const isActive = ref<boolean>(true)
function toggle() {
    isActive.value = !isActive.value
}
</script>