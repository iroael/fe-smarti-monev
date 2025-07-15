import { defineStore } from 'pinia'
import { cards, chartCards, members, orders, orderStatus, recentOrders, referrals, salesOverview, todoList, transaction } from "~/core/data/dashboard"
import { activities, calender, product, projectStatus, stock, update } from "~/core/data/header"

export const useDashboardStore = defineStore('dashboard', () => {
    let cardsData = cards
    let transactionData = transaction
    let memberData = members
    let referralsData = referrals
    let ordersData = orders
    let todoListData = todoList
    let salesOverviewData = salesOverview
    let recentOrdersData = recentOrders
    let stockData = stock
    let activitiesData = activities
    let productData = product
    let calendarData = calender
    let projectStatusData = projectStatus
    let updateData = update
    let chartCardsData = chartCards
    let orderStatusData = orderStatus
    return { cardsData, transactionData, memberData, referralsData, ordersData, todoListData, salesOverviewData, recentOrdersData, stockData, activitiesData, productData, calendarData, projectStatusData, updateData, chartCardsData, orderStatusData }
})