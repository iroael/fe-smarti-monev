<template>
    <div class="col-sm-12">
        <div class="card">
            <div class="card-header social-header">
                <h5> <span>Education and Employement</span><span class="pull-right">
                        <Icon name='lucide:ellipsis-vertical'></Icon>
                    </span></h5>
            </div>
            <div class="card-body">
                <div class="row details-about" v-for="(item, index) in education" :key="index">
                    <div class="col-sm-6" v-for="(items, index) in item.children" :key="index">
                        <div class="your-details" :class="items.class"><span class="f-w-600">{{ items.title }}</span>
                            <p>{{ items.year }}</p>
                            <p>{{ items.desc }}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { education } from "~/core/data/sociall-app"
</script>