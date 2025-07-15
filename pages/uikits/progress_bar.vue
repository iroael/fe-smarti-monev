<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <ThemeUikitsProgressBasicProgressbar />
                <div class="row">
                    <ThemeUikitsProgressStripedProgressbar />
                </div>
                <div class="row">
                    <ThemeUikitsProgressMultipleBars />
                </div>
                <ThemeUikitsProgressCustomProgressbars />
                <div class="row">
                    <ThemeUikitsProgressSmallProgressbars />
                </div>
                <ThemeUikitsProgressHeightProgressbars />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
useHead({
    title: "Uikits Progressbar | Yuri - Premium Nuxt Admin Template"
})
</script>