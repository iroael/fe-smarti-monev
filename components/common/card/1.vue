<template>
    <div :class="colClass">
        <div class="card" :class="cardClass">
            <div class="card-header" :class="headerClass" v-if="header">
                <h2 v-if="!headerTop">{{ title }}</h2>
                <slot name="heading" />
                <div class="header-top" v-if="headerTop">
                    <h2 v-if="title">{{ title }}
                        <slot name="titleDesc" />
                    </h2>
                    <slot name="topContent" />
                    <div class="card-header-right-icon" :class="rightDropdown">
                        <slot name="rightContent" />
                        <div class="dropdown " :class="iconDropdown" v-if="dropdown">
                            <button class="btn dropdown-toggle" id="overviewButton" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false" v-html="defaultValue ? defaultValue : 'weekly'"></button>
                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="overviewButton"><a
                                    class="dropdown-item" href="#">Monthly</a><a class="dropdown-item" href="#">weekly</a><a
                                    class="dropdown-item" href="#">yearly</a></div>
                        </div>
                        <div class="dropdown" v-if="report">
                            <button class="btn dropdown-toggle" id="orderButtons" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">{{ reportDetail ? reportDetail : 'Report' }}</button>
                            <div class="dropdown-menu dropdown-menu-start" aria-labelledby="orderButtons"><a
                                    class="dropdown-item" href="#">Web designer</a><a class="dropdown-item"
                                    href="#">Development</a><a class="dropdown-item" href="#">Marketing</a></div>
                        </div>
                    </div>
                </div>
                <slot name="headingBottom" />
            </div>
            <div class="card-body" :class="bodyClass">
                <slot />
            </div>
            <slot name="external" />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    colClass: String,
    headerClass: String,
    cardClass: String,
    bodyClass: String,
    reportDetail: String,
    title: String,
    headerTop: {
        type: Boolean,
        default: true
    },
    dropdown: {
        type: Boolean,
        default: true
    },
    header: {
        type: Boolean,
        default: true
    },
    defaultValue: String,
    iconDropdown: String,
    report: {
        type: Boolean,
        default: false
    },
    rightDropdown: String
})
</script>

