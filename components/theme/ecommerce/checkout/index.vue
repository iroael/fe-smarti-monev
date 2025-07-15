<template>
    <CommonCard1 colClass="col-sm-12" :headerTop="false" title="Billing Details">
        <div class="row checkout">
            <div class="col-sm-12 col-xl-6">
                <form>
                    <div class="row">
                        <div class="mb-3 col-sm-6">
                            <label>First Name</label>
                            <CommonInputFieldsCommonField errorMessage="Title is required" type="text"
                                classes="form-control" placeholder="" />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Last Name</label>
                            <CommonInputFieldsCommonField errorMessage="Title is required" type="text"
                                classes="form-control" placeholder="" />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Phone</label>
                            <CommonInputFieldsCommonField errorMessage="Title is required" type="text"
                                classes="form-control" placeholder="" />
                        </div>
                        <div class="mb-3 col-sm-6">
                            <label>Email Address</label>
                            <CommonInputFieldsCommonField errorMessage="Title is required" type="text"
                                classes="form-control" placeholder="" />
                        </div>
                        <div class="mb-3">
                            <label>Country</label>
                            <CommonInputFieldsSelectBox :options="['Choose...', '...']" classes="form-select" />
                        </div>
                        <div class="mb-3 ">
                            <label>Address</label>
                            <CommonInputFieldsCommonField errorMessage="Title is required" type="text"
                                classes="form-control" placeholder="" />
                        </div>
                        <div class="mb-3 ">
                            <label>Town/City</label>
                            <CommonInputFieldsCommonField errorMessage="Title is required" type="text"
                                classes="form-control" placeholder="" />
                        </div>
                        <div class="mb-3 ">
                            <label>State/Country</label>
                            <CommonInputFieldsCommonField errorMessage="Title is required" type="text"
                                classes="form-control" placeholder="" />
                        </div>
                        <div class="mb-3 ">
                            <label>Postal Code</label>
                            <CommonInputFieldsCommonField errorMessage="Title is required" type="text"
                                classes="form-control" placeholder="" />
                        </div>
                        <div class="mb-3">
                            <div class="form-check">
                                <input class="form-check-input" id="gridCheck" type="checkbox">
                                <label class="form-check-label" for="gridCheck">Check me out</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <ThemeEcommerceCheckoutDetails />
        </div>
    </CommonCard1></template>

<script setup lang="ts">

</script>

