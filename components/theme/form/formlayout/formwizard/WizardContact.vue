<template>
    <div class="tab-pane fade show active" id="wizard-contact" role="tabpanel" aria-labelledby="wizard-contact-tab">
        <form class="row g-3 needs-validation custom-input" novalidate>
            <div class="col-xxl-4 col-sm-6">
                <label class="form-label" for="validationCustom0-a">First name<span class="txt-danger">*</span></label>
                <input class="form-control" id="validationCustom0-a" type="text" placeholder="Enter first name" required>
                <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-xxl-4 col-sm-6">
                <label class="form-label" for="validationCustom-b">Last name<span class="txt-danger">*</span></label>
                <input class="form-control" id="validationCustom-b" type="text" placeholder="Enter last name" required>
                <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-xxl-4 col-sm-6">
                <label class="form-label" for="validationemail-b">Email<span class="txt-danger">*</span></label>
                <input class="form-control" id="validationemail-b" type="email" required placeholder="johan@example.com">
                <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-xxl-5 col-sm-6">
                <label class="form-label" for="validationCustom04">State</label>
                <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value>Choose...</option>
                    <option>USA </option>
                    <option>U.K </option>
                    <option>U.S</option>
                </select>
                <div class="invalid-feedback">Please select a valid state.</div>
            </div>
            <div class="col-xxl-3 col-sm-6">
                <label class="form-label" for="validationCustom05">Zip Code</label>
                <input class="form-control" id="validationCustom05" type="number" required>
                <div class="invalid-feedback">Please provide a valid zip.</div>
            </div>
            <div class="col-xxl-4 col-sm-6">
                <label class="form-label" for="contactnumber">Contact number</label>
                <input class="form-control" id="contactnumber" type="number" placeholder="Enter number" required>
                <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-12">
                <div class="form-check">
                    <input class="form-check-input" id="invalidCheck-n" type="checkbox" value required>
                    <label class="form-check-label" for="invalidCheck-n">Agree to terms and conditions</label>
                    <div class="invalid-feedback">You must agree before submitting.</div>
                </div>
            </div>
            <div class="col-12 text-end">
                <button class="btn btn-primary">Next</button>
            </div>
        </form>
    </div>
</template>