<template>
    <div :class="colClass">
        <div class="card-header" :class="headerClass">
            <div class="header-top" :class="headerTop">
                <div>
                    <h2>{{ title }}
                        <slot name="titleDesc" />
                    </h2>
                </div>
                <div class="card-header-right-icon">
                    <div class="dropdown icon-dropdown" v-if="dropdown">
                        <button class="btn dropdown-toggle" id="earning-avg1" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false" v-html="defaultValue">
                        </button>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="earning-avg1"><a class="dropdown-item"
                                href="#">Today</a><a class="dropdown-item" href="#">Tomorrow</a><a class="dropdown-item"
                                href="#">Yesterday</a></div>
                    </div>
                    <div class="dropdown" v-if="orderDropdown">
                        <button class="btn dropdown-toggle" id="recent-button" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">All Orders</button>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="recent-button"><a
                                class="dropdown-item" href="#">Pending</a><a class="dropdown-item" href="#">Success</a><a
                                class="dropdown-item" href="#">Deliver</a></div>
                    </div>
                    <slot name="topContent" />
                </div>
            </div>
        </div>
        <div class="card-body" :class="bodyClass">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    colClass:String,
    headerClass:String,
    defaultValue:String,
    title:String,
    dropdown:{
        type:Boolean,
        default:true
    },
     orderDropdown:{
        type:Boolean,
        default:false
    },
    bodyClass:String,
    headerTop:String
})
</script>

