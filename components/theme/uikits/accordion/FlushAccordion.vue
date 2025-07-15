<template>
    <CommonCard3 colClass="col-sm-12 col-xl-6" cardClass="title-line" pre="true" preClass="f-m-light mt-2"
        headerTitle="true" title="Flush accordion" :desc="desc">
        <div class="accordion accordion-flush dark-accordion" id="accordionFlushExample">
            <div class="accordion-item" v-for="(item, index) in data" :key="index">
                <h2 class="accordion-header" :id="item.hederid">
                    <button class="accordion-button collapsed txt-secondary accordion-light-secondary active"
                        @click="toggleAccordion(index)" type="button" data-bs-toggle="collapse" :data-bs-target="item.id"
                        aria-expanded="false" aria-controls="flush-collapseOne">{{ item.title }}</button>
                </h2>
                <div class="accordion-collapse collapse show" v-if="item.isActive" :id="item.ids"
                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <ul class="d-flex flex-column gap-2 accordions-content">
                            <li v-for="(items, index) in item.childern" :key="index">{{ items.title }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { useCommonStore } from "~/stores/common"
let desc = ref<string>("Add <code>.accordion-flush</code> to remove the default<code> background-color</code> , some borders, and some rounded corners to render accordions edge-to-edge with their parent container.")
let store = useCommonStore()
let data = store.flushes
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