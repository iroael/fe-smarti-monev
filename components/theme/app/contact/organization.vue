<template>
    <div class="card mb-0">
        <div class="card-header d-flex">
            <h3>Organization</h3><span class="f-14 pull-right mt-0">10 Contacts</span>
        </div>
        <div class="card-body p-0">
            <div class="row list-persons">
                <div class="col-xl-4 xl-50 col-md-5 box-col-6">
                    <div class="nav flex-column nav-pills" id="v-pills-tab1" role="tablist" aria-orientation="vertical">
                        <a class="nav-link " :class="contact.active" id="v-pills-iduser-tab" data-bs-toggle="pill"
                            :href="'#v-pills-iduser' + contact.id" role="tab" aria-controls="v-pills-iduser"
                            aria-selected="true" v-for="(contact, index) in Organization" :key="index">
                            <div class="d-flex"><img class="img-50 img-fluid m-r-20 rounded-circle"
                                    :src="getImages(contact.image)" alt="">
                                <div class="flex-grow-1">
                                    <h3>{{ contact.name1 }} {{ contact.name2 }}</h3>
                                    <p>{{ contact.email }}</p>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
                <ThemeAppContactOrganizationDetail />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from "~/stores/app"
let store = useAppStore();
let Organization = store.organizationData
function getImages(path: string) {
    return '/images/' + path
}
</script>

