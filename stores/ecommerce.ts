import { defineStore } from 'pinia'
import { allProduct, brand, CategoryPageTableData, history, newproduct, order, cancal, shippings, pricing, productlist, services, simplePrice, wishlist, } from "~/core/data/ecommerce"
import type { product } from "~/core/data/ecommerce"
export const useProductStore = defineStore('product', () => {
    let listingData = allProduct
    let filtered = ref<boolean>(false)
    let applyFilter = ref<string[]>([])
    let cartData = ref<product[]>([])
    let wishlistData = wishlist
    let simplepricingData = simplePrice
    let pricingData = pricing
    let CategoryPageData = CategoryPageTableData
    let newProductData = newproduct
    let brandData = brand
    let servicesData = services
    let productListData = productlist
    let newOrder = order
    let shippingOrder = shippings
    let cancleOrder = cancal
    let historyData = history
    let filteredData = computed(() => {
        return listingData.filter((product: any) => {
            if (!applyFilter.value.length) return true;
            const Tags = applyFilter.value.some((prev: any) => {
                if (product.tags) {
                    if (product.tags.includes(prev)) {
                        return prev;
                    }
                }
            });

            return Tags;
        });
    })
    const getCategory = computed(() => {
        const uniqueCategory: product[] = [];
        const itemCat = [];
        listingData.map((product: product) => {
            if (product.category) {
                product.category.map((category) => {
                    const index = uniqueCategory.indexOf(category);
                    if (index === -1) uniqueCategory.push(category);
                });
            }
        })
        for (let i = 0; i < uniqueCategory.length; i++) {
            itemCat.push({ category: uniqueCategory[i] });
        }
        return itemCat;
    })
    const getBrands = computed(() => {
        const brands = [...new Set(listingData.map((product: product) => product.brand))];
        return brands;
    })
    const getColors = computed(() => {
        const uniqueColors: product[] = [];
        const itemColor = [];
        listingData.map((product) => {
            if (product.colors) {
                product.colors.map((color) => {
                    const index = uniqueColors.indexOf(color);
                    if (index === -1) uniqueColors.push(color);
                });
            }
        });
        for (let i = 0; i < uniqueColors.length; i++) {
            itemColor.push({ color: uniqueColors[i] });
        }
        return itemColor;
    })
    function defaultcart(defaultCartData: product[]) {
        cartData.value = defaultCartData
    }
    function addToCart(product: product) {
        const hasItems = cartData.value.find((items: any) => {
            if (items.sku === product.sku) {
                items.quantity = items.quantity ? items.quantity : 1;
                return true;
            }
            return false;
        });
        if (!hasItems) {
            cartData.value.push(product);
        }

        localStorage.setItem('cartItem', JSON.stringify(cartData.value));
    }
    function updateqty(product: product) {
        cartData.value.find((item: product, index: number) => {
            if (item.sku == product.sku) {
                cartData.value[index].quantity = product.quantity
            }
            localStorage.setItem('cartItem', JSON.stringify(cartData.value))
        })

    }
    function removeProduct(item: any) {
        const index = cartData.value.indexOf(item);
        cartData.value.splice(index, 1);
        localStorage.setItem('cartItem', JSON.stringify(cartData.value));
    }
    return { listingData, getCategory, getBrands, getColors, applyFilter, filtered, filteredData, addToCart, defaultcart, updateqty, removeProduct, cartData, newProductData, brandData, servicesData, CategoryPageData, productListData, newOrder, shippingOrder, cancleOrder, historyData, wishlistData, simplepricingData, pricingData }
})