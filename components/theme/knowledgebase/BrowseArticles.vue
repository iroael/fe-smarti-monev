<template>
    <div class="col-sm-12">
        <div class="header-faq">
            <h3 class="mb-0 f-w-600">Browse articles by category</h3>
        </div>
        <div class="row">

            <CommonCard3 colClass="col-sm-12" title="Browse Articles" headerTitle="true">
                <div class="row browse g-sm-4 g-3 knowledgebase-contents">
                    <div class="col-xl-4 xl-50 col-md-6" v-for="(item, index) in category" :key="index">
                        <div class="browse-articles">
                            <h5><span>
                                    <Icon name="lucide:archive"></Icon>
                                </span>{{ item.articles }}</h5>
                            <ul>
                                <li><nuxt-link to="/">
                                        <span>
                                            <Icon name="lucide:file-text"></Icon>
                                        </span><span> {{
                                            item.articles1
                                        }}</span>
                                        <span v-if="item.badge" class="badge badge-primary pull-right">{{ item.badge1
                                        }}</span>
                                    </nuxt-link></li>
                                <li><nuxt-link to="/">
                                        <span>
                                            <Icon name="lucide:file-text"></Icon>
                                        </span><span>{{
                                            item.articles2 }}
                                        </span>
                                        <span v-if="item.badge" class="badge badge-primary pull-right">{{ item.badge2
                                        }}</span>
                                    </nuxt-link></li>
                                <li><nuxt-link to="/">
                                        <span>
                                            <Icon name="lucide:file-text"></Icon>
                                        </span><span>{{
                                            item.articles3 }}
                                        </span>
                                        <span v-if="item.badge" class="badge badge-primary pull-right">{{ item.badges
                                        }}</span>
                                    </nuxt-link></li>
                                <li><nuxt-link to="/">
                                        <span>
                                            <Icon name="lucide:file-text"></Icon>
                                        </span><span>{{
                                            item.articles4
                                        }}</span>
                                        <span v-if="item.badge" class="badge badge-primary pull-right">{{ item.badge3
                                        }}</span>
                                    </nuxt-link></li>
                                <li><nuxt-link to="/">
                                        <span>
                                            <Icon class="me-1" name="mdi:arrow-right"></Icon>
                                        </span>
                                        <span>See More ({{ item.see }})</span>
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                </div>

            </div>
        </CommonCard3>

    </div>
</div></template>
<script lang="ts" setup>
import { category } from "~/core/data/knowledgebase"
</script>