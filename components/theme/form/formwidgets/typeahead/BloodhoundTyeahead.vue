<template>
    <CommonCard3 colClass="col-sm-12 col-md-6" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        cardClass="title-line" title="Bloodhound (Suggestion Engine)" :desc="desc">
        <div id="bloodhound">
            <form class="theme-form">
                <div>
                    <vue3-simple-typeahead :items="list" class="form-control typeahead form-control"
                        :placeholder="options.placeholder" @onInput="onInput" @onBlur="onBlur"
                        :minInputLength="options.minInputLength" />
                </div>
            </form>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { options, list, onInput, onBlur } from "~/composables/common/typeaheadview"
let desc = ref<string>("Bloodhound offers advanced functionalities such as prefetching and backfilling with remote data.")
</script>