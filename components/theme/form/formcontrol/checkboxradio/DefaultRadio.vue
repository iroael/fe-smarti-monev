<template>
    <CommonCard3 colClass="col-12" pre="true" preClass="f-m-light mt-1" headerTitle="true" title="Default radio"
        :desc="desc">
        <div class="row g-3">
            <div class="col-sm-6 col-xl-4">
                <div class="card-wrapper border rounded-3 checkbox-checked">
                    <h6 class="sub-title">Custom Radios </h6>
                    <div class="form-check">
                        <input class="form-check-input" id="flexRadioDefault1" type="radio" name="flexRadioDefault">
                        <label class="form-check-label" for="flexRadioDefault1">Default radio</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" id="flexRadioDefault2" type="radio" name="flexRadioDefault" checked>
                        <label class="form-check-label" for="flexRadioDefault2">Default checked radio</label>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xl-4">
                <div class="card-wrapper border rounded-3 checkbox-checked">
                    <h6 class="sub-title">Disabled Radios </h6>
                    <div class="form-check">
                        <input class="form-check-input" id="flexRadioDisabled" type="radio" name="flexRadioDisabled"
                            disabled>
                        <label class="form-check-label" for="flexRadioDisabled">Disabled radio</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" id="flexRadioCheckedDisabled" type="radio" name="flexRadioDisabled"
                            checked disabled>
                        <label class="form-check-label" for="flexRadioCheckedDisabled">Disabled checked radio</label>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-xl-4">
                <div class="card-wrapper border rounded-3 checkbox-checked">
                    <h6 class="sub-title">Right Radios </h6>
                    <div class="form-check form-check-reverse">
                        <input class="form-check-input" id="flexRadioDefault3" type="radio" name="flexRadioDefault">
                        <label class="form-check-label" for="flexRadioDefault3">Default radio</label>
                    </div>
                    <div class="form-check form-check-reverse">
                        <input class="form-check-input" id="flexRadioCheckedDisabled1" type="radio" name="flexRadioDisabled"
                            checked disabled>
                        <label class="form-check-label" for="flexRadioCheckedDisabled1">Disabled checked radio</label>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("Use the <code>.form-check-input </code>and <code>.form-check-label </code>for radios.")
</script>