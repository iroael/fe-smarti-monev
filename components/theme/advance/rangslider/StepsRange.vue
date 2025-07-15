<template>
    <CommonCard3 colClass="col-lg-6" cardClass="title-line" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        title="Steps Range Slider" :desc="desc">
        <div class="form-group row py-1 my-3">
            <div class="col-md-10">
                <VueSlider v-model="seven.value" :data="seven.data3" :marks="true" :tooltip="'always'"
                    :tooltip-placement="'top'"></VueSlider>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import VueSlider from 'vue-3-slider-component'
let desc = ref<string>(" Use the <code>.range-slider </code> class. and Yuri used Ion range slider.<code>[http://ionden.com/a/plugins/ion.rangeSlider]</code>")
interface ThreeData {
    value: number[];
    data3: number[];
}
let seven = ref<ThreeData>({
    value: [-500, 500],
    data3: [-1000, -500, 0, 500, 1000],
})
</script>