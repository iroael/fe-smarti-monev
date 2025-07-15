<template>
    <CommonCard3 colClass="col-xxl-4 col-md-6" cardClass="title-line" cardhaderClass="rating-header" pre="true"
        preClass="f-m-light mt-1" headerTitle="true" title="Clickable Value" :desc="desc">
        <div class="rating-container">
            <star-rating :show-rating="false" :star-size="20" :max-rating="10"
                @update:rating="rating = $event"></star-rating>
            <pre class="mb-0 rating-pre px-2">Rating:{{ rating }}</pre>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("Clickable Value is displayed using <code>#u-rating-Clickable</code> id using javascript.")
const rating = ref<string>("0")
</script>