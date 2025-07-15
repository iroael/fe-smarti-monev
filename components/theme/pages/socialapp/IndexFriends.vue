<template>
    <div class="row">

        <CommonCard3 colClass="col-xl-4 col-sm-6 col-xxl-3 col-ed-4 box-col-4" cardClass="social-profile"
            v-for="(item, index) in userCard" :key="index">
            <div class="social-img-wrap">
                <div class="social-img"><img :src="getImages(item.img)" alt="profile"></div>
                <div class="edit-icon">
                    <svg>
                        <use href="/svg/icon-sprite.svg#profile-check"></use>
                    </svg>
                </div>
            </div>
            <div class="social-details">
                <h5 class="mb-1"><nuxt-link to="/pages/social_app">{{ item.name }}</nuxt-link></h5><span class="f-light">{{
                    item.email
                }}</span>
                <ul class="card-social">
                    <li><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://accounts.google.com/" target="_blank"><i class="fa fa-google-plus"></i></a>
                    </li>
                    <li><a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram"></i></a>
                    </li>
                    <li><a href="https://rss.app/" target="_blank"><i class="fa fa-rss"></i></a></li>
                </ul>
                <ul class="social-follow">
                    <li>
                        <h3 class="mb-0 f-w-600">{{ item.post }}</h3><span class="f-light">Posts</span>
                    </li>
                    <li>
                        <h3 class="mb-0 f-w-600">{{ item.follower }}</h3><span class="f-light">Followers</span>
                    </li>
                    <li>
                        <h3 class="mb-0 f-w-600">{{ item.following }}</h3><span class="f-light">Following</span>
                    </li>
                </ul>
            </div>
        </CommonCard3>


    </div>
</template>
<script lang="ts" setup>
import { userCard } from "~/core/data/app"
import { getImages } from "~/composables/common/getImages"
</script>