<template>
    <CommonCard3 colClass="col-xl-6" cardClass="title-line height-equal" titleClass="mb-0" pre="true"
        preClass="f-m-light mt-2" headerTitle="true" title="Grouping" :desc="desc">
        <div class="avatar-showcase">
            <div class="avatars">
                <div class="customers d-inline-block avatar-group" v-for="(items, index) in grouping" :key="index">
                    <ul>
                        <li class="d-inline-block" v-for="(item, index) in items.children" :key="index"><img
                                :class="item.class" :src="getImages(item.img)" alt="#"></li>

                    </ul>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { grouping } from "~/core/data/uikits"
import { getImages } from "~/composables/common/getImages"
let desc = ref<string>("You can set the group of avatars like <code>.img-* (40/50/60/80/100) </code>and <code>.b-r-* (8/30/35)</code>.")
</script>