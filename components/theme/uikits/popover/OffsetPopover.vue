<template>
    <CommonCard3 colClass="col-sm-12" cardClass="title-line" cardbodyClass="common-flex popover-wrapper" pre="true"
        preClass="f-m-light mt-1" headerTitle="true" title="Popover offset" :desc="desc">
        <Popper class="pop" arrow placement="right" disableClickAway>
            <button class="btn btn-primary mb-0 me-0">Popover
                offset 50</button>
            <template #content>
                <div class="popover bs-popover-auto">
                    <h3 class="popover-header">Popover title</h3>
                    <div class="popover-body">And here's some amazing content. It's very engaging. Right?</div>
                </div>

            </template>
        </Popper>
        <Popper arrow placement="left" disableClickAway>
            <button class="example-popover btn btn-dark mb-0 me-0">Popover
                offset -50</button>
            <template #content>
                <div class="popover bs-popover-auto">
                    <h3 class="popover-header">Popover On Left</h3>
                    <div class="popover-body">Popovers are opt-in for effectiveness causes, in this way you have to
                        initialize them yourself.</div>
                </div>

            </template>
        </Popper>

    </CommonCard3>
</template>
<script lang="ts" setup>
import Popper from "vue3-popper";
let desc = ref<string>("Use the<code> data-bs-offset=' *,* '</code> through popover offset above buttons. ")
</script>