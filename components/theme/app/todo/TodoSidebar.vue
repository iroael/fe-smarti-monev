<template>
    <div class="col-xl-3 xl-30 box-col-12">
        <div class="email-sidebar md-sidebar"><a class="btn btn-primary email-aside-toggle md-sidebar-toggle"
                @click="collapseFilter()">To Do
                filter</a>
            <div class="email-left-aside md-sidebar-aside" :class="filtered ? 'open' : ''">
                <div class="card">
                    <div class="card-body">
                        <div class="email-app-sidebar left-bookmark custom-scrollbar">
                            <div class="d-flex align-items-center gap-2 flex-wrap">
                                <div class="media-size-email"><img class="img-40 rounded-circle" src="/images/user/user.png"
                                        alt=""></div>
                                <div class="flex-grow-1">
                                    <h6 class="f-w-600">Mark Jecno</h6>
                                    <p>Markjecno@gmail.com</p>
                                </div>
                            </div>
                            <ul class="nav main-menu">
                                <li class="nav-item">
                                    <button class="btn-primary text-white badge-light btn-mail w-100">
                                        <Icon name="lucide:check-circle" class="me-2 fs-1" size="20" />To Do List
                                    </button>
                                </li>

                                <li class="nav-item" v-for="(item, index) in todosidebar" :key="index"><a
                                        href="javascript:void(0)"><span class="iconbg " :class="item.badgeclass">
                                            <Icon :name="item.icon" class="fs-1" size="20" />
                                        </span><span class="title ms-2">{{
                                            item.title }}</span><span :class="item.pillclass">{{ item.badge }}</span></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { todosidebar } from "~/core/data/todo"
let filtered = ref<boolean>(false)
function collapseFilter() {
    filtered.value = !filtered.value
}
</script>