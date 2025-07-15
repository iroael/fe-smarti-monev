<template>
  <CommonCard1 colClass="col-md-12" :headerTop="false" title="Add projects And Upload">
    <div class="table-responsive add-project custom-scrollbar">
      <table class="table card-table table-vcenter text-nowrap">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in useredit" :key="index">
            <td>
              <a class="text-inherit" href="#">{{ item.title }}</a>
            </td>
            <td>{{ item.date }}</td>
            <td>
              <span class="status-icon badge" :class="item.class">{{ item.status }}</span>
            </td>
            <td>{{ item.price }}</td>
            <td class="text-end">
              <a class="icon" href="javascript:void(0)"></a><a class="btn btn-primary btn-sm" href="javascript:void(0)"><i
                  class="fa fa-pencil"></i> Edit</a><a class="icon" href="javascript:void(0)"></a><a
                class="btn btn-transparent btn-sm" href="javascript:void(0)"><i class="fa fa-link"></i> Update</a><a
                class="icon" href="javascript:void(0)"></a><a class="btn btn-danger btn-sm" href="javascript:void(0)"><i
                  class="fa fa-trash"></i> Delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </CommonCard1>
</template>

<script setup lang="ts">
import { useredit } from "~/core/data/app"
</script>

<style scoped></style>
