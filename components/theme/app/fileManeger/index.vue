<template>
    <div class="col-xl-3 box-col-6 pe-0">
        <div class="md-sidebar"><a class="btn btn-primary md-sidebar-toggle" href="javascript:void(0)"
                @click="collapseFilter()">file
                filter</a>
            <div class="md-sidebar-aside custom-scrollbar" :class="filtered ? 'open' : ''">
                <div class="file-sidebar">
                    <div class="card">
                        <div class="card-body">
                            <ul>
                                <li v-for="(item, index) in store.sidebarTabsData" :key="index">
                                    <div :class="'btn btn-' + item.color">
                                        <Icon :name="item.icon"></Icon>{{ item.name }}
                                    </div>
                                </li>
                            </ul>
                            <hr>
                            <ul>
                                <li>
                                    <div class="btn btn-outline-primary">
                                        <Icon name="material-symbols:database-outline"> </Icon>Storage
                                    </div>
                                    <div class="m-t-15">
                                        <div class="progress sm-progress-bar mb-3">
                                            <div class="progress-bar bg-primary" role="progressbar" style="width: 25%"
                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <h6 class="f-w-500">25 GB of 100 GB used</h6>
                                    </div>
                                </li>
                            </ul>
                            <hr>
                            <ul>
                                <li>
                                    <div class="btn btn-outline-primary">
                                        <Icon name="akar-icons:grid"> </Icon>Pricing plan
                                    </div>
                                </li>
                                <li> </li>
                                <div class="pricing-plan">
                                    <h6>Trial Version </h6>
                                    <h5>FREE</h5>
                                    <p>100 GB Space</p>
                                    <div class="btn btn-outline-primary btn-xs">Selected</div><img class="bg-img"
                                        src="/images/dashboard/folder.png" alt="">
                                </div>
                                <li>
                                    <div class="pricing-plan">
                                        <h6>Premium</h6>
                                        <h5>$5/month</h5>
                                        <p> 200 GB Space</p>
                                        <div class="btn btn-outline-primary btn-xs">Contact Us</div><img class="bg-img"
                                            src="/images/dashboard/folder1.png" alt="">
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ThemeAppFileManegerContent />
</template>

<script setup lang="ts">
import { useAppStore } from '~/stores/app'
let store = useAppStore();
let filtered = ref<boolean>(false)

function collapseFilter() {
    filtered.value = !filtered.value;
}
</script>

