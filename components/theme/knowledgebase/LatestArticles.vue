<template>
    <div class="col-lg-12">
        <div class="header-faq">
            <h3 class="mb-0 f-w-600">Latest articles and videos</h3>
        </div>
        <div class="row knowledgebase-box">
            <div class="col-xl-4 col-md-6">
                <div class="row">

                    <CommonCard3 colClass="col-sm-12" v-for="(item, index) in articles" :key="index">
                        <div class="d-flex articles-icons">
                            <Icon class="m-r-30" :name="item.icon" size="25"></Icon>
                            <div class="flex-grow-1">
                                <h5 class="f-w-600 mb-1">{{ item.title }}</h5>
                                <p>{{ item.desc }}</p>
                            </div>
                        </div>
                    </CommonCard3>


                </div>
            </div>
            <div class="col-xl-4 col-md-6">
                <div class="row">

                    <CommonCard3 colClass="col-sm-12" v-for="(item, index) in articles1" :key="index">
                        <div class="d-flex articles-icons">
                            <Icon class="m-r-30" :name="item.icon" size="25"></Icon>
                            <div class="flex-grow-1">
                                <h5 class="f-w-600 mb-1"> {{ item.title }}</h5>
                                <p>{{ item.desc }}
                                </p>
                            </div>
                        </div>
                    </CommonCard3>


                </div>
            </div>
            <div class="col-xl-4">
                <div class="row">

                    <CommonCard3 colClass="col-xl-12 col-md-6" v-for="(item, index) in articles2" :key="index">
                        <div class="d-flex articles-icons">
                            <Icon class="m-r-30" :name="item.icon" size="25"></Icon>
                            <div class="flex-grow-1">
                                <h5 class="f-w-600 mb-1">{{ item.title }}</h5>
                                <p>{{ item.desc }}</p>
                            </div>
                        </div>
                    </CommonCard3>


                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { articles, articles1, articles2 } from "~/core/data/knowledgebase"
</script>