<template>
    <CommonCard3 colClass="col-sm-12" table="true" text="true" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        title="Dashed Border" :desc="desc">
        <div class="card-block row">
            <div class="col-sm-12 col-lg-12 col-xl-12">
                <div class="table-responsive theme-scrollbar">
                    <table class="table table-dashed">
                        <thead>
                            <tr>
                                <th scope="col">Id </th>
                                <th scope="col">Classname</th>
                                <th scope="col">Type</th>
                                <th scope="col">Hours</th>
                                <th scope="col">Trainer</th>
                                <th scope="col">Spots</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in dashed" :key="index">
                                <th scope="row">{{ item.id }}</th>
                                <td>{{ item.className }}</td>
                                <td>{{ item.type }}</td>
                                <td>{{ item.hours }}</td>
                                <td>{{ item.trainer }}</td>
                                <td>{{ item.spot }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { dashed } from "~/core/data/table"
let desc = ref<string>("Dashed border use class <code>.table-dashed</code> , for Dotted border use class<code>.table-dotted</code>, for Double border use class<code>.table-Double</code>")
</script>