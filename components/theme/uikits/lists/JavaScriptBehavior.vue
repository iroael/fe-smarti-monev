<template>
    <CommonCard3 colClass="col-sm-12 col-xl-12" cardClass="title-line" pre="true" preClass="f-m-light mt-2"
        headerTitle="true" title="JavaScript behavior" cardbodyClass="behaviour-list" :desc="desc">
        <div class="row">
            <div class="col-sm-4">
                <div class="list-group" id="list-tab" role="tablist"><a
                        class="list-group-item list-group-item-action bg-primary active" id="list-home-list"
                        data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Home</a><a
                        class="list-group-item list-group-item-action list-hover-primary" id="list-profile-list"
                        data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a><a
                        class="list-group-item list-group-item-action list-hover-primary" id="list-messages-list"
                        data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Contact
                        Us</a><a class="list-group-item list-group-item-action list-hover-primary" id="list-settings-list"
                        data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active list-behaviors" id="list-home" role="tabpanel"
                        aria-labelledby="list-home-list">
                        <div class="d-flex mb-xl-4 list-behavior-1">
                            <div class="flex-shrink-0"><img class="tab-img img-fluid" src="/images/blog/img.png" alt="home">
                            </div>
                            <div class="flex-grow-1">
                                <p class="mb-xl-0 mb-sm-4">We provide end to end digital solutions, right from designing
                                    your website/application development: Domain, Web Hosting, Email Hosting Registration,
                                    Search Engine Optimization and other Internet Marketing, Renewal of Services timely and
                                    effectively.</p>
                            </div>
                        </div>
                        <div class="d-flex list-behavior-1 mb-xl-4">
                            <div class="flex-shrink-0"><img class="tab-img img-fluid" src="/images/blog/blog.jpg"
                                    alt="home"></div>
                            <div class="flex-grow-1">
                                <p class="mb-0">When someone visits your homepage, your design should inspire them to stay.
                                    Therefore, your value proposition should be established on the homepage for visitors to
                                    select to stay on your website.Building trust, expressing value, and guiding visitors to
                                    the next step all depend on a page's design.</p>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade dark-list" id="list-profile" role="tabpanel"
                        aria-labelledby="list-profile-list">
                        <div class="flex-space align-items-center contact-profile"><img class="tab-img"
                                src="/images/avtar/3.jpg" alt="profile">
                            <ul class="d-flex flex-column gap-2">
                                <li> <strong>Visit Us: </strong> 2600 Hollywood Blvd,Florida, United States- 33020</li>
                                <li><strong>Mail Us:</strong>contact@us@gmail.com</li>
                                <li><strong>Contact Number: </strong>(954) 357-7760</li>
                            </ul>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                        <ul class="d-flex flex-column gap-1">
                            <li>Us Technology offers web & mobile development solutions for all industry verticals.Include a
                                short form using fields that'll help your business understand who's contacting them.</li>
                            <li> <strong>Visit Us: </strong> 2600 Hollywood Blvd,Florida, United States- 33020</li>
                            <li> <strong>Mail Us:</strong>contact@us@gmail.com</li>
                            <li><strong>Contact Number: </strong>(954) 357-7760</li>
                        </ul>
                    </div>
                    <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                        <ul class="d-flex flex-column gap-2">
                            <li><strong>Available pages in Theme: </strong></li>
                            <li>
                                --> Typography:
                                Typography is the art of arranging letters and text in a way that makes the copy legible,
                                clear, and visually appealing to the reader.
                            </li>
                            <li>
                                --> Tooltip:
                                A tooltip is a brief, informative message that appears when a user interacts with an element
                                in a graphical user interface (GUI).
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { defaults } from "~/core/data/uikits"
let desc = ref<string>("Use the tab JavaScript plugin—include it individually or through the compiled<code> bootstrap.js </code>file to extend our list group to create table panes of local content.")
</script>