<template>
    <CommonCard3 colClass="col-xl-6" cardClass="title-line" cardbodyClass="rtl-dropdown" pre="true"
        preClass="f-m-light mt-2" headerTitle="true" title="Helper card" :desc="desc">
        <div class="common-flex">
            <div class="btn-group" v-for="(item, index) in helper" :key="index">
                <button class="btn  dropdown-toggle" :class="item.class" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">{{ item.title }}</button>
                <ul class="dropdown-menu dropdown-block p-3 dark-form">
                    <li>
                        <h6 class="fs-6 pb-2">{{ item.cardtitle }}</h6>
                        <p class="dropdown-item helper-truncate">{{ item.desc }}</p>
                    </li>
                </ul>
            </div>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { helper } from "~/core/data/uikits"
let desc = ref<string>("When the<code>.show </code>class starts, dropdown appears.")
</script>