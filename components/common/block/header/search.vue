<template>
    <form class="form-inline search-full col" :class="openSearch ? 'open' : ''" action="#" method="get">
        <div class="form-group w-100">
            <div class="Typeahead Typeahead--twitterUsers">
                <div class="u-posRelative">
                    <input class="demo-input Typeahead-input form-control-plaintext w-100" type="text"
                        placeholder="Search yuri .." title="" :class="filtered ? 'open' : ''" @keyup="searchTerm"
                        v-model="termss">

                    <div class="spinner-border Typeahead-spinner" role="status"><span class="sr-only">Loading...</span>
                    </div>
                    <Icon class="close-search" size="25px" name="fe:close" @click="emit('close')"></Icon>
                </div>
                <div :class="searchResult ? 'Typeahead-menu is-open ' : 'Typeahead-menu '" v-if="menuItems.length">
                    <div class="ProfileCard u-cf" v-for="(menuItem, index) in menuItems.slice(0, 8)" :key="index">
                        <div class="ProfileCard-avatar header-search">

                            <svg>
                                <use :href="'/svg/icon-sprite.svg#stroke-' + menuItem.icon"></use>
                            </svg>
                        </div>
                        <div class="ProfileCard-details">
                            <div class="ProfileCard-realName">
                                <span @click="removeFix()"><nuxt-link :to="{ path: menuItem.path }" class="realname">{{
                                    menuItem.title
                                }}</nuxt-link></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div :class="searchResultEmpty ? 'Typeahead-menu is-open' : 'Typeahead-menu'">
                    <div class="tt-dataset tt-dataset-0">
                        <div class="EmptyMessage"> Your search turned up 0 results. Opps There are no result found. </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
import { useSidebarStore } from "~/stores/sidebar";
import { storeToRefs } from "pinia";
defineProps({
    openSearch: Boolean
})
let emit = defineEmits(['close'])
let filtered = ref<boolean>(false);
let termss = ref<string>("");
let searchResult = ref<boolean>(false);
let searchResultEmpty = ref<boolean>(false);
let store = useSidebarStore();
let { searchData: menuItems } = storeToRefs(store);
watch(
    () => [menuItems, termss],
    () => {
        termss.value ? addFix() : removeFix();
        if (!menuItems.value.length) searchResultEmpty.value = true;
        else searchResultEmpty.value = false;
    },
    { deep: true },
);
function searchTerm() {
    store.searchTerm(termss.value);
}
function addFix() {

    searchResult.value = true;
}
function removeFix() {
    searchResult.value = false;
    termss.value = "";
}
</script>

