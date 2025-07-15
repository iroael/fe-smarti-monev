<template>
    <li class="onhover-dropdown">
        <svg>
            <use href="/svg/icon-sprite.svg#header-bookmark"></use>
        </svg>
        <div class="onhover-show-div bookmark-flip" :class="bookmarkSearchBox ? 'active' : ''">
            <div class="flip-card">
                <div class="flip-card-inner" :class="bookmarkSearchBox ? 'flipped' : ''">
                    <div class="front">
                        <h5 class="f-18 f-w-600 mb-0 dropdown-title">Bookmark</h5>
                        <ul class="bookmark-dropdown">
                            <li class="custom-scrollbar">
                                <div class="row">

                                    <div class="col-4 text-center mb-2" v-for="(menuItem, index) in bookmarkItems.slice(0, 8)"
                                        :key="index"><nuxt-link :to="{ path: menuItem.path }">
                                            <div class="bookmark-content">
                                                <div class="bookmark-icon"> <svg>
                                                        <use :href="'/svg/icon-sprite.svg#stroke-' + menuItem.icon"></use>
                                                    </svg></div><span>{{ menuItem.title }}
                                                </span>
                                            </div>
                                        </nuxt-link></div>
                                </div>
                            </li>
                            <li class="text-center"><a class="flip-btn f-w-700" id="flip-btn" href="javascript:void(0)"
                                    @click="openBookmark">Add New
                                    Bookmark</a></li>
                        </ul>
                    </div>
                    <div class="back">
                        <ul>
                            <li class="position-relative p-0 m-0">
                                <div class="bookmark-dropdown flip-back-content">
                                    <input type="text" placeholder="search..." @keyup="searchTerm" v-model="terms">
                                </div>
                                <div class="bookmark-search custom-scrollbar shadow-none px-2 py-0"
                                    :class="!bookmarkSearchResultEmpty ? 'Typeahead-menu is-open' : 'Typeahead-menu'">
                                    <div class="ProfileCard u-cf" v-for="(menuItem, index) in searchMenuItems.slice(0, 8)"
                                        :key="index">
                                        <div class="ProfileCard-avatar header-search">
                                            <svg>
                                                <use :href="'/svg/icon-sprite.svg#stroke-' + menuItem.icon"></use>
                                            </svg>
                                        </div>
                                        <div class="ProfileCard-details">
                                            <div class="ProfileCard-realName bookmark-realName">
                                                <nuxt-link :to="{ path: menuItem.path }" class="realname">{{
                                                    menuItem.title }}</nuxt-link>
                                                <span class="pull-right "><a href="JavaScript:void(0);"
                                                        @click="addToBookmark(menuItem)"><i
                                                            class="fa fa-star-o f-16 f-right"
                                                            :class="menuItem.bookmark ? 'text-warning' : ''"></i></a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div :class="bookmarkSearchResultEmpty ? 'Typeahead-menu is-open' : 'Typeahead-menu'">
                                    <div class="tt-dataset tt-dataset-0">
                                        <div class="EmptyMessage"> Your search turned up 0 results. Opps There are no result
                                            found.</div>
                                    </div>
                                </div>
                            </li>
                            <li @click="openBookmark"><a class="f-w-700 d-block flip-back" id="flip-back"
                                    href="javascript:void(0)">Back</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>
<script lang="ts" setup>
import { useSidebarStore } from "~/stores/sidebar";
import { storeToRefs } from "pinia";
interface bookmark {
    icon: string,
    path: string,
    title: string,
}
let bookmarkSearchBox = ref<boolean>(false)
let bookmarkItems = ref<bookmark[]>([])
let bookmarkSearchResult = ref<boolean>(false)
let bookmarkSearchResultEmpty = ref<boolean>(false)
let terms = ref<string>("");
let store = useSidebarStore()
let menuItems = store.sidebar_Data
let { searchDatas: searchMenuItems } = storeToRefs(store);
watch(
    () => [searchMenuItems, terms],
    () => {
        terms.value ? addFix() : removeFix()
        if (!searchMenuItems.value.length) bookmarkSearchResultEmpty.value = true;
        else bookmarkSearchResultEmpty.value = false;
    },
    { deep: true },
);
function openBookmark() {
    bookmarkSearchBox.value = !bookmarkSearchBox.value;
    if (!bookmarkSearchBox) removeFix();
}
function removeFix() {
    bookmarkSearchResult.value = false;
    const text = '';
}
function addFix() {
    bookmarkSearchResult.value = true;
}
function searchTerm() {
    store.searchterm(terms.value);
}
function addToBookmark(items: any) {
    const index = bookmarkItems.value.indexOf(items);
    if (index === -1 && !items.bookmark) {
        items.bookmark = true;
        bookmarkItems.value.push(items);
        const text = '';
    } else {
        bookmarkItems.value.splice(index, 1);
        items.bookmark = false;
    }
}
onMounted(() => {
    menuItems.filter((items) => {
        items.menu.filter((subItem) => {
            if (subItem.bookmark) {
                bookmarkItems.value.push(subItem);
            }
        })

    });
})
</script>
