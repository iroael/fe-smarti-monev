import { defineStore } from 'pinia'
import { sidebar } from "~/core/data/sidebar"
import { useRoute } from "vue-router";
interface searchdatas {
    icon: string,
    path: string,
    title: string
}

interface search {
    icon: string,
    path: string,
    title: string,
    bookmark: string
}
export const useSidebarStore = defineStore('sidebar', () => {
    let sidebar_Data = sidebar
    let perentName = ref<string>('')
    let subName = ref<string>('')
    let search = ref<string>('')
    let childName = ref<string>('')
    let customizer = ref<string>("");
    let togglesidebar = ref<boolean>(true);
    let activeoverlay = ref<boolean>(true);
    let searchData = ref<searchdatas[]>([]);
    let searchDatas = ref<search[]>([]);
    let hideRightArrowRTL = ref<boolean>(false)
    let hideLeftArrowRTL = ref<boolean>(true)
    let hideRightArrow = ref<boolean>(true)
    let hideLeftArrow = ref<boolean>(true)
    let width = ref<number>(0)
    let height = ref<number>(0)
    let margin = ref<number>(0)
    let menuWidth = ref<number>(0)
    let pinedArray = ref([])

    const searchedSidebar = computed(() => {
        let filterDataArray: any = []
        sidebar_Data.forEach((menuItem, i) => {
            let filterData = menuItem.menu?.filter((menu) => {
                if (menu.title) {
                    return menu.title.toLowerCase().includes(search.value.toLowerCase())
                }
            })
            filterDataArray.push({ ...menuItem, menu: filterData })
        })

        return filterDataArray
    })
    function setPerentActive(title: string) {
        perentName.value = title == perentName.value ? '' : title
    }
    function setSubActive(title: string) {
        subName.value = title == subName.value ? '' : title
    }
    function getPinedData(item: sidebarType) {

        const index = pinedArray.value.findIndex(pinnedItem => pinnedItem === item.title);
        if (index !== -1) {

            pinedArray.value.splice(index, 1);
        } else {

            pinedArray.value.push(item.title);
        }


        localStorage.setItem('pinnedItems', JSON.stringify(pinedArray.value));
    }
    onMounted(() => {

        const pinnedItems = localStorage.getItem('pinnedItems');
        if (pinnedItems) {
            pinedArray.value = JSON.parse(pinnedItems || '[]');
        }
    });

    function toggle_sidebar() {
        togglesidebar.value = !togglesidebar.value;
        if (window.innerWidth < 991) {
            activeoverlay.value = true;
        } else {
            activeoverlay.value = false;
        }
        activeoverlay.value = false;
    }
    function searchTerm(term: any) {

        const items: any = [];

        const searchval = term.toLowerCase()

        sidebar_Data.filter((menuItem: any) => {

            menuItem.menu.filter((menuItems: any) => {
                if (menuItems.title?.toLowerCase().includes(term) && menuItems.type === 'link' || menuItems.title?.toUpperCase().includes(term) && menuItems.type === 'link') {

                    items.push(menuItems);

                }
                menuItems.children?.filter((subItems: any) => {
                    if (subItems.title?.toLowerCase().includes(term) && subItems.type === 'link' || subItems.title?.toUpperCase().includes(term) && subItems.type === 'link') {
                        subItems.icon = menuItems.icon
                        items.push(subItems);

                    }
                    if (!subItems.children) return false;
                    subItems.children?.filter((suSubItems: any) => {
                        if (suSubItems.title?.toLowerCase().includes(term) || suSubItems.title?.toUpperCase().includes(term)) {
                            suSubItems.icon = menuItems.icon
                            items.push(suSubItems);
                        }
                    })

                })
                searchData.value = items;
            })
        })
    }
    function searchterm(terms: any) {
        const items: any = [];

        const searchval = terms.toLowerCase()

        sidebar_Data.filter((menuItem: any) => {
            menuItem.menu.filter((menuItems: any) => {
                if (menuItems.title?.toLowerCase().includes(terms) && menuItems.type === 'link') {
                    items.push(menuItems);
                }
                menuItems.children?.filter((subItems: any) => {
                    if (subItems.title?.toLowerCase().includes(terms) && subItems.type === 'link') {
                        subItems.icon = menuItems.icon
                        items.push(subItems);

                    }
                    if (!subItems.children) return false;
                    subItems.children?.filter((suSubItems: any) => {
                        if (suSubItems.title?.toLowerCase().includes(terms)) {
                            suSubItems.icon = menuItems.icon
                            items.push(suSubItems);
                        }
                    })

                })
                searchDatas.value = items;
            })
        })
    }
    onMounted(() => {
        sidebar_Data.filter((menuItem: any) => {
            menuItem.menu?.filter((menuItems: any) => {
                if (menuItems.path) {

                    if (menuItems.path == useRoute().path) {
                        perentName.value = menuItems.title
                    }
                } else {
                    if (menuItems.children) {
                        menuItems.children?.filter((subItem: any) => {
                            if (subItem.path) {
                                if (subItem.path == useRoute().path) {
                                    perentName.value = menuItems.title
                                    childName.value = subItem.name
                                }
                            }

                            if (subItem.children) {
                                subItem.children?.filter((childItem: any) => {
                                    if (childItem.path) {
                                        if (childItem.path == useRoute().path) {
                                            perentName.value = menuItems.title
                                            childName.value = childItem.name
                                        }
                                    }
                                })
                            }


                        })
                    }
                }
            })

        })
    })
    return {
        sidebar_Data,
        setPerentActive,
        perentName,
        setSubActive,
        search,
        searchedSidebar,
        subName,
        togglesidebar,
        activeoverlay,
        toggle_sidebar,
        searchData,
        searchTerm,
        searchterm,
        customizer,
        hideRightArrowRTL,
        hideLeftArrowRTL,
        hideRightArrow,
        hideLeftArrow,
        width,
        height,
        margin,
        menuWidth,
        searchDatas,
        getPinedData,
        pinedArray
    }
})