<template>
    <CommonCard3 colClass="col-sm-12" headerTitle="true" titles="true" title="Pepole You May Know"
        cardbodyClass="avatar-showcase">
        <div class="pepole-knows">
            <ul>
                <li v-for="(item, index) in addfriend" :key="index">
                    <div class="add-friend text-center"><img class="img-60 img-fluid rounded-circle" alt=""
                            :src="getImages(item.image)"><span class="d-block">{{ item.name }}</span>
                        <button class="btn btn-primary btn-xs">Add Friend</button>
                    </div>
                </li>

            </ul>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { addfriend } from "~/core/data/sociall-app"
import { getImages } from "~/composables/common/getImages"
</script>