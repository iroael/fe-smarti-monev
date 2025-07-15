<template>
    <li class="onhover-dropdown">
        <div class="notification-box onhover-click">
            <svg>
                <use href="/svg/icon-sprite.svg#notification"></use>
            </svg><span class="badge rounded-pill badge-success">3 </span>
        </div>
        <div class="onhover-show-div notification-dropdown">
            <h6 class="f-18 mb-0 dropdown-title">Notifications </h6>
            <ul>
                <li class="d-flex" v-for="(item, index) in store.notificationData" :key="index">
                    <div class="notification-image"> <img class="img-fluid" :src="item.img" alt="user">
                        <div class="notification-icon" :class="item.bg"><i class="fa" :class="item.icon"></i></div>
                    </div>
                    <div>
                        <p><span class="f-w-500 me-1">{{ item.name }} </span>{{ item.desc }} </p><span
                            class="f-light">{{ item.time }}</span>
                    </div>
                </li>
                <li><a class="f-w-700" href="#!">Check all</a></li>
            </ul>
        </div>
    </li>
</template>

<script setup lang="ts">
import {useHeaderStore} from '~/stores/header'
let store = useHeaderStore();
</script>

