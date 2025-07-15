<template>
    <div class="sidebar-search">
        <div class="input-group"><span class="input-group-text" id="sidebar-search">
                <svg>
                    <use href="/svg/icon-sprite.svg#search"></use>
                </svg></span>
            <input class="form-control" type="text" placeholder="Quick search" aria-label="Username" v-model="store.search"
                aria-describedby="sidebar-search">
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useSidebarStore } from '~/stores/sidebar'
let store = useSidebarStore();
</script>