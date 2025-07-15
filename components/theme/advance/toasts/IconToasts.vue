<template>
    <CommonCard3 colClass="col-sm-6" cardClass="title-line" cardbodyClass="btn-showcase" headerTitle="true"
        title="toastr with icon">
        <button class="btn btn-success me-2" type="button" @click="success_with_icon" variant="success">Success</button>

        <button class="btn btn-info me-2" type="button" @click="info_with_icon" variant="info">Info</button>

        <button class="btn btn-danger me-2" type="button" @click="error_with_icon" variant="danger">Error</button>

        <button class="btn btn-info me-2" type="button" @click="info_with_cancle" variant="info">Cancle</button>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { toast } from 'vue3-toastify';

function success_with_icon() {
    toast.success(' New order has been placed ', {
        hideProgressBar: true, autoClose: 2000, theme: 'colored',
    });
}
function info_with_icon() {
    toast.info(' New order has been placed ', {
        hideProgressBar: true, autoClose: 2000, theme: 'colored',
    });
}
function error_with_icon() {
    toast.error(' New order has been placed ', {
        hideProgressBar: true, autoClose: 2000, theme: 'colored',
    });
}
function info_with_cancle() {
    toast.info(' New order has been placed ', {
        hideProgressBar: true, autoClose: 2000, theme: 'colored',
    });
}
</script>