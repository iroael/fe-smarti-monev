<template>
    <div class="container-fluid dashboard2">
        <div class="row">
            <div class="col-xl-9 col-xl-80">
                <div class="row">
                    <ThemeDashboardEcommerce />
                </div>
            </div>
            <div class="col-xl-3 col-xl-40">
                <div class="row">
                    <ThemeDashboardEcommerceSidebar />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Dashboards Ecommerce | Yuri - Premium Nuxt Admin Template'
})
</script>

