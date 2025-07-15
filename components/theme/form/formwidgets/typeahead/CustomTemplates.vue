<template>
    <CommonCard3 colClass="col-sm-12 col-md-6" pre="true" preClass="f-m-light mt-1" cardClass="title-line"
        headerTitle="true" title="Custom templates" :desc="desc">
        <div id="custom-templates">
            <form class="theme-form">
                <div>
                    <vue3-simple-typeahead :items="lists" class="form-control typeahead form-control" @onInput="onInput"
                        @onBlur="onBlur" placeholder="Oscar winners" :minInputLength="options.minInputLength" />
                </div>
            </form>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { options, lists, onInput, onBlur } from "~/composables/common/typeaheadview"
let desc = ref<string>("Custom templates give you full control over how suggestions get rendered")
</script>