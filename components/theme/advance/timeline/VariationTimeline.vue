<template>
    <CommonCard3 colClass="col-xxl-4 col-xl-5 notification box-col-12" cardClass="title-line" cardbodyClass="dark-timeline"
        pre="true" preClass="f-m-light mt-1" headerTitle="true" title="Variation Timeline" :desc="desc">
        <ul class="timeline-lists variation-timeline">
            <li class="d-flex">
                <div class="activity-dot-primary"></div>
                <div class="w-100 ms-3">
                    <p class="d-flex justify-content-between mb-2"><span class="date-content light-background">8th
                            March, 2024 </span><span>1 day ago</span></p>
                    <h6>Updated Product<span class="dot-notification"></span></h6>
                    <p class="f-light">Quisque a consequat ante sit amet magna...</p>
                </div>
            </li>
            <li class="d-flex">
                <div class="activity-dot-warning"></div>
                <div class="w-100 ms-3">
                    <p class="d-flex justify-content-between mb-2"><span class="date-content light-background">5th
                            Feb, 2024 </span><span>Today</span></p>
                    <h6>Added Bew Items<span class="dot-notification"></span></h6><span class="f-light">Quisque a
                        consequat ante sit amet magna...</span>
                    <div class="recent-images">
                        <ul>
                            <li>
                                <div class="recent-img-wrap"><img src="/images/product/products/1.png" alt="chair">
                                </div>
                            </li>
                            <li>
                                <div class="recent-img-wrap"><img src="/images/product/products/2.png" alt="chair">
                                </div>
                            </li>
                            <li>
                                <div class="recent-img-wrap"><img src="/images/product/products/3.png" alt="men t-shirt">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="d-flex pb-0">
                <div class="activity-dot-secondary"></div>
                <div class="w-100 ms-3">
                    <p class="d-flex justify-content-between mb-2"><span class="date-content light-background">20th
                            Sep, 2024 </span><span>12:00 PM</span></p>
                    <h6>Tello just like your product<span class="dot-notification"></span></h6>
                    <p>Quisque a consequat ante sit amet magna...</p>
                </div>
            </li>
        </ul>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("Use the <code>.activity-dot-primary </code>through rounded animations.")
</script>