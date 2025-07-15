<template>
    <CommonCard3 colClass="col-sm-12" headerTitle="true" title="Wishlist">
        <div class="row g-sm-4 g-3">
            <div class="col-xxl-4 col-xl-6 col-md-6" v-for="(cards, index) in store.wishlistData" :key="index">
                <div class="prooduct-details-box wishlist-page">
                    <div class="d-flex"><img class="align-self-center img-fluid img-60" :src="getImages(cards.img)" alt="#">
                        <div class="flex-grow-1 ms-3">
                            <div class="product-name">
                                <h6><a href="#">{{ cards.name }}</a></h6>
                            </div>
                            <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i
                                    class="fa fa-star"></i>
                                <i class="fa " :class="cards.star1"></i>
                                <i class="fa " :class="cards.star2"></i>
                            </div>
                            <div class="price d-flex border-0 p-0">
                                <div class="text-muted me-2">Price</div>: {{ cards.price }}$
                            </div>
                            <div class="avaiabilty">
                                <div :class="cards.color">{{ cards.stock }}</div>
                            </div><a class="btn btn-primary btn-xs" href="javascript:Void(0)">Move to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { useProductStore } from "~/stores/ecommerce"
const store = useProductStore();
function getImages(path: string) {
    return '/images/' + path
}
</script>