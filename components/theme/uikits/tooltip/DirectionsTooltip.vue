<template>
    <CommonCard3 colClass="col-md-6" cardClass="title-line" pre="true" preClass="f-m-light mt-2" headerTitle="true"
        title="Tooltip  directions" :desc="desc">
        <div class="common-flex">
            <button class="btn btn-primary mb-0 me-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top"
                v-tooltip.top-start="'Tooltip on top'" title="Tooltip on top">Tooltip on top</button>
            <button class="btn btn-secondary mb-0 me-0" type="button" data-bs-toggle="tooltip" data-bs-placement="right"
                v-tooltip.right-start="'Tooltip on right'" title="Tooltip on right">Tooltip on right</button>
            <button class="btn btn-success mb-0 me-0" type="button" data-bs-toggle="tooltip" data-bs-placement="bottom"
                v-tooltip.bottom-start="'Tooltip on bottom'" title="Tooltip on bottom">Tooltip on bottom</button>
            <button class="btn btn-warning mb-0 me-0" type="button" data-bs-toggle="tooltip" data-bs-placement="left"
                v-tooltip.left-start="'Tooltip on left'" title="Tooltip on left">Tooltip on left</button>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("Use the <code>btn-*</code> to change dark background color and<code> data-bs-placement='*'</code>[top/right/bottom/left] to tooltip direction change.")
</script>