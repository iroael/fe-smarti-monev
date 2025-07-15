<template>
    <div class="col-xl-9 col-md-12 box-col-12">
        <div class="email-right-aside bookmark-tabcontent">
            <div class="card email-body radius-left">
                <div class="ps-0">
                    <div class="tab-content">
                        <div class="tab-pane fade" id="pills-created"
                            v-bind:class="(store.activeclass === 'pills_created') ? 'active show' : ''" role="tabpanel"
                            aria-labelledby="pills-created-tab">
                            <ThemeAppBookmarkList :listData="store.bookmarkData" title="Created by me" />
                        </div>
                        <div class="tab-pane fade" id="pills_favourites"
                            v-bind:class="(store.activeclass === 'pills_favourites') ? 'active show' : ''" role="tabpanel"
                            aria-labelledby="pills-created-tab">
                            <ThemeAppBookmarkList :listData="store.favourite" title="Favourites" />
                        </div>
                        <div class="tab-pane fade" id="pills_favourites"
                            v-bind:class="(store.activeclass === 'pills_shared') ? 'active show' : ''" role="tabpanel"
                            aria-labelledby="pills-created-tab">
                            <ThemeAppBookmarkList :listData="[]" title="Shared with me" />
                        </div>
                        <div class="tab-pane fade" id="pills_favourites"
                            v-bind:class="(store.activeclass === 'pills_bookmark') ? 'active show' : ''" role="tabpanel"
                            aria-labelledby="pills-created-tab">
                            <ThemeAppBookmarkList :listData="store.bookmarkData" title="My bookmark" />
                        </div>
                        <div class="tab-pane fade" id="pills_favourites"
                            v-bind:class="(store.activeclass === 'pills_notification') ? 'active show' : ''" role="tabpanel"
                            aria-labelledby="pills-created-tab">
                            <ThemeAppBookmarkList :listData="[]" title="Notification" />
                        </div>
                        <div class="tab-pane fade" id="pills_favourites"
                            v-bind:class="(store.activeclass === 'pills_newsletter') ? 'active show' : ''" role="tabpanel"
                            aria-labelledby="pills-created-tab">
                            <ThemeAppBookmarkList :listData="[]" title="Newsletter" />
                        </div>
                        <div class="tab-pane fade" id="pills_favourites"
                            v-bind:class="(store.activeclass === 'pills_business') ? 'active show' : ''" role="tabpanel"
                            aria-labelledby="pills-created-tab">
                            <ThemeAppBookmarkList :listData="[]" title="Business" />
                        </div>
                        <div class="tab-pane fade" id="pills_favourites"
                            v-bind:class="(store.activeclass === 'pills_holidays') ? 'active show' : ''" role="tabpanel"
                            aria-labelledby="pills-created-tab">
                            <ThemeAppBookmarkList :listData="[]" title="Holidays" />
                        </div>
                        <div class="tab-pane fade" id="pills_favourites"
                            v-bind:class="(store.activeclass === 'pills_important') ? 'active show' : ''" role="tabpanel"
                            aria-labelledby="pills-created-tab">
                            <ThemeAppBookmarkList :listData="[]" title="Important" />
                        </div>
                        <div class="tab-pane fade" id="pills_favourites"
                            v-bind:class="(store.activeclass === 'pills_organization') ? 'active show' : ''" role="tabpanel"
                            aria-labelledby="pills-created-tab">
                            <ThemeAppBookmarkList :listData="[]" title="Organization" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from "~/stores/app"
let store = useAppStore();
</script>

