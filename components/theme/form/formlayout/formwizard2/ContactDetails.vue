<template>
    <div class="tab-pane fade" :id="element ? 'business-inquiry-wizard' : 'inquiry-n-wizard'" role="tabpanel"
        aria-labelledby="inquiry-n-wizard-tab">
        <form class="row g-3 needs-validation" novalidate>
            <div class="col-12">
                <h6>Contact details</h6>
                <p>Please visit the documentation page if you require further information.</p>
            </div>
            <div class="col-sm-6">
                <label class="form-label" for="validationCustom-select">Organization Name<span
                        class="txt-danger">*</span></label>
                <input class="form-control" id="validationCustom-select" type="text" placeholder="Gekko &amp; Co." required>
                <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-sm-6">
                <label class="form-label">Email<span class="txt-danger">*</span></label>
                <input class="form-control" type="text" placeholder="org@support.com" required>
            </div>
            <div class="col-12">
                <label class="form-label" for="validationCustom-select">Join organization type<span
                        class="txt-danger">*</span></label>
                <select class="form-select f-w-400 f-14 text-gray" aria-label="Default select example">
                    <option selected disabled>Join organization type</option>
                    <option value="1" v-for="(item, index) in organization" :key="index">{{ item }}</option>

                </select>
            </div>
            <div class="col-12">
                <label class="form-label" for="organizationDescription">Organization description</label>
                <textarea class="form-control" id="organizationDescription"
                    placeholder="Share your problems and another issues" required></textarea>
                <div class="invalid-feedback">Please enter a message in the box.</div>
            </div>
            <div class="col-12 text-end">
                <button class="btn btn-primary me-1">Previous</button>
                <button class="btn btn-primary">Continue </button>
            </div>
        </form>
    </div>
</template>
<script lang="ts" setup>
let props = defineProps({
    element: String,
})
let organization = ref<string[]>(["Technology", "Culture", "NGO", "Environment", "Life cycle"])
</script>