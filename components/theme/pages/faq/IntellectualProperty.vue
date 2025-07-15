<template>
    <div class="faq-title">
        <h6>Intellectual Property</h6>
    </div>
    <div class="card" v-for="(item, index) in data" :key="index">
        <div class="card-header">
            <h2 class="mb-0">
                <button class="btn btn-link  " @click="toggleAccordion(index)" :data-bs-target="item.id"
                    :aria-expanded="item.isActive ? 'true' : 'false'" :aria-controls="item.ids">
                    <Icon name="mdi:help-circle-outline"></Icon> {{
                        item.title
                    }}
                </button>
            </h2>
        </div>
        <div v-if="item.isActive" :id="item.ids" aria-labelledby="collapseicon" data-bs-parent="#accordionoc">
            <div class="card-body" v-for="(items, index) in item.childern" :key="index" v-html="items.title">
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useCommonStore } from "~/stores/common"

let store = useCommonStore()
let data = store.int
const toggleAccordion = (index: number) => {
    data[index].isActive = !data[index].isActive;
    closeOtherAccordions(index);
};

const closeOtherAccordions = (currentIndex: number) => {
    data.forEach((item, index) => {
        if (index !== currentIndex) {
            item.isActive = false;
        }
    });
};
</script>