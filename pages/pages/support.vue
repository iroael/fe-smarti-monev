<template>
    <div class="container-fluid">
        <div class="row">

            <CommonCard3 colClass="col-sm-12 " title="Support Ticket List" pre="true" preClass="f-m-light mt-1"
                headerTitle="true" text="true" :desc="desc">
                <ThemePagesSupportTicket />
                <ThemePagesSupportTable />
            </CommonCard3>
        </div>
    </div>
</template>
<script lang="ts" setup>
let desc = ref<string>("List of ticket opend by customers")
    useHead({
    title: "Support | Smarti - Sistem Monitoring Rumah Terintegrasi"
})
</script>