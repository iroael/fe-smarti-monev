<template>
    <div class="card mb-0">
        <div class="card-header d-flex">
            <h5>Personal</h5><span class="f-14 pull-right mt-0">{{ contacts.length }} Contacts</span>
        </div>
        <div class="card-body p-0">
            <div class="row list-persons" id="addcon">
                <div class="col-xl-4 xl-50 col-md-5">
                    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a class="contact-tab-0 nav-link" :class="contact.active ? 'active show' : ''" id="v-pills-user-tab"
                            data-bs-toggle="pill" :href="'#v-pills-user' + contact.id" role="tab"
                            aria-controls="v-pills-user" aria-selected="true" v-for="(contact, index) in contacts"
                            :key="index">
                            <div class="d-flex"><img class="img-50 img-fluid m-r-20 rounded-circle update_img_0"
                                    :src="contact.imgUrl || getImages(contact.image)" alt="">
                                <div class="flex-grow-1">
                                    <h5> <span class="first_name_1">{{ contact.name1 }}</span> <span class="last_name_1">{{
                                        contact.name2 }}</span></h5>
                                    <p class="email_add_1">{{ contact.email }}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <ThemeAppContactDetail />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from '~/stores/app'
let store = useAppStore()
const src = ref(null)
const contacts = store.personalData
function getImages(path: string) {
    return '/images/' + path
}
</script>

