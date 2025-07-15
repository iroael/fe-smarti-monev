<template>
    <div class="simplebar-wrapper" style="margin: 0px;">
        <div class="simplebar-height-auto-observer-wrapper">
            <div class="simplebar-height-auto-observer"></div>
        </div>
        <div class="simplebar-mask">
            <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                <div class="simplebar-content-wrapper">
                    <div class="simplebar-content" style="padding: 0px;">
                        <li class="back-btn"><nuxt-link to="/"><img class="img-fluid" src="/images/logo/logo-icon.png"
                                    alt=""></nuxt-link>
                            <div class="mobile-back text-end"><span>Back</span><i class="fa fa-angle-right ps-2"
                                    aria-hidden="true"></i></div>
                        </li>
                        <li class="pin-title sidebar-main-title" :class="store.pinedArray.length ? 'show' : ''">
                            <div>
                                <h6>Pinned</h6>
                            </div>
                        </li>
                        <template v-for="(item, index) in store.searchedSidebar" :key="index">
                            <li class="sidebar-main-title" v-if="item.menu.length">
                                <div>
                                    <h6 class="lan-1">{{ $t(item.title) }}</h6>
                                </div>
                            </li>
                            <li v-for="(menu, index) in item.menu" :key="index" class="sidebar-list"
                                :class="store.pinedArray.includes(menu.title) ? 'pined' : ''">

                                <i class="fa fa-thumb-tack" @click="store.getPinedData(menu)"></i>
                                <label :class="'badge badge-light-' + menu.bagdeColor" v-if="menu.bagde">{{ menu.bagde
                                }}</label><nuxt-link class="sidebar-link sidebar-title"
                                    :class="store.perentName == menu.title ? 'active' : ''"
                                    :to="menu.type == 'link' ? menu.path : ''" @click="store.setPerentActive(menu.title)">
                                    <svg class="stroke-icon">
                                        <use :href="'/svg/icon-sprite.svg#stroke-' + menu.icon"></use>
                                    </svg>
                                    <span class="lan-3">{{ $t(menu.title) }}</span>
                                    <div class="according-menu" v-if="menu.type == 'sub'"><i
                                            :class="'fa fa-angle-' + [store.perentName == menu.title ? 'down' : 'right']"></i>
                                    </div>
                                </nuxt-link>
                                <ul class="sidebar-submenu" v-if="menu.type == 'sub' ? 'sidebar-submenu' : ''"
                                    :class="store.perentName == menu.title ? 'd-block' : 'd-none'">
                                    <li v-for="(sub, index) in menu.children"
                                        :class="sub.type == 'sub' ? 'submenu-title submenu-wrapper' : ''" :key="index">
                                        <nuxt-link :to="sub.type == 'link' ? sub.path : 'javascript:void(0)'"
                                            :class="store.subName == sub.title ? 'active' : ''"
                                            @click="store.setSubActive(sub.title)">{{
                                                $t(sub.title) }}</nuxt-link>
                                        <div class="according-menu" v-if="sub.type == 'sub'"><i
                                                :class="'fa fa-angle-' + [store.subName == sub.title ? 'down' : 'right']"></i>
                                        </div>
                                        <ul class="nav-sub-childmenu submenu-content"
                                            :class="store.subName == sub.title ? 'd-block' : 'd-none'">
                                            <li v-for="(child, index) in sub.children" :key="index">
                                                <nuxt-link :to="child.path">{{ $t(child.title) }}</nuxt-link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { log } from '~/core/data/sociall-app';
import { useSidebarStore } from '~/stores/sidebar'
let store = useSidebarStore();
let menuItems = store.searchedSidebar
const showPinTitle = computed(() => {
    let show = false;
    store.searchedSidebar.filter(item => {

        item.menu?.filter(items => {

            items.isPinned && (show = true)
            return !show
        })
    })
    return show
})

</script>