<template>
    <CommonCard3 colClass="col-sm-12 col-xl-6" cardClass="title-line" pre="true" preClass="f-m-light mt-1"
        headerTitle="true" title="Outline dark and light alerts" :desc="desc">
        <div class="alert txt-secondary border-secondary alert-dismissible fade show" role="alert">
            <Icon name="tabler:clock-hour-4"></Icon>
            <p>One of <strong>YouTube's</strong>most crucial ranking factors is Watch Time.</p>
            <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div class="alert txt-warning border-warning outline-2x alert-dismissible fade show alert-icons" role="alert">
            <Icon name="lucide:thumbs-up"></Icon>
            <p><b> Well done! </b>You successfully read this important message.</p>
            <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </CommonCard3>

    <CommonCard3 colClass="col-sm-12 col-xl-6" cardClass="title-line" cardbodyClass="dark-txt" pre="true"
        preClass="f-m-light mt-1" headerTitle="true" title="Alerts with icons and text actions" :desc="desc1">
        <div class="alert border-primary alert-dismissible fade show p-0" role="alert">
            <div class="alert-arrow bg-primary"><i class="icon-timer"></i></div>
            <p>Your time Over after <strong class="txt-dark">5</strong> minute</p>
            <button class="p-0 border-0 me-2 ms-auto" type="button" data-bs-dismiss="alert" aria-label="Close"><span
                    class="bg-primary px-3 py-1" aria-hidden="true">Check</span></button>
        </div>
        <div class="alert border-secondary alert-dismissible fade show p-0 mb-0" role="alert">
            <div class="alert-arrow bg-secondary"><i class="icon-heart"></i></div>
            <p>Oh snap! Change a few things up <strong class="txt-dark"> Notification check</strong></p>
            <button class="p-0 border-0 me-2 ms-auto" type="button" data-bs-dismiss="alert" aria-label="Close"><span
                    class="bg-secondary text-white px-3 py-1" aria-hidden="true">Alert</span></button>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("Use the <code>.border-* </code>utility class to quickly provide matching border and border-width within any alert.")
let desc1 = ref<string>("Use the <code>.dismiss-text</code> class to add dismiss text instead of icon")
</script>