<template>
    <CommonCard3 colClass="col-xxl-4 col-md-6" cardClass="title-line" cardhaderClass="rating-header" pre="true"
        preClass="f-m-light mt-1" headerTitle="true" title="Disable Star Rating" :desc="desc">
        <div class="rating-container">
            <rate :length="5" :value="2" :disabled="true" />
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("Disable Star rating is displayed using <code>#u-rating-disable  </code> id using javascript.")
</script>