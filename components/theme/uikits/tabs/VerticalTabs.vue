<template>
    <CommonCard3 colClass="col-sm-12 col-xxl-6" cardClass="title-line" pre="true" preClass="f-m-light mt-1"
        headerTitle="true" title="Vertical tabs" :desc="desc">
        <div class="row">
            <div class="col-md-4 col-xs-12">
                <div class="nav flex-column nav-pills nav-warning" id="ver-pills-tab" role="tablist"
                    aria-orientation="vertical"><a class="nav-link" id="ver-pills-home-tab" data-bs-toggle="pill"
                        href="#ver-pills-home" role="tab" aria-controls="ver-pills-home" aria-selected="true">Home</a><a
                        class="nav-link active" id="ver-pills-components-tab" data-bs-toggle="pill"
                        href="#ver-pills-components" role="tab" aria-controls="ver-pills-components"
                        aria-selected="false">Components</a><a class="nav-link" id="ver-pills-pages-tab"
                        data-bs-toggle="pill" href="#ver-pills-pages" role="tab" aria-controls="ver-pills-pages"
                        aria-selected="false">Pages</a><a class="nav-link" id="ver-pills-settings-tab" data-bs-toggle="pill"
                        href="#ver-pills-settings" role="tab" aria-controls="ver-pills-settings"
                        aria-selected="false">Settings</a></div>
            </div>
            <div class="col-md-8 col-xs-12">
                <div class="tab-content" id="ver-pills-tabContent">
                    <div class="tab-pane fade" id="ver-pills-home" role="tabpanel" aria-labelledby="ver-pills-home-tab">
                        <p>It was an easy decision.an affordable expense! Absolutely! we got peace of mind. Now, my
                            time is spent on the<em class="txt-danger">“Sale”</em> and not on technology. Create
                            product Builder tool is also pre-bundled in this template so that you can let the
                            audience configure the product by themselves before placing the order.We are a small yet
                            highly-skilled group of creative brains with a vast experience. Our team of web
                            designers, online marketing experts, content writers, graphic professionals have
                            completed numerous projects.</p>
                    </div>
                    <div class="tab-pane fade" :class="items.active == true ? 'show active' : ''"
                        v-for="(items, index) in verticals" :key="index" :id="items.ids" role="tabpanel"
                        aria-labelledby="ver-pills-components-tab">
                        <ul class="d-flex flex-column gap-1">
                            <li v-for="(item, index) in items.childern" :key="index"><strong>{{ item.strong
                            }}</strong>
                                {{ item.title }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { verticals } from "~/core/data/uikits"
let desc = ref<string>("Use the <code>#var-pills-tab</code> id thorough change vertical tabs.")
</script>