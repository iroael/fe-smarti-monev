<template>
    <ul class="timer deal-timer" data-date="Dec 7, 2024 04:15:01" v-if="time">
        <li>
            <h6 class="f-20 f-w-600 txt-primary hours" v-text="hours"></h6><span class="f-12 f-w-500 f-light">Hours</span>
        </li>
        <li>
            <h6 class="f-20 f-w-600 txt-primary minutes" v-text="minutes"></h6><span class="f-12 f-w-500 f-light">Min</span>
        </li>
        <li>
            <h6 class="f-20 f-w-600 txt-primary seconds" v-text="seconds"></h6><span class="f-12 f-w-500 f-light">Sec</span>
        </li>
    </ul>
    <ul v-else>
        <li><span class="days digits" v-text="days"></span><span class="title">days</span></li>
        <li><span class="hours digits" v-text="hours"></span><span class="title">Hours</span></li>
        <li><span class="minutes digits" v-text="minutes"></span><span class="title">Min</span></li>
        <li><span class="seconds digits" v-text="seconds"></span><span class="title">Sec</span></li>
    </ul>
</template>
<script lang="ts" setup>
let props = defineProps({
    time: String
})
let td = ref<number>(0)
let days = ref<number>(0)
let hours = ref<number>(0)
let minutes = ref<number>(0)
let seconds = ref<number>(0)
let startTime = ref<string | number>('')
let endTime = ref<string | number>('')
function timer() {
    setInterval(() => {
        endTime.value = new Date().getTime()
        startTime.value = new Date('Jan 1, 2024 00:00:00').getTime(),
            td.value = endTime.value - startTime.value
        if (td.value >= 0) {
            seconds.value = Math.floor(td.value / 1000 % 60);
            minutes.value = Math.floor(td.value / 1000 / 60 % 60);
            hours.value = Math.floor(td.value / (1000 * 60 * 60) % 24);
            days.value = Math.floor(td.value / (1000 * 60 * 60 * 24));
        } else {
            seconds.value = minutes.value = hours.value = days.value = 0;
        }
    });

}
onMounted(() => {
    timer()
})
</script>