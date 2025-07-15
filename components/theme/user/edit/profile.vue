<template>
    <CommonCard1 colClass="col-xl-8" :headerTop="false" title="Edit Profile">
        <div class="row g-3">
            <div :class="item.class" v-for="(item, index) in edit" :key="index">

                <label class="form-label">{{ item.title }}</label>
                <input class="form-control" :type="item.type" :placeholder="item.placeholder">

            </div>
            <div class="col-md-5">

                <label class="form-label">Country</label>
                <select class="form-control btn-square">
                    <option value="0" v-for="(item, index) in country" :key="index">{{ item.title }}</option>
                </select>

            </div>
            <div class="col-md-12">
                <div>
                    <label class="form-label">About Me</label>
                    <textarea class="form-control" rows="4" placeholder="Enter About your description"></textarea>
                </div>
            </div>
        </div>
        <template #external>
            <div class="card-footer text-end">
                <button class="btn btn-primary" type="submit">Update Profile</button>
            </div>
        </template>
    </CommonCard1>
</template>

<script setup lang="ts">
import { edit, country } from "~/core/data/app"
</script>

