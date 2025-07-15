<template>
    <div class="loader-wrapper" v-if="showLoader">
        <div class="loader"></div>
    </div>
    <ClientOnly>
        <CommonBlockTapTop />

        <div class="page-wrapper" :class="display ? 'compact-wrapper ' : layoutobj" id="pageWrapper">
            <div class="page-header row" :class="{ close_icon: !store.togglesidebar }">
                <div class="col-auto header-left-wrapper">
                    <div class="header-logo-wrapper p-0 left-header">
                        <div class="logo-wrapper"><nuxt-link to="/"><img class="img-fluid" src="/images/logo/logo_dark.png"
                                    alt=""></nuxt-link></div>
                    </div>
                    <div class="toggle-sidebar" @click="store.toggle_sidebar">
                        <svg class="status_toggle sidebar-toggle">
                            <use href="/svg/icon-sprite.svg#collapse-sidebar"></use>
                        </svg>
                    </div>
                </div>
                <CommonBlockBreadcrumb />
                <div class="col header-wrapper m-0 header-right-wrapper">
                    <CommonBlockHeader />
                </div>
            </div>
            <div class="page-body-wrapper">
                <div class="sidebar-wrapper"
                    :data-sidebar-layout="storeLayout.svg == 'stroke-svg' ? 'stroke-svg' : 'fill-svg'"
                    :class="[{ close_icon: !store.togglesidebar, 'sidebar-default': store.perentName }]">
                    <div>
                        <div class="logo-wrapper"><nuxt-link to="/"><img class="img-fluid" src="/images/logo/logo_dark.png"
                                    alt=""></nuxt-link>
                            <div class="back-btn" @click="store.toggle_sidebar"><i class="fa fa-angle-left"></i></div>
                            <div class="toggle-sidebar" @click="store.toggle_sidebar">
                                <Icon class="status_toggle middle sidebar-toggle" name="lucide:layout-grid"> </Icon>
                            </div>
                        </div>
                        <div class="logo-icon-wrapper"><nuxt-link to="/"><img class="img-fluid"
                                    src="/images/logo/logo-icon.png" alt=""></nuxt-link></div>
                        <CommonBlockSidebar />
                    </div>
                </div>
                <div class="page-body">
                    <slot />
                </div>
                <CommonBlockFooterView />
            </div>
        </div>

        <CommonBlockCustomizerIndexCustomizer />
    </ClientOnly>
</template>
<script setup lang="ts">
import { useSidebarStore } from "~/stores/sidebar"
import { uselayoutStore } from "~/stores/layout";
import { useRouter } from "vue-router";
let layoutobj = ref<any>({});
let display = ref<boolean>(false)
let showLoader = ref<boolean>(false)
let store = useSidebarStore()
let storeLayout = uselayoutStore();
const router = useRouter();
const { layouts: layouts } = storeToRefs(storeLayout);
watch(
    () => layouts,
    () => {
        layoutobj.value = storeLayout.layouts.settings.sidebar_setting;
    },
    { deep: true },
);
watch(
    () => "router",
    () => {

        if ((window.innerWidth < 991 && storeLayout.layouts.settings.layout === 'Horizontal')) {
            const newlayout = JSON.parse(JSON.stringify(layoutobj).replace('horizontal-wrapper', 'compact-sidebar compact-small material-icon'));
            layoutobj.value = JSON.parse(JSON.stringify(newlayout))[storeLayout.layouts.settings.layout];
        } else {
            layoutobj.value = JSON.parse(JSON.stringify(layoutobj))[storeLayout.layouts.settings.layout];
        }
    }
)
watch(
    () => router,
    () => {
        showLoader.value = true;
        setTimeout(() => {
            showLoader.value = false
        }, 2000);
    },
    { deep: true },
);
function handleScroll() {
    if (window.innerWidth <= 1199) {
        display.value = true;
        store.togglesidebar = false

    } else {
        store.togglesidebar = true
        display.value = false;
    }
}
onMounted(() => {
    window.addEventListener('resize', handleScroll);
    layoutobj.value = storeLayout.layouts.settings.sidebar_setting;
})
</script>
