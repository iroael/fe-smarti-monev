<template>
    <li class="cart-nav onhover-dropdown">
        <div class="cart-box onhover-click">
            <svg>
                <use href="/svg/icon-sprite.svg#email"></use>
            </svg><span class="badge rounded-pill badge-danger">2</span>
        </div>
        <div class="onhover-show-div chat-dropdown">
            <div class="dropdown-title">
                <div class="d-flex align-items-center"> <img class="img-fluid img-40 rounded-circle"
                        src="/images/dashboard/user/1.jpg" alt="user">
                    <div>
                        <h6 class="f-18 mb-0">Jane Cooper</h6>
                        <p class="mb-0"> <span class="status status-success me-1"></span><span>active</span></p>
                    </div>
                </div>
            </div>
            <ul>
                <li :class="item.msgType" v-for="(item, index) in store.messageData" :key="index">
                    <div> <img class="img-fluid img-30 rounded-circle" :src="item.img" alt="user">
                        <div>
                            <p>{{ item.msg }}</p>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="chat-input">
                <div class="input-group">
                    <input class="form-control" type="text" placeholder="Type message here..."><span
                        class="input-group-text bg-primary">
                        <svg>
                            <use href="/svg/icon-sprite.svg#send"></use>
                        </svg></span>
                </div>
            </div>
        </div>
    </li>
</template>

<script setup lang="ts">
import {useHeaderStore} from '~/stores/header'
let store = useHeaderStore();
</script>

