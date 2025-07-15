<template>
    <CommonCard3 colClass="col-xxl-4" cardClass="title-line" pre="true" preClass="f-m-light mt-2" headerTitle="true"
        title="Scrollable Lists" :desc="desc">
        <div class="list-group main-lists-contents scrollbar-wrapper">
            <a class="list-group-item list-group-item-action" :class="item.class" v-for="(item, index) in scrollable"
                :key="index" href="#" aria-current="true">
                <div class="list-wrapper gap-0"><img class="list-img" :src="getImages(item.img)" alt="profile">
                    <div class="list-content">
                        <h6>{{ item.title }}</h6>
                        <p>{{ item.email }}</p><small>{{ item.day }}</small>
                    </div>
                </div>
            </a>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { scrollable } from "~/core/data/uikits"
import { getImages } from "~/composables/common/getImages"
let desc = ref<string>("Use the property <code>overflow:auto </code>through scrollable lists.")
</script>