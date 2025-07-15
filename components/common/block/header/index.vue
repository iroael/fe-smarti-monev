<template>
    <div class="row m-0">
        <CommonBlockHeaderSearch :openSearch="openSearch" @close="openSearch = false" />
        <div class="header-logo-wrapper col-auto p-0 left-header"></div>
        <div class="nav-right col-auto pull-right right-header p-0 ms-auto">
            <ul class="nav-menus">
                <li @click="openSearch = true"> <span class="header-search">
                        <svg>
                            <use href="/svg/icon-sprite.svg#search"></use>
                        </svg></span></li>
                <CommonBlockHeaderNotification />
                <CommonBlockHeaderMessage />
                <CommonBlockHeaderMode />
                <CommonBlockHeaderBookmarkSearch />
                <CommonBlockHeaderCart />
                <CommonBlockHeaderProfile />
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
let openSearch = ref(false)
</script>

