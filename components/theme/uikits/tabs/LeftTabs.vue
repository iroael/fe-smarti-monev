<template>
    <CommonCard3 colClass="col-xxl-6" cardClass="title-line" pre="true" preClass="f-m-light mt-2" headerTitle="true"
        title="Material style left tabs" :desc="desc">
        <div class="tabs-responsive-side">
            <div class="material-wrapper">
                <div class="d-flex">
                    <div class="nav flex-column nav-secondary border-tab nav-left" id="sideline-tab" role="tablist"
                        aria-orientation="vertical"><a class="nav-link nav-effect active" id="sideline-home-tab"
                            data-bs-toggle="pill" href="#sideline-home" role="tab" aria-controls="sideline-home"
                            aria-selected="true">Home</a><a class="nav-link nav-effect" id="sideline-profile-tab"
                            data-bs-toggle="pill" href="#sideline-profile" role="tab" aria-controls="sideline-profile"
                            aria-selected="false">Profile</a><a class="nav-link nav-effect" id="sideline-messages-tab"
                            data-bs-toggle="pill" href="#sideline-messages" role="tab" aria-controls="sideline-messages"
                            aria-selected="false">Inbox</a><a class="nav-link nav-effect pb-0" id="sideline-settings-tab"
                            data-bs-toggle="pill" href="#sideline-settings" role="tab" aria-controls="sideline-settings"
                            aria-selected="false">Settings</a></div>
                </div>
                <div class="material-content">
                    <div class="tab-content" id="sideline-tabContent">
                        <div class="tab-pane fade show active" id="sideline-home" role="tabpanel"
                            aria-labelledby="sideline-home-tab">
                            <p>This product is meant for educational purposes only. Any resemblance to real persons, living
                                or dead is purely coincidental. Void where prohibited. Some assembly required. List each
                                check separately by bank number. Batteries not included.Google Web Designer gives you the
                                power to create beautiful and compelling videos, images and HTML5 ads. Use animation and
                                interactive elements to build out your creative vision, then scale your content for
                                different sizes or audiences with responsive and dynamic workflows.</p>
                        </div>
                        <div class="tab-pane fade" id="sideline-profile" role="tabpanel"
                            aria-labelledby="sideline-profile-tab">
                            <p class="mb-0"></p>
                            <div class="flex-space flex-wrap align-items-center"><img class="tab-img"
                                    :src="getImages('ecommerce/08.jpg')" alt="profile">
                                <ul class="d-flex flex-column gap-1">
                                    <li> <strong> Name: </strong> Jully Catlin</li>
                                    <li><strong>Visit Us: </strong> 50006 Ehrenberg/Parker,Arkansas-85334</li>
                                    <li><strong>Mail Us:</strong> hello.@gmail.com</li>
                                    <li><strong>Contact Number: </strong> (928) 923-7940</li>
                                </ul>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="sideline-messages" role="tabpanel"
                            aria-labelledby="sideline-messages-tab">
                            <div class="card-body p-0">
                                <div class="main-inbox">
                                    <div class="header-inbox justify-content-start gap-2">
                                        <div class="header-left-inbox">
                                            <div class="inbox-img"><img :src="getImages('ecommerce/07.jpg')" alt="profile">
                                            </div>
                                        </div>
                                        <div class="inbox-content">
                                            <h6>Dalbult Caslin </h6>
                                            <p class="text-muted">stroman.rogers@gmail.com</p>
                                        </div>
                                    </div>
                                    <div class="body-inbox mt-2">
                                        <div class="body-h-wrapper"><i
                                                class="me-2 tab-space icofont icofont-star"></i><em>Compare Prices Find the
                                                Best Computer Assessors Fronted Issue.</em></div>
                                        <p class="pt-2">Site speed and design are two of the most important ranking factors
                                            Google takes into consideration, as they have the biggest effect of customer
                                            staying on site as the website respond faster.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="sideline-settings" role="tabpanel"
                            aria-labelledby="sideline-settings-tab">
                            <p><strong> In this situation, you would probably do two things:</strong> exit the page, or look
                                for the trusty search bar. If you decide to stick around, a proper search function should
                                take your query and send you to your destination. Problem solved. It's not a perfect
                                experience, but it's a hard one to avoid on larger websites that simply can't link to every
                                piece of content from the homepage.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { getImages } from "~/composables/common/getImages"
let desc = ref<string>("Use the <code>.nav-link </code>with <code>.active </code>class through jump another tabs.And <code>aria-orientation='vertical'</code>through change vertical tabs.")
</script>