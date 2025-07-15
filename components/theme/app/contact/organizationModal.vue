<template>
    <div class="modal fade modal-bookmark" id="printModal1" tabindex="-1" role="dialog" aria-hidden="true" >
        <div class="modal-dialog modal-dialog-centered" role="document" :id="contacts?.id">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Print preview </h3>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body list-persons">
                    <div class="profile-mail pt-0" id='DivIdToPrint'>
                        <div class="common-flex align-items-center">
                            <img v-if="contacts?.image" class="img-fluid rounded-circle" id="updateimg"
                                :src="getImages(contacts.image)" alt="">
                            <div class="flex-grow-1  mt-0">
                                <h3><span id="printname">{{ contacts?.name1 }}</span> <span id="printlast">{{
                                    contacts?.name2
                                }}</span></h3>
                                <p id="printmail">{{ contacts?.email }}</p>
                            </div>
                        </div>
                        <div class="email-general">
                            <h3>General</h3>
                            <p>Email Address: <span class="font-primary" id="mailadd">{{ contacts?.email }} </span></p>
                        </div>
                    </div>
                    <button class="btn btn-success" id="btnPrint" type="button">Print</button>
                    <button class="btn btn-primary" type="button" data-bs-dismiss="modal">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from "~/stores/app"
let store = useAppStore();
let props = defineProps({
    contacts: Object,
});
const quickViewProduct = ref()
const filtered = ref<boolean>(false)
const filter = ref<boolean>(false)
function getImages(path: string) {
    return '/images/' + path
}
</script>

