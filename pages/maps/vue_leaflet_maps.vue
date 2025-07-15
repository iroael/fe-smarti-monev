<template>
    <div class="container-fluid">
        <div class="row">
            <CommonCard3 colClass="col-xl-6" cardbodyClass="map-z-index" title="Simple Map" pre="true"
                preClass="f-m-light mt-1" headerTitle="true" text="true" :desc="desc">
                <ThemeMapsSimpleMap />
            </CommonCard3>
            <CommonCard3 colClass="col-xl-6" cardbodyClass="map-z-index" pre="true" preClass="f-m-light mt-1"
                title="Multi-language support" headerTitle="true" text="true" :desc="desc">
                <ThemeMapsMultiLanguage />
            </CommonCard3>
            <CommonCard3 colClass="col-xl-12" cardbodyClass="map-z-index" pre="true" preClass="f-m-light mt-1"
                title="Multi-language support" headerTitle="true" text="true" :desc="desc">
                <ThemeMapsMultiLanguage2 />
            </CommonCard3>
        </div>
    </div>
</template>
<script lang="ts" setup>
useHead({
    title: "Leaflet Map | Smarti - Sistem Monitoring Rumah Terintegrasi"
})
let desc = ref<string>("Display a map with labels in a foreign language")
</script>