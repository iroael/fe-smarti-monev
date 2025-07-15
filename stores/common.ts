import { defineStore } from 'pinia'
import { aos } from "~/core/data/masonry"
import { quik, intell, selling, users } from "~/core/data/faq"
import { simple, flush, multiples, multipledata, iconaccodion, collapse } from "~/core/data/uikits"
import { animationrating } from "~/core/data/advance"

export const useCommonStore = defineStore('common', () => {

    let aosData = ref(aos)
    let quiks = ref(quik)
    let int = ref(intell)
    let sell = ref(selling)
    let user = ref(users)
    let data = ref(simple)
    let flushes = ref(flush)
    let multiple = ref(multiples)
    let multi = ref(multipledata)
    let icons = ref(iconaccodion)
    let rating = ref(animationrating)

    return {
        aosData,
        quiks,
        int,
        sell,
        user,
        data,
        flushes,
        multiple,
        multi,
        icons,
        rating

    }
})