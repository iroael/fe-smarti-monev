<template>
    <CommonCard3 colClass="col-lg-6" cardClass="title-line" cardbodyClass="rtl-dropdown" pre="true"
        preClass="f-m-light mt-2" headerTitle="true" title="Alignments" :desc="desc">
        <div class="common-flex">
            <div class="btn-group " :class="item.arrow" v-for="(item, index) in alignments" :key="index">
                <button class="btn  dropdown-toggle" :class="item.class" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">{{ item.title }}</button>
                <ul class="dropdown-menu dropdown-block">
                    <li v-for="(items, index) in item.children" :key="index"><a class="dropdown-item" href="#">{{
                        items.title }}</a></li>
                </ul>
            </div>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { alignments } from "~/core/data/uikits"
let desc = ref<string>("Use the <code>(dropstart/dropup/dropend)</code> this class through change dropdown directions.")
</script>