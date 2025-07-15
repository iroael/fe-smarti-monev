<template>
    <CommonCard3 colClass="col-sm-12 col-md-6" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        title="Scrollable Dropdown Menu" :desc="desc" cardClass="title-line">
        <div id="scrollable-dropdown-menu">
            <form class="theme-form">
                <div>
                    <vue3-simple-typeahead :items="scroll" class="form-control typeahead form-control" @onInput="onInput"
                        @onBlur="onBlur" placeholder="Countries" :minInputLength="options.minInputLength" />
                </div>
            </form>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { options, scroll, onInput, onBlur } from "~/composables/common/typeaheadview"
let desc = ref<string>("Dataset shows in scrollable dropdown menu.")
</script>