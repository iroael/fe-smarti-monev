<template>
    <CommonCard3 colClass="col-sm-12 col-xxl-6 box-col-6" cardClass="height-equal" pre="true" preClass="f-m-light mt-1"
        headerTitle="true" title="Horizontal style" :desc="desc" footer="show" footerclass="text-end" lightclass="btn-light"
        btnclass="btn-primary">
        <form class="mega-horizontal">
            <div class="row">
                <div class="col-sm-3">
                    <p class="mega-title">Delivery Option</p>
                </div>
                <div :class="item.colclass" v-for="(item, index) in horizontaldelivery" :key="index">
                    <div class="card">
                        <div class="d-flex p-20">
                            <div class="form-check radio m-0" :class="item.class">
                                <input class="form-check-input" :id="item.id" type="radio" name="radio1"
                                    :checked="item.checked" value="option1">
                                <label class="form-check-label" :for="item.id"><span
                                        class="flex-grow-1 megaoption-space"><span class="mt-0 mega-title-badge">{{
                                            item.label }}<span class="badge pull-right digits" :class="item.badgeclass">{{
        item.badge }}</span></span><span>{{ item.desc
    }}</span></span></label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <p class="mega-title">Buying Option</p>
                </div>
                <div :class="item.colclass" v-for="(item, index) in horizontalbuying" :key="index">
                    <div class="card">
                        <div class="d-flex p-20">
                            <div class="form-check radio  m-0 w-100" :class="item.class">
                                <input class="form-check-input" :id="item.id" type="radio" name="radio7" value="option1"
                                    :checked="item.checked">
                                <label class="form-check-label mb-0 w-100" :for="item.id"><span class="flex-grow-1"><span
                                            class="mt-0 mega-title-badge">{{ item.label }}<span
                                                class="badge  pull-right digits" :class="item.badgeclass">{{ item.badge
                                                }}</span></span><span class="rating-star-wrapper"
                                            v-html="stars(item.star)"></span>{{ item.rating
                                            }}</span></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { horizontaldelivery, horizontalbuying } from "~/core/data/forms"
import { getImages } from "~/composables/common/getImages"
let desc = ref<string>("horizontal style in mega-options. Use the <code>.mega-horizontal</code> class through created horizontal alignments.")
function stars(count: number) {
    var stars = '';

    for (var i = 0; i < 5; i++) {
        if (count > i) {
            stars = stars + '<i class="icofont icofont-star txt-warning "></i>';
        } else {
            stars = stars + '<i class="icofont icofont-star "></i>';
        }
    }

    return stars;
}
</script>