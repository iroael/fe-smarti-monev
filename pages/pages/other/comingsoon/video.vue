<template>
    <div class="container-fluid p-0">
        <div class="comingsoon auth-bg-video">
            <video class="bgvideo-comingsoon" id="bgvid" poster="/images/other-images/coming-soon-bg.jpg" playsinline=""
                autoplay="" muted="" loop="">
                <source src="/video/auth-bg.mp4" type="video/mp4">
            </video>
            <div class="comingsoon-inner text-center"><img class="for-light" src="/images/logo/logo.png" alt="logo"><img
                    class="for-dark m-auto" src="/images/logo/logo_dark.png" alt="logo">
                <h5>WE ARE COMING SOON</h5>
                <div class="countdown" id="clock-arrival" data-hours="1" data-minutes="2" data-seconds="3">
                    <CommonTimerView />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    layout: 'custom'
})
useHead({
    title: "Comingsoon Video | Smarti - Sistem Monitoring Rumah Terintegrasi"
})
</script>