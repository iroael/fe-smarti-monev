<template>
    <CommonCard3 colClass="col-sm-12 col-md-6" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        cardClass="title-line" title="Basic typeahead" :desc="desc">
        <div id="the-basics">
            <form class="theme-form">
                <div>
                    <vue3-simple-typeahead :items="list" class=" typeahead form-control" :placeholder="options.placeholder"
                        @onInput="onInput" @onBlur="onBlur" :minInputLength="options.minInputLength" />
                </div>
            </form>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { options, list, onInput, onBlur } from "~/composables/common/typeaheadview"
let desc = ref<string>("This is the simple demo for Typeahead.")
</script>