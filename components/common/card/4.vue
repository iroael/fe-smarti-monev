<template>
    <div :class="colClass">
        <div :class="cardClass">
            <div class="card-header " v-if="header" :class="cardhaderClass">
                <div :class="topClass" v-if="meet">
                    <div>
                        <h2>{{ title }} <Icon v-if="icons" class="stroke-success" name="lucide:trending-up"></Icon>
                            <span v-if="text" :class="spanclass">{{ spantitle }} <span v-if="txt" :class="txtClass">{{ off
                            }}</span></span>
                        </h2>
                    </div>
                    <div class="card-header-right-icon" :class="rightClass">
                        <div v-if="box">
                            <div class="legend-box">
                                <div class="bg-primary"></div><span class="f-light f-12 f-w-500">{{ boxitem }}</span>
                            </div>
                            <div class="legend-box">
                                <div class="bg-success"></div><span class="f-light f-12 f-w-500">{{ boxitem1 }}</span>
                            </div>
                        </div>
                        <div class="dropdown" v-if="dropdown1">
                            <button class="btn dropdown-toggle" id="stockButtons" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">{{ dropdownClass1 }}</button>
                            <div class="dropdown-menu dropdown-menu-start" aria-labelledby="stockButtons"><a
                                    class="dropdown-item" href="#">{{ item1 }}</a><a class="dropdown-item" href="#">{{
                                        item
                                    }}</a><a class="dropdown-item" href="#">{{ item2 }}</a></div>
                        </div>
                        <div class="dropdown" v-if="dropdown">
                            <button class="btn dropdown-toggle" id="overviewButton" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">{{ dropdownClass }}</button>
                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="overviewButton"><a
                                    class="dropdown-item" href="#">{{ item1 }}</a><a class="dropdown-item" href="#">{{ item
                                    }}</a><a class="dropdown-item" href="#">{{ item2 }}</a></div>
                        </div>
                        <a class="link-with-icon" v-else-if="add" href="#!">{{ addClass }} <svg v-if="icon">
                                <use :xlink:href="'/svg/icon-sprite.svg' + `#${svg}`"></use>
                            </svg></a>
                        <div class="dropdown icon-dropdown" v-else>
                            <button class="btn dropdown-toggle" id="earning-avg" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <svg>
                                    <use href="/svg/icon-sprite.svg#more-horizontal"></use>
                                </svg>
                            </button>
                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="earning-avg"><a
                                    class="dropdown-item" href="#">Today</a><a class="dropdown-item" href="#">Tomorrow</a><a
                                    class="dropdown-item" href="#">Yesterday</a></div>
                        </div>
                    </div>
                </div>
                <div :class="topClass" v-else>
                    <h3 v-if="h3class" :class="headerTitle">{{ title }}</h3>
                    <h2 v-else>{{ title }}</h2><span v-if="text" :class="spanclass">{{ spantitle }} <span v-if="txt"
                            class="txt-primary">{{ off }}</span></span>
                </div>
            </div>
            <slot v-if="data" />
            <div class="card-body" v-else :class="cardbodyClass">
                <slot />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
let props = defineProps({
    title: String,
    cardClass: String,
    colClass: String,
    cardbodyClass: String,
    cardhaderClass: String,
    headerTitle: String,
    dropdown: String,
    icon: String,
    icons: String,
    meet: String,
    txtClass: String,
    data: String,
    text: String,
    spantitle: String,
    spanclass: String,
    txt: String,
    off: String,
    dropdownClass: String,
    topClass: String,
    header: String,
    add: String,
    item: String,
    item1: String,
    item2: String,
    addClass: String,
    box: String,
    boxitem: String,
    boxitem1: String,
    rightClass: String,
    dropdown1: String,
    dropdownClass1: String,
    h3class: String,
    svg: String
})
</script>