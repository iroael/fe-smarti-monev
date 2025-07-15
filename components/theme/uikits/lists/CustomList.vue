<template>
    <CommonCard3 colClass="col-md-12" cardClass="title-line" pre="true" preClass="f-m-light mt-2" headerTitle="true"
        title="Custom content lists" :desc="desc">
        <div class="list-group main-lists-content">
            <a class="list-group-item list-group-item-action " :class="item.class" v-for="(item, index) in customs"
                :key="index" href="#" aria-current="true">
                <div class="d-flex w-100 justify-content-between align-items-center">
                    <div class="list-wrapper"><img class="list-img" :src="getImages(item.img)" alt="profile">
                        <div class="list-content">
                            <h4 :class="item.titleClass">{{ item.name }}</h4>
                            <p>{{ item.email }}</p>
                        </div>
                    </div><small>{{ item.day }}</small>
                </div>
                <p class="mb-1">{{ item.desc }}</p><small :class="item.followClass">{{ item.follow }}</small>
            </a>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { customs } from "~/core/data/uikits"
import { getImages } from "~/composables/common/getImages"
let desc = ref<string>("Use the <code>.list-group-item</code> through make custom design of all lists.")
</script>