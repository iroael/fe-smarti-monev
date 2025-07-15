<template>
    <CommonCard3 colClass="col-sm-12" table="true" text="true" headerTitle="true"
        title="Custom Table Color With Hover And Stripped" pre="true" preClass="f-m-light mt-1" :desc="desc">
        <div class="table-responsive theme-scrollbar">
            <table class="table table-striped bg-primary hover">
                <thead class="tbl-strip-thad-bdr">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Film Title</th>
                        <th scope="col">Released</th>
                        <th scope="col">Studio</th>
                        <th scope="col">Budget </th>
                        <th scope="col">Domestic Gross</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(data, index) in custom" :key="index">
                        <th scope="row">{{ data.id }}</th>
                        <td>{{ data.film }}</td>
                        <td>{{ data.released }}</td>
                        <td>{{ data.studio }}</td>
                        <td>{{ data.budget }}</td>
                        <td>{{ data.domestic }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { custom } from "~/core/data/table"
let desc = ref<string>("Use a class<code>table</code> to any table, and <code>.border-bottom-*</code>class for Border bottom color")
</script>