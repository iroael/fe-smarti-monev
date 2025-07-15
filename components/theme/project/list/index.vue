<template>
    <div class="col-md-12 project-list">
        <div class="card">
            <div class="row">
                <div class="col-md-6 p-0 d-flex">
                    <ul class="nav nav-tabs border-tab" id="top-tab" role="tablist">
                        <li class="nav-item"><a class="nav-link active" id="top-home-tab" data-bs-toggle="tab"
                                href="#top-home" role="tab" aria-controls="top-home" aria-selected="true">
                                <Icon name="material-symbols:target"></Icon>All
                            </a></li>
                        <li class="nav-item"><a class="nav-link" id="profile-top-tab" data-bs-toggle="tab"
                                href="#top-profile" role="tab" aria-controls="top-profile" aria-selected="false">
                                <Icon name="material-symbols:info-outline-rounded"></Icon>Doing
                            </a></li>
                        <li class="nav-item"><a class="nav-link" id="contact-top-tab" data-bs-toggle="tab"
                                href="#top-contact" role="tab" aria-controls="top-contact" aria-selected="false">
                                <Icon name="mynaui:check-circle-one"></Icon>Done
                            </a></li>
                    </ul>
                </div>
                <div class="col-md-6 p-0">
                    <div class="form-group mb-0 me-0"></div><nuxt-link class="btn btn-primary" to="/project/project_create">
                        <Icon name="lucide:plus-square"></Icon> Create New Project
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
    <CommonCard1 colClass="col-sm-12" :header="false">
        <div class="tab-content" id="top-tabContent">
            <div class="tab-pane fade show active" id="top-home" role="tabpanel" aria-labelledby="top-home-tab">
                <ThemeProjectListData :data="store.projectListData.all" />
            </div>
            <div class="tab-pane fade" id="top-profile" role="tabpanel" aria-labelledby="profile-top-tab">
                <ThemeProjectListData :data="store.projectListData.doing" />
            </div>
            <div class="tab-pane fade" id="top-contact" role="tabpanel" aria-labelledby="contact-top-tab">
                <ThemeProjectListData :data="store.projectListData.done" />
            </div>
        </div>
    </CommonCard1>
</template>

<script setup lang="ts">
import {useAppStore} from '~/stores/app'
let store = useAppStore();
</script>

