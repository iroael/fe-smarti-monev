<template>
    <div class="container-fluid">
        <div class="row">

            <CommonCard3 colClass="col-xl-6" cardbodyClass="map-z-index" pre="true" preClass="f-m-light mt-1"
                title="Map at a specified location" headerTitle="true" text="true" :desc="desc">
                <GoogleMap api-key="AIzaSyDGCQvcXUsXwCdYArPXo72dLZ31WS3WQRw" :center="{ lat: 20.5937, lng: 78.9629 }"
                    :zoom="12" style="width: auto; height: 500px">
                </GoogleMap>
            </CommonCard3>
            <CommonCard3 colClass="col-xl-6" cardbodyClass="map-z-index" title="Multi-language support" pre="true"
                preClass="f-m-light mt-1" headerTitle="true" text="true" :desc="desc1">
                <GoogleMap api-key="AIzaSyDGCQvcXUsXwCdYArPXo72dLZ31WS3WQRw" :center="{ lat: 20.5937, lng: 78.9629 }"
                    :zoom="6" style="width: auto; height: 500px" :options="{
                        region: 'VI',
                        language: 'vi',
                    }">
                </GoogleMap>
            </CommonCard3>
            <CommonCard3 colClass="col-xl-6" cardbodyClass="map-z-index" title="Marker on the Map" pre="true"
                preClass="f-m-light mt-1" headerTitle="true" text="true" :desc="desc2">
                <ThemeMapsMarkersMap />
            </CommonCard3>
            <CommonCard3 colClass="col-xl-6" cardbodyClass="map-z-index" title="Draggable Marker" pre="true"
                preClass="f-m-light mt-1" headerTitle="true" text="true" :desc="desc3">
                <ThemeMapsDraggableMarker></ThemeMapsDraggableMarker>
            </CommonCard3>
            <CommonCard3 colClass="col-xl-6" cardbodyClass="map-z-index" title="Polyline on the Map" pre="true"
                preClass="f-m-light mt-1" headerTitle="true" text="true" :desc="desc4">
                <ThemeMapsGooglePolyline></ThemeMapsGooglePolyline>
            </CommonCard3>
            <CommonCard3 colClass="col-xl-6" cardbodyClass="map-z-index" title="Polygon on the Map" pre="true"
                preClass="f-m-light mt-1" headerTitle="true" text="true" :desc="desc5">
                <ThemeMapsTrianglePolygon></ThemeMapsTrianglePolygon>
            </CommonCard3>
        </div>
    </div>
</template>
<script lang="ts" setup>
useHead({
    title: "Google Map | Smarti - Sistem Monitoring Rumah Terintegrasi"
})
import { GoogleMap, } from "vue3-google-map";
let desc = ref<string>("Display a map at a specified location and zoom level.")
let desc1 = ref<string>("Display a map with labels in a foreign language")
let desc2 = ref<string>("Display a map highlighting points of interest")
let desc3 = ref<string>("Display a map highlighting points of interest")
let desc4 = ref<string>("Display a map with a line showing a known route")
let desc5 = ref<string>("Display a map highlighting a region or area")
</script>