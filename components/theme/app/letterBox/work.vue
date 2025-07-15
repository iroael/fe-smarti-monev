<template>
    <div class="mail-body-wrapper">
        <ul id="paginated-list" data-current-page="1" aria-live="polite">
            <li class="inbox-data" v-for="(item, index) in store.workLetterData" :key="index">
                <div class="inbox-user">
                    <div class="form-check form-check-inline m-0">
                        <input class="form-check-input checkbox-primary" id="emailCheckbox1" type="checkbox"
                            value="option1" />
                        <label class="form-check-label" for="emailCheckbox1"></label>
                    </div>
                    <svg class="important-mail" @click="toggleStar(index)" :class="[{ active: activeStars[index] }]">
                        <use href="/svg/icon-sprite.svg#fill-star"></use>
                    </svg>
                    <div class="rounded-border"><img class="img-fluid" :src="item.img" v-if="item.img" alt="user" />
                        <div class="circle-success" v-else>
                            <p :class="'txt-' + item.sortcolor">{{ item.sortName }}</p>
                        </div>
                    </div>
                    <p>{{ item.name }}</p>
                </div>
                <div class="inbox-message" @click="store.showLetterBox = true">
                    <div class="email-data"><span>{{ item.span1 }} <span>{{ item.span2 }}</span></span>
                        <div :class="'badge badge-light-' + item.color">{{ item.badge }}</div>
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
let activeStars = ref<boolean[]>([])
let store = useAppStore();
function toggleStar(index: number) {
    activeStars.value[index] = !activeStars.value[index];
}
</script>

