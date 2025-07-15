<template>
    <CommonCard3 colClass="col-12" cardClass="title-line" cardheaderClass="card-no-border pb-0" titleClass="mb-0" pre="true"
        preClass="f-m-light mt-1" headerTitle="true" title="Styles in borders" :desc="desc">
        <div class="row g-3">
            <div class="col-xxl-3 col-sm-6" v-for="(items, index) in borders" :key="index">
                <div class="border-wrapper h-100 light-background dark-helper">
                    <h4 class=" mb-3">{{ items.title }}</h4>
                    <div class="helper-common-box" v-for="(item, index) in items.children" :key="index">
                        <div class="helper-box" :class="item.class"></div><span>{{ item.title }}</span>
                    </div>

                </div>
            </div>
            <div class="col-xxl-3 col-sm-6" v-for="(items, index) in color" :key="index">
                <div class="border-wrapper light-background h-100 dark-helper">
                    <h4 class=" mb-3">{{ items.title }}</h4>
                    <div class="helper-common-box" v-for="(item, index) in items.children" :key="index">
                        <div class="helper-box helper-text border" :class="item.class">C </div>
                        <span>{{ item.title }}</span>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { color, borders } from "~/core/data/uikits"
let desc = ref<string>(" Use the different styles of borders like: <code>border radius/border-color/border-width</code>. Use of any components.")
</script>