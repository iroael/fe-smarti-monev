<template>
    <CommonCard3 colClass="col-md-6" cardClass="title-line" pre="true" preClass="f-m-light mt-2" headerTitle="true"
        title="HTML elements with hover effect" :desc="desc">
        <div class="common-flex">
            <button class="btn bg-primary mb-0 me-0" type="button" data-bs-toggle="tooltip" data-bs-html="true"
                data-bs-placement="top"
                v-tooltip="{ content: '&lt;em&gt;Thank&lt;/em&gt;       &lt;u&gt;you&lt;/u&gt;',html: true }">Notifications
                Received</button>
            <button class="btn bg-warning mb-0 me-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-html="true" v-tooltip="{ content: '&lt;b&gt;Thank&lt;/b&gt; <em    >you</em>',html: true }">Last
                Warning</button>
            <button class="btn bg-danger mb-0 me-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-html="true"
                v-tooltip="{ content: '&lt;em&gt;Thank&lt;/em&gt;       &lt;u&gt;you&lt;/u&gt;',html: true }">It's
                Danger</button>
            <button class="btn bg-info mb-0 me-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-html="true" v-tooltip="{ content: '&lt;b&gt;Thank&lt;/b&gt; <em    >you</em>',html: true }"
                data-bs-title="&lt;b&gt;Thank&lt;/b&gt; &lt;em&gt;you&lt;/em&gt;">Coming
                soon</button>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>(" Use the <code>bg-*-light</code> to change light background color and <code>data-bs-title </code> to the content under the HTML tag.")
</script>