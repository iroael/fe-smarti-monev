<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-5 b-center bg-size" :style="{ backgroundImage: 'url(' + '/images/login/3.jpg' + ')' }"><img
                    class="bg-img-cover bg-center d-none" src="/images/login/3.jpg" alt="looginpage"></div>
            <div class="col-xl-7 p-0">
                <div class="login-card login-dark">
                    <div>
                        <div><nuxt-link class="logo" to="/"><img class="img-fluid for-light"
                                    src="/images/logo/logo.png" alt="looginpage"><img class="img-fluid for-dark m-auto"
                                    src="/images/logo/logo_dark.png" alt="looginpage"></nuxt-link></div>
                        <div class="login-main">
                            <form class="theme-form">
                                <h4>Sign in to account</h4>
                                <p class="f-m-light mt-1">Enter your email & password to login</p>
                                <div class="form-group">
                                    <label class="col-form-label">Email Address</label>
                                    <input class="form-control" type="email" required placeholder="Test@gmail.com">
                                </div>
                                <div class="form-group">
                                    <label class="col-form-label">Password</label>
                                    <div class="form-input position-relative">
                                        <input class="form-control" :type="type" name="login[password]" required
                                            placeholder="*********">
                                        <div class="show-hide"><span :class="type == 'password' ? 'show' : ''"
                                                @click="showPassword"> </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group mb-0">
                                    <div class="checkbox p-0">
                                        <input id="checkbox1" type="checkbox">
                                        <label class="text-muted" for="checkbox1">Remember password</label>
                                    </div>
                                    <button class="btn btn-primary btn-block w-100" type="submit">Sign in</button>
                                </div>
                                <h6 class="text-muted mt-4 or">Or Sign in with</h6>
                                <div class="social mt-4">
                                    <div class="btn-showcase"><a class="btn btn-light" href="https://www.linkedin.com/login"
                                            target="_blank">
                                            <Icon class="txt-linkedin" name="lucide:linkedin"></Icon>
                                            LinkedIn
                                        </a><a class="btn btn-light" href="https://twitter.com/login?lang=en"
                                            target="_blank">
                                            <Icon class="txt-twitter" name="lucide:twitter"></Icon>twitter
                                        </a><a class="btn btn-light" href="https://www.facebook.com/" target="_blank">
                                            <Icon class="txt-fb" name="lucide:facebook"></Icon>facebook
                                        </a></div>
                                </div>
                                <p class="mt-4 mb-0 text-center">Don't have account?<nuxt-link class="ms-2"
                                        to="/auth/register">Create Account</nuxt-link></p>
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
    title: "Login Image Two | Smarti - Sistem Monitoring Rumah Terintegrasi"
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