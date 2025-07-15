<template>
    <div class="col-xl-3 box-col-6">
        <div class="md-sidebar">
            <a class="btn btn-primary md-sidebar-toggle" href="javascript:void(0)" @click="collapseFilter()">bookmark
                filter</a>
            <div class="md-sidebar-aside job-left-aside custom-scrollbar" :class="filtered ? 'open' : ''">
                <div class="email-left-aside">
                    <div class="card">
                        <div class="card-body">
                            <div class="email-app-sidebar left-bookmark">
                                <div class="d-flex">
                                    <div class="media-size-email"><img class="me-3 rounded-circle"
                                            src="/images/user/user.png" alt=""></div>
                                    <div class="flex-grow-1">
                                        <h6 class="f-w-600">MARK JENCO</h6>
                                        <p>Markjecno@gmail.com</p>
                                    </div>
                                </div>
                                <ul class="nav main-menu" role="tablist">
                                    <li class="nav-item">
                                        <button class="badge-light-primary btn-block btn-mail txt-primary w-100"
                                            type="button" data-bs-toggle="modal" data-bs-target="#bookmarkmodal"
                                            @click="show = true">
                                            <Icon class="me-2" name="ph:bookmark-simple"></Icon> New Bookmark
                                        </button>
                                    </li>
                                    <li class="nav-item"><span class="main-title"> Views</span></li>
                                    <li><a id="pills-created-tab" data-toggle="pill" href="javascript:void(0)" role="tab"
                                            aria-controls="pills-created" aria-selected="true"><span class="title"
                                                v-on:click="say('pills_created')"> Created by me</span></a></li>
                                    <li><a class="show" id="pills-favourites-tab" data-toggle="pill"
                                            href="javascript:void(0)" role="tab" aria-controls="pills-favourites"
                                            aria-selected="false"><span class="title" v-on:click="say('pills_favourites')">
                                                Favourites ({{
                                                    favourite.length }})</span></a></li>
                                    <li><a class="show" id="pills-shared-tab" data-toggle="pill" href="javascript:void(0)"
                                            role="tab" aria-controls="pills-shared" aria-selected="false"><span
                                                class="title" v-on:click="say('pills_shared')"> Shared with me</span></a>
                                    </li>
                                    <li><a class="show" id="pills-bookmark-tab" data-toggle="pill" href="javascript:void(0)"
                                            role="tab" aria-controls="pills-bookmark" aria-selected="false"><span
                                                class="title" v-on:click="say('pills_bookmark')"> My bookmark</span></a>
                                    </li>
                                    <li>
                                        <hr />
                                    </li>
                                    <li><span class="main-title"> Tags<span class="pull-right"><a href="javascript:void(0)"
                                                    data-bs-toggle="modal" data-bs-target="#createtag">
                                                    <Icon name="ci:plus-circle-outline"></Icon>
                                                </a></span></span></li>
                                    <li><a class="show" id="pills-notification-tab" data-toggle="pill"
                                            href="javascript:void(0)" role="tab" aria-controls="pills-notification"
                                            aria-selected="false"><span class="title" @click="say('pills_notification')">
                                                notification</span></a></li>
                                    <li><a class="show" id="pills-newsletter-tab" data-toggle="pill"
                                            href="javascript:void(0)" role="tab" aria-controls="pills-newsletter"
                                            aria-selected="false"><span class="title" @click="say('pills_newsletter')">
                                                Newsletter</span></a></li>
                                    <li><a class="show" id="pills-business-tab" data-bs-toggle="pill" role="tab"
                                            aria-controls="pills-business" href="javascript:void(0)"
                                            aria-selected="false"><span class="title" @click="say('pills_business')">
                                                Business</span></a></li>
                                    <li><a class="show" id="pills-holidays-tab" data-bs-toggle="pill" role="tab"
                                            aria-controls="pills-holidays-tab" aria-selected="false"><span class="title"
                                                @click="say('pills_holidays')"> Holidays</span></a></li>
                                    <li><a class="show" id="pills-important-tab" data-bs-toggle="pill" role="tab"
                                            aria-controls="pills-important-tab" aria-selected="false"><span class="title"
                                                @click="say('pills_important')"> Important</span></a></li>
                                    <li><a class="show" id="pills-organization-tab" data-bs-toggle="pill" role="tab"
                                            aria-controls="pills-organization-tab" aria-selected="false"><span class="title"
                                                @click="say('pills_organization')"> Organization</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ThemeAppBookmarkRightContent />
    <teleport to='body'>
        <CommonModalsNewBookmark />
        <CommonModalsTagsView />
    </teleport>
</template>

<script setup lang="ts">
import { useAppStore } from "~/stores/app"
let store = useAppStore();
const favourite = store.favourite
const filtered = ref<boolean>(false)
function collapseFilter() {
    filtered.value = !filtered.value;
}
function say(message: string) {
    store.say(message)
}
</script>

