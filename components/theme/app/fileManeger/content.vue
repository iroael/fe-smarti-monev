<template>
    <div class="col-xl-9 col-md-12 box-col-12">
        <div class="file-content">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex ">
                        <form class="form-inline" action="#" method="get">
                            <div class="form-group mb-0"> <i class="fa fa-search"></i>
                                <input class="form-control-plaintext" type="text" placeholder="Search...">
                            </div>
                        </form>
                        <div class="flex-grow-1 file-buttons">
                            <form class="d-inline-flex" action="#" method="POST" enctype="multipart/form-data"
                                name="myForm">
                                <div class="btn btn-primary" @click="getFile()">
                                    <Icon name="ph:plus-square-bold"></Icon>Add New
                                </div>
                                <div style="height: 0px;width: 0px; overflow:hidden;">
                                    <input ref="upfile" type="file">
                                </div>
                            </form>
                            <div class="btn btn-outline-primary ms-2">
                                <Icon name="material-symbols:upload-rounded"> </Icon>Upload
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body file-manager">
                    <h2>All Files</h2>
                    <p class="f-m-light mb-2">Recently opened files</p>
                    <ul class="files">
                        <li v-for="(item, index) in store.accessData" :key="index" class="file-box me-1">
                            <div class="file-top"> <i :class="'fa ' + item.icon"></i><i
                                    class="fa fa-ellipsis-v f-14 ellips"></i></div>
                            <div class="file-bottom">
                                <h6>{{ item.name }} </h6>
                                <p class="mb-1">{{ item.size }}</p>
                                <p> <b>last open : </b>{{ item.seen }}</p>
                            </div>
                        </li>
                    </ul>
                    <h6 class="mt-4">Folders</h6>
                    <ul class="folder">
                        <li class="folder-box me-1" v-for="(item, index) in store.folderData" :key="index">
                            <div class="d-flex"><i class="f-44 fa txt-warning" :class="item.icon"></i>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="mb-0">{{ item.name }}</h6>
                                    <p>{{ item.count }} file<span class="pull-right"> <i class="fa fa-clock-o"> </i>
                                            {{ item.time }}</span></p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <h6 class="mt-4">Files</h6>
                    <ul class="files">
                        <li class="file-box me-1" v-for="(item, index) in store.filesData" :key="index">
                            <div class="file-top"><i class="fa" :class="item.icon"></i><i
                                    class="fa fa-ellipsis-v f-14 ellips"></i></div>
                            <div class="file-bottom">
                                <h6>{{ item.name }}</h6>
                                <p class="mb-1">{{ item.desc.split(',')[1] }}</p>
                                <p> <b>last open : </b>{{ item.desc.split(',')[0] }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from '~/stores/app'
let store = useAppStore();
let upfile = ref()
function getFile() {
    upfile.value.click()
}
</script>

