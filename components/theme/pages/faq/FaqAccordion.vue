<template>
    <div class="col-lg-12">
        <div class="header-faq">
            <h2 class="mb-0">Quick Questions are answered</h2>
        </div>
        <div class="row default-according style-1 faq-accordion" id="accordionoc">
            <div class="col-xl-8 xl-60 col-lg-6 col-md-7">
                <div class="card" v-for="(item, index) in quik" :key="index">
                    <div class="card-header">
                        <h2 class="mb-0">
                            <button class="btn btn-link " @click="toggleAccordion(index)" :data-bs-target="item.id"
                                :aria-expanded="item.isActive ? 'true' : 'false'" :aria-controls="item.ids">
                                <Icon name="mdi:help-circle-outline"></Icon> {{ item.title
                                }}
                            </button>
                        </h2>
                    </div>
                    <div v-if="item.isActive" :id="item.ids" aria-labelledby="collapseicon" data-bs-parent="#accordionoc">
                        <div class="card-body" v-for="(items, index) in item.childern" :key="index" v-html="items.title">
                        </div>
                    </div>
                </div>
                <ThemePagesFaqIntellectualProperty />
                <ThemePagesFaqSellingAccording />
                <ThemePagesFaqUserAccounts />
            </div>
            <ThemePagesFaqNavigationView />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useCommonStore } from "~/stores/common"

let store = useCommonStore()
let quik = store.quiks
const toggleAccordion = (index: number) => {
    quik[index].isActive = !quik[index].isActive;
    closeOtherAccordions(index);
};

const closeOtherAccordions = (currentIndex: number) => {
    quik.forEach((item, index) => {
        if (index !== currentIndex) {
            item.isActive = false;
        }
    })
};
</script>