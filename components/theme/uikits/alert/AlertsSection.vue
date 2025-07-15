<template>
    <CommonCard3 colClass="col-sm-12 col-xl-6" cardClass="title-line height-equal" pre="true" preClass="f-m-light mt-1"
        headerTitle="true" title="Dismissing dark alert" :desc="desc">
        <div class="alert alert-dark dark alert-dismissible fade show" role="alert">
            <Icon name="mdi:cards-heart-outline"></Icon>
            <p>Check your update! You should check in on some of those fields below.</p>
            <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </CommonCard3>

    <CommonCard3 colClass="col-sm-12 col-xl-6" cardClass="title-line height-equal" pre="true" preClass="f-m-light mt-1"
        headerTitle="true" title="Dismissing light alert" :desc="desc">
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <Icon name="lucide:bell"></Icon>
            <p>Hidden content You should check in on some of those fields below.</p>
            <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </CommonCard3>

    <CommonCard3 colClass="col-xl-6" cardbodyClass="live-dark" cardClass="title-line height-equal" pre="true"
        preClass="f-m-light mt-1" headerTitle="true" title="Live alert" :desc="desc">
        <div id="liveAlertPlaceholder">
            <div v-for="(item, index) in data" :key="index">
                <div class="alert alert-light-danger txt-dark mb-3 alert-dismissible" role="alert">
                    <div>{{ item }}</div> <button type="button" class="btn-close" data-bs-dismiss="alert"
                        aria-label="Close"></button>
                </div>
            </div>
        </div>
        <button class="btn btn-danger" id="liveAlertBtn" type="button" @click="addAlert">Show live alert</button>
    </CommonCard3>

    <CommonCard3 colClass="col-xl-6" cardbodyClass="live-dark" cardClass="title-line height-equal" pre="true"
        preClass="f-m-light mt-1" headerTitle="true" title="Left border alert" :desc="desc">
        <div class="alert alert-light-secondary light alert-dismissible fade show text-dark border-left-wrapper"
            role="alert">
            <Icon name="mdi:help-circle-outline"></Icon>
            <p>You can check in on some of those fields below.</p>
            <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { alert } from "~/core/data/uikits"
let desc = ref<string>("Use the <code>.alert-dismissible</code> utility class to quickly remove the alerts.")
let desc1 = ref<string>(" Click the button below to show an alert,then dismiss it with the built-in close button.")
let desc2 = ref<string>("Use the <code>.border-left-wrapper </code>to change border-left radius.")
let data = ref<string[]>([])
function addAlert() {
    data.value.push("Nice, you triggered this alert message!")
}
</script>