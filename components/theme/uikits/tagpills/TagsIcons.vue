<template>
    <CommonCard3 colClass="col-sm-12 col-xl-6" cardClass="title-line" titleClass="mb-0" pre="true" preClass="f-m-light mt-2"
        headerTitle="true" title="Badge tags with icon" :desc="desc">
        <div class="badge-spacing"><a class="badge b-ln-height " :class="item.class" v-for="(item, index) in icon"
                :key="index" href="#">
                <Icon :name="item.title"></Icon>
            </a>
        </div>
    </CommonCard3>


    <CommonCard3 colClass="col-sm-12 col-xl-6" cardClass="title-line" titleClass="mb-0" pre="true" preClass="f-m-light mt-2"
        headerTitle="true" title="Rounded pills with icons" :desc="desc1">
        <div class="badge-spacing"><a class="badge rounded-circle p-2" :class="item.class" v-for="(item, index) in icon"
                :key="index" href="#">
                <Icon :name="item.title"></Icon>
            </a>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { icon } from "~/core/data/uikits"
let desc = ref<string>("Use the <code>.badge </code>utility class to make more icons.")
let desc1 = ref<string>(" Use the <code>.rounded-pill</code> utility class to make icons badges more rounded with a larger <code>border-radius</code>.")
</script>