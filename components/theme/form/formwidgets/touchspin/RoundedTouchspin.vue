<template>
    <CommonCard3 colClass="col-xl-12" cardbodyClass="common-flex rounded-touchspin" pre="true" preClass="f-m-light mt-1"
        headerTitle="true" title="Rounded touch-spin" :desc="desc">
        <ThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedPrimary />
        <ThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedSecondary />
        <ThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedSuccess />
        <ThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedDanger />
        <ThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedWarning />
        <ThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedInfo />
        <ThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedDark />
    </CommonCard3>
</template>
<script lang="ts" setup>
let desc = ref<string>("  Use the <code>.decrement-touchspin </code>and <code>.increment-touchspin </code>class.")
</script>