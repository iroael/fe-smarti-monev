<template>
    <div class="msger-inputarea">
        <div class="dropdown-form dropdown-toggle" role="main" data-bs-toggle="dropdown" aria-expanded="false"><i
                class="icon-plus"></i>
            <div class="chat-icon dropdown-menu dropdown-menu-start">
                <div class="dropdown-item mb-2">
                    <svg>
                        <use href="/svg/icon-sprite.svg#camera"></use>
                    </svg>
                </div>
                <div class="dropdown-item">
                    <svg>
                        <use href="/svg/icon-sprite.svg#attchment"></use>
                    </svg>
                </div>
            </div>
        </div>
        <input class="msger-input two uk-textarea" placeholder="Type Message here.." v-model="text"
            v-on:keyup.enter="addChat()">
        <div class="open-emoji">
            <div class="second-btn uk-button" @click="showEmoji = !showEmoji"></div>
            <CommonBlockEmoji :show="showEmoji" @selectEmoji="addEmoji" />
        </div>
        <button class="msger-send-btn" type="button" @click="addChat()"><i class="fa fa-location-arrow"></i></button>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import {useChatStore} from '~/stores/chat'
let store = useChatStore();
const { currentChat } = storeToRefs(useChatStore())
const text = ref<string>("")
let showEmoji = ref(false)
function addChat() {    
    var container = document.querySelector(".msger-chat") as HTMLInputElement
    setTimeout(function () {
        container.scrollBy({ top: 200, behavior: 'smooth' });
    }, 310);
    setTimeout(function () {
        container.scrollBy({ top: 200, behavior: 'smooth' });
    }, 1100);
    if (text.value !== '') {
        store.addChat(text.value);
        text.value = '';

    }
}
function addEmoji(emoji){
    text.value += emoji
}
</script>

