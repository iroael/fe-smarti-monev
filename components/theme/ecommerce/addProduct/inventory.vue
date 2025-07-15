<template>
    <form id="advance-tab">
        <div class="row g-3 custom-input">
            <div class="col-sm-6">
                <label class="form-label" for="validationServer01">Stock Availability</label>
                <CommonInputFieldsSelectBox :options="['In stock', 'Out of stock', 'Pre-order']" class="form-select" />
            </div>
            <div class="col-sm-6">
                <label class="form-label" for="validationServer01">Low Stock</label>
                <CommonInputFieldsSelectBox :options="stockData" class="form-select" />
            </div>
            <div class="col-lg-3 col-sm-6">
                <label class="form-label" for="exampleFormControlInput1">SKU <span class="txt-danger">*</span></label>
                <CommonInputFieldsCommonField classes="form-control" type="text" />
            </div>
            <div class="col-lg-3 col-sm-6">
                <label class="form-label" for="exampleFormControlInput1">Stock Quantity <span
                        class="txt-danger">*</span></label>
                <CommonInputFieldsCommonField classes="form-control" type="number" value="7" />
            </div>
            <div class="col-lg-3 col-sm-6">
                <label class="form-label" for="exampleFormControlInput1">Restock Date<span
                        class="txt-danger">*</span></label>
                <CommonInputFieldsCommonField classes="form-control" type="number" />
            </div>
            <div class="col-lg-3 col-sm-6">
                <label class="form-label" for="exampleFormControlInput1">Pre-Order <span class="txt-danger">*</span></label>
                <CommonInputFieldsCommonField classes="form-control" type="number" />
            </div>
            <div class="col-12">
                <label class="form-label" for="exampleFormControlInput1">Allow Backorders</label>
                <div class="form-check">
                    <input class="form-check-input" id="gridCheck" type="checkbox">
                    <label class="form-check-label m-0" for="gridCheck">This is a digital Product</label>
                    <p class="f-light">Decide if the product is a digital or physical item. Shipping may be necessary for
                        real-world items.</p>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
let stockData:string[] = ['Low Stock (5 or less)','Low Stock (10 or less)','Low Stock (20 or less)','Low Stock (25 or less)','Low Stock (30 or less)']
</script>

