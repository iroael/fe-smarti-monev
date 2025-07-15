<template>
    <div class="mail-body-wrapper">
        <ul>
            <li class="inbox-data" v-for="(item, index) in store.starr" :key="index">
                <div class="inbox-user">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input checkbox-primary" id="emailCheckbox1" type="checkbox"
                            value="option1" />
                        <label class="form-check-label" for="emailCheckbox1"></label>
                    </div>
                    <svg class="important-mail " @click="toggleStar(index)" :class="[{ active: !activeStars[index] }]">
                        <use href="/svg/icon-sprite.svg#fill-star"></use>
                    </svg>
                    <div class="rounded-border"><img class="img-fluid" v-if="item.img" :src="getImages(item.img)"
                            alt="user" />
                    </div>
                    <p>{{ item.name }}</p>
                </div>
                <div class="inbox-message" @click="store.showLetterBox = true">
                    <div class="email-data"><span>{{ item.desctitle }}<span>{{ item.dec
                    }}</span></span>
                        <div class="badge " :class="item.badgeclass">{{ item.badge }}</div>
                    </div>
                    <div class="email-timing"><span>{{ item.time }}</span></div>
                    <div class="email-options"><i class="fa fa-envelope-o envelope-1 show"></i><i
                            class="fa fa-envelope-open-o envelope-2 hide"></i><i class="fa fa-trash-o trash-3"></i><i
                            class="fa fa-print"></i></div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from '~/stores/app'
let store = useAppStore();
let activeStars = ref<boolean[]>([])

function toggleStar(index: number) {
    activeStars.value[index] = !activeStars.value[index];
}

function getImages(path: string) {
    return '/images/' + path
}
</script>

