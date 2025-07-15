<template>
    <div class="col-xl-3 box-col-6">
        <div class="md-sidebar"><a class="btn btn-primary md-sidebar-toggle" href="javascript:void(0)"
                @click="collapseFilter()">task filter</a>
            <div class="md-sidebar-aside job-left-aside custom-scrollbar" :class="filtered ? 'open' : ''">
                <div class="email-left-aside">
                    <div class="card">
                        <div class="card-body">
                            <div class="email-app-sidebar left-bookmark task-sidebar">
                                <div class="common-flex align-items-center">
                                    <div class="media-size-email"><img class="rounded-circle" src="/images/user/user.png"
                                            alt=""></div>
                                    <div class="flex-grow-1">
                                        <h6 class="f-w-600">MARK JENCO</h6>
                                        <p>Markjecno@gmail.com</p>
                                    </div>
                                </div>
                                <ul class="nav main-menu" role="tablist">
                                    <li class="nav-item">
                                        <button class="badge-light-primary btn-block btn-mail w-100" type="button"
                                            data-bs-toggle="modal" data-bs-target="#taskmodel">
                                            <Icon class="me-2" name="bi:check2-circle"></Icon>New Task
                                        </button>
                                    </li>
                                    <li class="nav-item"><span class="main-title"> Views</span></li>

                                    <li v-for="(item, index) in tasksidebar" :key="index"><a :class="item.actve"
                                            :id="item.id" data-bs-toggle="pill" :href="item.href" role="tab"
                                            :aria-controls="item.controls" aria-selected="true"><span class="title">{{
                                                item.title }}</span></a></li>
                                    <li>
                                        <hr>
                                    </li>
                                    <li><span class="main-title"> Tags<span class="pull-right"><a href="#"
                                                    data-bs-toggle="modal" data-bs-target="#createtag">
                                                    <Icon name="ci:plus-circle-outline"></Icon>
                                                </a></span></span></li>
                                    <li v-for="(item, index) in task" :key="index"><a class="show" :id="item.id"
                                            data-bs-toggle="pill" :href="item.href" role="tab"
                                            :aria-controls="item.controls" aria-selected="false"><span class="title">
                                                {{ item.title }}</span></a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-9 col-md-12 box-col-12">
        <div class="email-right-aside bookmark-tabcontent">
            <div class="card email-body radius-left">
                <div class="ps-0">
                    <div class="tab-content">
                        <ThemeAppTaskCreatedView />
                        <ThemeAppTaskTodayTask />
                        <ThemeAppTaskDelayedTasks />
                        <ThemeAppTaskUpcomingTasks />
                        <ThemeAppTaskWeekTasks />
                        <ThemeAppTaskMonthTasks />
                        <ThemeAppTaskAssignedView />
                        <ThemeAppTaskMyTasks />
                        <ThemeAppTaskNotificationView />
                        <ThemeAppTaskNewsLetter />
                        <ThemeAppTaskBusinessTask />
                        <ThemeAppTaskHolidaysTask />
                        <CommonModalsCareateTag />
                        <CommonModalsNewTask />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { tasksidebar, task } from "~/core/data/task"
let filtered = ref<boolean>(false)
function collapseFilter() {
    filtered.value = !filtered.value;
}
</script>