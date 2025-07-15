<template>
    <div class="container-fluid p-0">
        <div class="comingsoon">
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
    title: "Comingsoon Page | Smarti - Sistem Monitoring Rumah Terintegrasi"
})
</script>
