<template>
    <CommonCard3 colClass="col-xxl-6" cardClass="title-line height-equal" titleClass="mb-0" pre="true"
        preClass="f-m-light mt-2" headerTitle="true" title="Headings" :desc="desc">
        <div class="table-responsive theme-scrollbar">
            <table class="table mb-0 typography-table">
                <thead>
                    <tr>
                        <th class="pt-0">Code</th>
                        <th class="pt-0">Font-Size</th>
                        <th class="pt-0">Heading</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in heading" :key="index">
                        <td v-html="item.code"></td>
                        <td v-html="item.front">

                        </td>
                        <td v-html="item.head">

                        </td>
                    </tr>

                    <tr>
                        <td class="pb-0"><code>&lt;h6&gt;&lt;/h6&gt;</code></td>
                        <td class="pb-0">
                            <h6 class="mb-0">0.875rem</h6>
                        </td>
                        <td class="pb-0">
                            <h5><span> Heading 6 </span></h5>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { heading } from "~/core/data/uikits"
let desc = ref<string>("All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.")
</script>