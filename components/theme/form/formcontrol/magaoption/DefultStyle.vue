<template>
    <CommonCard3 colClass="col-sm-12 col-xxl-6 box-col-6" cardbodyClass="megaoptions-border-space-sm" pre="true"
        preClass="f-m-light mt-1" headerTitle="true" title="Default style" :desc="desc" footer="show" footerclass="text-end"
        lightclass="btn-light" btnclass="btn-primary">
        <form class="mega-inline">
            <div class="row">
                <div class="col-sm-6" v-for="(item, index) in defultstyle" :key="index">
                    <div class="card">
                        <div class="d-flex p-20">
                            <div class="form-check radio m-0" :class="item.class">
                                <input class="form-check-input" :id="item.id" type="radio" name="radio1" value="option1">
                                <label class="form-check-label" :for="item.id"><span
                                        class="flex-grow-1 megaoption-space"><span class="mt-0 mega-title-badge">{{
                                            item.label }}<span class="badge pull-right digits" :class="item.badgeclass">{{
        item.badge }}</span></span><span>{{ item.desc }}</span></span></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { defultstyle } from "~/core/data/forms"
let desc = ref<string>("This option is show by default you don't need to add any extra class.")
</script>