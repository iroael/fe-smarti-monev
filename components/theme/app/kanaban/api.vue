<template>
    <CommonCard3 colClass="col-12" headerClass="pb-0 " headerTitle="true" pre="true" preClass="f-m-light mt-1"
        desc="Add item, add board, delete board." title="API  ">
        <template #desc>
            <p class="pb-0">add item, add board, delete board:</p>
        </template>
        <div id="demo3">
            <div class="kanban-container d-flex">
                <div data-id="_todo" v-for="(board, index) in dropZones" :key="index" data-order="1"
                    @drop="onDrop($event, index)" @dragover.prevent @dragenter.prevent
                    class="kanban-board col-xxl-4 col-md-12" style="width: 400px; margin-left: 15px; margin-right: 15px">
                    <header class="kanban-board-header p-4">
                        <div class="kanban-title-board">{{ board.title }}</div>
                    </header>
                    <main class="kanban-drag p-4">
                        <div class="kanban-item is-moving" v-for="item in list(index)" :key="item.title" draggable="true"
                            @dragstart="startDrag($event, item)">
                            <a class="kanban-box" href="#" draggable="false"><span class="date">{{ item.date }}</span><span
                                    class="badge  f-right" :class="item.badge">{{ item.priority }}</span>
                                <img class="mt-2 img-fluid" v-if="item.img" :src="'/images/' + item.img" alt=""
                                    data-original-title="" title="">
                                <h6>{{ item.title }}</h6>
                                <div class="d-flex align-items-start">
                                    <img class="img-30 me-2 rounded-circle" :src="'/images/user/3.jpg'" alt=""
                                        data-original-title="" title="" />
                                    <div class="flex-grow-1">
                                        <p>{{ item.place }}</p>
                                    </div>
                                </div>
                                <div class="d-flex mt-3">
                                    <ul class="list">
                                        <li><i class="fa fa-comments-o"></i>2</li>
                                        <li><i class="fa fa-paperclip"></i>2</li>
                                        <li><i class="fa fa-eye"></i></li>
                                    </ul>
                                    <div class="customers">
                                        <ul>
                                            <li class="d-inline-block me-3">
                                                <p class="f-12">{{ item.more }}</p>
                                            </li>
                                            <li class="d-inline-block">
                                                <img class="img-30 rounded-circle" :src="'/images/user/3.jpg'" alt=""
                                                    data-original-title="" title="" />
                                            </li>
                                            <li class="d-inline-block">
                                                <img class="img-30 rounded-circle" :src="'/images/user/1.jpg'" alt=""
                                                    data-original-title="" title="" />
                                            </li>
                                            <li class="d-inline-block">
                                                <img class="img-30 rounded-circle" :src="'/images/user/5.jpg'" alt=""
                                                    data-original-title="" title="" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </main>
                    <footer></footer>
                </div>
            </div>
        </div>
        <div class="kanban-buttons">
            <button class="btn btn-success me-2" id="addDefault" @click.prevent="addDefaultBoard">Add &quot;Default&quot;
                board</button>
            <button class="btn btn-success me-2" id="addToDo" @click.prevent="addTodoBoard">Add element in &quot;To Do&quot;
                Board</button>
            <button class="btn btn-danger" id="removeBoard" @click.prevent="removeDone">Remove &quot;Done&quot;
                Board</button>
        </div>
    </CommonCard3>
</template>

<script setup lang="ts">
import { useAppStore } from "~/stores/app"
const store = useAppStore();
const dropZones = ref([{ title: 'To Do', id: 0 }, { title: 'Working', id: 1 }, { title: 'Done', id: 3 }])
function removeDone() {
    for (var i = store.kanabanApi.length - 1; i >= 0; i--)
        store.kanabanApi[i].list === 2 && store.kanabanApi.splice(i, 1)
}
function addDefaultBoard() {
    let objToAdd = {
        "title": "New deafult board", "list": 0,
        "place": "Pixelstrap, New york", "image": "~/assets/images/user/3.jpg",
        "priority": "Low", "img": "other-images/bg-profile.png",
        "badge": "badge-success", "id": 7, "date": "24/7/20"
    }
    store.kanabanApi.push(objToAdd)
}
function addTodoBoard() {
    let objToAdd = {
        "title": "Test Sidebar", "list": 0,
        "place": "Themeforest, australia", "image": "~/assets/images/user/3.jpg",
        "badge": "badge-danger", "id": 8, "more": "+5",
        "priority": "Argent", "date": "24/7/20"
    }
    store.kanabanApi.push(objToAdd)
}
function list(index: any) {
    return store.kanabanApi.filter((kanbanlist: any) => kanbanlist.list === index);
}
function startDrag(evt: any, item: any) {
    evt.dataTransfer.dropEffect = "move";
    evt.dataTransfer.effectAllowed = "move";
    evt.dataTransfer.setData("itemID", item.id);
}
function onDrop(evt: any, list: any) {
    const itemID = evt.dataTransfer.getData("itemID");
    const item = store.kanabanApi.find((kanbanlist: any) => kanbanlist.id == itemID);
    item.list = list;
}
</script>

