<template>
    <CommonCard3 colClass="col-sm-6" cardClass="title-line" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        title="Checkbox Tree" :desc="desc">
        <div class="disabled-container">

            <treeview :nodes="nodes1" :config="config1"></treeview>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import treeview from "vue3-treeview";
import "vue3-treeview/dist/style.css";
import { nodes1, config1 } from "~/composables/common/treeView"
let desc = ref<string>("Use the dynamic tree view with checkboxes.")

</script>
