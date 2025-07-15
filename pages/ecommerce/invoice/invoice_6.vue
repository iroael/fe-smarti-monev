<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div class="invoice">
                            <ThemeEcommerceInvoice6 />
                            <div class="col-sm-12 text-center mt-3">
                                <button class="btn btn btn-primary me-2" type="button" @click="printWindow()">Print</button>
                                <button class="btn btn-secondary" type="button">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
function printWindow() {
    window.print();
}
useHead({
    title: "Invoice Six | Yuri - Premium Nuxt Admin Template"
})
</script>

