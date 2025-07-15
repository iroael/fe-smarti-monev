import { defineStore } from 'pinia'
import { starred, access, mail, addProductTabs, api, bookmark, custom, darftData, files, folders, letterBoxData, letterboxSidebar, organization, personal, projectList, sentData, sidebarTabs, simple, trashBox, userCard, useredit, workLetter } from "~/core/data/app"

export const useAppStore = defineStore('app', () => {
    let projectListData = projectList
    let sidebarTabsData = sidebarTabs
    let accessData = access
    let folderData = folders
    let filesData = files
    let kanabanSimple = simple
    let kanabanCustom = custom
    let kanabanApi = api
    let addProductTabsData = addProductTabs
    let letterboxSidebarData = letterboxSidebar
    let sentLetterBoxData = sentData
    let letterBox = letterBoxData
    let darftLetterBoxData = darftData
    let trashData = trashBox
    let workLetterData = workLetter
    let edituserData = useredit
    let userCardData = userCard
    let bookmarkData = bookmark
    let personalData = personal
    let organizationData = organization
    let starr = starred
    let email = mail
    let formSubmited = ref(false)
    let showLetterBox = ref(false)
    const favourite = ref([])
    let activeclass = ref<string>('pills_created')
    let projectData = ref({
        projectName: { data: '' },
        clientname: { data: '' },
        details: { data: '' }
    })
    function addProject() {
        formSubmited.value = true
        if (projectData.value.projectName.data != '' && projectData.value.clientname.data != '') {
            const arr = {
                id: 1,
                title: projectData.value.projectName.data, badge: "Doing",
                type: "primary progress-bar-striped", font: "primary",
                img: "user/3.jpg", sites: "Themeforest, australia",
                desc: projectData.value.details.data, issue: "12", resolved: "5",
                comment: "7", like: "+10",
                progress: "70", customers_img1: "user/3.jpg",
                customers_img2: "user/5.jpg", customers_img3: "user/1.jpg"
            }
            projectListData.all.push(arr)
            navigateTo('/project/project_list')
        }
    }
    function say(item: string) {
        activeclass.value = item
    }
    return { starr, email, showLetterBox, projectListData, projectData, addProject, sidebarTabsData, accessData, folderData, filesData, kanabanSimple, kanabanCustom, kanabanApi, addProductTabsData, letterboxSidebarData, sentLetterBoxData, letterBox, darftLetterBoxData, trashData, workLetterData, edituserData, userCardData, say, activeclass, favourite, bookmarkData, personalData, organizationData }
})