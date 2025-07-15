import { defineStore } from 'pinia'
import { data } from "~/core/data/task"

export const useTaskStore = defineStore('task', () => {

    let task = ref(data)

    return {
        task,

    }
})
