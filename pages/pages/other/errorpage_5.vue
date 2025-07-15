<template>
    <div class="error-wrapper">
        <div class="container"><img class="img-100" src="/images/other-images/sad.png" alt="">
            <div class="error-heading">
                <h2 class="headline font-secondary">500</h2>
            </div>
            <div class="col-md-8 offset-md-2">
                <p class="sub-content">The page you are attempting to reach is currently not available. This may be because
                    the page does not exist or has been moved.</p>
            </div>
            <div><nuxt-link class="btn btn-secondary-gradien btn-lg" to="/">BACK TO HOME PAGE</nuxt-link></div>
        </div>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    layout: 'custom'
})
useHead({
    title: "Error Page5 | Smarti - Sistem Monitoring Rumah Terintegrasi"
})
</script>