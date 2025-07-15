<template>
    <form>
        <div class="row g-3 custom-input">
            <div class="col-12">
                <div class="row gx-xl-3 gx-md-2 gy-md-0 g-2">
                    <div class="col-12">
                        <label class="form-label" for="exampleFormControlInput1">Where can I pick up my order?</label>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <CommonInputFieldsCommonField classes="form-control" type="number" placeholder="Zip code (10001)" />
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <CommonInputFieldsCommonField classes="form-control" type="text" placeholder="City" />
                    </div>
                    <div class="col-md-4">
                        <CommonInputFieldsSelectBox :options="stateData" class="form-select" />
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="row">
                    <div class="col-12">
                        <label class="form-label" for="exampleFormControlInput1">Weight (kg)</label><i
                            class="icon-help-alt ms-1" data-bs-toggle="tooltip" data-bs-placement="top"
                            data-bs-title="set proper weight for product items."></i>
                    </div>
                    <div class="col-12">
                        <CommonInputFieldsCommonField classes="form-control" type="number" />
                        <p class="f-light">Decide if the product is a digital or physical item. Shipping may be necessary
                            for real-world items.</p>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="row gx-xl-3 gx-md-2 gy-md-0 g-2">
                    <div class="col-12">
                        <label class="form-label" for="exampleFormControlInput1">Dimensions </label><i
                            class="icon-help-alt ms-1" data-bs-toggle="tooltip" data-bs-placement="top"
                            data-bs-title="set proper length/width and height for product items."></i>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <CommonInputFieldsCommonField classes="form-control" type="number" placeholder="Length[l]" />
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <CommonInputFieldsCommonField classes="form-control" type="number" placeholder="Width[w]" />
                    </div>
                    <div class="col-md-4">
                        <CommonInputFieldsCommonField classes="form-control" type="number" placeholder="Height[h]" />
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="row">
                    <div class="col-12">
                        <label class="form-label" for="exampleFormControlInput1">Shipping Class</label>
                    </div>
                    <div class="col-md-12">
                        <CommonInputFieldsSelectBox :options="shippingData" class="form-select" />
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
let stateData:string[] = ['State','Gujarat','Punjab','Himachal pradesh','Goa','Sikkim','Telangana']
let shippingData:string[] = ['Basic Shipping','Expedited Shipping','International Shipping','Free Shipping','Same-Day or Next-Day Shipping','Flat Rate Shipping','Local Pickup']
</script>

