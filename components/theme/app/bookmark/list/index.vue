<template>
    <div class="card mb-0">
        <div class="card-header d-flex">
            <h2 class="mb-0">{{ title }}</h2>
            <ul>
                <li><a class="grid-bookmark-view" href="javascript:void(0);">
                        <Icon name="mingcute:grid-fill" @click="liststyle = false"></Icon>
                    </a></li>
                <li><a class="list-layout-view" href="javascript:void(0);">
                        <Icon name="ic:round-format-list-bulleted" @click="liststyle = true"></Icon>
                    </a></li>
            </ul>
        </div>
        <div class="card-body pb-0">
            <div class="details-bookmark text-center" v-bind:class="{ 'list-bookmark': liststyle }">
                <div class="row" id="bookmarkData" v-if="bookmark.length">
                    <div class="col-xl-3 col-md-4 xl-50 box-col-4 col-sm-6" v-for="(item, index) in bookmark" :key="index">
                        <div class="card card-with-border bookmark-card overflow-hidden">
                            <div class="details-website">
                                <img class="img-fluid" :src='getImages(item.image)' alt="">
                                <div class="favourite-icon favourite_0" :class="(getActive(item.id)) ? 'favourite' : ''"
                                    @click="setFavourite(item)"><a href="javascript:void(0)"><i class="fa fa-star"></i></a>
                                </div>
                                <div class="desciption-data">
                                    <div class="title-bookmark">
                                        <h3 class="title_0">{{ item.title }}</h3>
                                        <p class="weburl_0">{{ item.website_url }}</p>
                                        <div class="hover-block">
                                            <ul>
                                                <ThemeAppBookmarkEditView />
                                                <li><a href="#">
                                                        <Icon name="fe:insert-link"></Icon>
                                                    </a></li>
                                                <li><a href="#">
                                                        <Icon name="lucide:share-2"></Icon>
                                                    </a></li>
                                                <li><a>
                                                        <Icon name="material-symbols-light:delete-outline"
                                                            @click="basic_warning_alert(index)"></Icon>
                                                    </a></li>
                                                <li class="pull-right text-right">
                                                    <Icon name="ph:tag"></Icon>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="content-general">
                                            <p class="desc_0"> {{ item.desc }}</p><span class="collection_0">General</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" v-else>
                    <div class="no-favourite"><span>No Data Found.</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from "~/stores/app"
import type { bookmarkType } from '~/core/data/app'
let props = defineProps<{ listData: bookmarkType[], title: string }>()
let store = useAppStore();
const liststyle = ref<boolean>(false)
const favourite: bookmarkType[] = store.favourite
const bookmark: bookmarkType[] = props.listData
function getImages(path: string) {
    return '/images/' + path
}
function getActive(itemId: number) {
    const objIndex = favourite.findIndex(((obj: bookmarkType) => obj.id === itemId));
    if (objIndex > -1) {
        return true;
    } else {
        return false;
    }
}
function setFavourite(item: bookmarkType) {
    const objIndex = favourite.findIndex(((obj: bookmarkType) => obj.id === item.id));
    if (objIndex > -1) {
        favourite.splice(objIndex, 1);
    } else {
        favourite.push(item);
    }
}
function basic_warning_alert(index: number) {
    bookmark.splice(index, 1)
}
</script>

