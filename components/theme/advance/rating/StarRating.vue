<template>
    <CommonCard3 colClass="col-xxl-4 col-md-6" cardClass="title-line" cardhaderClass="rating-header" pre="true"
        preClass="f-m-light mt-1" headerTitle="true" title="Star Rating" :desc="desc">
        <star-rating :star-size="20" :max-rating="10" :increment="0.01"></star-rating>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("Star Rating is displayed using <code>#u-rating-star </code> id using javascript.")
const rating = ref<string>("0")
</script>