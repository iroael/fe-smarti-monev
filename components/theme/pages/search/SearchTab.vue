<template>
        <div class="card-body">
                <div class="text-center">
                        <ul class="nav nav-tabs search-list" id="top-tab" role="tablist">
                                <li class="nav-item" :class="item.class" v-for="(item, index) in tab" :key="index"><a
                                                class="nav-link " :class="item.active" :id="item.id" data-bs-toggle="tab"
                                                :href="item.href" role="tab" aria-selected="true"><i :class="item.icon"></i>{{
                                                        item.title }}</a>
                                </li>
                                <li class="nav-item bg-warning"><a class="nav-link " id="setting-link" data-bs-toggle="tab"
                                                href="#setting-links" role="tab" aria-selected="false">Settings</a></li>
                                <li class="nav-item bg-secondary"><a class="nav-link txt-secondary" id="setting-link"
                                                data-bs-toggle="tab" href="#tools-links" role="tab"
                                                aria-selected="false">Tools</a></li>
                        </ul>
                </div>
                <div class="tab-content" id="top-tabContent">
                        <ThemePagesSearchAllLink />
                        <ThemePagesSearchImageLink />
                        <ThemePagesSearchVideoLink />
                </div>
        </div>
</template>
<script lang="ts" setup>
import { tab } from "~/core/data/search-result"
</script>