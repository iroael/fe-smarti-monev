<template>
    <div class="tab-pane fade" id="video-links" role="tabpanel" aria-labelledby="video-link">
        <div class="row">
            <div class="col-xxl-6" v-for="(item, index) in video" :key="index">
                <h6 v-if="item.val" class="py-2">{{ item.title }}</h6>
                <h6 class="py-2" v-else>{{ item.title }}</h6>
                <div class="d-flex info-block" v-for="(items, index) in item.children" :key="index">
                    <iframe class="me-3" width="200" height="100" :src="items.youtube"></iframe>
                    <div class="flex-grow-1"><a href="">{{ items.link }}</a>
                        <h6>{{ items.title }}</h6>
                        <div class="star-ratings">
                            <ul class="search-info">
                                <li>3 stars</li>
                                <li>590 votes</li>
                                <li>Theme</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-12 m-t-30">
                <div>
                    <nav aria-label="...">
                        <ul class="pagination pagination-primary">
                            <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item active"><a class="page-link" href="#">2 <span
                                        class="sr-only">(current)</span></a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { video } from "~/core/data/search-result"
</script>