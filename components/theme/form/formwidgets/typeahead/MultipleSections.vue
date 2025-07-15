<template>
    <CommonCard3 colClass="col-sm-12 col-md-6" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        cardClass="title-line" title="Multiple sections with headers" :desc="desc">
        <div id="multiple-datasets">
            <form class="theme-form">
                <div>
                    <vue3-simple-typeahead :items="multiple" class="form-control typeahead form-control" @onInput="onInput"
                        @onBlur="onBlur" placeholder="NBA and NHL teams" :minInputLength="options.minInputLength" />
                </div>
            </form>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { options, multiple, onInput, onBlur } from "~/composables/common/typeaheadview"
let desc = ref<string>("Two datasets that are prefetched, stored, and searched on the client. Highlighting is enabled.")
</script>