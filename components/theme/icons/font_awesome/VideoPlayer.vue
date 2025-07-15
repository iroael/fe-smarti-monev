<template>
    <CommonCard3 colClass="col-sm-12" headerTitle="true" title="Video Player Icons">
        <div class="row icon-lists">

            <div class="col-sm-6 col-md-4 col-xl-3" v-for="(video, index) in videoicons" :key="index"
                v-on:click="icon_bar(video.name)">
                <i class="" :class="'fa fa-' + video.name"></i>fa-{{ video.name }}
            </div>

        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>


let emit = defineEmits(['selected'])

let videoicons = ref([{ name: 'arrows-alt' }, { name: 'backward' }, { name: 'compress' }, { name: 'eject' }, { name: 'expand' }, { name: 'fast-backward' }, { name: 'fast-forward' }, { name: 'forward' }, { name: 'pause' }, { name: 'play' }, { name: 'play-circle' }, { name: 'play-circle-o' }, { name: 'step-backward' }, { name: 'step-forward' }, { name: 'stop' }, { name: 'youtube-play' }])
function icon_bar(icon: string) {

    emit('selected', icon);
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/vendors/animate.scss"
</style>