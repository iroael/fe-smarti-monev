<template>
    <CommonCard3 colClass="col-12" headerTitle="true" title="Default Demo">
        <div id="demo1">
            <div class="kanban-container d-flex ">
                <div data-id="_todo" v-for="(board, index) in dropZones" :key="index" data-order="1"
                    @drop="onDrop($event, index)" @dragover.prevent @dragenter.prevent class="kanban-board">
                    <header class="kanban-board-header p-4">
                        <div class="kanban-title-board">{{ board.title }}</div>
                    </header>
                    <main class="kanban-drag p-4">
                        <div class="kanban-item " v-for="item in list(index)" :key="item.title" draggable="true"
                            @dragstart="startDrag($event, item)">
                            <a class="kanban-box" href="#" draggable="false"><span class="date">{{ item.date }}</span><span
                                    class="badge  f-right" :class="item.badge">{{ item.priority }}</span>
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
    </CommonCard3>
</template>

<script setup lang="ts">
import { VueDraggableNext } from 'vue-draggable-next'
import { useAppStore } from '~/stores/app'
const draggable = VueDraggableNext
let store = useAppStore();
const dropZones = ref([{ title: 'Todo (2)', id: 0 }, { title: 'Doing (2)', id: 1 }, { title: 'Done (2)', id: 3 }])
function list(index: any) {
    return store.kanabanSimple.filter((kanbanlist: any) => kanbanlist.list === index);
}
function startDrag(evt: any, item: any) {
    evt.dataTransfer.dropEffect = "move";
    evt.dataTransfer.effectAllowed = "move";
    evt.dataTransfer.setData("itemID", item.id);
}
function onDrop(evt: any, list: any) {
    const itemID = evt.dataTransfer.getData("itemID");
    const item = store.kanabanSimple.find((kanbanlist: any) => kanbanlist.id == itemID);
    item.list = list;
}
</script>

