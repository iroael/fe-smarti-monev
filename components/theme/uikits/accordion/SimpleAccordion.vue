<template>
    <CommonCard3 colClass="col-sm-12 col-xl-6" cardClass="title-line" pre="true" preClass="f-m-light mt-1"
        headerTitle="true" title="Simple accordion" :desc="desc">
        <div class="accordion dark-accordion" id="simpleaccordion">
            <div class="accordion-item" v-for="(item, index) in simple" :key="index">
                <h2 class="accordion-header" :id="item.hederid">
                    <button class="accordion-button accordion-light-primary txt-primary active"
                        @click="toggleAccordion(index)" type="button" :data-bs-target="item.id" aria-expanded="true"
                        :aria-controls="item.ids">{{ item.title
                        }}<Icon name="lucide:chevron-down" class="svg-color" size="25"></Icon> </button>
                </h2>
                <div class="accordion-collapse " v-if="item.isActive" :id="item.ids" :aria-labelledby="item.hederid"
                    data-bs-parent="#simpleaccordion">
                    <div class="accordion-body">
                        <div v-for="(items, index) in item.childern" :key="index">
                            <p v-html="items.desc" v-if="item.one">
                            </p>
                        </div>
                        <div v-for="(items, index) in item.childern" :key="index">
                            <p class="mb-3" v-html="items.desc" v-if="item.two">
                            </p>
                        </div>
                        <p v-if="item.three">
                            The web design process allows designers to adjust to any preferences and provide effective
                            solutions. There are many standard components of every web design, including:</p>


                        <ul class="d-flex flex-column gap-2 accordions-content" v-if="item.three">
                            <li v-for="(items, index) in item.childern" :key="index">--> {{ items.title }}</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { useCommonStore } from "~/stores/common"
let desc = ref<string>(" Click the accordions below to expand/collapse the accordion content.  Use the <code>.accordion </code>.")
let store = useCommonStore()
let simple = store.data
const toggleAccordion = (index: number) => {
    simple[index].isActive = !simple[index].isActive;
    closeOtherAccordions(index);
};

const closeOtherAccordions = (currentIndex: number) => {
    simple.forEach((item, index) => {
        if (index !== currentIndex) {
            item.isActive = false;
        }
    });
};
</script>