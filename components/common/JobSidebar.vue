<template>
    <div class="col-xl-3 xl-40 box-col-12">
        <div class="md-sidebar"><a class="btn btn-primary email-aside-toggle md-sidebar-toggle"
                @click="collapseFilter()">Job filter</a>
            <div class="md-sidebar-aside job-sidebar" :class="filtered ? 'open' : ''">
                <div class="default-according style-1 faq-accordion job-accordion">
                    <div class="accordion" id="accordionExample">
                        <ThemeJobFiltersFilterView />
                        <ThemeJobFiltersLocationView />
                        <ThemeJobFiltersJobTitle />
                        <ThemeJobFiltersIndustryView />
                        <ThemeJobFiltersSpecificSkills />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
let filtered = ref<boolean>(false)
function collapseFilter() {
    filtered.value = !filtered.value;
}
</script>