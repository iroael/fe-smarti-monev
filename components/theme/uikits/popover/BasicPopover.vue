<template>
    <CommonCard3 colClass="col-sm-12" cardClass="title-line" cardbodyClass="common-flex popover-wrapper" pre="true"
        preClass="f-m-light mt-2" headerTitle="true" title="Basic popover" :desc="desc">
        <Popper placement="right" arrow disableClickAway>
            <button class="btn btn-primary example-popover mb-0 me-0"> Hurry
                Up! </button>
            <template #content>
                <div class="popover bs-popover-auto">
                    <h3 class="popover-header">Basic Popover</h3>
                    <div class="popover-body">If the package restore doesn't help, you can look at the Output window in the
                        Visual Studio.</div>
                </div>

            </template>
        </Popper>
        <Popper arrow hover placement="bottom">
            <button class="example-popover btn btn-warning mb-0 me-0">Hover
                tooltip</button>
            <template #content>
                <div class="popover bs-popover-auto">
                    <h3 class="popover-header">Hover Popover</h3>
                    <div class="popover-body"> Several utility instruction sets have been featured in the Bootstrap 4 to
                        promote very easy learning for beginners in the business of web building.</div>
                </div>

            </template>
        </Popper>
        <Popper arrow placement="right">
            <button class="btn btn-lg btn-secondary">Dismissible
                popover</button>
            <template #content>
                <div class="popover bs-popover-auto">
                    <h3 class="popover-header">Dismissible popover</h3>
                    <div class="popover-body">You are able to even develop and suggest improvements to the Bootstrap 4
                        before its final version is delivered.</div>
                </div>

            </template>
        </Popper>
    </CommonCard3>
</template>
<script lang="ts" setup>
import Popper from "vue3-popper";
let desc = ref<string>("Use the<code> data-bs-toggle='popover'</code>through popover above buttons.")
</script>