<template>
    <CommonCard1 colClass="col-sm-12" :headerTop="false" title="New Orders">
        <div class="row g-sm-4 g-3">
            <div class="col-xxl-4 col-md-6" v-for="(item, index) in store.newOrder" :key="index">
                <div class="prooduct-details-box">
                    <div class="d-flex"><img class="align-self-center img-fluid img-60" :src="getImages(item.img)" alt="#">
                        <div class="flex-grow-1 ms-3">
                            <div class="product-name">
                                <h6><a href="#">{{ item.title }}</a></h6>
                            </div>
                            <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i
                                    class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
                            </div>
                            <div class="price d-flex p-0 border-0">
                                <div class="text-muted me-2">Price</div>: 210$
                            </div>
                            <div class="avaiabilty">
                                <div class="text-success">In stock</div>
                            </div><a class="btn btn-primary btn-xs" href="#">Processing</a>
                            <Icon @click="removeItem(item)" class="close" name="ion:close"></Icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard1>
    <CommonCard1 colClass="col-sm-12" :headerTop="false" title="Shipped Orders">
        <div class="row g-sm-4 g-3">
            <div class="col-xxl-4 col-md-6" v-for="(item, index) in store.shippingOrder" :key="index">
                <div class="prooduct-details-box">
                    <div class="d-flex"><img class="align-self-center img-fluid img-60" :src="getImages(item.img)" alt="#">
                        <div class="flex-grow-1 ms-3">
                            <div class="product-name">
                                <h6><a href="#">{{ item.title }}</a></h6>
                            </div>
                            <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i
                                    class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> </div>
                            <div class="price d-flex p-0 border-0">
                                <div class="text-muted me-2">Price</div>: 210$
                            </div>
                            <div class="avaiabilty">
                                <div class="text-success">In stock</div>
                            </div><a class="btn btn-success btn-xs" href="#">Shipped</a>
                            <Icon @click="removeShippedData(item)" class="close" name="ion:close"></Icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard1>
    <CommonCard1 colClass="col-sm-12" :headerTop="false" title="Cancelled Orders">
        <div class="row g-sm-4 g-3">
            <div class="col-xxl-4 col-md-6" v-for="(item, index) in store.cancleOrder" :key="index">
                <div class="prooduct-details-box">
                    <div class="d-flex"><img class="align-self-center img-fluid img-60" :src="getImages(item.img)" alt="#">
                        <div class="flex-grow-1 ms-3">
                            <div class="product-name">
                                <h6><a href="#">{{ item.title }}</a></h6>
                            </div>
                            <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i
                                    class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i> </div>
                            <div class="price d-flex p-0 border-0">
                                <div class="text-muted me-2">Price</div>: 210$
                            </div>
                            <div class="avaiabilty">
                                <div class="text-success">In stock</div>
                            </div><a class="btn btn-danger btn-xs" href="#">Cancelled</a>
                            <Icon @click="removeCancelledData(item)" class="close" name="ion:close"></Icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CommonCard1>
    <ThemeEcommerceOrderHistoryTable />
</template>
<script setup lang="ts">
import {useProductStore} from '~/stores/ecommerce'
interface order{
  img:string,
  title:string
}
let store = useProductStore();
function removeItem(item:order){
    let index = store.newOrder.indexOf(item)
    store.newOrder.splice(index , 1)
}
function removeShippedData(item:order){
    let index = store.shippingOrder.indexOf(item)
    store.shippingOrder.splice(index , 1)
}
function removeCancelledData(item:order){
    let index = store.cancleOrder.indexOf(item)
    store.cancleOrder.splice(index , 1)
}
function getImages(path:string){
    return '/images/'+path
}
</script>

