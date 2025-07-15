<template>
    <CommonCard1 colClass="col-xxl-8 box-col-12" headerClass="py-4" :headerTop="false" title="Credit card">
        <div class="row">
            <div class="col-md-7 order-md-0 order-1">
                <form class="theme-form mega-form">

                    <CommonInputFieldsCommonField classes="form-control" type="text" placeholder="Card number" />


                    <CommonInputFieldsCommonField classes="form-control" type="text" placeholder="First Name" />


                    <CommonInputFieldsCommonField classes="form-control" type="date" />


                    <CommonInputFieldsCommonField classes="form-control" type="text" placeholder="Name on card" />


                    <CommonInputFieldsSelectBox classes="form-select" :options="['Select Type', 'Master', 'Visa']" />

                </form>
            </div>
            <div class="col-md-5 text-center"><img class="img-fluid" src="/images/ecommerce/card.png" alt=""></div>
        </div>
    </CommonCard1>
    <CommonCard1 colClass="col-xxl-4 col-lg-6 box-col-6 debit-card" headerClass="py-4" :headerTop="false"
        title="Debit card">
        <form class="theme-form e-commerce-form row">
            <div class="mb-3 col-6 p-r-0">
                <CommonInputFieldsCommonField classes="form-control" type="text" placeholder="Full name here" />
            </div>
            <div class="mb-3 col-6">
                <CommonInputFieldsCommonField classes="form-control" type="text" placeholder="Card number" />
            </div>
            <div class="mb-3 col-6 p-r-0">
                <CommonInputFieldsCommonField classes="form-control" type="text" placeholder="CVV number" />
            </div>
            <div class="mb-3 col-6">
                <CommonInputFieldsCommonField classes="form-control" type="text" placeholder="CVC" />
            </div>
            <div class="col-12 ">
                <label class="col-form-label p-b-20">Expiration Date</label>
            </div>
            <div class="mb-3 col-6 p-r-0">
                <CommonInputFieldsSelectBox classes="form-select"
                    :options="['Select Month', 'Jan', 'Fab', 'March', 'April']" />
            </div>
            <div class="mb-3 col-6">
                <CommonInputFieldsSelectBox classes="form-select"
                    :options="['Select Year', '2015', '2016', '2017', '2018', '2024']" />
            </div>
            <div class="col-12">
                <button class="btn btn-primary btn-block" type="button" title="">Submit</button>
            </div>
        </form>
    </CommonCard1>
    <CommonCard1 colClass="col-xxl-4 col-lg-6 box-col-6" headerClass="py-4" :headerTop="false" title="COD">
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
                <CommonInputFieldsCommonField classes="form-control" type="number" placeholder="Enter mobile number" />
            </div>
            <div class="mb-3 col-6 p-r-0">
                <CommonInputFieldsCommonField classes="form-control" type="text" placeholder="State" />
            </div>
            <div class="mb-3 col-6">
                <CommonInputFieldsCommonField classes="form-control" type="text" placeholder="City" />
            </div>
            <div class="mb-3 col-12">
                <textarea class="form-control" rows="3" placeholder="Address"></textarea>
            </div>
            <div class="col-12">
                <button class="btn btn-primary btn-block" type="button" title="">Submit</button>
            </div>
        </form>
    </CommonCard1>
    <ThemeEcommercePaymentDetailsEmi />
</template>

<script setup lang="ts">

</script>

