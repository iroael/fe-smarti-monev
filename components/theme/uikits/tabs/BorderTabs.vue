<template>
    <CommonCard3 colClass="col-xxl-6" cardClass="title-line" pre="true" preClass="f-m-light mt-2" headerTitle="true"
        title="Border tabs" :desc="desc">
        <ul class="nav nav-tabs border-tab mb-0" id="bottom-tab" role="tablist">
            <li class="nav-item"><a class="nav-link nav-border txt-info tab-info pt-0" id="bottom-home-tab"
                    data-bs-toggle="tab" href="#bottom-home" role="tab" aria-controls="bottom-home" aria-selected="true"><i
                        class="icofont icofont-ui-home"> </i>Home</a></li>
            <li class="nav-item"><a class="nav-link nav-border txt-info tab-info active" id="bottom-inbox-tab"
                    data-bs-toggle="tab" href="#bottom-inbox" role="tab" aria-controls="bottom-inbox"
                    aria-selected="false"><i class="icofont icofont-ui-message"></i>Inbox</a></li>
            <li class="nav-item"><a class="nav-link nav-border txt-info tab-info" id="bottom-contact-tab"
                    data-bs-toggle="tab" href="#bottom-contact" role="tab" aria-controls="bottom-contact"
                    aria-selected="false"><i class="icofont icofont-man-in-glasses"></i>Contact</a></li>
        </ul>
        <div class="tab-content" id="bottom-tabContent">
            <div class="tab-pane fade" id="bottom-home" role="tabpanel" aria-labelledby="bottom-home-tab">
                <p class="pt-3">A navigation bar is a particularly important feature because it allows visitors to quickly
                    and easily find <em class="txt-danger">important pages on your website,</em> like your blog, product
                    pages, pricing, contact info, and documentation. This improves the chances of visitors browsing your
                    site longer, which can boost your page views and reduce your bounce rate.Create product Builder tool is
                    also pre-bundled in this template so that you can let the audience configure the product by themselves
                    before placing the order.</p>
            </div>
            <div class="tab-pane fade show active" id="bottom-inbox" role="tabpanel" aria-labelledby="bottom-inbox-tab">
                <div class="card-body pb-0">
                    <div class="main-inbox">
                        <div class="header-inbox">
                            <div class="header-left-inbox">
                                <div class="inbox-img"><img :src="getImages('ecommerce/06.jpg')" alt="profile"></div>
                                <div class="inbox-content">
                                    <h6>Dalbult Caslin </h6>
                                    <p class="text-muted">stroman.rogers@gmail.com</p>
                                </div>
                            </div>
                            <ul class="header-right-inbox">
                                <li>
                                    <p>8 JAN 11:30PM</p>
                                </li>
                                <li> <i class="txt-danger icofont icofont-ui-delete"></i></li>
                                <li> <i class="icofont icofont-telegram"></i></li>
                            </ul>
                        </div>
                        <div class="body-inbox mt-2">
                            <div class="body-h-wrapper"><i class="me-2 tab-space icofont icofont-star"></i><em>Compare
                                    Prices Find the Best Computer Assessors Fronted Issue.</em></div>
                            <p class="pt-2">Site speed and design are two of the most important ranking factors Google takes
                                into consideration, as they have the biggest effect of customer staying on site as the
                                website respond faster.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="bottom-contact" role="tabpanel" aria-labelledby="bottom-contact-tab">
                <div class="card-body px-0 pb-0">
                    <div class="form">
                        <div class="mb-3">
                            <label class="form-label" for="exampleFormControltwo">Email address</label>
                            <input class="form-control" id="exampleFormControltwo" type="email"
                                placeholder="youremail@gmail.com">
                        </div>
                        <div class="mb-0">
                            <label class="form-label" for="exampleFormControlTextarea1">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { getImages } from "~/composables/common/getImages"
let desc = ref<string>("Use the <code>.nav-link </code>with <code>.active </code>class. And hover effect added on bottom border styles.")
</script>