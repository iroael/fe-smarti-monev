<template>
    <CommonCard3 colClass="col-sm-12 col-xxl-6 box-col-6" cardbodyClass="megaoptions-border-space-sm" pre="true"
        preClass="f-m-light mt-1" headerTitle="true" title="Offer style border" :desc="desc" footer="show"
        lightclass="list-light-success" footerclass="text-end" btnclass=" btn-success">
        <form class="mega-inline offer-style">
            <div class="row flex-column">
                <div class="col-12" v-for="(item, index) in offer" :key="index">
                    <div class="card">
                        <div class="d-flex p-20">
                            <div class="form-check checkbox " :class="item.class">
                                <input class="form-check-input" :id="item.id" type="checkbox" :checked="item.checked">
                                <label class="form-check-label my-0" :for="item.id"><span class="flex-grow-1"><span
                                            class="d-flex list-behavior-1"><span class="flex-shrink-0"><img
                                                    class="tab-img img-fluid" :src="getImages(item.img)"
                                                    alt="fruits"></span><span class="flex-grow-1"><span class="mb-0">{{
                                                        item.desc }}</span></span></span></span></label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </form>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { offer } from "~/core/data/forms"
import { getImages } from "~/composables/common/getImages"
let desc = ref<string>(" Use the <code>.offer-style </code>class to<code> .mega-inline</code> you can archive this style.")
</script>