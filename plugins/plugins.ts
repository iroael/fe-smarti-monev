import { defineNuxtPlugin } from '#app'
import Lightbox from 'vue-easy-lightbox'
import Swal from "sweetalert2";
import Multiselect from 'vue-multiselect'
import { toast } from 'vue3-toastify';
import Datepicker from '@vuepic/vue-datepicker';
import SimpleTypeahead from 'vue3-simple-typeahead';
import AosVue from "aos-vue";
import MasonryWall from '@yeger/vue-masonry-wall'
import { GChart } from "vue-google-charts";
import { GoogleMap, Marker, Polyline } from "vue3-google-map";
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import StarRating from 'vue-star-rating';
import rate from 'vue-rate'
import VueNumber from "vue-number-animation";
import {
    LIcon,
    LMap,
    LMarker,
    LPopup,
    LPolygon,
    LTileLayer,
} from "@vue-leaflet/vue-leaflet";


import "vue-multiselect/dist/vue-multiselect.css"
import 'vue3-toastify/dist/index.css';
import "@vuepic/vue-datepicker/dist/main.css";
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css';
import 'vue-rate/dist/vue-rate.css'

const options = {
    reverseButtons: true,

}
const $swal = {
    install: (Vue, options) => {
        Vue.provide("$swal", Swal.mixin(options));
    },
}
export default defineNuxtPlugin(nuxtApp => {

    nuxtApp.vueApp.component('multiselect', Multiselect)
    nuxtApp.vueApp.use(rate)
    if (process.client) {
        nuxtApp.vueApp.use(VueNumber)
        nuxtApp.vueApp.component('star-rating', StarRating);
        nuxtApp.vueApp.component("Polyline", Polyline);
        nuxtApp.vueApp.component("GoogleMap", GoogleMap);
        nuxtApp.vueApp.component("Marker", Marker);
        nuxtApp.provide('Swal', Swal)
        nuxtApp.vueApp.use($swal, options);
        nuxtApp.vueApp.use(Lightbox)
        nuxtApp.vueApp.provide("toast", toast);
        nuxtApp.vueApp.component('Datepicker', Datepicker)
        nuxtApp.vueApp.use(SimpleTypeahead)
        nuxtApp.vueApp.use(AosVue)
        nuxtApp.vueApp.component("GChart", GChart)
        nuxtApp.vueApp.use(MasonryWall)
        nuxtApp.vueApp.provide("ClassicEditor", ClassicEditor);
        nuxtApp.vueApp.component("ckeditor", CKEditor.component);
        nuxtApp.vueApp.component("LPolygon", LPolygon);
        nuxtApp.vueApp.component("LMap", LMap);
        nuxtApp.vueApp.component("LTileLayer", LTileLayer);
        nuxtApp.vueApp.component("LMarker", LMarker);
        nuxtApp.vueApp.component("LIcon", LIcon);
        nuxtApp.vueApp.component("LPopup", LPopup);
    }
})