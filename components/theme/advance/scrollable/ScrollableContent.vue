<template>
    <CommonCard3 colClass="col-xxl-4 col-md-6" cardClass="title-line" pre="true" preClass="f-m-light mt-1"
        headerTitle="true" title="Scrollable Content" :desc="desc">
        <div class="vertical-scroll scroll-demo scroll-b-none custom-scrollbar">
            <div class="list-group main-lists-content">
                <a class="list-group-item list-group-item-action list-hover-primary" :class="item.actve ? 'active' : ''"
                    v-for="(item, index) in scrollable" :key="index" href="#" aria-current="true">
                    <div class="list-wrapper gap-0"><img class="list-img" :src="getImages(item.img)" alt="profile">
                        <div class="list-content">
                            <h3>{{ item.name }}</h3>
                            <p>{{ item.email }}</p><small>{{ item.days }}</small>
                        </div>
                    </div>
                </a>
            </div>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { scrollable } from "~/core/data/scrollable"
import { getImages } from "~/composables/common/getImages"
let desc = ref<string>(" Use the <code>.list-group-item </code>through made profile and with used <code>.vertical-scroll </code>.")

</script>