<template>
    <div class="col-xl-12 xl-40 box-col-6 order-xxl-v col-lg-4">
        <div class="card height-equals">
            <div class="card-header">
                <h5 class="mb-0">
                    <button class="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseicon4"
                        :aria-expanded="isActive ? 'true' : 'false'" aria-controls="collapseicon4"
                        :class="[isActive ? 'active' : '']" v-on:click="toggle">Latest Photos</button>
                </h5>
            </div>
            <div :class="[isActive ? 'block' : ' show']" v-show="isActive">
                <div class="card-body photos filter-cards-view">
                    <ul class="common-flex latest-photos">
                        <li v-for="(item, index) in latestphotos " :key="index">
                            <div class="latest-post"><img class="img-fluid" alt="" :src="getImages(item.img)"></div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { latestphotos } from "~/core/data/sociall-app"
import { getImages } from "~/composables/common/getImages"
let isActive = ref<boolean>(true)
function toggle() {
    isActive.value = !isActive.value
}
</script>