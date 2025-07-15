<template>
    <div class="fade tab-pane" id="pills-tasks" role="tabpanel" aria-labelledby="pills-tasks-tab">
        <div class="card mb-0">
            <div class="card-header d-flex">
                <h2 class="mb-0">My tasks</h2><a @click="printWindow()">
                    <Icon class="me-2" name="ph:printer"></Icon>Print
                </a>
            </div>
            <div class="card-body p-0">
                <div class="taskadd">
                    <div class="table-responsive theme-scrollbar">
                        <table class="table">
                            <tbody>
                                <tr v-for="(row, index) in task" :key="index">
                                    <td>
                                        <h6 class="task_title_0 f-w-600">{{ row.title }}</h6>
                                        <p class="project_name_0">General</p>
                                    </td>
                                    <td>
                                        <p class="task_desc_0">{{ row.desc }}</p>
                                    </td>
                                    <td><a class="me-2" href="javascript:void(0)">
                                            <Icon name="ph:link-bold" class="fs-1" size="30" />
                                        </a><a href="javascript:void(0)">
                                            <Icon name="ion:android-more-horizontal" class="fs-1" size="20" />
                                        </a>
                                    </td>
                                    <td><a href="javascript:void(0)">
                                            <Icon name="lucide:trash-2" class="fs-1" size="20"
                                                @click='removeProduct(index)'></Icon>
                                        </a></td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useTaskStore } from "~/stores/task"
const swal = inject("$swal")
const store = useTaskStore()
let task = store.task

function removeProduct(index: any) {
    swal.fire({
        icon: 'warning',
        title: "Are you sure?",
        text: 'This Task will be deleted from your Personal task ',
        showCancelButton: true,
        cancelButtonText: 'Cancel', confirmButtonText: 'Ok', confirmButtonColor: 'var(--theme-default)',
    }).then((result: any) => {
        if (result.value) {
            task.splice(index, 1)
            swal.fire({
                icon: 'success',
                text: 'Poof! Your imaginary file has been deleted!',
                confirmButtonColor: 'var(--theme-default)',
            });
        } else {
            swal.fire({
                text: 'Your contact is safe!', confirmButtonColor: 'var(--theme-default)',
            });
        }
    });
}
function printWindow() {
    window.print();
}
</script>