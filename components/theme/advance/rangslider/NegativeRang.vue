<template>
    <CommonCard3 colClass="col-lg-6" cardClass="title-line" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        title="Negative Value" :desc="desc">
        <div class="form-group row py-1 my-3">
            <div class="col-md-10">
                <VueSlider v-model="four.value" :data="four.data2" :marks="true" :tooltip="'always'"
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
    data2: number[];
}
let four = ref<ThreeData>({
    value: [-500, 500],
    data2: [-1000, -500, 0, 500, 1000],
})
</script>