<template>
    <CommonCard3 colClass="col-12" cardClass="title-line" cardheaderClass="card-no-border pb-0" titleClass="mb-0" pre="true"
        preClass="f-m-light mt-1" headerTitle="true" title="Background colors" :desc="desc">
        <div class="row g-3">
            <div class="col-xl-4 col-sm-6" v-for="(items, index) in backgroundcolor" :key="index">
                <div class="border-wrapper h-100 border">
                    <h4 class=" mb-3">{{ items.title }}</h4>
                    <div class="helper-common-box" v-for="(item, index) in items.children" :key="index">
                        <div class="helper-box" :class="item.class"></div><span>{{ item.title }}</span>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-12">
                <div class="border-wrapper h-100 border">
                    <h4 class=" mb-3">Extended background colors</h4>
                    <div class="helper-common-box">
                        <div class="helper-box light-card"> </div><span>.light-card</span>
                    </div>
                    <div class="helper-common-box">
                        <div class="helper-box light-background border"></div><span>.light-background </span>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { backgroundcolor } from "~/core/data/uikits"
let desc = ref<string>(" Use the <code>.bg-* </code>and <code>.alert-light-* </code>colors in Yuri theme. Use of any components.")
</script>