<template>
    <CommonCard3 colClass="col-sm-12 col-xl-6" cardClass="title-line" pre="true" preClass="f-m-light mt-1"
        headerTitle="true" title="Icon In Heading" iconfonts="true" :desc="desc">
        <div class="d-flex gap-3 align-items-center list-behavior-1">
            <div class="flex-shrink-0"><img class="tab-img img-fluid" src="/images/blog/img.png" alt="home"></div>
            <div class="flex-grow-1 ms-0">
                <p class="mb-xl-0 mb-sm-4">We provide end to end digital solutions, right from designing your
                    website/application development: Domain, Web Hosting, Email Hosting Registration, Search
                    Engine Optimization and other Internet Marketing, Renewal of Services timely and
                    effectively.</p>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { card } from "~/core/data/advance"
let desc = ref<string>("Use the any icons for heading. <code>[font-awesome/ico-font/feather]</code>.")
</script>