<template>
    <CommonCard3 colClass="col-12" cardClass="title-line" headerTitle="true" pre="true" preClass="f-m-light mt-1"
        title="Button Group" :desc="desc">
        <div class="row g-3">
            <div class="col-xl-4 col-md-6">
                <div class="card-wrapper border rounded-3 h-100">
                    <h6 class="sub-title fw-bold">Button group variation</h6>
                    <div class="button-wrapper button-variation">
                        <div class="btn-group btn-group-square" role="group" aria-label="Basic example">
                            <button class="btn btn-primary" type="button">Left</button>
                            <button class="btn btn-light-primary" type="button">Middle</button>
                            <button class="btn btn-primary" type="button">Right</button>
                        </div>
                        <div class="btn-group btn-group-pill" role="group" aria-label="Basic example">
                            <button class="btn btn-light-primary" type="button">Left</button>
                            <button class="btn btn-primary" type="button">Middle</button>
                            <button class="btn btn-light-primary" type="button">Right</button>
                        </div>
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button class="btn btn-primary" type="button">Left</button>
                            <button class="btn btn-light-primary" type="button">Middle</button>
                            <button class="btn btn-primary" type="button">Right</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-6">
                <div class="card-wrapper border rounded-3 h-100">
                    <h6 class="sub-title fw-bold">Outline button group</h6>
                    <div class="button-wrapper">
                        <div class="btn-group btn-group-square" role="group" aria-label="Basic outlined example">
                            <button class="btn btn-outline-primary" type="button">
                                <Icon name="mdi:arrow-left" size="25px" />
                            </button>
                            <button class="btn btn-outline-primary" type="button">
                                <Icon name="mdi:arrow-up" size="25px" />
                            </button>
                            <button class="btn btn-outline-primary" type="button">
                                <Icon name="mdi:arrow-right" size="25px" />
                            </button>
                        </div>
                        <div class="btn-group btn-group-pill" role="group" aria-label="Basic outlined example">
                            <button class="btn btn-outline-primary" type="button">
                                <Icon name="mdi:arrow-left-circle-outline" size="25px" />
                            </button>
                            <button class="btn btn-outline-primary" type="button">
                                <Icon name="mdi:arrow-up-circle-outline" size="25px" />
                            </button>
                            <button class="btn btn-outline-primary" type="button">
                                <Icon name="mdi:arrow-right-circle-outline" size="25px" />
                            </button>
                        </div>
                        <div class="btn-group" role="group" aria-label="Basic outlined example">
                            <button class="btn btn-outline-primary" type="button">
                                <Icon name="mdi:format-align-left" size="25px" />
                            </button>
                            <button class="btn btn-outline-primary" type="button">
                                <Icon name="uil:align-center" size="25px" />
                            </button>
                            <button class="btn btn-outline-primary" type="button">
                                <Icon name="mdi:format-align-right" size="25px" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-12">
                <div class="card-wrapper border rounded-3 h-100">
                    <h6 class="sub-title fw-bold">Button group sizes</h6>
                    <div class="button-wrapper">
                        <div class="btn-group" role="group" aria-label="Large button group">
                            <button class="btn btn-outline-primary btn-lg" type="button">Left</button>
                            <button class="btn btn-outline-primary btn-lg" type="button">Middle</button>
                            <button class="btn btn-outline-primary btn-lg" type="button">Right</button>
                        </div>
                        <div class="btn-group" role="group" aria-label="Default button group">
                            <button class="btn btn-outline-primary" type="button">Left</button>
                            <button class="btn btn-outline-primary" type="button">Middle</button>
                            <button class="btn btn-outline-primary" type="button">Right</button>
                        </div>
                        <div class="btn-group" role="group" aria-label="Small button group">
                            <button class="btn btn-outline-primary btn-sm" type="button">Left</button>
                            <button class="btn btn-outline-primary btn-sm" type="button">Middle</button>
                            <button class="btn btn-outline-primary btn-sm" type="button">Right</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("Wrap a series of buttons with <code>.btn </code>in <code>.btn-group </code>. & custom class used for sizes: <code>.btn-lg / .btn-sm </code>.")
</script>