<template>
    <CommonCard3 colClass="col-xxl-6" cardClass="title-line" pre="true" preClass="f-m-light mt-2" headerTitle="true"
        title="Justify tabs" :desc="desc">
        <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 pb-2 p-0">
            <p> <em class="txt-danger">Admin Profiles For New Employees:</em></p>
            <ul class="nav nav-pills nav-primary" id="j-pills-tab" role="tablist">
                <li class="nav-item"><a class="nav-link" id="j-pills-web-designer-tab" data-bs-toggle="pill"
                        href="#j-pills-web-designer" role="tab" aria-controls="j-pills-web-designer" aria-selected="true">
                        Web designer</a></li>
                <li class="nav-item"><a class="nav-link active" id="j-pills-UX-designer-tab" data-bs-toggle="pill"
                        href="#j-pills-UX-designer" role="tab" aria-controls="j-pills-UX-designer" aria-selected="false">UX
                        designer</a></li>
                <li class="nav-item"><a class="nav-link" id="j-pills-IOT-developer-tab" data-bs-toggle="pill"
                        href="#j-pills-IOT-developer" role="tab" aria-controls="j-pills-IOT-developer"
                        aria-selected="false">IOT developer</a></li>
            </ul>
        </div>
        <div class="card-body px-0 pb-0">
            <div class="tab-content" id="j-pills-tabContent">
                <div class="tab-pane fade" :id="items.ids" role="tabpanel" aria-labelledby="j-pills-web-designer-tab"
                    v-for="(items, index) in justifys" :key="index" :class="items.active == true ? 'show active' : ''">
                    <div class="designer-details">
                        <div class="designer-profile" v-for="(item, index) in items.children" :key="index">
                            <div class="designer-wrap"><img class="designer-img" :src="getImages(item.img)" alt="profile">
                                <div class="designer-content">
                                    <h6>{{ item.name }}</h6>
                                    <p> {{ item.phone }}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { getImages } from "~/composables/common/getImages"
import { justifys } from "~/core/data/uikits"
let desc = ref<string>("Use the <code>.nav-link</code> with <code>.active </code>class and set content using flex property.")
</script>