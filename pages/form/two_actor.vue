<template>
    <div class="container-fluid">
        <div class="row">
            <ThemeFormFormlayoutTwofactorTwoFactorAuthentication />

            <CommonCard3 colClass="col-md-12" cardbodyClass="email-verify">
                <div class="row g-3">
                    <ThemeFormFormlayoutTwofactorEmailVerification />
                    <ThemeFormFormlayoutTwofactorVerificationCode />
                </div>
            </CommonCard3>
        </div>
    </div>
</template>
<script setup lang="ts">
useHead({
    title: "Form Layout Two Factor| Smarti - Sistem Monitoring Rumah Terintegrasi"
})
</script>
