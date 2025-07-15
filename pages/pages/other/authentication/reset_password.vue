<template>
    <div class="container-fluid p-0">
        <div class="row">
            <div class="col-12">
                <div class="login-card login-dark">
                    <div>
                        <div><nuxt-link class="logo" to="/"><img class="img-fluid for-light" src="/images/logo/logo.png"
                                    alt="looginpage"><img class="img-fluid for-dark m-auto" src="/images/logo/logo_dark.png"
                                    alt="looginpage"></nuxt-link></div>
                        <div class="login-main">
                            <form class="theme-form">
                                <h2>Create Your Password</h2>
                                <div class="form-group">
                                    <label class="col-form-label">New Password</label>
                                    <div class="form-input position-relative">
                                        <input class="form-control" :type="type" name="login[password]"
                                            placeholder="*********">
                                        <div class="show-hide"><span :class="type == 'password' ? 'show' : ''"
                                                @click="showPassword"></span></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-form-label">Retype Password</label>
                                    <input class="form-control" type="password" name="login[password]" required
                                        placeholder="*********">
                                </div>
                                <div class="form-group mb-0">
                                    <div class="checkbox p-0">
                                        <input id="checkbox1" type="checkbox">
                                        <label class="text-muted" for="checkbox1">Remember password</label>
                                    </div>
                                    <button class="btn btn-primary btn-block w-100" type="submit">Done </button>
                                </div>
                                <p class="mt-4 mb-0">Don't have account?<nuxt-link class="ms-2" to="/auth/register">Create
                                        Account</nuxt-link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
definePageMeta({
    layout: 'custom'
})
useHead({
    title: "Reset Password | Smarti - Sistem Monitoring Rumah Terintegrasi"
})
const type = ref<string>('password')
function showPassword() {
    if (type.value === 'password') {
        type.value = 'text';
    } else {
        type.value = 'password';
    }
}
</script>