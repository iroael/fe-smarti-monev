<template>
    <CommonCard3 colClass="col-sm-12" table="true" text="true" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        title="Caption" :desc="desc">
        <div class="card-block row">
            <div class="col-sm-12 col-lg-12 col-xl-12">
                <div class="table-responsive theme-scrollbar">
                    <table class="table">
                        <caption>List of users</caption>
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Employee Name </th>
                                <th scope="col">Email</th>
                                <th scope="col">Experience</th>
                                <th scope="col">Sex</th>
                                <th scope="col">Contact No. </th>
                                <th scope="col">Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in caption" :key="index">
                                <th scope="row">{{ item.id }}</th>
                                <td>{{ item.name }}</td>
                                <td>{{ item.email }}</td>
                                <td>{{ item.exp }}</td>
                                <td>{{ item.sex }}</td>
                                <td>{{ item.contact }}</td>
                                <td>{{ item.age }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { caption } from "~/core/data/table"
let desc = ref<string>("A <code>&lt;caption&gt;</code> functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.")
</script>