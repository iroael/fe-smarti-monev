<template>
    <CommonCard3 colClass="col-xl-4 col-md-6" cardClass="title-line height-equal" titleClass="mb-0" pre="true"
        preClass="f-m-light mt-2" headerTitle="true" title="Status indicator" :desc="desc">
        <div class="avatar-showcase">
            <div class="avatars">
                <div class="avatar" v-for="(item, index) in status" :key="index"><img class=" rounded-circle"
                        :class="item.class" :src="getImages(item.img)" alt="#">
                    <div class="status" :class="item.status"></div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { status } from "~/core/data/uikits"
import { getImages } from "~/composables/common/getImages"
let desc = ref<string>("Using <code> .status-* (online/offline/dnd)</code> class you can set the status of avatar.")
</script>