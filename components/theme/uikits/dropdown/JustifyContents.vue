<template>
    <CommonCard3 colClass="col-lg-6" cardClass="title-line" cardbodyClass="dropdown-basic m-0" pre="true"
        preClass="f-m-light mt-1" headerTitle="true" title="Justify contents" :desc="desc">
        <div class="common-flex">
            <div class="btn-group" v-for="(item, index) in justify" :key="index">
                <button class="btn dropdown-toggle" :class="item.class" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">{{ item.title }}</button>
                <ul class="dropdown-menu dropdown-block " :class="item.btn">
                    <li v-for="(items, index) in item.children" :key="index"><a class="dropdown-item" href="#">{{
                        items.title }}</a></li>

                </ul>
            </div>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { justify } from "~/core/data/uikits"
let desc = ref<string>("Use the <code>(text-start/text-center/text-end)</code> to change dropdown texts.")
</script>