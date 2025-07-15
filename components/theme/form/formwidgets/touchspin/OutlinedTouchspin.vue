<template>
    <CommonCard3 colClass="col-xl-6" cardbodyClass="common-flex" pre="true" cardClass="title-line" preClass="f-m-light mt-1"
        headerTitle="true" title="Outlined touch-spin" :desc="desc">
        <ThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlinePrimary />
        <ThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineSecondary />
        <ThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineSuccess />
        <ThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineDanger />
        <ThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineWarning />
        <ThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineInfo />
        <ThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineDark />
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("  Use the <code>.decrement-touchspin </code>and <code>.increment-touchspin </code>class.")
</script>