<template>
    <CommonCard3 colClass="col-12" pre="true" preClass="f-m-light mt-1" headerTitle="true" title="Default switches"
        :desc="desc">
        <div class="row g-3">
            <div class="col-md-6 col-xl-4">
                <div class="card-wrapper border rounded-3 rtl-input checkbox-checked">
                    <h6 class="sub-title">Custom Switches </h6>
                    <div class="form-check form-switch">
                        <input class="form-check-input" id="flexSwitchCheckDefault" type="checkbox" role="switch">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" id="flexSwitchCheckChecked" type="checkbox" role="switch" checked>
                        <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-4">
                <div class="card-wrapper border rounded-3 rtl-input checkbox-checked">
                    <h6 class="sub-title">Disabled Switches</h6>
                    <div class="form-check form-switch">
                        <input class="form-check-input" id="flexSwitchCheckDisabled" type="checkbox" role="switch" disabled>
                        <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" id="flexSwitchCheckCheckedDisabled" type="checkbox" role="switch"
                            checked disabled>
                        <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch
                            checkbox input</label>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-xl-4">
                <div class="card-wrapper border rounded-3 checkbox-checked">
                    <h6 class="sub-title">Right Switches </h6>
                    <div class="form-check form-switch form-check-reverse">
                        <input class="form-check-input ms-2" id="flexSwitchCheckReverse" type="checkbox">
                        <label class="form-check-label" for="flexSwitchCheckReverse">Reverse switch checkbox input</label>
                    </div>
                    <div class="form-check form-switch form-check-reverse">
                        <input class="form-check-input ms-2" id="flexSwitchCheckDisabled1" type="checkbox" role="switch"
                            disabled>
                        <label class="form-check-label" for="flexSwitchCheckDisabled1">Disabled switch checkbox
                            input</label>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("Use the <code>.form-switch</code> and <code>.form-check-label </code>for switches.")
</script>