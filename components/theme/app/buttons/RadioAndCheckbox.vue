<template>
    <CommonCard3 colClass="col-12" cardClass="title-line" headerTitle="true" pre="true" preClass="f-m-light mt-1"
        title="Radio and Checkbox Group" :desc="desc">
        <div class="row g-3">
            <div class="col-xl-6">
                <div class="card-wrapper border rounded-3 bg-light">
                    <h6 class="sub-title fw-bold">Radio Button</h6>
                    <div class="btn-radio">
                        <div class="btn-group" data-bs-toggle="buttons">
                            <div class="btn btn-light-primary">
                                <div class="radio radio-primary">
                                    <input id="radio7" type="radio" name="radio1" value="option1" />
                                    <label class="mb-0" for="radio7">Theme</label>
                                </div>
                            </div>
                            <div class="btn btn-light-primary">
                                <div class="radio radio-primary">
                                    <input id="radio8" type="radio" name="radio1" value="option1" checked />
                                    <label class="mb-0" for="radio8">E-commerce</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6">
                <div class="card-wrapper border rounded-3 bg-light">
                    <h6 class="sub-title fw-bold">Checkbox</h6>
                    <div class="btn-group btn-option" data-bs-toggle="buttons">
                        <div class="btn btn-light-dark">
                            <div class="checkbox checkbox-dark">
                                <input id="checkbox-primary-1" type="checkbox" />
                                <label class="mb-0" for="checkbox-primary-1">Theme</label>
                            </div>
                        </div>
                        <div class="btn btn-light-dark">
                            <div class="checkbox checkbox-dark">
                                <input id="checkbox-primary-2" type="checkbox" />
                                <label class="mb-0" for="checkbox-primary-2">E-commerce</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("Add radio for <code>.radio </code> class & checkbox for <code>.checkbox </code> class used.")

</script>