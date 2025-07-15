<template>
    <div class="card email-body email-read" :class="store.showLetterBox ? 'show' : ''">
        <div class="mail-header-wrapper header-wrapper1">
            <div class="mail-header1">
                <div class="light-square" @click="store.showLetterBox = false">
                    <svg class="btn-email">
                        <use href="/svg/icon-sprite.svg#back-arrow"></use>
                    </svg>
                </div><span>Interview Mail</span>
            </div>
            <div class="mail-body1">
                <div class="light-square" data-bs-toggle="tooltip" data-bs-placement="top" :data-bs-title="item"
                    v-for="(item, index) in store.email" :key="index">
                    <svg :class="item.svgclass">
                        <use :href="'/svg/icon-sprite.svg#' + item.icon"></use>
                    </svg>
                </div>
            </div>
        </div>
        <div class="mail-body-wrapper">
            <div class="user-mail-wrapper">
                <div class="user-title">
                    <div>
                        <div class="rounded-border"> <img class="img-fluid" src="/images/user/12.png" alt="user" /></div>
                        <div class="dropdown-subtitle">
                            <p>Ronald Richards</p>
                            <div class="onhover-dropdown">
                                <button class="btn p-0 dropdown-button">To me <Icon name="lucide:chevron-down"></Icon>
                                    </button>
                                <div class="inbox-security onhover-show-div">
                                    <p>From: <span>pixelstrap &lt;pixelstrap3@gmail.com&gt;</span></p>
                                    <p>to: <span>donut.horry@gmail.com</span></p>
                                    <p>reply-to:<span>&lt;pixelstrap3@gmail.com&gt;</span></p>
                                    <p>date: <span>Jun 13, 2024, 7:10 AM</span></p>
                                    <p>subject: <span>Important Account Security Update</span></p>
                                    <p>security: <span>standard encryption (TLS)</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="inbox-options"> <span>Friday 07 Apr (4 hours ago)</span>
                        <div class="light-square">
                            <svg class="important-mail" @click="toggleStar()" :class="[{ active: activeStars }]">
                                <use href="/svg/icon-sprite.svg#mail-star"></use>
                            </svg>
                        </div>
                        <div class="light-square" onclick="window.print();">
                            <svg>
                                <use href="/svg/icon-sprite.svg#print"></use>
                            </svg>
                        </div>
                        <div class="light-square btn-group">
                            <svg class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <use href="/svg/icon-sprite.svg#menubar"></use>
                            </svg>
                            <div class="dropdown-menu dropdown-block"><a class="dropdown-item" href="#!"><i
                                        class="fa fa-mail-reply"></i>Reply</a><a class="dropdown-item" href="#!"> <i
                                        class="fa fa-mail-forward"></i>Forward</a></div>
                        </div>
                    </div>
                </div>
                <div class="user-body">
                    <p>Dear Customer,</p>
                    <p>We regret to notify you that an unauthorized attempt was made to access your account. Our system
                        discovered suspicious activity, and we acted right away to safeguard your personal data.</p>
                    <p>Please change your login information by clicking the following link in order to safeguard your
                        account:</p>
                    <p>Please be aware that your account may be temporarily suspended if no action is taken within 24 hours.
                        We urge you to take immediate action to prevent any inconvenience.</p>
                    <p>We sincerely apologize for any inconvenience this may cause and thank you for your immediate
                        attention to this matter.</p>
                    <div class="mail-subcontent">
                        <p>Yours faithfully,</p>
                        <p>Account Security Team</p>
                    </div>
                </div>
                <div class="user-footer">
                    <div>
                        <svg>
                            <use href="/svg/icon-sprite.svg#attchment"></use>
                        </svg><span class="f-light">Attachments</span>
                    </div>
                    <div class="d-inline-block">
                        <div class="attchment-file common-flex">
                            <div class="common-flex align-items-center"><img src="/images/email-template/pdfs.png"
                                    alt="pdf" />
                                <div class="d-block">
                                    <p>Offer_Letter.pdf</p>
                                    <p>200KB</p>
                                </div>
                            </div><a href="/pug/pages/theme/text_file.txt" download="download"> <i
                                    class="fa fa-download f-light"></i></a>
                        </div>
                    </div>
                    <div class="toolbar-box">
                        <client-only>
                            <QuillEditor contentType="html" toolbar="full" v-model:content="editor" theme="snow" />
                        </client-only>
                    </div>
                </div>
                <div class="send-btn">
                    <button class="btn btn-primary">Send<i class="fa fa-paper-plane"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useAppStore } from '~/stores/app'

import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
let editor = ref('')
let rightIcon: string[] = ['sms', 'bookmark', 'spam', 'mail-trash', 'setting']
let activeStars = ref<boolean>(false)
let store = useAppStore();
function toggleStar() {
    activeStars.value = !activeStars.value;
}
</script>