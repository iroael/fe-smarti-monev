<template>
    <CommonCard3 colClass="col-xl-12" cardClass="title-line" cardheaderClass="card-no-border pb-0" titleClass="mb-0"
        pre="true" preClass="f-m-light mt-1" headerTitle="true" title="Padding" :desc="desc">
        <div class="border-wrapper h-100 light-background dark-helper">
            <h4 class="f-w-600 mb-3">Padding</h4>
            <div class="helper-common-box helper-p-wrapper">
                <div class="helper-p-box  bg-light border" :class="item.class" v-for="(item, index) in pedding"
                    :key="index">
                    <span>.{{ item.class }}</span>
                </div>

            </div>
        </div>
    </CommonCard3>


    <CommonCard3 colClass="col-xl-12" cardClass="title-line" cardheaderClass="card-no-border pb-0" titleClass="mb-0"
        pre="true" preClass="f-m-light mt-1" headerTitle="true" title="Only one side padding" :desc="desc1">
        <div class="row g-3">
            <div class="col-xxl-3 col-sm-6" v-for="(item, index) in onesidepedding" :key="index">
                <div class="border-wrapper h-100 light-background dark-helper">
                    <h4 class=" mb-3">{{ item.title }}</h4>
                    <div class="common-p-box" v-html="item.dec">
                    </div>
                </div>
            </div>

        </div>
    </CommonCard3>


    <CommonCard3 colClass="col-xl-12" cardClass="title-line" cardheaderClass="card-no-border pb-0" titleClass="mb-0"
        pre="true" preClass="f-m-light mt-1" headerTitle="true" title="Margin" :desc="desc2">
        <div class="gradient-border">
            <div class="helper-common-box gap-0 mb-0" v-for="(item, index) in margin" :key="index">
                <div class="helper-box  border bg-light" :class="item.class"></div><span>.{{ item.class }}</span>
            </div>

        </div>
    </CommonCard3>


    <CommonCard3 colClass="col-xl-12" cardClass="title-line" cardheaderClass="card-no-border pb-0" titleClass="mb-0"
        pre="true" preClass="f-m-light mt-1" headerTitle="true" title="Only one side margin" :desc="desc3">
        <div class="row g-3">
            <div class="col-xxl-3 col-sm-6" v-for="(item, index) in onesidemargin" :key="index">
                <div class="border-wrapper h-100 light-background dark-helper">
                    <h4 class=" mb-3">{{ item.title }}</h4>
                    <div class="common-p-box" v-html="item.dec">
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { pedding, margin, onesidepedding, onesidemargin } from "~/core/data/uikits"
let desc = ref<string>(" Use the padding classes like: <code>.p-* [10/15/20/25/30/35/40/45/50]</code>")
let desc1 = ref<string>(" Use the padding classes like: <code>.p-l-*/.p-r-*/.p-t-*/.p-b-*</code>")
let desc2 = ref<string>(" Use the margin classes like: <code>.m-* [10/15/20/25/30/35/40/45/50]</code>")
let desc3 = ref<string>("  Use the margin classes like: <code>.m-l-*/.m-r-*/.m-t-*/.m-b-*</code>")
</script>