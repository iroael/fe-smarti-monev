<template>
    <CommonCard3 colClass="col-md-6" cardClass="title-line" cardbodyClass="rtl-dropdown" pre="true"
        preClass="f-m-light mt-1" headerTitle="true" title="Divider dropdown" :desc="desc">
        <div class="common-flex">
            <div class="btn-group" v-for="(item, index) in divider" :key="index">
                <button class="btn  rounded-pill dropdown-toggle" :class="item.class" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">{{ item.title }}</button>
                <ul class="dropdown-menu dropdown-block">
                    <li v-for="(items, index) in item.children" :key="index"><a class="dropdown-item"
                            href="#">{{ items.title }}</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
            </div>


        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { divider } from "~/core/data/uikits"
let desc = ref<string>("When the<code>.show </code>class starts, dropdown appears. And <code>.dropdown-divider</code> to change dropdown section.")
</script>