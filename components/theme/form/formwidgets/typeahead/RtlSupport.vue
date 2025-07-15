<template>
    <CommonCard3 colClass="col-sm-12 col-md-6" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        cardClass="title-line" title="RTL Support" :desc="desc">
        <div id="rtl-support">
            <form class="theme-form">
                <div>
                    <vue3-simple-typeahead :items="list" class="form-control typeahead form-control" dir="rtl"
                        @onInput="onInput" @onBlur="onBlur" placeholder="Countries" :minInputLength="options.minInputLength"
                        :hint="options.hint" />
                </div>
            </form>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { options, onInput, onBlur } from "~/composables/common/typeaheadview"
let desc = ref<string>("Dataset shows in Right Side.")
let list = ref<string[]>(["India",
    "USA",
    "Australia",
    "UEA",
    "China"])
</script>