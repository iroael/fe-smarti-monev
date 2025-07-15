<template>
    <li class="profile-nav onhover-dropdown">
        <div class="onhover-click">
            <div class="sidebar-image"> <img src="/images/user.png" alt="profile"><span
                    class="status status-success"></span></div>
            <div class="sidebar-content">
                <h4>Wade Warren</h4><span class="f-12 f-w-600 f-light">UI Designer</span>
            </div>
        </div>
        <ul class="profile-dropdown onhover-show-div">
            <li v-for="(item, index) in store.profileData" :key="index"><nuxt-link :to="item.path">
                    <div class="profile-icon">
                        <svg>
                            <use :href="'/svg/icon-sprite.svg#' + item.icon"></use>
                        </svg>
                    </div><span>{{ item.title }}</span>
                </nuxt-link></li>
            <li><a @click="logout">
                    <div class="profile-icon">
                        <svg>
                            <use href="/svg/icon-sprite.svg#login"></use>
                        </svg>
                    </div><span>Log Out</span>
                </a></li>
        </ul>
    </li>
</template>

<script setup lang="ts">
import { useHeaderStore } from "~/stores/header";
const store = useHeaderStore()
const router = useRouter()
function logout() {

    router.replace('/auth/login');
    useCookie('userAccount').value = null
}
</script>

