<template>
    <div class="error-wrapper maintenance-bg">
        <div class="container">
            <ul class="maintenance-icons">
                <li><i class="fa fa-cog"></i></li>
                <li><i class="fa fa-cog"></i></li>
                <li><i class="fa fa-cog"></i></li>
            </ul>
            <div class="maintenance-heading">
                <h2 class="headline">MAINTENANCE</h2>
            </div>
            <h4 class="sub-content">Our Site is Currently under maintenance We will be back Shortly<br> Thank You For
                Patience</h4>
            <div><nuxt-link class="btn btn-primary-gradien btn-lg text-light" to="/">BACK TO HOME PAGE</nuxt-link></div>
        </div>
    </div>
</template>
<script lang="ts" setup>
definePageMeta({
    layout: 'custom'
})
useHead({
    title: "Maintenance | Smarti - Sistem Monitoring Rumah Terintegrasi"
})
</script>