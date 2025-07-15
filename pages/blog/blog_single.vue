<template>
    <div class="container-fluid">
        <div class="row">
            <CommonCard3 colClass="col-sm-12 ">
                <div class="blog-single">
                    <ThemeBlogSingleBlogDetails />
                    <ThemeBlogSingleCommentBox />
                </div>
            </CommonCard3>
        </div>
    </div>
</template>
<script setup lang="ts">
useHead({
    title: "Blog Details | Smarti - Sistem Monitoring Rumah Terintegrasi"
})
</script>