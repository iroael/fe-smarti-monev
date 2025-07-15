<template>
    <div class="container-fluid p-0">
        <div class="row m-0">
            <div class="col-12 p-0">
                <div class="login-card login-dark">
                    <div>
                        <div><nuxt-link class="logo" to="/"><img class="img-fluid for-light" style="width: 250px; height: 100px;" src="/images/logo/logo.webp"
                                    alt="looginpage"><img class="img-fluid for-dark m-auto" style="width: 250px; height: 100px;" src="/images/logo/logo.webp"
                                    alt="looginpage"></nuxt-link></div>
                        <div class="login-main">
                            <form class="theme-form" @submit.prevent="">
                                <h2 class="text-center">Sign in to account</h2>
                                <p class="f-m-light mt-1 text-center">Enter your email & password to login</p>
                                <div class="form-group">
                                    <label class="col-form-label">Email Address</label>
                                    <input v-model="email" class="form-control" type="email" required
                                        placeholder="Test@gmail.com">
                                </div>
                                <div class="form-group">
                                    <label class="col-form-label">Password</label>
                                    <div class="form-input position-relative">
                                        <input class="form-control" v-model="password" :type="type" name="login[password]"
                                            required placeholder="*********">
                                        <div class="show-hide"><span class="show" @click="showPassword"> </span></div>
                                    </div>
                                </div>
                                <div class="form-group mb-0">
                                    <div class="text-end mt-3">
                                        <button class="btn btn-primary btn-block w-100" type="submit" @click="doLogin">Sign
                                            in</button>
                                    </div>
                                </div>
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
    title: "Smarti - Sistem Monitoring Rumah Terintegrasi"
})
import { toast } from 'vue3-toastify';
let type = ref<string>('password')
let email = ref<string>("test@admin.com")
let password = ref<string>("test@123456")
function showPassword() {
    if (type.value === 'password') {
        type.value = 'text';
    } else {
        type.value = 'password';
    }
}
function doLogin() {
    if (email.value === "test@admin.com") {
        let isLoggedin: any = useCookie('userAccount')
        isLoggedin.value = email.value

        navigateTo('/')
        localStorage.setItem("SidebarType", 'compact-wrapper')
    }
    else {
        toast.error('Opps... Invalid email and password ', { position: 'top-right', icon: 'times', autoClose: 2000 });
    }
}
</script>