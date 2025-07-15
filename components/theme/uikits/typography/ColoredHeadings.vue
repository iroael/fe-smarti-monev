<template>
    <CommonCard3 colClass="col-xxl-6" cardClass="title-line height-equal" titleClass="mb-0" pre="true"
        preClass="f-m-light mt-2" headerTitle="true" title="Colored headings" :desc="desc">
        <div class="table-responsive theme-scrollbar">
            <table class="table mb-0 typography-table">
                <thead>
                    <tr>
                        <th class="pt-0">Code</th>
                        <th class="pt-0">Heading</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in colored" :key="index">
                        <td v-html="item.code"></td>
                        <td v-html="item.head">

                        </td>
                    </tr>
                    <tr>
                        <td class="pb-0"><code>&lt;h6&gt;&lt;/h6&gt;</code></td>
                        <td class="pb-0">
                            <h5><span class="txt-danger"> Heading 1</span> Sub Heading</h5>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { colored } from "~/core/data/uikits"
import { getImages } from "~/composables/common/getImages"
let desc = ref<string>("All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.")
</script>