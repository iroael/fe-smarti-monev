<template>
    <CommonCard3 colClass="col-xl-6" cardbodyClass="common-flex" pre="true" cardClass="title-line" preClass="f-m-light mt-1"
        headerTitle="true" title="Default touch-spin" :desc="desc">
        <ThemeFormFormwidgetsTouchspinDefulttouchspinDefaultPrimery />
        <ThemeFormFormwidgetsTouchspinDefulttouchspinDefaultSecondary />
        <ThemeFormFormwidgetsTouchspinDefulttouchspinDefaultSuccess />
        <ThemeFormFormwidgetsTouchspinDefulttouchspinDefaultDanger />
        <ThemeFormFormwidgetsTouchspinDefulttouchspinDefaultWarning />
        <ThemeFormFormwidgetsTouchspinDefulttouchspinDefaultInfo />
        <ThemeFormFormwidgetsTouchspinDefulttouchspinDefaultDark />
    </CommonCard3>
</template>
<script lang="ts" setup>

let desc = ref<string>("  Use the <code>.decrement-touchspin </code>and <code>.increment-touchspin </code>class.")
</script>