<template>
    <div class="col-xl-8 xl-50 col-md-7 box-col-6">
        <div class="tab-content" id="v-pills-tabContent1">
            <div class="tab-pane fade " :class="contact.active" :id="'v-pills-iduser' + contact.id" role="tabpanel"
                aria-labelledby="v-pills-iduser-tab" v-for="(contact, index) in contacts" :key="index">
                <div class="profile-mail">
                    <div class="d-flex"><img class="img-100 img-fluid m-r-20 rounded-circle update_img_5"
                            :src="getImages(contact.image)" alt="">
                        <div class="flex-grow-1 mt-0">
                            <h3><span class="first_name_5">{{ contact.name1 }}</span> <span class="last_name_5">{{
                                contact.name2
                            }}</span></h3>
                            <p class="email_add_5">{{ contact.email }}</p>
                            <ul>
                                <li><a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#printModal1"
                                        @click="contactView(contact)">Print</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="email-general">
                        <h3>General</h3>
                        <p>Email Address: <span class="font-primary email_add_5">{{ contact.email }}</span></p>
                        <div class="gender">
                            <h3>Personal</h3>
                            <p>Gender: <span>{{ contact.gender }}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ThemeAppContactOrganizationModal :contacts="details" />
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from "~/stores/app"
let store = useAppStore();
const src = ref(null)
const details = ref({})
const contacts = store.organizationData
function contactView(id: string) {
    details.value = id
}
function getImages(path: string) {
    return '/images/' + path
}
</script>

