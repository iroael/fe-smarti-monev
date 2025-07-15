<template>
    <CommonCard3 colClass="col-12" cardClass="title-line" headerTitle="true" pre="true" preClass="f-m-light mt-1"
        title="Button Variations" :desc="desc">
        <div class="row g-3">
            <div class="col-md-6">
                <div class="card-wrapper border rounded-3 h-100">
                    <h6 class="sub-title fw-bold">Vertical variation</h6>
                    <div class="d-flex gap-3 align-items-end flex-wrap">
                        <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                            <button class="btn btn-primary" type="button">Primary</button>
                            <button class="btn btn-secondary" type="button">Secondary</button>
                            <button class="btn btn-success" type="button">Success</button>
                            <button class="btn btn-danger" type="button">Danger</button>
                            <button class="btn btn-warning" type="button">Warning</button>
                        </div>
                        <div class="btn-group-vertical buttons-box" role="group" aria-label="Vertical button group">
                            <button class="btn btn-light-primary" type="button">light-primary</button>
                            <button class="btn btn-light-dark" type="button">light-dark</button>
                            <div class="btn-group" role="group">
                                <button class="btn btn-light-success dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">light-success</button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group dropstart" role="group">
                                <button class="btn btn-light-danger dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">light-danger</button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group dropend" role="group">
                                <button class="btn btn-light-warning dropdown-toggle" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">light-warning</button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                                </ul>
                            </div>
                            <div class="btn-group dropup" role="group">
                                <button class="btn btn-light-info dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">light-info</button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                            <input class="btn-check" id="vbtn-radio1" type="radio" name="vbtn-radio" checked />
                            <label class="btn btn-outline-primary" for="vbtn-radio1">Radio 1</label>
                            <input class="btn-check" id="vbtn-radio2" type="radio" name="vbtn-radio" />
                            <label class="btn btn-outline-primary" for="vbtn-radio2">Radio 2</label>
                            <input class="btn-check" id="vbtn-radio3" type="radio" name="vbtn-radio" />
                            <label class="btn btn-outline-primary mb-0" for="vbtn-radio3">Radio 3</label>
                        </div>
                    </div>
                </div>
            </div>
            <ThemeAppButtonsHorizontalVariation />
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("<code>.btn </code>class used for buttons and <code>.btn-group-vertical </code>for vertical buttons and made different types of design using <code>.btn-group </code>.")
</script>