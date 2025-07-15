<template>
    <div class="col-xxl-9 col-xl-8 box-col-12">
        <div class="email-right-aside">
            <div class="card email-body email-list" :class="store.showLetterBox ? 'hide' : ''">
                <div class="mail-header-wrapper">
                    <div class="mail-header">
                        <div class="form-check form-check-inline m-0">
                            <input class="form-check-input checkbox-primary" id="emailCheckbox1" type="checkbox"
                                value="option1" />
                            <label class="form-check-label" for="emailCheckbox1"></label>
                            <ul class="email-tabs nav" id="email-content-tab">
                                <li class="nav-item"><a class="nav-link" id="pills-important-tab" data-bs-toggle="pill"
                                        href="#pills-important" role="tab" aria-controls="pills-important"
                                        aria-selected="true">
                                        <svg class="stroke-icon">
                                            <use href="/svg/icon-sprite.svg#mail"></use>
                                        </svg><span>Important </span></a></li>
                                <li class="nav-item"><a class="nav-link" id="pills-social-tab" data-bs-toggle="pill"
                                        href="#pills-social" role="tab" aria-controls="pills-social" aria-selected="false">
                                        <svg class="stroke-icon">
                                            <use href="/svg/icon-sprite.svg#goal"></use>
                                        </svg><span>Social</span></a></li>
                                <li class="nav-item"><a class="nav-link active" id="pills-promotion-tab"
                                        data-bs-toggle="pill" href="#pills-promotion" role="tab"
                                        aria-controls="pills-promotion" aria-selected="false">
                                        <svg class="stroke-icon">
                                            <use href="/svg/icon-sprite.svg#tread"></use>
                                        </svg><span>Promotion</span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="mail-body">
                        <div class="mail-search d-flex-align-items-center">
                            <input class="form-control" type="text" placeholder="Search..." /><i class="fa fa-search"></i>
                        </div>
                        <div class="light-square"><i class="fa fa-refresh"></i></div>
                        <div class="light-square"> <i class="fa fa-trash"></i></div>
                        <div class="light-square dropdown-toggle" role="main" data-bs-toggle="dropdown"
                            aria-expanded="false"><i class="fa fa-ellipsis-v"></i></div>
                        <ul class="dropdown-menu dropdown-block dropdown-menu-end">
                            <li v-for="(item, index) in moreData" :key="index"> <a class="dropdown-item"
                                    href="#!">{{ item }}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="tab-content" id="email-pills-tabContent">
                    <div class="tab-pane fade show active" id="inbox-pill" role="tabpanel" aria-labelledby="inbox-pill-tab">
                        <ThemeAppLetterBoxInbox :data="store.letterBox" />
                    </div>
                    <div class="tab-pane fade show " id="sent-pill" role="tabpanel" aria-labelledby="inbox-pill-tab">
                        <ThemeAppLetterBoxSent />
                    </div>
                    <div class="tab-pane fade show " id="starred-pill" role="tabpanel" aria-labelledby="inbox-pill-tab">
                        <ThemeAppLetterBoxStarred />
                    </div>
                    <div class="tab-pane fade show " id="draft-pill" role="tabpanel" aria-labelledby="inbox-pill-tab">
                        <ThemeAppLetterBoxDraft />
                    </div>
                    <div class="tab-pane fade show " id="trash-pill" role="tabpanel" aria-labelledby="inbox-pill-tab">
                        <ThemeAppLetterBoxTrash />
                    </div>
                    <div class="tab-pane fade show " id="work-pill" role="tabpanel" aria-labelledby="inbox-pill-tab">
                        <ThemeAppLetterBoxWork />
                    </div>
                    <div class="tab-pane fade show " id="private-pill" role="tabpanel" aria-labelledby="inbox-pill-tab">
                        <ThemeAppLetterBoxPrivate />
                    </div>
                    <div class="tab-pane fade show " id="support-pill" role="tabpanel" aria-labelledby="inbox-pill-tab">
                        <ThemeAppLetterBoxSupport />
                    </div>
                </div>
            </div>
            <ThemeAppLetterBoxEmailDetail />
        </div>
    </div>
</template>
<script setup lang="ts">
import {useAppStore} from '~/stores/app'
let store = useAppStore();
let moreData:string[] = ['All','None','Read','Unread','Starred','Unstarred']
</script>

