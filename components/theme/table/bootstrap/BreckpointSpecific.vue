<template>
    <CommonCard3 colClass="col-sm-12" table="true" text="true" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        title="Breckpoint Specific" :desc="desc">
        <div class="card-block row">
            <div class="col-sm-12 col-lg-12 col-xl-12">
                <div class="table-responsive theme-scrollbar">
                    <table class="table table-responsive-sm">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Order Id </th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in breckpoint" :key="index">
                                <th scope="row">{{ item.id }}</th>
                                <td>{{ item.name }}</td>
                                <td>{{ item.order }}</td>
                                <td>{{ item.price }}</td>
                                <td>{{ item.quantity }}</td>
                                <td>{{ item.total }}</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { breckpoint } from "~/core/data/table"
let desc = ref<string>("Use <code>.table-responsive'❴-sm|-md|-lg|-xl|-xxl❵'</code> functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.")
</script>