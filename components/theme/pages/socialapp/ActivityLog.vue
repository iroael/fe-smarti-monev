<template>
    <CommonCard3 colClass="col-sm-12" headerTitle="true" titles="true" title="Activity Log">
        <div class="activity-log">
            <div class="my-activity" v-for="(item, index) in log" :key="index">
                <h6 class="f-w-600 mb-3">{{ item.title }}</h6>
                <p v-for="(items, index) in item.children" :key="index"><span>
                        <Icon :name="items.icon" class="m-r-20 fs-1" size="20" />
                    </span>{{ items.title }}</p>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { log } from "~/core/data/sociall-app"
</script>