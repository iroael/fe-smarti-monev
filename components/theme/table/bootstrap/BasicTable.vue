<template>
    <CommonCard3 colClass="col-sm-12" table="true" text="true" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        title="Basic Table With Border Bottom Color" :desc="desc">
        <div class="table-responsive theme-scrollbar">

            <table class="table">
                <thead>
                    <tr class="border-bottom-primary">
                        <th scope="col">Id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Company</th>
                        <th scope="col">Language</th>
                        <th scope="col">Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :class="item.borderColor" v-for="(item, index) in data" :key="index">
                        <th scope="row">{{ item.id }}</th>
                        <td><img :src="getImages(item.img)" alt="" class="img-30 me-2 ">{{
                            item.firstName
                        }}</td>
                        <td>{{ item.lastName }}</td>
                        <td>{{ item.userName }}</td>
                        <td>{{ item.role }}</td>
                        <td>{{ item.company }}</td>
                        <td>
                            <div class="badge " :class="item.badgeClass">
                                {{ item.language }}
                            </div>
                        </td>
                        <td>{{ item.country }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { data } from "~/core/data/table"
import { getImages } from "~/composables/common/getImages"
let desc = ref<string>("Use a class <code>table</code> to any table, and <code>.border-bottom-*</code>class for Border bottom color")
</script>