<template>
    <div class="container-fluid">
        <div class="alert txt-primary alert-light-primary alert-dismissible fade show" role="alert"><i
                data-feather="alert-triangle"></i>
            <p>This is the Typeahead page where <strong>jQuery </strong> was utilised.</p>
            <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div class="typeahead typeahead-wrapper">
            <div class="row">
                <ThemeFormFormwidgetsTypeaheadBasicTypeahead />
                <ThemeFormFormwidgetsTypeaheadPrefetchTypeahead />
                <ThemeFormFormwidgetsTypeaheadBloodhoundTyeahead />
                <ThemeFormFormwidgetsTypeaheadRemoteTypeahead />
                <ThemeFormFormwidgetsTypeaheadCustomTemplates />
                <ThemeFormFormwidgetsTypeaheadMultipleSections />
                <ThemeFormFormwidgetsTypeaheadScrollableMenu />
                <ThemeFormFormwidgetsTypeaheadRtlSupport />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
useHead({
    title: "Form Widgets Typeahead | Smarti - Sistem Monitoring Rumah Terintegrasi"
})
</script>