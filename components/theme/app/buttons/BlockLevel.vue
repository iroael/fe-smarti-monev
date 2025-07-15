<template>
    <CommonCard3 colClass="col-12" cardClass="title-line" headerTitle="true" pre="true" preClass="f-m-light mt-1"
        title="Block Level Buttons" :desc="desc">
        <div class="row g-3">
            <div class="col-12">
                <div class="card-wrapper border rounded-3">
                    <h6 class="sub-title fw-bold">Block Button</h6>
                    <div class="d-grid gap-2 buttons-box">
                        <button class="btn btn-light-primary" type="button">Click here, there is a big surprise with you,
                            Hurry Up!!</button>
                        <button class="btn btn-primary" type="button">40% off all B-Stock Sale!! Hurry Up!!</button>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="card-wrapper border rounded-3">
                    <h6 class="sub-title fw-bold">Button Center</h6>
                    <div class="d-grid gap-2 col-6 mx-auto buttons-box">
                        <button class="btn btn-light-primary" type="button">Center Button</button>
                        <button class="btn btn-primary" type="button">Center Button</button>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="card-wrapper border rounded-3">
                    <h6 class="sub-title fw-bold">Button End</h6>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end buttons-box">
                        <button class="btn btn-light-primary me-md-2" type="button">Button</button>
                        <button class="btn btn-primary" type="button">Button</button>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("<code>.btn </code>class used for buttons. and <code>.d-grid </code>used for block level buttons.")
</script>