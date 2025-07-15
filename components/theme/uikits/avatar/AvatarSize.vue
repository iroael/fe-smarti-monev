<template>
    <CommonCard3 colClass="col-xl-4 col-md-6" cardClass="title-line height-equal" titleClass="mb-0" pre="true"
        preClass="f-m-light mt-2" headerTitle="true" title="Sizes" :desc="desc">
        <div class="avatar-showcase">
            <div class="avatars">
                <div class="avatar" v-for="(item, index) in size" :key="index"><img class="rounded-circle"
                        :class="item.class" :src="getImages(item.img)" alt="#">
                </div>

            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { size } from "~/core/data/uikits"
import { getImages } from "~/composables/common/getImages"
let desc = ref<string>("You can change the size of avatar using <code>.img- * (70/80/90/100)</code> class.")
</script>