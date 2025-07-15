<template>
    <CommonCard3 colClass="col-xxl-4 col-md-6" cardClass="title-line" cardhaderClass="height-equal" pre="true"
        preClass="f-m-light mt-1" headerTitle="true" title="Animated Rating Bar" :desc="desc">
        <div class="rating-container">
            <ul class="feedback">
                <li class=" me-0" v-for="(item, index) in data" :key="index"
                    :class="[{ active: item.isActive }, item.class]" @click="handleClick(item)">
                    <div v-if="item.eye">
                        <svg class="eye left">
                            <use xlink:href="/svg/icon-sprite.svg#eye"></use>
                        </svg>
                        <svg class="eye right">
                            <use xlink:href="/svg/icon-sprite.svg#eye"></use>
                        </svg>
                        <svg class="mouth">
                            <use xlink:href="/svg/icon-sprite.svg#mouth"></use>
                        </svg>
                    </div>
                    <div v-if="item.eyes"></div>
                    <div v-if="item.happy">
                        <svg class="eye left">
                            <use xlink:href="/svg/icon-sprite.svg#eye"></use>
                        </svg>
                        <svg class="eye right">
                            <use xlink:href="/svg/icon-sprite.svg#eye"></use>
                        </svg>
                    </div>
                </li>


            </ul>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { animationrating } from "~/core/data/advance"
import { useCommonStore } from "~/stores/common"
interface Entry {
    isActive: boolean;
}
let desc = ref<string>("Star rating is displayed using <code>#u-rating-fontawesome-o </code> id using javascript.")
const store = useCommonStore()
const data = store.rating
const handleClick = (clickedEntry: Entry) => {
    if (!clickedEntry.isActive) {
        const previousActive = data.find((item) => item.isActive);
        if (previousActive) {
            previousActive.isActive = false;
        }
        clickedEntry.isActive = true;
    }
};

</script>