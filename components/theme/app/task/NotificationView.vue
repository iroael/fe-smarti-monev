<template>
    <div class="fade tab-pane" id="pills-notification" role="tabpanel" aria-labelledby="pills-notification-tab">
        <div class="card mb-0">
            <div class="card-header d-flex">
                <h2 class="mb-0">Notification</h2><a href="javascript:void(0)" @click="printWindow()">
                    <Icon name="ph:printer" class="me-2 fs-1" size="20" />Print
                </a>
            </div>
            <div class="card-body">
                <div class="details-bookmark text-center"><span>No tasks found.</span></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
function printWindow() {
    window.print();
}
</script>