<template>
    <CommonCard3 colClass="col-sm-6" cardClass="title-line" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        title="Draggable Tree" :desc="desc">
        <div class="disabled-container">

            <treeview :nodes="nodes2" :config="config2"></treeview>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import treeview from "vue3-treeview";
import "vue3-treeview/dist/style.css";
import { nodes2, config2 } from "~/composables/common/treeView"
let desc = ref<string>("Use the dynamic tree view with checkboxes.")

</script>
