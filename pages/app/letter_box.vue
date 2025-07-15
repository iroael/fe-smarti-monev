<template>
    <div class="container-fluid">
        <div class="email-wrap email-main-wrapper">
            <div class="row">
                <div class="col-xxl-3 col-xl-4 box-col-12">
                    <div class="md-sidebar"> <a class="btn btn-primary md-sidebar-toggle" href="javascript:void(0)"
                            @click="filters()">email
                            filter</a>
                        <div class="md-sidebar-aside job-left-aside custom-scrollbar" :class="filter ? 'open' : ''">
                            <div class="email-left-aside">
                                <div class="card">
                                    <div class="card-body">
                                        <ThemeAppLetterBoxSidebar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ThemeAppLetterBox />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: "Letter Box| Yuri - Premium Nuxt Admin Template"
})
let filter = ref<boolean>(false)
function filters() {
    filter.value = !filter.value
}
</script>

