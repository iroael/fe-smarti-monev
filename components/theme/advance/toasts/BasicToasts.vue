<template>
    <CommonCard3 colClass="col-sm-6" cardClass="title-line" cardbodyClass="btn-showcase" headerTitle="true" title="Toastr">
        <button class="btn btn-success me-2" type="button" @click="success" variant="success">Success</button>

        <button class="btn btn-info me-2" type="button" @click="info" variant="info">Info</button>

        <button class="btn btn-danger me-2" type="button" @click="error" variant="danger">Error</button>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { toast } from 'vue3-toastify';

function success() {
    toast.success(' New order has been placed ', {
        hideProgressBar: true, autoClose: 2000, theme: 'colored', position: 'top-right'
    });
}
function info() {
    toast.info(' New order has been placed ', {
        hideProgressBar: true, autoClose: 2000, theme: 'colored', position: 'top-right'
    });
}
function error() {
    toast.error(' New order has been placed ', {
        hideProgressBar: true, autoClose: 2000, theme: 'colored', position: 'top-right'
    });
}
</script>