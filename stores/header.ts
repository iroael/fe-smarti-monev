import { defineStore } from 'pinia'
import { message, notification, profile } from "~/core/data/header"

export const useHeaderStore = defineStore('header', () => {
    let notificationData = notification
    let messageData = message
    let profileData = profile
    return {
        notificationData,
        messageData,
        profileData
    }
})