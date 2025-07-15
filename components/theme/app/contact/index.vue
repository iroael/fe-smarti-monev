<template>
    <div class="col-xl-3 box-col-6">
        <div class="md-sidebar"><a class="btn btn-primary md-sidebar-toggle" href="javascript:void(0)"
                @click="collapseFilter()">contact filter</a>
            <div class="md-sidebar-aside job-left-aside custom-scrollbar" :class="filtered ? 'open' : ''">
                <div class="email-left-aside">
                    <div class="card">
                        <div class="card-body">
                            <div class="email-app-sidebar left-bookmark">
                                <div class="d-flex">
                                    <div class="media-size-email"><img class="me-3 rounded-circle"
                                            src="/images/user/user.png" alt=""></div>
                                    <div class="flex-grow-1">
                                        <h6 class="f-w-600">MARK JENCO</h6>
                                        <p>Markjecno@gmail.com</p>
                                    </div>
                                </div>
                                <ul class="nav main-menu contact-options" role="tablist">
                                    <li class="nav-item">
                                        <button class="badge-light-primary btn-block txt-primary btn-mail w-100"
                                            type="button" data-bs-toggle="modal" data-bs-target="#contectmodel">
                                            <Icon class="me-2" name="lucide:users-2"></Icon> New Contacts
                                        </button>

                                    </li>
                                    <li class="nav-item"><span class="main-title"> Views</span></li>
                                    <li><a id="pills-personal-tab" data-bs-toggle="pill" href="#pills-personal" role="tab"
                                            aria-controls="pills-personal" aria-selected="true"><span class="title"
                                                v-on:click="say('pills_personal')">
                                                Personal</span></a></li>
                                    <li>
                                        <button class="btn btn-category" type="button" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal1"><span class="title"> + Add
                                                Category</span></button>

                                    </li>
                                    <li><a class="show" id="pills-organization-tab" data-bs-toggle="pill"
                                            href="#pills-organization" role="tab" aria-controls="pills-organization"
                                            aria-selected="false"><span class="title"
                                                v-on:click="say('pills_organization')">
                                                Organization</span></a></li>
                                    <li><a href="#"><span class="title">Follow up</span></a></li>
                                    <li><a href="#"><span class="title">Favorites</span></a></li>
                                    <li><a href="#"><span class="title">Ideas</span></a></li>
                                    <li><a href="#"><span class="title">Important</span></a></li>
                                    <li><a href="#"><span class="title">Business</span></a></li>
                                    <li><a href="#"><span class="title">Holidays</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-9 col-md-12 box-col-12">
        <div class="email-right-aside bookmark-tabcontent contacts-tabs">
            <div class="card email-body radius-left">
                <div class="ps-0">
                    <div class="tab-content">
                        <div class="tab-pane fade " id="pills-personal"
                            v-bind:class="(activeclass === 'pills_personal') ? 'active show' : ''" role="tabpanel"
                            aria-labelledby="pills-personal-tab">
                            <ThemeAppContactPersonal />
                        </div>
                        <div class="fade tab-pane"
                            v-bind:class="(activeclass === 'pills_organization') ? 'active show' : ''"
                            id="pills-organization" role="tabpanel" aria-labelledby="pills-organization">
                            <ThemeAppContactOrganization />
                        </div>
                        <CommonModalsNewContact />
                        <CommonModalsAddCategory />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const activeclass = ref<string>('pills_personal')
const filtered = ref<boolean>(false)
function say(message: string) {
    activeclass.value = message;
}
function collapseFilter() {
    filtered.value = !filtered.value
}
</script>