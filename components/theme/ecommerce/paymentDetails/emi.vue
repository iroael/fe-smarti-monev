<template>
    <CommonCard1 colClass="col-xxl-4 col-lg-6 box-col-6" headerClass="py-4" :headerTop="false" title="EMI">
        <form class="theme-form row">
            <div class="mb-3 col-6 p-r-0">
                <CommonInputFieldsCommonField classes="form-control" type="text" placeholder="First Name" />
            </div>
            <div class="mb-3 col-6">
                <CommonInputFieldsCommonField classes="form-control" type="text" placeholder="Last name" />
            </div>
            <div class="mb-3 col-6 p-r-0">
                <CommonInputFieldsCommonField classes="form-control" type="text" placeholder="Pincode" />
            </div>
            <div class="mb-3 col-6">
                <CommonInputFieldsSelectBox classes="form-select" :options="['Bank Name', 'SBI', 'ICICI', 'KOTAK', 'BOB']" />
            </div>
            <div class="mb-3 col-12">
                <CommonInputFieldsSelectBox classes="form-select" :options="['Select Card', '2', '3', '4', '5']" />
            </div>
            <div class="mb-3 col-12">
                <CommonInputFieldsSelectBox classes="form-select"
                    :options="['Select Duration', '2015-2016', '2016-2017', '2017-2018', '2018-2024']" />
            </div>
            <div class="mb-3 col-12">
                <ul class="payment-opt">
                    <li><img src="/images/ecommerce/mastercard.png" alt=""></li>
                    <li><img src="/images/ecommerce/visa.png" alt=""></li>
                    <li><img src="/images/ecommerce/paypal.png" alt=""></li>
                </ul>
            </div>
            <div class="col-12">
                <button class="btn btn-primary btn-block" type="button" title="">Submit</button>
            </div>
        </form>
    </CommonCard1>
    <CommonCard1 colClass="col-xxl-4 col-lg-6 box-col-6" headerClass="py-4" :headerTop="false" title="Net Banking">
        <form class="theme-form row">
            <div class="mb-3 col-12">
                <CommonInputFieldsCommonField classes="form-control" type="text" placeholder="AC Holder name" />
            </div>
            <div class="mb-3 col-12">
                <CommonInputFieldsCommonField classes="form-control" type="text" placeholder="Account number" />
            </div>
            <div class="mb-3 col-6 p-r-0">
                <CommonInputFieldsSelectBox classes="form-select" :options="['Bank Name', 'SBI', 'ICICI', 'KOTAK', 'BOB']" />
            </div>
            <div class="mb-3 col-6">
                <CommonInputFieldsCommonField classes="form-control" type="text" placeholder="ICFC code" />
            </div>
            <div class="mb-3 col-12">
                <CommonInputFieldsCommonField classes="form-control" type="number" placeholder="Enter mobile number" />
            </div>
            <div class="mb-3 col-12">
                <CommonInputFieldsCommonField classes="form-control" type="text" placeholder="Other Details" />
            </div>
            <div class="col-12">
                <button class="btn btn-primary btn-block" type="button" title="">Submit</button>
            </div>
        </form>
    </CommonCard1>
</template>

<script setup lang="ts">

</script>

