<template>
    <CommonBlockSidebarProfileSidebar />
    <CommonBlockSidebarSearchbar />
    <nav class="sidebar-main">
        <div class="left-arrow" :class="hideLeftArrow ? 'disabled' : hideLeftArrow" @click="display2()" id="left-arrow">
            <Icon name="lucide:arrow-left" size="25"></Icon>
        </div>
        <div id="sidebar-menu">
            <ul class="sidebar-links theme-scrollbar"
                :style="[layoutobject?.includes('horizontal-wrapper') ? { 'margin-left': margin + 'px' } : {}]"
                id="simple-bar">
                <CommonBlockSidebarNavMenu />
            </ul>
        </div>
        <div class="right-arrow" :class="hideRightArrow ? 'disabled' : hideRightArrow" @click="display()">
            <Icon name="lucide:arrow-right" size="25"></Icon>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { useSidebarStore } from '~/stores/sidebar'
import { uselayoutStore } from "~/stores/layout";
let layoutobj = ref<any>({});
let isActive = ref<boolean>(false);
let store = useSidebarStore();
let storeLayout = uselayoutStore();
let hideRightArrow = ref(store.hideRightArrow);
let hideLeftArrow = ref(store.hideLeftArrow);
let margin = ref(store.margin);
const layoutobject: any = computed({
    get() {
        return storeLayout.layouts.settings.sidebar_setting;
    },
    set() {
        layoutobj.value = storeLayout.layouts.settings.sidebar_setting;
        return layoutobj;
    },
});

function display() {
    if (isActive.value == false) {
        isActive.value = !isActive.value;
    }
    if (margin.value >= -2500) {
        margin.value = margin.value - 500;
        hideLeftArrow.value = false;
        hideRightArrow.value = false
    }
    if (margin.value == -3000) {
        hideRightArrow.value = true
    }
}
function display2() {
    if (margin.value <= -500) {
        margin.value = margin.value + 500;
        hideLeftArrow.value = false;
        hideRightArrow.value = false
    }
    if (margin.value == 0) {
        hideLeftArrow.value = true;
    }
}
onMounted(() => {
    setTimeout(() => {
        const elmnt = document.getElementById("myDIV");
        store.menuWidth > window.innerWidth ? ((store.hideRightArrow = false), (store.hideLeftArrowRTL = false)) : ((store.hideRightArrow = false), (store.hideLeftArrowRTL = true));
    }, 500);
    if (margin.value == 0) {
        hideRightArrow.value = false
    }
});
</script>