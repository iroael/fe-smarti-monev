<template>
    <div class="col-xl-4 xl-40 col-lg-6 col-md-5">
        <div class="row">

            <CommonCard3 colClass="col-lg-12" iconss="true" ico="lucide:circle-help" type="help-circle"
                cardClass="card-mb-faq xs-mt-search" cardhaderClass="faq-header pb-0" cardbodyClass="faq-body"
                headerTitle="true" title="Search articles">
                <div class="faq-form">
                    <input class="form-control" type="text" placeholder="Search..">
                    <Icon class="search-icon" name="tabler:search"></Icon>
                </div>
            </CommonCard3>


            <CommonCard3 colClass="col-lg-12" iconss="true" ico="lucide:settings" type="settings" cardClass="card-mb-faq "
                cardhaderClass="faq-header pb-0" cardbodyClass="faq-body" headerTitle="true" title="Navigation">
                <div class="navigation-btn">
                    <a class="btn btn-primary" href="#">
                        <Icon class="m-r-10" name="lucide:message-square"></Icon> Ask Question
                    </a>
                </div>
                <div class="navigation-option">
                    <ul>
                        <li v-for="(item, index) in navigation" :key="index"><a href="javascript:void(0)">
                                <Icon :name="item.icon"></Icon>{{ item.name }}
                            </a>
                            <span v-if="item.span" class="badge badge-primary rounded-pill pull-right">{{ item.badge
                            }}</span>
                        </li>

                    </ul>
                    <hr>
                    <ul>
                        <li><a href="javascript:void(0)">
                                <Icon name="ph:chat-circle-light"></Icon>Ask
                                our community
                            </a></li>
                        <li><a href="javascript:void(0)">
                                <Icon name="ph:envelope-simple-bold"></Icon>Contact us
                            </a>
                        </li>
                    </ul>
                </div>
            </CommonCard3>

            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header faq-header pb-0">
                        <h4 class="d-inline-block">Latest Updates</h4><span class="pull-right d-inline-block">See All</span>
                    </div>
                    <div class="card-body faq-body">
                        <div class="d-flex updates-faq-main" v-for="(item, index) in latest" :key="index">
                            <div class="updates-faq">
                                <Icon class="font-primary" :name="item.icon"></Icon>
                            </div>
                            <div class="flex-grow-1 updates-bottom-time">
                                <p v-html="item.title"></p>
                                <p>{{ item.time }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { latest, navigation } from "~/core/data/faq"
let desc = ref<string>("Add <code>.btn-pill</code> and <code>.btn-air-*</code> class for raised button")
</script>