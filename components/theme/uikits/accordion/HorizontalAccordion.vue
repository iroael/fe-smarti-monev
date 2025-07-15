<template>
    <CommonCard3 colClass="col-md-6 col-sm-12" cardClass="title-line" pre="true" preClass="f-m-light mt-2"
        headerTitle="true" title="Horizontal accordion" :desc="desc">
        <div class="common-flex">
            <button class="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample"
                aria-controls="collapseWidthExample" :class="[isActive ? 'active' : '', 'collapsible']"
                :aria-expanded="isActive ? 'true' : 'false'" v-on:click="toggle">Toggle width collapse</button>
        </div>
        <div class="row">
            <div class="col-sm-5">
                <div :class="[isActive ? 'block' : ' show']" class="collapse-horizontal mt-3" v-show="isActive">
                    <div class="card card-body bg-light-secondary accordion-h-space mb-0">The collapse plugin also
                        supports horizontal collapsing. Add the .collapse-horizontal modifier class to transition
                        the width instead of height and set a width on the immediate child element. Feel free to
                        write your own custom Sass, use inline styles, or use our width utilities.</div>
                </div>
            </div>
        </div>
    </CommonCard3>

    <CommonCard3 colClass="col-md-6 col-sm-12" cardClass="title-line" cardbodyClass="collapse-accordion" pre="true"
        preClass="f-m-light mt-2" headerTitle="true" title="Collapse accordion" :desc="desc1">
        <p class="common-flex"><button class="btn btn-dark" href="#collapseExample" role="button"
                :aria-expanded="isActive1 ? 'true' : 'false'" :class="[isActive1 ? 'active' : '', 'collapsible']"
                v-on:click="toggle1" aria-controls="collapseExample">Link with href</button>
            <button class="btn btn-dark" type="button" data-bs-target="#collapseExample" aria-expanded="false"
                aria-controls="collapseExample" v-on:click="toggle1">Button with
                data-bs-target</button>
        </p>
        <div class=" btn-dark" :class="[isActive1 ? 'block' : ' show']" v-show="isActive1" id="collapseExample">
            <div class="card card-body mb-0 bg-dark">Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user activates the relevant trigger.</div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("Add the <code>.collapse-horizontal</code> modifier class to transition the width instead of height and set a width on the immediate child element.")
let desc1 = ref<string>("you can also use a link with the href attribute<code>(and a role='button').</code>In both cases, the <code>data-bs-toggle='collapse'</code> is required.")
let isActive = ref<boolean>(false)
let isActive1 = ref<boolean>(false)
function toggle() {
    isActive.value = !isActive.value
}
function toggle1() {
    isActive1.value = !isActive1.value
}
</script>