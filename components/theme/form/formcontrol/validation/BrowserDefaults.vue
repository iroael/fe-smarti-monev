<template>
    <CommonCard3 colClass="col-xl-6" pre="true" cardBodyClass="custom-input" cardClass="height-equal"
        preClass="f-m-light mt-1" headerTitle="true" title="Browser defaults" :desc="desc">
        <form class="row g-3">
            <div class="col-12">
                <label class="form-label" for="first-name">First name</label>
                <input class="form-control" id="first-name" type="text" placeholder="First name" aria-label="First name"
                    required>
            </div>
            <div class="col-12">
                <label class="form-label" for="exampleFormControlInput1">Email address</label>
                <input class="form-control" id="exampleFormControlInput1" type="email" placeholder="pesamof475@saeoil.com"
                    required>
            </div>
            <div class="col-12">
                <label class="col-sm-12 col-form-label" for="inputPassword2">Password</label>
                <input class="form-control" id="inputPassword2" type="password" required>
            </div>
            <div class="col-12">
                <label class="form-label" for="validationDefault04">State</label>
                <CommonInputFieldsSelectBox classes="form-select" id="validationDefault04"
                    :options="['Choose...', 'U.K ', 'Thailand', 'India', 'U.S']" />

            </div>
            <div class="col-12">
                <label class="form-label" for="formFile">Choose file</label>
                <input class="form-control" id="formFile" type="file" required>
            </div>
            <div class="col-12">
                <div class="card-wrapper border rounded-3 checkbox-checked">
                    <h6 class="sub-title">Select your payment method</h6>
                    <div class="radio-form">
                        <div class="form-check">
                            <input class="form-check-input" id="flexRadioDefault1" type="radio" name="flexRadioDefault"
                                required>
                            <label class="form-check-label" for="flexRadioDefault1">Visa</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" id="flexRadioDefault2" type="radio" name="flexRadioDefault"
                                checked required>
                            <label class="form-check-label" for="flexRadioDefault2">MasterCard</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" id="flexRadioDefault3" type="radio" name="flexRadioDefault"
                                checked required>
                            <label class="form-check-label" for="flexRadioDefault3">Paypal</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <label class="form-label" for="exampleFormControlTextarea1">Description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="col-12 checkbox-checked">
                <input class="form-check-input" id="flexCheckDefault" type="checkbox" value>
                <label class="form-check-label" for="flexCheckDefault">By proceeding, you agree to the terms and
                    conditions</label>
            </div>
            <div class="col-12">
                <div class="form-check form-switch">
                    <input class="form-check-input" id="flexSwitchCheckDefault" type="checkbox" role="switch" required>
                    <label class="form-check-label" for="flexSwitchCheckDefault">Are you sure above information are
                        true</label>
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? Depending on your browser and OS,While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.")
</script>