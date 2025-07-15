<template>
	<div class="emoji_picker shadow custom-scrollbar pe-0" v-if="show">
		<div class="picker_container p-0">
			<div class="category p-0" v-for="category in categories" :key="`category_${category}`">
				<h1 class="fs-5 p-o">{{ category }}</h1>
				<div class="emojis_container p-0">
					<button class="fs-4" @click="handleEmojiClick(emoji)" v-for="(emoji, index) in getEmojiValue(category)"
						:key="`emoji_${index}`">
						{{ emoji }}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import {emoji} from '~/core/data/emoji'
let props = defineProps({
    show:Boolean
})
let emit = defineEmits(['selectEmoji'])
let categories = computed(() => {
    return Object.keys(emoji);
})
function getEmojiValue(value:string){
    return Object.values(emoji[value])
}
function handleEmojiClick(emoji:string){
    emit('selectEmoji',emoji)
}
</script>

