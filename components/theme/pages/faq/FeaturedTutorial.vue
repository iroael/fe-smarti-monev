<template>
    <div class="col-lg-12">
        <div class="header-faq">
            <h2 class="mb-0">Featured Tutorials</h2>
        </div>
        <div class="row">
            <div class="col-xxl-3 col-md-6 box-col-6" v-for="(item, index) in featured" :key="index">
                <div class="card features-faq product-box">
                    <div class="faq-image product-img"><img class="img-fluid" :src="getImages(item.imge)" alt="">
                        <div class="product-hover">
                            <ul>
                                <li><i class="icon-link"></i></li>
                                <li><i class="icon-import"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body">
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.desc }}</p>
                    </div>
                    <div class="card-footer"><span>{{ item.date }}</span><span class="pull-right"
                            v-html="stars(item.star)"></span></div>
                </div>
            </div>

        </div>
    </div>
</template>
<script lang="ts" setup>
import { featured } from "~/core/data/faq"
import { getImages } from "~/composables/common/getImages"
function stars(count: number) {
    var stars = '';

    for (var i = 0; i < 5; i++) {
        if (count > i) {
            stars = stars + '<i class="fa fa-star font-primary"></i>';
        } else {
            stars = stars + '<i class="fa fa-star-o font-primary"></i>';
        }
    }

    return stars;
}
</script>