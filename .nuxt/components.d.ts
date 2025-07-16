
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'CommonJobSidebar': typeof import("../components/common/JobSidebar.vue")['default']
    'CommonLearningFilter': typeof import("../components/common/LearningFilter.vue")['default']
    'CommonSuccessfulWizard': typeof import("../components/common/SuccessfulWizard.vue")['default']
    'CommonTimerView': typeof import("../components/common/TimerView.vue")['default']
    'CommonBlockTapTop': typeof import("../components/common/block/TapTop.vue")['default']
    'CommonBlockBreadcrumb': typeof import("../components/common/block/breadcrumb.vue")['default']
    'CommonBlockCustomizerBuyNow': typeof import("../components/common/block/customizer/BuyNow.vue")['default']
    'CommonBlockCustomizerCheckFeatures': typeof import("../components/common/block/customizer/CheckFeatures.vue")['default']
    'CommonBlockCustomizerConfigurationView': typeof import("../components/common/block/customizer/ConfigurationView.vue")['default']
    'CommonBlockCustomizerCustomColor': typeof import("../components/common/block/customizer/CustomColor.vue")['default']
    'CommonBlockCustomizerCustomSetting': typeof import("../components/common/block/customizer/CustomSetting.vue")['default']
    'CommonBlockCustomizerSetting': typeof import("../components/common/block/customizer/CustomizerSetting.vue")['default']
    'CommonBlockCustomizerSupport': typeof import("../components/common/block/customizer/CustomizerSupport.vue")['default']
    'CommonBlockCustomizerDocumentSection': typeof import("../components/common/block/customizer/DocumentSection.vue")['default']
    'CommonBlockCustomizerIndexCustomizer': typeof import("../components/common/block/customizer/IndexCustomizer.vue")['default']
    'CommonBlockCustomizerLayoutType': typeof import("../components/common/block/customizer/LayoutType.vue")['default']
    'CommonBlockCustomizerMixLayout': typeof import("../components/common/block/customizer/MixLayout.vue")['default']
    'CommonBlockCustomizerSidebarType': typeof import("../components/common/block/customizer/SidebarType.vue")['default']
    'CommonBlockEmoji': typeof import("../components/common/block/emoji.vue")['default']
    'CommonBlockFooterView': typeof import("../components/common/block/footer/FooterView.vue")['default']
    'CommonBlockFooterLanguageView': typeof import("../components/common/block/footer/LanguageView.vue")['default']
    'CommonBlockHeaderBookmarkSearch': typeof import("../components/common/block/header/BookmarkSearch.vue")['default']
    'CommonBlockHeaderCart': typeof import("../components/common/block/header/cart.vue")['default']
    'CommonBlockHeader': typeof import("../components/common/block/header/index.vue")['default']
    'CommonBlockHeaderMessage': typeof import("../components/common/block/header/message.vue")['default']
    'CommonBlockHeaderMode': typeof import("../components/common/block/header/mode.vue")['default']
    'CommonBlockHeaderNotification': typeof import("../components/common/block/header/notification.vue")['default']
    'CommonBlockHeaderProfile': typeof import("../components/common/block/header/profile.vue")['default']
    'CommonBlockHeaderSearch': typeof import("../components/common/block/header/search.vue")['default']
    'CommonBlockSidebarProfileSidebar': typeof import("../components/common/block/sidebar/ProfileSidebar.vue")['default']
    'CommonBlockSidebarSearchbar': typeof import("../components/common/block/sidebar/SidebarSearchbar.vue")['default']
    'CommonBlockSidebar': typeof import("../components/common/block/sidebar/index.vue")['default']
    'CommonBlockSidebarNavMenu': typeof import("../components/common/block/sidebar/navMenu.vue")['default']
    'CommonCard1': typeof import("../components/common/card/1.vue")['default']
    'CommonCard2': typeof import("../components/common/card/2.vue")['default']
    'CommonCard3': typeof import("../components/common/card/3.vue")['default']
    'CommonCard4': typeof import("../components/common/card/4.vue")['default']
    'CommonChartsAnnotationChart': typeof import("../components/common/charts/AnnotationChart.vue")['default']
    'CommonChartsAreaSpaline': typeof import("../components/common/charts/AreaSpaline.vue")['default']
    'CommonChartsBasicApex': typeof import("../components/common/charts/BasicApex.vue")['default']
    'CommonChartsBasicBar': typeof import("../components/common/charts/BasicBar.vue")['default']
    'CommonChartsCandlestickChart': typeof import("../components/common/charts/CandlestickChart.vue")['default']
    'CommonChartsChartBubble': typeof import("../components/common/charts/ChartBubble.vue")['default']
    'CommonChartsChartCrypto': typeof import("../components/common/charts/ChartCrypto.vue")['default']
    'CommonChartsChartWidget13': typeof import("../components/common/charts/ChartWidget13.vue")['default']
    'CommonChartsChartWidget4': typeof import("../components/common/charts/ChartWidget4.vue")['default']
    'CommonChartsChartWidget6': typeof import("../components/common/charts/ChartWidget6.vue")['default']
    'CommonChartsChartWidget7': typeof import("../components/common/charts/ChartWidget7.vue")['default']
    'CommonChartsCircleChart': typeof import("../components/common/charts/CircleChart.vue")['default']
    'CommonChartsColumnChart': typeof import("../components/common/charts/ColumnChart.vue")['default']
    'CommonChartsCryptoAnnotation': typeof import("../components/common/charts/CryptoAnnotation.vue")['default']
    'CommonChartsDonutChart': typeof import("../components/common/charts/DonutChart.vue")['default']
    'CommonChartsEarningAverage': typeof import("../components/common/charts/EarningAverage.vue")['default']
    'CommonChartsEarningChart': typeof import("../components/common/charts/EarningChart.vue")['default']
    'CommonChartsFinanceChart': typeof import("../components/common/charts/FinanceChart.vue")['default']
    'CommonChartsMixedChart': typeof import("../components/common/charts/MixedChart.vue")['default']
    'CommonChartsMonthlySales': typeof import("../components/common/charts/MonthlySales.vue")['default']
    'CommonChartsOrderStatus': typeof import("../components/common/charts/OrderStatus.vue")['default']
    'CommonChartsPieChart': typeof import("../components/common/charts/PieChart.vue")['default']
    'CommonChartsPipelineChart': typeof import("../components/common/charts/PipelineChart.vue")['default']
    'CommonChartsPipelineChart1': typeof import("../components/common/charts/PipelineChart1.vue")['default']
    'CommonChartsPolarArea': typeof import("../components/common/charts/PolarArea.vue")['default']
    'CommonChartsProfitChart': typeof import("../components/common/charts/ProfitChart.vue")['default']
    'CommonChartsProfitChart1': typeof import("../components/common/charts/ProfitChart1.vue")['default']
    'CommonChartsProgressChart': typeof import("../components/common/charts/ProgressChart.vue")['default']
    'CommonChartsProgressChart1': typeof import("../components/common/charts/ProgressChart1.vue")['default']
    'CommonChartsProgressChart2': typeof import("../components/common/charts/ProgressChart2.vue")['default']
    'CommonChartsProgressChart3': typeof import("../components/common/charts/ProgressChart3.vue")['default']
    'CommonChartsProgressChart4': typeof import("../components/common/charts/ProgressChart4.vue")['default']
    'CommonChartsProjectBar': typeof import("../components/common/charts/ProjectBar.vue")['default']
    'CommonChartsProjectBar1': typeof import("../components/common/charts/ProjectBar1.vue")['default']
    'CommonChartsProjectEarning': typeof import("../components/common/charts/ProjectEarning.vue")['default']
    'CommonChartsRadarChart': typeof import("../components/common/charts/RadarChart.vue")['default']
    'CommonChartsRadialChart': typeof import("../components/common/charts/RadialChart.vue")['default']
    'CommonChartsRevenueChart': typeof import("../components/common/charts/RevenueChart.vue")['default']
    'CommonChartsRevenueOrder': typeof import("../components/common/charts/RevenueOrder.vue")['default']
    'CommonChartsSteplineChart': typeof import("../components/common/charts/SteplineChart.vue")['default']
    'CommonChartsTotalClients': typeof import("../components/common/charts/TotalClients.vue")['default']
    'CommonChartsTotalTransactionChart': typeof import("../components/common/charts/TotalTransactionChart.vue")['default']
    'CommonChartsUsesChart': typeof import("../components/common/charts/UsesChart.vue")['default']
    'CommonChartsWeeklyVisitor': typeof import("../components/common/charts/WeeklyVisitor.vue")['default']
    'CommonChartsGooglechartAreaCharts': typeof import("../components/common/charts/googlechart/AreaCharts.vue")['default']
    'CommonChartsGooglechartGoogleChart1': typeof import("../components/common/charts/googlechart/GoogleChart1.vue")['default']
    'CommonChartsGooglechartGoogleChart2': typeof import("../components/common/charts/googlechart/GoogleChart2.vue")['default']
    'CommonChartsGooglechartPieChart1': typeof import("../components/common/charts/googlechart/PieChart1.vue")['default']
    'CommonChartsGooglechartPieChart2': typeof import("../components/common/charts/googlechart/PieChart2.vue")['default']
    'CommonChartsGooglechartWordTree': typeof import("../components/common/charts/googlechart/WordTree.vue")['default']
    'CommonChartsGooglechartColumnChart': typeof import("../components/common/charts/googlechart/columnChart.vue")['default']
    'CommonChartsProjectOverview': typeof import("../components/common/charts/projectOverview.vue")['default']
    'CommonChartsProjectOverview1': typeof import("../components/common/charts/projectOverview1.vue")['default']
    'CommonInputFieldsCommonField': typeof import("../components/common/inputFields/commonField.vue")['default']
    'CommonInputFieldsRadioField': typeof import("../components/common/inputFields/radioField.vue")['default']
    'CommonInputFieldsSelectBox': typeof import("../components/common/inputFields/selectBox.vue")['default']
    'CommonModalsAddCategory': typeof import("../components/common/modals/AddCategory.vue")['default']
    'CommonModalsCareateTag': typeof import("../components/common/modals/CareateTag.vue")['default']
    'CommonModalsNewContact': typeof import("../components/common/modals/NewContact.vue")['default']
    'CommonModalsNewTask': typeof import("../components/common/modals/NewTask.vue")['default']
    'CommonModalsAddLabel': typeof import("../components/common/modals/addLabel.vue")['default']
    'CommonModalsCompose': typeof import("../components/common/modals/compose.vue")['default']
    'CommonModalsNewBookmark': typeof import("../components/common/modals/newBookmark.vue")['default']
    'CommonModalsQuickView': typeof import("../components/common/modals/quickView.vue")['default']
    'CommonModalsTagsView': typeof import("../components/common/modals/tagsView.vue")['default']
    'ThemeAdvanceAnimationBox': typeof import("../components/theme/advance/animation/AnimationBox.vue")['default']
    'ThemeAdvanceBasicFlat': typeof import("../components/theme/advance/basic/BasicFlat.vue")['default']
    'ThemeAdvanceBasicDarkCard': typeof import("../components/theme/advance/basic/DarkCard.vue")['default']
    'ThemeAdvanceBasicFooterCard': typeof import("../components/theme/advance/basic/FooterCard.vue")['default']
    'ThemeAdvanceBasicIconCard': typeof import("../components/theme/advance/basic/IconCard.vue")['default']
    'ThemeAdvanceBasicShadowCard': typeof import("../components/theme/advance/basic/ShadowCard.vue")['default']
    'ThemeAdvanceBreadcrumbColoredNavigation': typeof import("../components/theme/advance/breadcrumb/ColoredNavigation.vue")['default']
    'ThemeAdvanceBreadcrumbDefaultBreadcrumb': typeof import("../components/theme/advance/breadcrumb/DefaultBreadcrumb.vue")['default']
    'ThemeAdvanceBreadcrumbDividersBreadcrumbs': typeof import("../components/theme/advance/breadcrumb/DividersBreadcrumbs.vue")['default']
    'ThemeAdvanceBreadcrumbIconsBreadcrumb': typeof import("../components/theme/advance/breadcrumb/IconsBreadcrumb.vue")['default']
    'ThemeAdvanceBreadcrumbNavBreadcrumb': typeof import("../components/theme/advance/breadcrumb/NavBreadcrumb.vue")['default']
    'ThemeAdvanceCreativeAbsoluteCard': typeof import("../components/theme/advance/creative/AbsoluteCard.vue")['default']
    'ThemeAdvanceCreativeBorderCard': typeof import("../components/theme/advance/creative/BorderCard.vue")['default']
    'ThemeAdvanceCreativePrimaryState': typeof import("../components/theme/advance/creative/PrimaryState.vue")['default']
    'ThemeAdvanceCreativeSecondaryState': typeof import("../components/theme/advance/creative/SecondaryState.vue")['default']
    'ThemeAdvanceCreativeWarningState': typeof import("../components/theme/advance/creative/WarningState.vue")['default']
    'ThemeAdvanceCropperImageCropper': typeof import("../components/theme/advance/cropper/ImageCropper.vue")['default']
    'ThemeAdvanceDraggableCard': typeof import("../components/theme/advance/draggable/DraggableCard.vue")['default']
    'ThemeAdvanceDraggableFooterCard': typeof import("../components/theme/advance/draggable/FooterCard.vue")['default']
    'ThemeAdvanceDropzoneDefaultDropzone': typeof import("../components/theme/advance/dropzone/DefaultDropzone.vue")['default']
    'ThemeAdvanceDropzoneImageDropzone': typeof import("../components/theme/advance/dropzone/ImageDropzone.vue")['default']
    'ThemeAdvanceDropzoneMultiDropzone': typeof import("../components/theme/advance/dropzone/MultiDropzone.vue")['default']
    'ThemeAdvanceDropzoneSingleDropzone': typeof import("../components/theme/advance/dropzone/SingleDropzone.vue")['default']
    'ThemeAdvanceOwlcarouselAutoPlay': typeof import("../components/theme/advance/owlcarousel/AutoPlay.vue")['default']
    'ThemeAdvanceOwlcarouselCrossFade': typeof import("../components/theme/advance/owlcarousel/CrossFade.vue")['default']
    'ThemeAdvanceOwlcarouselDarkVariant': typeof import("../components/theme/advance/owlcarousel/DarkVariant.vue")['default']
    'ThemeAdvanceOwlcarouselDisableTouch': typeof import("../components/theme/advance/owlcarousel/DisableTouch.vue")['default']
    'ThemeAdvanceOwlcarouselIndividualCarousel': typeof import("../components/theme/advance/owlcarousel/IndividualCarousel.vue")['default']
    'ThemeAdvanceOwlcarouselMouseWheel': typeof import("../components/theme/advance/owlcarousel/MouseWheel.vue")['default']
    'ThemeAdvanceOwlcarouselSlidesOnly': typeof import("../components/theme/advance/owlcarousel/SlidesOnly.vue")['default']
    'ThemeAdvanceOwlcarouselWithCaptions': typeof import("../components/theme/advance/owlcarousel/WithCaptions.vue")['default']
    'ThemeAdvanceOwlcarouselWithControls': typeof import("../components/theme/advance/owlcarousel/WithControls.vue")['default']
    'ThemeAdvanceOwlcarouselWithIndicators': typeof import("../components/theme/advance/owlcarousel/WithIndicators.vue")['default']
    'ThemeAdvancePaginationAlignmentsPagination': typeof import("../components/theme/advance/pagination/AlignmentsPagination.vue")['default']
    'ThemeAdvancePaginationDisabledPagination': typeof import("../components/theme/advance/pagination/DisabledPagination.vue")['default']
    'ThemeAdvancePaginationIconsPagenation': typeof import("../components/theme/advance/pagination/IconsPagenation.vue")['default']
    'ThemeAdvancePaginationRoundedPagination': typeof import("../components/theme/advance/pagination/RoundedPagination.vue")['default']
    'ThemeAdvancePaginationSimplePagination': typeof import("../components/theme/advance/pagination/SimplePagination.vue")['default']
    'ThemeAdvancePaginationSizingPagination': typeof import("../components/theme/advance/pagination/SizingPagination.vue")['default']
    'ThemeAdvanceRangsliderColorRang': typeof import("../components/theme/advance/rangslider/ColorRang.vue")['default']
    'ThemeAdvanceRangsliderCustomRang': typeof import("../components/theme/advance/rangslider/CustomRang.vue")['default']
    'ThemeAdvanceRangsliderDefultRang': typeof import("../components/theme/advance/rangslider/DefultRang.vue")['default']
    'ThemeAdvanceRangsliderMinMax': typeof import("../components/theme/advance/rangslider/MinMax.vue")['default']
    'ThemeAdvanceRangsliderNegativeRang': typeof import("../components/theme/advance/rangslider/NegativeRang.vue")['default']
    'ThemeAdvanceRangsliderPrefixRang': typeof import("../components/theme/advance/rangslider/PrefixRang.vue")['default']
    'ThemeAdvanceRangsliderPrettifyRang': typeof import("../components/theme/advance/rangslider/PrettifyRang.vue")['default']
    'ThemeAdvanceRangsliderStepsRange': typeof import("../components/theme/advance/rangslider/StepsRange.vue")['default']
    'ThemeAdvanceRatingAnimationRating': typeof import("../components/theme/advance/rating/AnimationRating.vue")['default']
    'ThemeAdvanceRatingClickableValue': typeof import("../components/theme/advance/rating/ClickableValue.vue")['default']
    'ThemeAdvanceRatingDisabledRating': typeof import("../components/theme/advance/rating/DisabledRating.vue")['default']
    'ThemeAdvanceRatingHeartRating': typeof import("../components/theme/advance/rating/HeartRating.vue")['default']
    'ThemeAdvanceRatingMovieRating': typeof import("../components/theme/advance/rating/MovieRating.vue")['default']
    'ThemeAdvanceRatingStarRating': typeof import("../components/theme/advance/rating/StarRating.vue")['default']
    'ThemeAdvanceRibbonsLeftRibbons': typeof import("../components/theme/advance/ribbons/LeftRibbons.vue")['default']
    'ThemeAdvanceRibbonsRightRibbons': typeof import("../components/theme/advance/ribbons/RightRibbons.vue")['default']
    'ThemeAdvanceScrollableBadgesScrollbar': typeof import("../components/theme/advance/scrollable/BadgesScrollbar.vue")['default']
    'ThemeAdvanceScrollableBothSide': typeof import("../components/theme/advance/scrollable/BothSide.vue")['default']
    'ThemeAdvanceScrollableCustomScrollbar': typeof import("../components/theme/advance/scrollable/CustomScrollbar.vue")['default']
    'ThemeAdvanceScrollableHorizontalScrollbar': typeof import("../components/theme/advance/scrollable/HorizontalScrollbar.vue")['default']
    'ThemeAdvanceScrollableProfileScrollable': typeof import("../components/theme/advance/scrollable/ProfileScrollable.vue")['default']
    'ThemeAdvanceScrollableContent': typeof import("../components/theme/advance/scrollable/ScrollableContent.vue")['default']
    'ThemeAdvanceScrollableSmallScroll': typeof import("../components/theme/advance/scrollable/SmallScroll.vue")['default']
    'ThemeAdvanceSweealertAutoClose': typeof import("../components/theme/advance/sweealert/AutoClose.vue")['default']
    'ThemeAdvanceSweealertBasicAlert': typeof import("../components/theme/advance/sweealert/BasicAlert.vue")['default']
    'ThemeAdvanceSweealertDangerAlert': typeof import("../components/theme/advance/sweealert/DangerAlert.vue")['default']
    'ThemeAdvanceSweealertInfoAlert': typeof import("../components/theme/advance/sweealert/InfoAlert.vue")['default']
    'ThemeAdvanceSweealertPikachuAlert': typeof import("../components/theme/advance/sweealert/PikachuAlert.vue")['default']
    'ThemeAdvanceSweealertQuestionsAlert': typeof import("../components/theme/advance/sweealert/QuestionsAlert.vue")['default']
    'ThemeAdvanceSweealertRequestMovie': typeof import("../components/theme/advance/sweealert/RequestMovie.vue")['default']
    'ThemeAdvanceSweealertSuccessMessage': typeof import("../components/theme/advance/sweealert/SuccessMessage.vue")['default']
    'ThemeAdvanceSweealertTextUnder': typeof import("../components/theme/advance/sweealert/TextUnder.vue")['default']
    'ThemeAdvanceSweealertUsernameAlert': typeof import("../components/theme/advance/sweealert/UsernameAlert.vue")['default']
    'ThemeAdvanceSweealertWarningAlert': typeof import("../components/theme/advance/sweealert/WarningAlert.vue")['default']
    'ThemeAdvanceSweealertWarningMode': typeof import("../components/theme/advance/sweealert/WarningMode.vue")['default']
    'ThemeAdvanceTimelineBasicTimeline': typeof import("../components/theme/advance/timeline/BasicTimeline.vue")['default']
    'ThemeAdvanceTimelineDesignerSlider': typeof import("../components/theme/advance/timeline/DesignerSlider.vue")['default']
    'ThemeAdvanceTimelineHorizontalTimeline': typeof import("../components/theme/advance/timeline/HorizontalTimeline.vue")['default']
    'ThemeAdvanceTimelineHoveringTimeline': typeof import("../components/theme/advance/timeline/HoveringTimeline.vue")['default']
    'ThemeAdvanceTimelineView': typeof import("../components/theme/advance/timeline/TimelineView.vue")['default']
    'ThemeAdvanceTimelineVariationTimeline': typeof import("../components/theme/advance/timeline/VariationTimeline.vue")['default']
    'ThemeAdvanceToastsBasicToasts': typeof import("../components/theme/advance/toasts/BasicToasts.vue")['default']
    'ThemeAdvanceToastsIconToasts': typeof import("../components/theme/advance/toasts/IconToasts.vue")['default']
    'ThemeAdvanceToastsPositionToasts': typeof import("../components/theme/advance/toasts/PositionToasts.vue")['default']
    'ThemeAdvanceTourFirstPost': typeof import("../components/theme/advance/tour/FirstPost.vue")['default']
    'ThemeAdvanceTourLastPost': typeof import("../components/theme/advance/tour/LastPost.vue")['default']
    'ThemeAdvanceTourSecondPost': typeof import("../components/theme/advance/tour/SecondPost.vue")['default']
    'ThemeAdvanceTourSociaMedia': typeof import("../components/theme/advance/tour/SociaMedia.vue")['default']
    'ThemeAdvanceTourThirdPost': typeof import("../components/theme/advance/tour/ThirdPost.vue")['default']
    'ThemeAdvanceTourUserProfile': typeof import("../components/theme/advance/tour/UserProfile.vue")['default']
    'ThemeAdvanceTreeBasicTree': typeof import("../components/theme/advance/tree/BasicTree.vue")['default']
    'ThemeAdvanceTreeCheckTree': typeof import("../components/theme/advance/tree/CheckTree.vue")['default']
    'ThemeAdvanceTreeDragDropTree': typeof import("../components/theme/advance/tree/DragDropTree.vue")['default']
    'ThemeAdvanceTreeEditTree': typeof import("../components/theme/advance/tree/EditTree.vue")['default']
    'ThemeAnimationAnimateBox': typeof import("../components/theme/animation/animate/AnimateBox.vue")['default']
    'ThemeAnimationAnimateOption': typeof import("../components/theme/animation/animate/AnimateOption.vue")['default']
    'ThemeAnimationAosExample': typeof import("../components/theme/animation/aos/AosExample.vue")['default']
    'ThemeAnimationAosInitAOS': typeof import("../components/theme/animation/aos/InitAOS.vue")['default']
    'ThemeAppBookmarkEditView': typeof import("../components/theme/app/bookmark/editView.vue")['default']
    'ThemeAppBookmark': typeof import("../components/theme/app/bookmark/index.vue")['default']
    'ThemeAppBookmarkList': typeof import("../components/theme/app/bookmark/list/index.vue")['default']
    'ThemeAppBookmarkRightContent': typeof import("../components/theme/app/bookmark/rightContent.vue")['default']
    'ThemeAppButtonsBlockLevel': typeof import("../components/theme/app/buttons/BlockLevel.vue")['default']
    'ThemeAppButtonsButtonGroup': typeof import("../components/theme/app/buttons/ButtonGroup.vue")['default']
    'ThemeAppButtonsButtonVariations': typeof import("../components/theme/app/buttons/ButtonVariations.vue")['default']
    'ThemeAppButtonsData': typeof import("../components/theme/app/buttons/ButtonsData.vue")['default']
    'ThemeAppButtonsHorizontalVariation': typeof import("../components/theme/app/buttons/HorizontalVariation.vue")['default']
    'ThemeAppButtonsRadioAndCheckbox': typeof import("../components/theme/app/buttons/RadioAndCheckbox.vue")['default']
    'ThemeAppCalenderView': typeof import("../components/theme/app/calender/CalenderView.vue")['default']
    'ThemeAppChatContacts': typeof import("../components/theme/app/chat/ChatContacts.vue")['default']
    'ThemeAppChatGroupAddChat': typeof import("../components/theme/app/chat/group/addChat.vue")['default']
    'ThemeAppChatGroup': typeof import("../components/theme/app/chat/group/index.vue")['default']
    'ThemeAppChatPrivateAddChat': typeof import("../components/theme/app/chat/private/addChat.vue")['default']
    'ThemeAppChatPrivate': typeof import("../components/theme/app/chat/private/index.vue")['default']
    'ThemeAppChatSidebar': typeof import("../components/theme/app/chat/sidebar.vue")['default']
    'ThemeAppContactMoreData': typeof import("../components/theme/app/contact/MoreData.vue")['default']
    'ThemeAppContactDetail': typeof import("../components/theme/app/contact/detail.vue")['default']
    'ThemeAppContactEdit': typeof import("../components/theme/app/contact/edit.vue")['default']
    'ThemeAppContactHistory': typeof import("../components/theme/app/contact/history.vue")['default']
    'ThemeAppContact': typeof import("../components/theme/app/contact/index.vue")['default']
    'ThemeAppContactOrganization': typeof import("../components/theme/app/contact/organization.vue")['default']
    'ThemeAppContactOrganizationDetail': typeof import("../components/theme/app/contact/organizationDetail.vue")['default']
    'ThemeAppContactOrganizationModal': typeof import("../components/theme/app/contact/organizationModal.vue")['default']
    'ThemeAppContactPersonal': typeof import("../components/theme/app/contact/personal.vue")['default']
    'ThemeAppContactPrint': typeof import("../components/theme/app/contact/print.vue")['default']
    'ThemeAppFileManegerContent': typeof import("../components/theme/app/fileManeger/content.vue")['default']
    'ThemeAppFileManeger': typeof import("../components/theme/app/fileManeger/index.vue")['default']
    'ThemeAppKanabanApi': typeof import("../components/theme/app/kanaban/api.vue")['default']
    'ThemeAppKanabanCustom': typeof import("../components/theme/app/kanaban/custom.vue")['default']
    'ThemeAppKanaban': typeof import("../components/theme/app/kanaban/index.vue")['default']
    'ThemeAppLetterBoxDraft': typeof import("../components/theme/app/letterBox/draft.vue")['default']
    'ThemeAppLetterBoxEmailDetail': typeof import("../components/theme/app/letterBox/emailDetail.vue")['default']
    'ThemeAppLetterBoxInbox': typeof import("../components/theme/app/letterBox/inbox.vue")['default']
    'ThemeAppLetterBox': typeof import("../components/theme/app/letterBox/index.vue")['default']
    'ThemeAppLetterBoxPrivate': typeof import("../components/theme/app/letterBox/private.vue")['default']
    'ThemeAppLetterBoxSent': typeof import("../components/theme/app/letterBox/sent.vue")['default']
    'ThemeAppLetterBoxSidebar': typeof import("../components/theme/app/letterBox/sidebar.vue")['default']
    'ThemeAppLetterBoxStarred': typeof import("../components/theme/app/letterBox/starred.vue")['default']
    'ThemeAppLetterBoxSupport': typeof import("../components/theme/app/letterBox/support.vue")['default']
    'ThemeAppLetterBoxTrash': typeof import("../components/theme/app/letterBox/trash.vue")['default']
    'ThemeAppLetterBoxWork': typeof import("../components/theme/app/letterBox/work.vue")['default']
    'ThemeAppTaskAssignedView': typeof import("../components/theme/app/task/AssignedView.vue")['default']
    'ThemeAppTaskBusinessTask': typeof import("../components/theme/app/task/BusinessTask.vue")['default']
    'ThemeAppTaskCreatedView': typeof import("../components/theme/app/task/CreatedView.vue")['default']
    'ThemeAppTaskDelayedTasks': typeof import("../components/theme/app/task/DelayedTasks.vue")['default']
    'ThemeAppTaskHolidaysTask': typeof import("../components/theme/app/task/HolidaysTask.vue")['default']
    'ThemeAppTaskMonthTasks': typeof import("../components/theme/app/task/MonthTasks.vue")['default']
    'ThemeAppTaskMyTasks': typeof import("../components/theme/app/task/MyTasks.vue")['default']
    'ThemeAppTaskNewsLetter': typeof import("../components/theme/app/task/NewsLetter.vue")['default']
    'ThemeAppTaskNotificationView': typeof import("../components/theme/app/task/NotificationView.vue")['default']
    'ThemeAppTaskSidebar': typeof import("../components/theme/app/task/TaskSidebar.vue")['default']
    'ThemeAppTaskTodayTask': typeof import("../components/theme/app/task/TodayTask.vue")['default']
    'ThemeAppTaskUpcomingTasks': typeof import("../components/theme/app/task/UpcomingTasks.vue")['default']
    'ThemeAppTaskWeekTasks': typeof import("../components/theme/app/task/WeekTasks.vue")['default']
    'ThemeAppTodoAddTask': typeof import("../components/theme/app/todo/AddTask.vue")['default']
    'ThemeAppTodoSidebar': typeof import("../components/theme/app/todo/TodoSidebar.vue")['default']
    'ThemeBlogAddpostAddPost': typeof import("../components/theme/blog/addpost/AddPost.vue")['default']
    'ThemeBlogDetailsBlogGrid': typeof import("../components/theme/blog/details/BlogGrid.vue")['default']
    'ThemeBlogDetailsBlogList': typeof import("../components/theme/blog/details/BlogList.vue")['default']
    'ThemeBlogDetailsBlogShadow': typeof import("../components/theme/blog/details/BlogShadow.vue")['default']
    'ThemeBlogSingleBlogDetails': typeof import("../components/theme/blog/single/BlogDetails.vue")['default']
    'ThemeBlogSingleCommentBox': typeof import("../components/theme/blog/single/CommentBox.vue")['default']
    'ThemeChartsApexChartApexCharts': typeof import("../components/theme/charts/apexChart/ApexCharts.vue")['default']
    'ThemeDashboardDefaultIndexLeftDefault': typeof import("../components/theme/dashboard/default/IndexLeftDefault.vue")['default']
    'ThemeDashboardDefaultTreadCards': typeof import("../components/theme/dashboard/default/TreadCards.vue")['default']
    'ThemeDashboardDefaultWelcomeView': typeof import("../components/theme/dashboard/default/WelcomeView.vue")['default']
    'ThemeDashboardDefaultCard': typeof import("../components/theme/dashboard/default/card.vue")['default']
    'ThemeDashboardDefault': typeof import("../components/theme/dashboard/default/index.vue")['default']
    'ThemeDashboardDefaultMembers': typeof import("../components/theme/dashboard/default/members.vue")['default']
    'ThemeDashboardDefaultReferral': typeof import("../components/theme/dashboard/default/referral.vue")['default']
    'ThemeDashboardDefaultRevenue': typeof import("../components/theme/dashboard/default/revenue.vue")['default']
    'ThemeDashboardDefaultSidebar': typeof import("../components/theme/dashboard/default/sidebar.vue")['default']
    'ThemeDashboardDefaultTodo': typeof import("../components/theme/dashboard/default/todo.vue")['default']
    'ThemeDashboardEcommerceCards': typeof import("../components/theme/dashboard/ecommerce/cards.vue")['default']
    'ThemeDashboardEcommerceEarning': typeof import("../components/theme/dashboard/ecommerce/earning.vue")['default']
    'ThemeDashboardEcommerce': typeof import("../components/theme/dashboard/ecommerce/index.vue")['default']
    'ThemeDashboardEcommerceRecentOrder': typeof import("../components/theme/dashboard/ecommerce/recentOrder.vue")['default']
    'ThemeDashboardEcommerceSidebar': typeof import("../components/theme/dashboard/ecommerce/sidebar.vue")['default']
    'ThemeDashboardEcommerceStock': typeof import("../components/theme/dashboard/ecommerce/stock.vue")['default']
    'ThemeDashboardEcommerceVisitors': typeof import("../components/theme/dashboard/ecommerce/visitors.vue")['default']
    'ThemeDashboardProjectAvgEarning': typeof import("../components/theme/dashboard/project/avgEarning.vue")['default']
    'ThemeDashboardProjectCalender': typeof import("../components/theme/dashboard/project/calender.vue")['default']
    'ThemeDashboardProjectChat': typeof import("../components/theme/dashboard/project/chat.vue")['default']
    'ThemeDashboardProjectClient': typeof import("../components/theme/dashboard/project/client.vue")['default']
    'ThemeDashboardProjectDailyTask': typeof import("../components/theme/dashboard/project/dailyTask.vue")['default']
    'ThemeDashboardProject': typeof import("../components/theme/dashboard/project/index.vue")['default']
    'ThemeDashboardProjectStatus': typeof import("../components/theme/dashboard/project/status.vue")['default']
    'ThemeDashboardProjectUpdate': typeof import("../components/theme/dashboard/project/update.vue")['default']
    'ThemeEcommerceAddProductCategoryModal': typeof import("../components/theme/ecommerce/addProduct/CategoryModal.vue")['default']
    'ThemeEcommerceAddProductAdditional': typeof import("../components/theme/ecommerce/addProduct/additional.vue")['default']
    'ThemeEcommerceAddProductCategory': typeof import("../components/theme/ecommerce/addProduct/category.vue")['default']
    'ThemeEcommerceAddProductDetails': typeof import("../components/theme/ecommerce/addProduct/details.vue")['default']
    'ThemeEcommerceAddProductGellery': typeof import("../components/theme/ecommerce/addProduct/gellery.vue")['default']
    'ThemeEcommerceAddProduct': typeof import("../components/theme/ecommerce/addProduct/index.vue")['default']
    'ThemeEcommerceAddProductInventory': typeof import("../components/theme/ecommerce/addProduct/inventory.vue")['default']
    'ThemeEcommerceAddProductSelling': typeof import("../components/theme/ecommerce/addProduct/selling.vue")['default']
    'ThemeEcommerceAddProductShipping': typeof import("../components/theme/ecommerce/addProduct/shipping.vue")['default']
    'ThemeEcommerceCart': typeof import("../components/theme/ecommerce/cart/index.vue")['default']
    'ThemeEcommerceCategoryFilterBlock': typeof import("../components/theme/ecommerce/category/filterBlock.vue")['default']
    'ThemeEcommerceCategory': typeof import("../components/theme/ecommerce/category/index.vue")['default']
    'ThemeEcommerceCheckoutDetails': typeof import("../components/theme/ecommerce/checkout/details.vue")['default']
    'ThemeEcommerceCheckout': typeof import("../components/theme/ecommerce/checkout/index.vue")['default']
    'ThemeEcommerceInvoice1Details': typeof import("../components/theme/ecommerce/invoice/1/details.vue")['default']
    'ThemeEcommerceInvoice1': typeof import("../components/theme/ecommerce/invoice/1/index.vue")['default']
    'ThemeEcommerceInvoice2Details': typeof import("../components/theme/ecommerce/invoice/2/details.vue")['default']
    'ThemeEcommerceInvoice2': typeof import("../components/theme/ecommerce/invoice/2/index.vue")['default']
    'ThemeEcommerceInvoice3Details': typeof import("../components/theme/ecommerce/invoice/3/details.vue")['default']
    'ThemeEcommerceInvoice3': typeof import("../components/theme/ecommerce/invoice/3/index.vue")['default']
    'ThemeEcommerceInvoice4Details': typeof import("../components/theme/ecommerce/invoice/4/details.vue")['default']
    'ThemeEcommerceInvoice4': typeof import("../components/theme/ecommerce/invoice/4/index.vue")['default']
    'ThemeEcommerceInvoice5Details': typeof import("../components/theme/ecommerce/invoice/5/details.vue")['default']
    'ThemeEcommerceInvoice5': typeof import("../components/theme/ecommerce/invoice/5/index.vue")['default']
    'ThemeEcommerceInvoice6Details': typeof import("../components/theme/ecommerce/invoice/6/details.vue")['default']
    'ThemeEcommerceInvoice6': typeof import("../components/theme/ecommerce/invoice/6/index.vue")['default']
    'ThemeEcommerceOrderHistory': typeof import("../components/theme/ecommerce/orderHistory/index.vue")['default']
    'ThemeEcommerceOrderHistoryTable': typeof import("../components/theme/ecommerce/orderHistory/table.vue")['default']
    'ThemeEcommercePaymentDetailsEmi': typeof import("../components/theme/ecommerce/paymentDetails/emi.vue")['default']
    'ThemeEcommercePaymentDetails': typeof import("../components/theme/ecommerce/paymentDetails/index.vue")['default']
    'ThemeEcommercePricing': typeof import("../components/theme/ecommerce/pricing.vue")['default']
    'ThemeEcommerceProductDetailsFilterblock': typeof import("../components/theme/ecommerce/product/details/filterblock.vue")['default']
    'ThemeEcommerceProductDetails': typeof import("../components/theme/ecommerce/product/details/index.vue")['default']
    'ThemeEcommerceProductDetailsSlider': typeof import("../components/theme/ecommerce/product/details/slider.vue")['default']
    'ThemeEcommerceProductDetailsSummery': typeof import("../components/theme/ecommerce/product/details/summery.vue")['default']
    'ThemeEcommerceProductDetailsTabs': typeof import("../components/theme/ecommerce/product/details/tabs.vue")['default']
    'ThemeEcommerceProductFilterBar': typeof import("../components/theme/ecommerce/product/filterBar.vue")['default']
    'ThemeEcommerceProduct': typeof import("../components/theme/ecommerce/product/index.vue")['default']
    'ThemeEcommerceProductLength': typeof import("../components/theme/ecommerce/product/length.vue")['default']
    'ThemeEcommerceProductListData': typeof import("../components/theme/ecommerce/product/listData.vue")['default']
    'ThemeEcommerceProductNewProduct': typeof import("../components/theme/ecommerce/product/newProduct.vue")['default']
    'ThemeEcommerceProductListFilterBlock': typeof import("../components/theme/ecommerce/productList/filterBlock.vue")['default']
    'ThemeEcommerceProductList': typeof import("../components/theme/ecommerce/productList/index.vue")['default']
    'ThemeEcommerceWishlist': typeof import("../components/theme/ecommerce/wishlist/index.vue")['default']
    'ThemeFormFormcontrolCheckboxradioAnimatedButtons': typeof import("../components/theme/form/formcontrol/checkboxradio/AnimatedButtons.vue")['default']
    'ThemeFormFormcontrolCheckboxradioCheckboxRadio': typeof import("../components/theme/form/formcontrol/checkboxradio/CheckboxRadio.vue")['default']
    'ThemeFormFormcontrolCheckboxradioCustomCheckbox': typeof import("../components/theme/form/formcontrol/checkboxradio/CustomCheckbox.vue")['default']
    'ThemeFormFormcontrolCheckboxradioCustumRadio': typeof import("../components/theme/form/formcontrol/checkboxradio/CustumRadio.vue")['default']
    'ThemeFormFormcontrolCheckboxradioDefaultCheckbox': typeof import("../components/theme/form/formcontrol/checkboxradio/DefaultCheckbox.vue")['default']
    'ThemeFormFormcontrolCheckboxradioDefaultRadio': typeof import("../components/theme/form/formcontrol/checkboxradio/DefaultRadio.vue")['default']
    'ThemeFormFormcontrolCheckboxradioDefaultSwitches': typeof import("../components/theme/form/formcontrol/checkboxradio/DefaultSwitches.vue")['default']
    'ThemeFormFormcontrolCheckboxradioImagesCheckbox': typeof import("../components/theme/form/formcontrol/checkboxradio/ImagesCheckbox.vue")['default']
    'ThemeFormFormcontrolCheckboxradioImagesRadio': typeof import("../components/theme/form/formcontrol/checkboxradio/ImagesRadio.vue")['default']
    'ThemeFormFormcontrolCheckboxradioInlineInput': typeof import("../components/theme/form/formcontrol/checkboxradio/InlineInput.vue")['default']
    'ThemeFormFormcontrolCheckboxradioRadioToggle': typeof import("../components/theme/form/formcontrol/checkboxradio/RadioToggle.vue")['default']
    'ThemeFormFormcontrolInputBasicForm': typeof import("../components/theme/form/formcontrol/input/BasicForm.vue")['default']
    'ThemeFormFormcontrolInputEdgesInput': typeof import("../components/theme/form/formcontrol/input/EdgesInput.vue")['default']
    'ThemeFormFormcontrolInputFileInput': typeof import("../components/theme/form/formcontrol/input/FileInput.vue")['default']
    'ThemeFormFormcontrolInputFlatInput': typeof import("../components/theme/form/formcontrol/input/FlatInput.vue")['default']
    'ThemeFormFormcontrolInputFloatingForm': typeof import("../components/theme/form/formcontrol/input/FloatingForm.vue")['default']
    'ThemeFormFormcontrolInputFloatingInput': typeof import("../components/theme/form/formcontrol/input/FloatingInput.vue")['default']
    'ThemeFormFormcontrolInputHtmlInput': typeof import("../components/theme/form/formcontrol/input/HtmlInput.vue")['default']
    'ThemeFormFormcontrolInputRaiseInput': typeof import("../components/theme/form/formcontrol/input/RaiseInput.vue")['default']
    'ThemeFormFormcontrolInputSelectSizing': typeof import("../components/theme/form/formcontrol/input/SelectSizing.vue")['default']
    'ThemeFormFormcontrolInputgroupsBasicInput': typeof import("../components/theme/form/formcontrol/inputgroups/BasicInput.vue")['default']
    'ThemeFormFormcontrolInputgroupsButtonAddons': typeof import("../components/theme/form/formcontrol/inputgroups/ButtonAddons.vue")['default']
    'ThemeFormFormcontrolInputgroupsButtonsDropdowns': typeof import("../components/theme/form/formcontrol/inputgroups/ButtonsDropdowns.vue")['default']
    'ThemeFormFormcontrolInputgroupsCheckboxesRadios': typeof import("../components/theme/form/formcontrol/inputgroups/CheckboxesRadios.vue")['default']
    'ThemeFormFormcontrolInputgroupsCustomForms': typeof import("../components/theme/form/formcontrol/inputgroups/CustomForms.vue")['default']
    'ThemeFormFormcontrolInputgroupsFileInput': typeof import("../components/theme/form/formcontrol/inputgroups/FileInput.vue")['default']
    'ThemeFormFormcontrolInputgroupsMultipleInputs': typeof import("../components/theme/form/formcontrol/inputgroups/MultipleInputs.vue")['default']
    'ThemeFormFormcontrolInputgroupsSegmentedButtons': typeof import("../components/theme/form/formcontrol/inputgroups/SegmentedButtons.vue")['default']
    'ThemeFormFormcontrolInputgroupsSizingInput': typeof import("../components/theme/form/formcontrol/inputgroups/SizingInput.vue")['default']
    'ThemeFormFormcontrolInputgroupsVariationAddons': typeof import("../components/theme/form/formcontrol/inputgroups/VariationAddons.vue")['default']
    'ThemeFormFormcontrolInputmaskMaskInput': typeof import("../components/theme/form/formcontrol/inputmask/MaskInput.vue")['default']
    'ThemeFormFormcontrolMagaoptionBorderStyle': typeof import("../components/theme/form/formcontrol/magaoption/BorderStyle.vue")['default']
    'ThemeFormFormcontrolMagaoptionDashedStyle': typeof import("../components/theme/form/formcontrol/magaoption/DashedStyle.vue")['default']
    'ThemeFormFormcontrolMagaoptionDefultStyle': typeof import("../components/theme/form/formcontrol/magaoption/DefultStyle.vue")['default']
    'ThemeFormFormcontrolMagaoptionHorizontalStyle': typeof import("../components/theme/form/formcontrol/magaoption/HorizontalStyle.vue")['default']
    'ThemeFormFormcontrolMagaoptionInlineStyle': typeof import("../components/theme/form/formcontrol/magaoption/InlineStyle.vue")['default']
    'ThemeFormFormcontrolMagaoptionOfferBorder': typeof import("../components/theme/form/formcontrol/magaoption/OfferBorder.vue")['default']
    'ThemeFormFormcontrolMagaoptionVariationCheckbox': typeof import("../components/theme/form/formcontrol/magaoption/VariationCheckbox.vue")['default']
    'ThemeFormFormcontrolMagaoptionVariationRadio': typeof import("../components/theme/form/formcontrol/magaoption/VariationRadio.vue")['default']
    'ThemeFormFormcontrolMagaoptionVerticalStyle': typeof import("../components/theme/form/formcontrol/magaoption/VerticalStyle.vue")['default']
    'ThemeFormFormcontrolValidationBrowserDefaults': typeof import("../components/theme/form/formcontrol/validation/BrowserDefaults.vue")['default']
    'ThemeFormFormcontrolValidationToltipValidation': typeof import("../components/theme/form/formcontrol/validation/ToltipValidation.vue")['default']
    'ThemeFormFormcontrolValidationForm': typeof import("../components/theme/form/formcontrol/validation/ValidationForm.vue")['default']
    'ThemeFormFormlayoutFormwizardBillingfrom': typeof import("../components/theme/form/formlayout/formwizard/Billingfrom.vue")['default']
    'ThemeFormFormlayoutFormwizardCurrentCart': typeof import("../components/theme/form/formlayout/formwizard/CurrentCart.vue")['default']
    'ThemeFormFormlayoutFormwizardFinishWizard': typeof import("../components/theme/form/formlayout/formwizard/FinishWizard.vue")['default']
    'ThemeFormFormlayoutFormwizardPaymentWizard': typeof import("../components/theme/form/formlayout/formwizard/PaymentWizard.vue")['default']
    'ThemeFormFormlayoutFormwizardShippingForm': typeof import("../components/theme/form/formlayout/formwizard/ShippingForm.vue")['default']
    'ThemeFormFormlayoutFormwizardShippingForms': typeof import("../components/theme/form/formlayout/formwizard/ShippingForms.vue")['default']
    'ThemeFormFormlayoutFormwizardShippingModel': typeof import("../components/theme/form/formlayout/formwizard/ShippingModel.vue")['default']
    'ThemeFormFormlayoutFormwizardSimpleWizard': typeof import("../components/theme/form/formlayout/formwizard/SimpleWizard.vue")['default']
    'ThemeFormFormlayoutFormwizardVerticalValidation': typeof import("../components/theme/form/formlayout/formwizard/VerticalValidation.vue")['default']
    'ThemeFormFormlayoutFormwizardWizardBanking': typeof import("../components/theme/form/formlayout/formwizard/WizardBanking.vue")['default']
    'ThemeFormFormlayoutFormwizardWizardCart': typeof import("../components/theme/form/formlayout/formwizard/WizardCart.vue")['default']
    'ThemeFormFormlayoutFormwizardWizardContact': typeof import("../components/theme/form/formlayout/formwizard/WizardContact.vue")['default']
    'ThemeFormFormlayoutFormwizard2BankWizard': typeof import("../components/theme/form/formlayout/formwizard2/BankWizard.vue")['default']
    'ThemeFormFormlayoutFormwizard2BusinessHorizontal': typeof import("../components/theme/form/formlayout/formwizard2/BusinessHorizontal.vue")['default']
    'ThemeFormFormlayoutFormwizard2BusinessSettings': typeof import("../components/theme/form/formlayout/formwizard2/BusinessSettings.vue")['default']
    'ThemeFormFormlayoutFormwizard2BusinessVertical': typeof import("../components/theme/form/formlayout/formwizard2/BusinessVertical.vue")['default']
    'ThemeFormFormlayoutFormwizard2ChooseAccount': typeof import("../components/theme/form/formlayout/formwizard2/ChooseAccount.vue")['default']
    'ThemeFormFormlayoutFormwizard2ContactDetails': typeof import("../components/theme/form/formlayout/formwizard2/ContactDetails.vue")['default']
    'ThemeFormFormlayoutFormwizard2CustomHorizontal': typeof import("../components/theme/form/formlayout/formwizard2/CustomHorizontal.vue")['default']
    'ThemeFormFormlayoutFormwizard2CustomVertical': typeof import("../components/theme/form/formlayout/formwizard2/CustomVertical.vue")['default']
    'ThemeFormFormlayoutFormwizard2InquiryWizard': typeof import("../components/theme/form/formlayout/formwizard2/InquiryWizard.vue")['default']
    'ThemeFormFormlayoutFormwizard2PayDetails': typeof import("../components/theme/form/formlayout/formwizard2/PayDetails.vue")['default']
    'ThemeFormFormlayoutFormwizard2WizardInfo': typeof import("../components/theme/form/formlayout/formwizard2/WizardInfo.vue")['default']
    'ThemeFormFormlayoutTwofactorAuthenticationModel': typeof import("../components/theme/form/formlayout/twofactor/AuthenticationModel.vue")['default']
    'ThemeFormFormlayoutTwofactorEmailVerification': typeof import("../components/theme/form/formlayout/twofactor/EmailVerification.vue")['default']
    'ThemeFormFormlayoutTwofactorTwoFactorAuthentication': typeof import("../components/theme/form/formlayout/twofactor/TwoFactorAuthentication.vue")['default']
    'ThemeFormFormlayoutTwofactorVerificationCode': typeof import("../components/theme/form/formlayout/twofactor/VerificationCode.vue")['default']
    'ThemeFormFormwidgetsClipboardCopyPortion': typeof import("../components/theme/form/formwidgets/clipboard/CopyPortion.vue")['default']
    'ThemeFormFormwidgetsClipboardParaGraph': typeof import("../components/theme/form/formwidgets/clipboard/ParaGraph.vue")['default']
    'ThemeFormFormwidgetsClipboardTextArea': typeof import("../components/theme/form/formwidgets/clipboard/TextArea.vue")['default']
    'ThemeFormFormwidgetsClipboardTextInput': typeof import("../components/theme/form/formwidgets/clipboard/TextInput.vue")['default']
    'ThemeFormFormwidgetsDatepickerBootstrapCalendar': typeof import("../components/theme/form/formwidgets/datepicker/BootstrapCalendar.vue")['default']
    'ThemeFormFormwidgetsDatepickerCustomizingConjunction': typeof import("../components/theme/form/formwidgets/datepicker/CustomizingConjunction.vue")['default']
    'ThemeFormFormwidgetsDatepickerDatePicker': typeof import("../components/theme/form/formwidgets/datepicker/DatePicker.vue")['default']
    'ThemeFormFormwidgetsDatepickerDateTime': typeof import("../components/theme/form/formwidgets/datepicker/DateTime.vue")['default']
    'ThemeFormFormwidgetsDatepickerDefaultCalander': typeof import("../components/theme/form/formwidgets/datepicker/DefaultCalander.vue")['default']
    'ThemeFormFormwidgetsDatepickerDefultDate': typeof import("../components/theme/form/formwidgets/datepicker/DefultDate.vue")['default']
    'ThemeFormFormwidgetsDatepickerDisabledDates': typeof import("../components/theme/form/formwidgets/datepicker/DisabledDates.vue")['default']
    'ThemeFormFormwidgetsDatepickerHourTimepicker': typeof import("../components/theme/form/formwidgets/datepicker/HourTimepicker.vue")['default']
    'ThemeFormFormwidgetsDatepickerHumanFriendly': typeof import("../components/theme/form/formwidgets/datepicker/HumanFriendly.vue")['default']
    'ThemeFormFormwidgetsDatepickerLimitedTimerange': typeof import("../components/theme/form/formwidgets/datepicker/LimitedTimerange.vue")['default']
    'ThemeFormFormwidgetsDatepickerLimitsTimepicker': typeof import("../components/theme/form/formwidgets/datepicker/LimitsTimepicker.vue")['default']
    'ThemeFormFormwidgetsDatepickerMainmaxTimepicker': typeof import("../components/theme/form/formwidgets/datepicker/MainmaxTimepicker.vue")['default']
    'ThemeFormFormwidgetsDatepickerMinmaxDate': typeof import("../components/theme/form/formwidgets/datepicker/MinmaxDate.vue")['default']
    'ThemeFormFormwidgetsDatepickerMultipleDate': typeof import("../components/theme/form/formwidgets/datepicker/MultipleDate.vue")['default']
    'ThemeFormFormwidgetsDatepickerPreloadingDates': typeof import("../components/theme/form/formwidgets/datepicker/PreloadingDates.vue")['default']
    'ThemeFormFormwidgetsDatepickerPreloadingTime': typeof import("../components/theme/form/formwidgets/datepicker/PreloadingTime.vue")['default']
    'ThemeFormFormwidgetsDatepickerRangeDate': typeof import("../components/theme/form/formwidgets/datepicker/RangeDate.vue")['default']
    'ThemeFormFormwidgetsDatepickerTimeOnly': typeof import("../components/theme/form/formwidgets/datepicker/TimeOnly.vue")['default']
    'ThemeFormFormwidgetsDatepickerTimePicker': typeof import("../components/theme/form/formwidgets/datepicker/TimePicker.vue")['default']
    'ThemeFormFormwidgetsSelect2FullColored': typeof import("../components/theme/form/formwidgets/select2/FullColored.vue")['default']
    'ThemeFormFormwidgetsSelect2OutlineColor': typeof import("../components/theme/form/formwidgets/select2/OutlineColor.vue")['default']
    'ThemeFormFormwidgetsSelect2SearchBox': typeof import("../components/theme/form/formwidgets/select2/SearchBox.vue")['default']
    'ThemeFormFormwidgetsSelect2SelectView': typeof import("../components/theme/form/formwidgets/select2/SelectView.vue")['default']
    'ThemeFormFormwidgetsSwitchBordersIcons': typeof import("../components/theme/form/formwidgets/switch/BordersIcons.vue")['default']
    'ThemeFormFormwidgetsSwitchCustomSwitch': typeof import("../components/theme/form/formwidgets/switch/CustomSwitch.vue")['default']
    'ThemeFormFormwidgetsSwitchDisabledOutline': typeof import("../components/theme/form/formwidgets/switch/DisabledOutline.vue")['default']
    'ThemeFormFormwidgetsSwitchIconsSwitch': typeof import("../components/theme/form/formwidgets/switch/IconsSwitch.vue")['default']
    'ThemeFormFormwidgetsSwitchIcons': typeof import("../components/theme/form/formwidgets/switch/SwitchIcons.vue")['default']
    'ThemeFormFormwidgetsSwitchSizing': typeof import("../components/theme/form/formwidgets/switch/SwitchSizing.vue")['default']
    'ThemeFormFormwidgetsSwitchUncheckedSwitch': typeof import("../components/theme/form/formwidgets/switch/UncheckedSwitch.vue")['default']
    'ThemeFormFormwidgetsSwitchVariationSwitches': typeof import("../components/theme/form/formwidgets/switch/VariationSwitches.vue")['default']
    'ThemeFormFormwidgetsTouchspinDefaultTouchspin': typeof import("../components/theme/form/formwidgets/touchspin/DefaultTouchspin.vue")['default']
    'ThemeFormFormwidgetsTouchspinIconsTouchspin': typeof import("../components/theme/form/formwidgets/touchspin/IconsTouchspin.vue")['default']
    'ThemeFormFormwidgetsTouchspinOutlinedTouchspin': typeof import("../components/theme/form/formwidgets/touchspin/OutlinedTouchspin.vue")['default']
    'ThemeFormFormwidgetsTouchspinPostfixTouchspin': typeof import("../components/theme/form/formwidgets/touchspin/PostfixTouchspin.vue")['default']
    'ThemeFormFormwidgetsTouchspinRoundedTouchspin': typeof import("../components/theme/form/formwidgets/touchspin/RoundedTouchspin.vue")['default']
    'ThemeFormFormwidgetsTouchspinDefulttouchspinDefaultDanger': typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultDanger.vue")['default']
    'ThemeFormFormwidgetsTouchspinDefulttouchspinDefaultDark': typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultDark.vue")['default']
    'ThemeFormFormwidgetsTouchspinDefulttouchspinDefaultInfo': typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultInfo.vue")['default']
    'ThemeFormFormwidgetsTouchspinDefulttouchspinDefaultPrimery': typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultPrimery.vue")['default']
    'ThemeFormFormwidgetsTouchspinDefulttouchspinDefaultSecondary': typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultSecondary.vue")['default']
    'ThemeFormFormwidgetsTouchspinDefulttouchspinDefaultSuccess': typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultSuccess.vue")['default']
    'ThemeFormFormwidgetsTouchspinDefulttouchspinDefaultWarning': typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultWarning.vue")['default']
    'ThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineDanger': typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlineDanger.vue")['default']
    'ThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineDark': typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlineDark.vue")['default']
    'ThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineInfo': typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlineInfo.vue")['default']
    'ThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlinePrimary': typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlinePrimary.vue")['default']
    'ThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineSecondary': typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlineSecondary.vue")['default']
    'ThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineSuccess': typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlineSuccess.vue")['default']
    'ThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineWarning': typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlineWarning.vue")['default']
    'ThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedDanger': typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedDanger.vue")['default']
    'ThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedDark': typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedDark.vue")['default']
    'ThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedInfo': typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedInfo.vue")['default']
    'ThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedPrimary': typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedPrimary.vue")['default']
    'ThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedSecondary': typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedSecondary.vue")['default']
    'ThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedSuccess': typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedSuccess.vue")['default']
    'ThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedWarning': typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedWarning.vue")['default']
    'ThemeFormFormwidgetsTypeaheadBasicTypeahead': typeof import("../components/theme/form/formwidgets/typeahead/BasicTypeahead.vue")['default']
    'ThemeFormFormwidgetsTypeaheadBloodhoundTyeahead': typeof import("../components/theme/form/formwidgets/typeahead/BloodhoundTyeahead.vue")['default']
    'ThemeFormFormwidgetsTypeaheadCustomTemplates': typeof import("../components/theme/form/formwidgets/typeahead/CustomTemplates.vue")['default']
    'ThemeFormFormwidgetsTypeaheadMultipleSections': typeof import("../components/theme/form/formwidgets/typeahead/MultipleSections.vue")['default']
    'ThemeFormFormwidgetsTypeaheadPrefetchTypeahead': typeof import("../components/theme/form/formwidgets/typeahead/PrefetchTypeahead.vue")['default']
    'ThemeFormFormwidgetsTypeaheadRemoteTypeahead': typeof import("../components/theme/form/formwidgets/typeahead/RemoteTypeahead.vue")['default']
    'ThemeFormFormwidgetsTypeaheadRtlSupport': typeof import("../components/theme/form/formwidgets/typeahead/RtlSupport.vue")['default']
    'ThemeFormFormwidgetsTypeaheadScrollableMenu': typeof import("../components/theme/form/formwidgets/typeahead/ScrollableMenu.vue")['default']
    'ThemeGalleryGridDesc': typeof import("../components/theme/gallery/grid/GridDesc.vue")['default']
    'ThemeGalleryGridGallery': typeof import("../components/theme/gallery/grid/GridGallery.vue")['default']
    'ThemeGalleryHoverEffect1': typeof import("../components/theme/gallery/hover/HoverEffect1.vue")['default']
    'ThemeGalleryHoverEffect10': typeof import("../components/theme/gallery/hover/HoverEffect10.vue")['default']
    'ThemeGalleryHoverEffect11': typeof import("../components/theme/gallery/hover/HoverEffect11.vue")['default']
    'ThemeGalleryHoverEffect12': typeof import("../components/theme/gallery/hover/HoverEffect12.vue")['default']
    'ThemeGalleryHoverEffect13': typeof import("../components/theme/gallery/hover/HoverEffect13.vue")['default']
    'ThemeGalleryHoverEffect14': typeof import("../components/theme/gallery/hover/HoverEffect14.vue")['default']
    'ThemeGalleryHoverEffect15': typeof import("../components/theme/gallery/hover/HoverEffect15.vue")['default']
    'ThemeGalleryHoverEffect2': typeof import("../components/theme/gallery/hover/HoverEffect2.vue")['default']
    'ThemeGalleryHoverEffect3': typeof import("../components/theme/gallery/hover/HoverEffect3.vue")['default']
    'ThemeGalleryHoverEffect4': typeof import("../components/theme/gallery/hover/HoverEffect4.vue")['default']
    'ThemeGalleryHoverEffect5': typeof import("../components/theme/gallery/hover/HoverEffect5.vue")['default']
    'ThemeGalleryHoverEffect6': typeof import("../components/theme/gallery/hover/HoverEffect6.vue")['default']
    'ThemeGalleryHoverEffect7': typeof import("../components/theme/gallery/hover/HoverEffect7.vue")['default']
    'ThemeGalleryHoverEffect8': typeof import("../components/theme/gallery/hover/HoverEffect8.vue")['default']
    'ThemeGalleryHoverEffect9': typeof import("../components/theme/gallery/hover/HoverEffect9.vue")['default']
    'ThemeGalleryMasonryDesc': typeof import("../components/theme/gallery/masonry/MasonryDesc.vue")['default']
    'ThemeGalleryMasonryGallery': typeof import("../components/theme/gallery/masonry/MasonryGallery.vue")['default']
    'ThemeIconsFontAwesomeBrandIcons': typeof import("../components/theme/icons/font_awesome/BrandIcons.vue")['default']
    'ThemeIconsFontAwesomeCurrencyIcons': typeof import("../components/theme/icons/font_awesome/CurrencyIcons.vue")['default']
    'ThemeIconsFontAwesomeDirectionalIcons': typeof import("../components/theme/icons/font_awesome/DirectionalIcons.vue")['default']
    'ThemeIconsFontAwesomeFormControl': typeof import("../components/theme/icons/font_awesome/FormControl.vue")['default']
    'ThemeIconsFontAwesomeIconsView': typeof import("../components/theme/icons/font_awesome/IconsView.vue")['default']
    'ThemeIconsFontAwesomeMedicalIcons': typeof import("../components/theme/icons/font_awesome/MedicalIcons.vue")['default']
    'ThemeIconsFontAwesomeSpinnerIcons': typeof import("../components/theme/icons/font_awesome/SpinnerIcons.vue")['default']
    'ThemeIconsFontAwesomeTextEditor': typeof import("../components/theme/icons/font_awesome/TextEditor.vue")['default']
    'ThemeIconsFontAwesomeVideoPlayer': typeof import("../components/theme/icons/font_awesome/VideoPlayer.vue")['default']
    'ThemeIconsFontAwesomeWebAppIcons': typeof import("../components/theme/icons/font_awesome/WebAppIcons.vue")['default']
    'ThemeIconsIcoIconAbstractIcon': typeof import("../components/theme/icons/ico_icon/AbstractIcon.vue")['default']
    'ThemeIconsIcoIconAnimalIcon': typeof import("../components/theme/icons/ico_icon/AnimalIcon.vue")['default']
    'ThemeIconsIcoIconBrandIcons': typeof import("../components/theme/icons/ico_icon/BrandIcons.vue")['default']
    'ThemeIconsIcoIconBusinessIcons': typeof import("../components/theme/icons/ico_icon/BusinessIcons.vue")['default']
    'ThemeIconsIcoIconChartIcons': typeof import("../components/theme/icons/ico_icon/ChartIcons.vue")['default']
    'ThemeIconsIcoIconConstructionIcons': typeof import("../components/theme/icons/ico_icon/ConstructionIcons.vue")['default']
    'ThemeIconsIcoIconCurrencyIcons': typeof import("../components/theme/icons/ico_icon/CurrencyIcons.vue")['default']
    'ThemeIconsIcoIconDeviceIcons': typeof import("../components/theme/icons/ico_icon/DeviceIcons.vue")['default']
    'ThemeIconsIcoIconDirectionalIcons': typeof import("../components/theme/icons/ico_icon/DirectionalIcons.vue")['default']
    'ThemeIconsIcoIconEducationIcons': typeof import("../components/theme/icons/ico_icon/EducationIcons.vue")['default']
    'ThemeIconsIcoIconEmoticonIcons': typeof import("../components/theme/icons/ico_icon/EmoticonIcons.vue")['default']
    'ThemeIconsIcoIconFiletypeIcons': typeof import("../components/theme/icons/ico_icon/FiletypeIcons.vue")['default']
    'ThemeIconsIcoIconFoodIcons': typeof import("../components/theme/icons/ico_icon/FoodIcons.vue")['default']
    'ThemeIconsIcoIconKidsIcons': typeof import("../components/theme/icons/ico_icon/KidsIcons.vue")['default']
    'ThemeIconsIcoIconLawIcons': typeof import("../components/theme/icons/ico_icon/LawIcons.vue")['default']
    'ThemeIconsIcoIconMathematicalIcons': typeof import("../components/theme/icons/ico_icon/MathematicalIcons.vue")['default']
    'ThemeIconsIcoIconMedicalIcons': typeof import("../components/theme/icons/ico_icon/MedicalIcons.vue")['default']
    'ThemeIconsIcoIconMobileIcons': typeof import("../components/theme/icons/ico_icon/MobileIcons.vue")['default']
    'ThemeIconsIcoIconMultimediaIcons': typeof import("../components/theme/icons/ico_icon/MultimediaIcons.vue")['default']
    'ThemeIconsIcoIconPaymentIcons': typeof import("../components/theme/icons/ico_icon/PaymentIcons.vue")['default']
    'ThemeIconsIcoIconPersonIcons': typeof import("../components/theme/icons/ico_icon/PersonIcons.vue")['default']
    'ThemeIconsIcoIconSearchIcons': typeof import("../components/theme/icons/ico_icon/SearchIcons.vue")['default']
    'ThemeIconsIcoIconSocialIcons': typeof import("../components/theme/icons/ico_icon/SocialIcons.vue")['default']
    'ThemeIconsIcoIconSportIcons': typeof import("../components/theme/icons/ico_icon/SportIcons.vue")['default']
    'ThemeIconsIcoIconTextIcons': typeof import("../components/theme/icons/ico_icon/TextIcons.vue")['default']
    'ThemeIconsIcoIconTransportIcons': typeof import("../components/theme/icons/ico_icon/TransportIcons.vue")['default']
    'ThemeIconsIcoIconTravelIcons': typeof import("../components/theme/icons/ico_icon/TravelIcons.vue")['default']
    'ThemeIconsIcoIconWeatherIcons': typeof import("../components/theme/icons/ico_icon/WeatherIcons.vue")['default']
    'ThemeIconsIcoIconWebIcons': typeof import("../components/theme/icons/ico_icon/WebIcons.vue")['default']
    'ThemeIconsThemifyIconBrandIcons': typeof import("../components/theme/icons/themify_icon/BrandIcons.vue")['default']
    'ThemeIconsThemifyIconControlIcons': typeof import("../components/theme/icons/themify_icon/ControlIcons.vue")['default']
    'ThemeIconsThemifyIconDirectionIcons': typeof import("../components/theme/icons/themify_icon/DirectionIcons.vue")['default']
    'ThemeIconsThemifyIconTextEditor': typeof import("../components/theme/icons/themify_icon/TextEditor.vue")['default']
    'ThemeIconsThemifyIconWebAppIcons': typeof import("../components/theme/icons/themify_icon/WebAppIcons.vue")['default']
    'ThemeIconsWhetherIcons': typeof import("../components/theme/icons/whether/WhetherIcons.vue")['default']
    'ThemeInternationalizationLanguageInternationa': typeof import("../components/theme/internationalization/LanguageInternationa.vue")['default']
    'ThemeInternationalizationLanguagePicker': typeof import("../components/theme/internationalization/LanguagePicker.vue")['default']
    'ThemeInternationalizationLanguageView': typeof import("../components/theme/internationalization/LanguageView.vue")['default']
    'ThemeJobApply': typeof import("../components/theme/job/apply/JobApply.vue")['default']
    'ThemeJobApplyPersonalBirthDate': typeof import("../components/theme/job/apply/personal/BirthDate.vue")['default']
    'ThemeJobApplyPersonalDateView': typeof import("../components/theme/job/apply/personal/DateView.vue")['default']
    'ThemeJobApplyPersonalDetails': typeof import("../components/theme/job/apply/personal/PersonalDetails.vue")['default']
    'ThemeJobApplyPersonalYourEducation': typeof import("../components/theme/job/apply/personal/YourEducation.vue")['default']
    'ThemeJobCardView': typeof import("../components/theme/job/card/CardView.vue")['default']
    'ThemeJobDetails': typeof import("../components/theme/job/details/JobDetails.vue")['default']
    'ThemeJobDetailsSimilarJobs': typeof import("../components/theme/job/details/SimilarJobs.vue")['default']
    'ThemeJobFiltersFilterView': typeof import("../components/theme/job/filters/FilterView.vue")['default']
    'ThemeJobFiltersIndustryView': typeof import("../components/theme/job/filters/IndustryView.vue")['default']
    'ThemeJobFiltersJobTitle': typeof import("../components/theme/job/filters/JobTitle.vue")['default']
    'ThemeJobFiltersLocationView': typeof import("../components/theme/job/filters/LocationView.vue")['default']
    'ThemeJobFiltersSpecificSkills': typeof import("../components/theme/job/filters/SpecificSkills.vue")['default']
    'ThemeJobListsJobList': typeof import("../components/theme/job/lists/JobList.vue")['default']
    'ThemeKnowledgebaseBrowseArticles': typeof import("../components/theme/knowledgebase/BrowseArticles.vue")['default']
    'ThemeKnowledgebaseFaqWidgets': typeof import("../components/theme/knowledgebase/FaqWidgets.vue")['default']
    'ThemeKnowledgebaseFeaturesFaq': typeof import("../components/theme/knowledgebase/FeaturesFaq.vue")['default']
    'ThemeKnowledgebaseSearch': typeof import("../components/theme/knowledgebase/KnowledgebaseSearch.vue")['default']
    'ThemeKnowledgebaseLatestArticles': typeof import("../components/theme/knowledgebase/LatestArticles.vue")['default']
    'ThemeKpkpDatatableZeroConfiguration': typeof import("../components/theme/kpkp/datatable/zeroConfiguration.vue")['default']
    'ThemeLearningCourseBlogBox': typeof import("../components/theme/learning/course/BlogBox.vue")['default']
    'ThemeLearningCourseDetail': typeof import("../components/theme/learning/course/CourseDetail.vue")['default']
    'ThemeLearningFiltersCategoriesView': typeof import("../components/theme/learning/filters/CategoriesView.vue")['default']
    'ThemeLearningFiltersFindCourse': typeof import("../components/theme/learning/filters/FindCourse.vue")['default']
    'ThemeLearningFiltersUpcomingCourses': typeof import("../components/theme/learning/filters/UpcomingCourses.vue")['default']
    'ThemeLearningListsLearningList': typeof import("../components/theme/learning/lists/LearningList.vue")['default']
    'ThemeMapsDraggableMarker': typeof import("../components/theme/maps/DraggableMarker.vue")['default']
    'ThemeMapsGooglePolyline': typeof import("../components/theme/maps/GooglePolyline.vue")['default']
    'ThemeMapsMarkersMap': typeof import("../components/theme/maps/MarkersMap.vue")['default']
    'ThemeMapsMultiLanguage': typeof import("../components/theme/maps/MultiLanguage.vue")['default']
    'ThemeMapsMultiLanguage2': typeof import("../components/theme/maps/MultiLanguage2.vue")['default']
    'ThemeMapsSimpleMap': typeof import("../components/theme/maps/SimpleMap.vue")['default']
    'ThemeMapsTrianglePolygon': typeof import("../components/theme/maps/TrianglePolygon.vue")['default']
    'ThemePagesFaqAccordion': typeof import("../components/theme/pages/faq/FaqAccordion.vue")['default']
    'ThemePagesFaqArticles': typeof import("../components/theme/pages/faq/FaqArticles.vue")['default']
    'ThemePagesFaqWidgets': typeof import("../components/theme/pages/faq/FaqWidgets.vue")['default']
    'ThemePagesFaqFeaturedTutorial': typeof import("../components/theme/pages/faq/FeaturedTutorial.vue")['default']
    'ThemePagesFaqIntellectualProperty': typeof import("../components/theme/pages/faq/IntellectualProperty.vue")['default']
    'ThemePagesFaqNavigationView': typeof import("../components/theme/pages/faq/NavigationView.vue")['default']
    'ThemePagesFaqSellingAccording': typeof import("../components/theme/pages/faq/SellingAccording.vue")['default']
    'ThemePagesFaqUserAccounts': typeof import("../components/theme/pages/faq/UserAccounts.vue")['default']
    'ThemePagesSearchAllLink': typeof import("../components/theme/pages/search/AllLink.vue")['default']
    'ThemePagesSearchImageLink': typeof import("../components/theme/pages/search/ImageLink.vue")['default']
    'ThemePagesSearchBar': typeof import("../components/theme/pages/search/SearchBar.vue")['default']
    'ThemePagesSearchTab': typeof import("../components/theme/pages/search/SearchTab.vue")['default']
    'ThemePagesSearchVideoLink': typeof import("../components/theme/pages/search/VideoLink.vue")['default']
    'ThemePagesSocialappActivityFeed': typeof import("../components/theme/pages/socialapp/ActivityFeed.vue")['default']
    'ThemePagesSocialappActivityLog': typeof import("../components/theme/pages/socialapp/ActivityLog.vue")['default']
    'ThemePagesSocialappAddFriend': typeof import("../components/theme/pages/socialapp/AddFriend.vue")['default']
    'ThemePagesSocialappEducationView': typeof import("../components/theme/pages/socialapp/EducationView.vue")['default']
    'ThemePagesSocialappFollowersView': typeof import("../components/theme/pages/socialapp/FollowersView.vue")['default']
    'ThemePagesSocialappFollowingView': typeof import("../components/theme/pages/socialapp/FollowingView.vue")['default']
    'ThemePagesSocialappFriendsView': typeof import("../components/theme/pages/socialapp/FriendsView.vue")['default']
    'ThemePagesSocialappHobbiesView': typeof import("../components/theme/pages/socialapp/HobbiesView.vue")['default']
    'ThemePagesSocialappIndexAbout': typeof import("../components/theme/pages/socialapp/IndexAbout.vue")['default']
    'ThemePagesSocialappIndexFriends': typeof import("../components/theme/pages/socialapp/IndexFriends.vue")['default']
    'ThemePagesSocialappIndexTimeline': typeof import("../components/theme/pages/socialapp/IndexTimeline.vue")['default']
    'ThemePagesSocialappLatestPhotos': typeof import("../components/theme/pages/socialapp/LatestPhotos.vue")['default']
    'ThemePagesSocialappMutualFriends': typeof import("../components/theme/pages/socialapp/MutualFriends.vue")['default']
    'ThemePagesSocialappMyProfile': typeof import("../components/theme/pages/socialapp/MyProfile.vue")['default']
    'ThemePagesSocialappPhotosView': typeof import("../components/theme/pages/socialapp/PhotosView.vue")['default']
    'ThemePagesSocialappProfileIntro': typeof import("../components/theme/pages/socialapp/ProfileIntro.vue")['default']
    'ThemePagesSocialappSocialHeader': typeof import("../components/theme/pages/socialapp/SocialHeader.vue")['default']
    'ThemePagesSocialappSociallAccording': typeof import("../components/theme/pages/socialapp/SociallAccording.vue")['default']
    'ThemePagesSocialappUsersSocial': typeof import("../components/theme/pages/socialapp/UsersSocial.vue")['default']
    'ThemePagesSocialappUsersSocial1': typeof import("../components/theme/pages/socialapp/UsersSocial1.vue")['default']
    'ThemePagesSocialappYourProfile': typeof import("../components/theme/pages/socialapp/YourProfile.vue")['default']
    'ThemePagesSupportTable': typeof import("../components/theme/pages/support/SupportTable.vue")['default']
    'ThemePagesSupportTicket': typeof import("../components/theme/pages/support/SupportTicket.vue")['default']
    'ThemeProjectCreate': typeof import("../components/theme/project/create/index.vue")['default']
    'ThemeProjectListData': typeof import("../components/theme/project/list/data.vue")['default']
    'ThemeProjectList': typeof import("../components/theme/project/list/index.vue")['default']
    'ThemeTableBootstrapBasicTable': typeof import("../components/theme/table/bootstrap/BasicTable.vue")['default']
    'ThemeTableBootstrapBreckpointSpecific': typeof import("../components/theme/table/bootstrap/BreckpointSpecific.vue")['default']
    'ThemeTableBootstrapCaptionTable': typeof import("../components/theme/table/bootstrap/CaptionTable.vue")['default']
    'ThemeTableBootstrapCustomTable': typeof import("../components/theme/table/bootstrap/CustomTable.vue")['default']
    'ThemeTableBootstrapDashedBorder': typeof import("../components/theme/table/bootstrap/DashedBorder.vue")['default']
    'ThemeTableBootstrapHeadOptions': typeof import("../components/theme/table/bootstrap/HeadOptions.vue")['default']
    'ThemeTableBootstrapHoverableTable': typeof import("../components/theme/table/bootstrap/HoverableTable.vue")['default']
    'ThemeTableBootstrapInverseTable': typeof import("../components/theme/table/bootstrap/InverseTable.vue")['default']
    'ThemeTableBootstrapPrimaryBackground': typeof import("../components/theme/table/bootstrap/PrimaryBackground.vue")['default']
    'ThemeTableBootstrapResponsiveTable': typeof import("../components/theme/table/bootstrap/ResponsiveTable.vue")['default']
    'ThemeTableBootstrapSizingTable': typeof import("../components/theme/table/bootstrap/SizingTable.vue")['default']
    'ThemeTableBootstrapStripedRow': typeof import("../components/theme/table/bootstrap/StripedRow.vue")['default']
    'ThemeTableDatatableZeroConfiguration': typeof import("../components/theme/table/datatable/zeroConfiguration.vue")['default']
    'ThemeTableTablecomponentAlertComponent': typeof import("../components/theme/table/tablecomponent/AlertComponent.vue")['default']
    'ThemeTableTablecomponentBadgesComponent': typeof import("../components/theme/table/tablecomponent/BadgesComponent.vue")['default']
    'ThemeTableTablecomponentCheckboxComponent': typeof import("../components/theme/table/tablecomponent/CheckboxComponent.vue")['default']
    'ThemeTableTablecomponentInputComponent': typeof import("../components/theme/table/tablecomponent/InputComponent.vue")['default']
    'ThemeTableTablecomponentProgressbarComponent': typeof import("../components/theme/table/tablecomponent/ProgressbarComponent.vue")['default']
    'ThemeTableTablecomponentRadioButtons': typeof import("../components/theme/table/tablecomponent/RadioButtons.vue")['default']
    'ThemeTableTablecomponentSelectComponent': typeof import("../components/theme/table/tablecomponent/SelectComponent.vue")['default']
    'ThemeTableTablecomponentSwitchComponent': typeof import("../components/theme/table/tablecomponent/SwitchComponent.vue")['default']
    'ThemeTableTablecomponentTootipComponent': typeof import("../components/theme/table/tablecomponent/TootipComponent.vue")['default']
    'ThemeTableTablecomponentUiTable': typeof import("../components/theme/table/tablecomponent/UiTable.vue")['default']
    'ThemeUikitsAccordionFlushAccordion': typeof import("../components/theme/uikits/accordion/FlushAccordion.vue")['default']
    'ThemeUikitsAccordionHorizontalAccordion': typeof import("../components/theme/uikits/accordion/HorizontalAccordion.vue")['default']
    'ThemeUikitsAccordionIconsAccordion': typeof import("../components/theme/uikits/accordion/IconsAccordion.vue")['default']
    'ThemeUikitsAccordionMultipleAccordion': typeof import("../components/theme/uikits/accordion/MultipleAccordion.vue")['default']
    'ThemeUikitsAccordionOutlineAccordion': typeof import("../components/theme/uikits/accordion/OutlineAccordion.vue")['default']
    'ThemeUikitsAccordionSimpleAccordion': typeof import("../components/theme/uikits/accordion/SimpleAccordion.vue")['default']
    'ThemeUikitsAlertAdditionalContent': typeof import("../components/theme/uikits/alert/AdditionalContent.vue")['default']
    'ThemeUikitsAlertAlertsSection': typeof import("../components/theme/uikits/alert/AlertsSection.vue")['default']
    'ThemeUikitsAlertDarkColor': typeof import("../components/theme/uikits/alert/DarkColor.vue")['default']
    'ThemeUikitsAlertLightClor': typeof import("../components/theme/uikits/alert/LightClor.vue")['default']
    'ThemeUikitsAlertTextAlert': typeof import("../components/theme/uikits/alert/TextAlert.vue")['default']
    'ThemeUikitsAvatarGrouping': typeof import("../components/theme/uikits/avatar/AvatarGrouping.vue")['default']
    'ThemeUikitsAvatarRatio': typeof import("../components/theme/uikits/avatar/AvatarRatio.vue")['default']
    'ThemeUikitsAvatarShapes': typeof import("../components/theme/uikits/avatar/AvatarShapes.vue")['default']
    'ThemeUikitsAvatarSize': typeof import("../components/theme/uikits/avatar/AvatarSize.vue")['default']
    'ThemeUikitsAvatarStatus': typeof import("../components/theme/uikits/avatar/AvatarStatus.vue")['default']
    'ThemeUikitsDropdownAlignmentsDropdown': typeof import("../components/theme/uikits/dropdown/AlignmentsDropdown.vue")['default']
    'ThemeUikitsDropdownBasicDropdown': typeof import("../components/theme/uikits/dropdown/BasicDropdown.vue")['default']
    'ThemeUikitsDropdownDividerDropdown': typeof import("../components/theme/uikits/dropdown/DividerDropdown.vue")['default']
    'ThemeUikitsDropdownSection': typeof import("../components/theme/uikits/dropdown/DropdownSection.vue")['default']
    'ThemeUikitsDropdownSizing': typeof import("../components/theme/uikits/dropdown/DropdownSizing.vue")['default']
    'ThemeUikitsDropdownHelperCard': typeof import("../components/theme/uikits/dropdown/HelperCard.vue")['default']
    'ThemeUikitsDropdownJustifyContents': typeof import("../components/theme/uikits/dropdown/JustifyContents.vue")['default']
    'ThemeUikitsDropdownRoundedDropdown': typeof import("../components/theme/uikits/dropdown/RoundedDropdown.vue")['default']
    'ThemeUikitsDropdownSplitDropdown': typeof import("../components/theme/uikits/dropdown/SplitDropdown.vue")['default']
    'ThemeUikitsDropdownUniqueDropdown': typeof import("../components/theme/uikits/dropdown/UniqueDropdown.vue")['default']
    'ThemeUikitsGridAlignment': typeof import("../components/theme/uikits/grid/GridAlignment.vue")['default']
    'ThemeUikitsGridColumm': typeof import("../components/theme/uikits/grid/GridColumm.vue")['default']
    'ThemeUikitsGridOptions': typeof import("../components/theme/uikits/grid/GridOptions.vue")['default']
    'ThemeUikitsGridSection': typeof import("../components/theme/uikits/grid/GridSection.vue")['default']
    'ThemeUikitsHelperBackgroundColors': typeof import("../components/theme/uikits/helper/BackgroundColors.vue")['default']
    'ThemeUikitsHelperBorderColor': typeof import("../components/theme/uikits/helper/BorderColor.vue")['default']
    'ThemeUikitsHelperFontStyle': typeof import("../components/theme/uikits/helper/FontStyle.vue")['default']
    'ThemeUikitsHelperBorders': typeof import("../components/theme/uikits/helper/HelperBorders.vue")['default']
    'ThemeUikitsHelperDisplays': typeof import("../components/theme/uikits/helper/HelperDisplays.vue")['default']
    'ThemeUikitsHelperImagesSizes': typeof import("../components/theme/uikits/helper/ImagesSizes.vue")['default']
    'ThemeUikitsHelperMarginPeding': typeof import("../components/theme/uikits/helper/MarginPeding.vue")['default']
    'ThemeUikitsHelperTextColors': typeof import("../components/theme/uikits/helper/TextColors.vue")['default']
    'ThemeUikitsListsActiveLists': typeof import("../components/theme/uikits/lists/ActiveLists.vue")['default']
    'ThemeUikitsListsBadgeList': typeof import("../components/theme/uikits/lists/BadgeList.vue")['default']
    'ThemeUikitsListsCheckboxRedio': typeof import("../components/theme/uikits/lists/CheckboxRedio.vue")['default']
    'ThemeUikitsListsContextualClasses': typeof import("../components/theme/uikits/lists/ContextualClasses.vue")['default']
    'ThemeUikitsListsCustomList': typeof import("../components/theme/uikits/lists/CustomList.vue")['default']
    'ThemeUikitsListsDefaultLists': typeof import("../components/theme/uikits/lists/DefaultLists.vue")['default']
    'ThemeUikitsListsDisabledLists': typeof import("../components/theme/uikits/lists/DisabledLists.vue")['default']
    'ThemeUikitsListsFlushLists': typeof import("../components/theme/uikits/lists/FlushLists.vue")['default']
    'ThemeUikitsListsHorizontalLists': typeof import("../components/theme/uikits/lists/HorizontalLists.vue")['default']
    'ThemeUikitsListsJavaScriptBehavior': typeof import("../components/theme/uikits/lists/JavaScriptBehavior.vue")['default']
    'ThemeUikitsListsNumberList': typeof import("../components/theme/uikits/lists/NumberList.vue")['default']
    'ThemeUikitsListsScrollableLists': typeof import("../components/theme/uikits/lists/ScrollableLists.vue")['default']
    'ThemeUikitsModalBasicModal': typeof import("../components/theme/uikits/modal/BasicModal.vue")['default']
    'ThemeUikitsModalCenteredModal': typeof import("../components/theme/uikits/modal/CenteredModal.vue")['default']
    'ThemeUikitsModalCustomModals': typeof import("../components/theme/uikits/modal/CustomModals.vue")['default']
    'ThemeUikitsModalFullscreenModal': typeof import("../components/theme/uikits/modal/FullscreenModal.vue")['default']
    'ThemeUikitsModalSizeModel': typeof import("../components/theme/uikits/modal/SizeModel.vue")['default']
    'ThemeUikitsModalStaticModal': typeof import("../components/theme/uikits/modal/StaticModal.vue")['default']
    'ThemeUikitsModalToggleModals': typeof import("../components/theme/uikits/modal/ToggleModals.vue")['default']
    'ThemeUikitsModalModalsBalanceModal': typeof import("../components/theme/uikits/modal/modals/BalanceModal.vue")['default']
    'ThemeUikitsModalModalsExtralargeModal': typeof import("../components/theme/uikits/modal/modals/ExtralargeModal.vue")['default']
    'ThemeUikitsModalModalsFullscreenLg': typeof import("../components/theme/uikits/modal/modals/FullscreenLg.vue")['default']
    'ThemeUikitsModalModalsFullscreenMd': typeof import("../components/theme/uikits/modal/modals/FullscreenMd.vue")['default']
    'ThemeUikitsModalModalsFullscreenModallabel': typeof import("../components/theme/uikits/modal/modals/FullscreenModallabel.vue")['default']
    'ThemeUikitsModalModalsFullscreenSm': typeof import("../components/theme/uikits/modal/modals/FullscreenSm.vue")['default']
    'ThemeUikitsModalModalsFullscreenXl': typeof import("../components/theme/uikits/modal/modals/FullscreenXl.vue")['default']
    'ThemeUikitsModalModalsFullscreenXxl': typeof import("../components/theme/uikits/modal/modals/FullscreenXxl.vue")['default']
    'ThemeUikitsModalModalsFullsereenModa': typeof import("../components/theme/uikits/modal/modals/FullsereenModa.vue")['default']
    'ThemeUikitsModalModalsLargeModal': typeof import("../components/theme/uikits/modal/modals/LargeModal.vue")['default']
    'ThemeUikitsModalModalsOpenModel': typeof import("../components/theme/uikits/modal/modals/OpenModel.vue")['default']
    'ThemeUikitsModalModalsProfileModal': typeof import("../components/theme/uikits/modal/modals/ProfileModal.vue")['default']
    'ThemeUikitsModalModalsResultModal': typeof import("../components/theme/uikits/modal/modals/ResultModal.vue")['default']
    'ThemeUikitsModalModalsScrollingModal': typeof import("../components/theme/uikits/modal/modals/ScrollingModal.vue")['default']
    'ThemeUikitsModalModalsSimpleModel': typeof import("../components/theme/uikits/modal/modals/SimpleModel.vue")['default']
    'ThemeUikitsModalModalsSmallModal': typeof import("../components/theme/uikits/modal/modals/SmallModal.vue")['default']
    'ThemeUikitsModalModalsTooltipsModal': typeof import("../components/theme/uikits/modal/modals/TooltipsModal.vue")['default']
    'ThemeUikitsPopoverBasicPopover': typeof import("../components/theme/uikits/popover/BasicPopover.vue")['default']
    'ThemeUikitsPopoverDirectionPopover': typeof import("../components/theme/uikits/popover/DirectionPopover.vue")['default']
    'ThemeUikitsPopoverOffsetPopover': typeof import("../components/theme/uikits/popover/OffsetPopover.vue")['default']
    'ThemeUikitsProgressBasicProgressbar': typeof import("../components/theme/uikits/progress/BasicProgressbar.vue")['default']
    'ThemeUikitsProgressCustomProgressbars': typeof import("../components/theme/uikits/progress/CustomProgressbars.vue")['default']
    'ThemeUikitsProgressHeightProgressbars': typeof import("../components/theme/uikits/progress/HeightProgressbars.vue")['default']
    'ThemeUikitsProgressMultipleBars': typeof import("../components/theme/uikits/progress/MultipleBars.vue")['default']
    'ThemeUikitsProgressSmallProgressbars': typeof import("../components/theme/uikits/progress/SmallProgressbars.vue")['default']
    'ThemeUikitsProgressStripedProgressbar': typeof import("../components/theme/uikits/progress/StripedProgressbar.vue")['default']
    'ThemeUikitsTabsBorderTabs': typeof import("../components/theme/uikits/tabs/BorderTabs.vue")['default']
    'ThemeUikitsTabsIconTabs': typeof import("../components/theme/uikits/tabs/IconTabs.vue")['default']
    'ThemeUikitsTabsJustifyTabs': typeof import("../components/theme/uikits/tabs/JustifyTabs.vue")['default']
    'ThemeUikitsTabsLeftTabs': typeof import("../components/theme/uikits/tabs/LeftTabs.vue")['default']
    'ThemeUikitsTabsMaterialTabs': typeof import("../components/theme/uikits/tabs/MaterialTabs.vue")['default']
    'ThemeUikitsTabsPillsTabs': typeof import("../components/theme/uikits/tabs/PillsTabs.vue")['default']
    'ThemeUikitsTabsSimpleTabs': typeof import("../components/theme/uikits/tabs/SimpleTabs.vue")['default']
    'ThemeUikitsTabsVerticalTabs': typeof import("../components/theme/uikits/tabs/VerticalTabs.vue")['default']
    'ThemeUikitsTagpillsBadgesContextual': typeof import("../components/theme/uikits/tagpills/BadgesContextual.vue")['default']
    'ThemeUikitsTagpillsNumberBadge': typeof import("../components/theme/uikits/tagpills/NumberBadge.vue")['default']
    'ThemeUikitsTagpillsPillsContextual': typeof import("../components/theme/uikits/tagpills/PillsContextual.vue")['default']
    'ThemeUikitsTagpillsTagsIcons': typeof import("../components/theme/uikits/tagpills/TagsIcons.vue")['default']
    'ThemeUikitsTagpillsTagsSection': typeof import("../components/theme/uikits/tagpills/TagsSection.vue")['default']
    'ThemeUikitsTooltipBasicTooltip': typeof import("../components/theme/uikits/tooltip/BasicTooltip.vue")['default']
    'ThemeUikitsTooltipColoredTooltip': typeof import("../components/theme/uikits/tooltip/ColoredTooltip.vue")['default']
    'ThemeUikitsTooltipDirectionsTooltip': typeof import("../components/theme/uikits/tooltip/DirectionsTooltip.vue")['default']
    'ThemeUikitsTooltipFilledTooltip': typeof import("../components/theme/uikits/tooltip/FilledTooltip.vue")['default']
    'ThemeUikitsTooltipHoverEffect': typeof import("../components/theme/uikits/tooltip/HoverEffect.vue")['default']
    'ThemeUikitsTypographyColoredHeadings': typeof import("../components/theme/uikits/typography/ColoredHeadings.vue")['default']
    'ThemeUikitsTypographyDisplayHeadings': typeof import("../components/theme/uikits/typography/DisplayHeadings.vue")['default']
    'ThemeUikitsTypographyFontWeight': typeof import("../components/theme/uikits/typography/FontWeight.vue")['default']
    'ThemeUikitsTypographyHeadingsSeaction': typeof import("../components/theme/uikits/typography/HeadingsSeaction.vue")['default']
    'ThemeUikitsTypographyListingTypography': typeof import("../components/theme/uikits/typography/ListingTypography.vue")['default']
    'ThemeUikitsTypographyTextElements': typeof import("../components/theme/uikits/typography/TextElements.vue")['default']
    'ThemeUserCards': typeof import("../components/theme/user/cards/index.vue")['default']
    'ThemeUserEdit': typeof import("../components/theme/user/edit/index.vue")['default']
    'ThemeUserEditProfile': typeof import("../components/theme/user/edit/profile.vue")['default']
    'ThemeUserEditTable': typeof import("../components/theme/user/edit/table.vue")['default']
    'ThemeUserProfile': typeof import("../components/theme/user/profile/index.vue")['default']
    'ThemeUserProfilePost': typeof import("../components/theme/user/profile/post.vue")['default']
    'ThemeUserProfilePost1': typeof import("../components/theme/user/profile/post1.vue")['default']
    'ThemeUserProfilePost2': typeof import("../components/theme/user/profile/post2.vue")['default']
    'ThemeUserProfilePost3': typeof import("../components/theme/user/profile/post3.vue")['default']
    'ThemeWidgetsChartOrderStatus': typeof import("../components/theme/widgets/chart/OrderStatus.vue")['default']
    'ThemeWidgetsChartTotalProduct': typeof import("../components/theme/widgets/chart/TotalProduct.vue")['default']
    'ThemeWidgetsChartTotalProject': typeof import("../components/theme/widgets/chart/TotalProject.vue")['default']
    'ThemeWidgetsChartTotalSale': typeof import("../components/theme/widgets/chart/TotalSale.vue")['default']
    'ThemeWidgetsChartCurrency': typeof import("../components/theme/widgets/chart/currency.vue")['default']
    'ThemeWidgetsChart': typeof import("../components/theme/widgets/chart/index.vue")['default']
    'ThemeWidgetsGeneralActivity': typeof import("../components/theme/widgets/general/activity.vue")['default']
    'ThemeWidgetsGeneralEarning': typeof import("../components/theme/widgets/general/earning.vue")['default']
    'ThemeWidgetsGeneral': typeof import("../components/theme/widgets/general/index.vue")['default']
    'ThemeWidgetsGeneralPipline': typeof import("../components/theme/widgets/general/pipline.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'Icon': typeof import("../node_modules/nuxt-icon/dist/runtime/Icon.vue")['default']
    'IconCSS': typeof import("../node_modules/nuxt-icon/dist/runtime/IconCSS.vue")['default']
    'LCircle': typeof import("@vue-leaflet/vue-leaflet")['LCircle']
    'LCircleMarker': typeof import("@vue-leaflet/vue-leaflet")['LCircleMarker']
    'LControl': typeof import("@vue-leaflet/vue-leaflet")['LControl']
    'LControlAttribution': typeof import("@vue-leaflet/vue-leaflet")['LControlAttribution']
    'LControlLayers': typeof import("@vue-leaflet/vue-leaflet")['LControlLayers']
    'LControlScale': typeof import("@vue-leaflet/vue-leaflet")['LControlScale']
    'LControlZoom': typeof import("@vue-leaflet/vue-leaflet")['LControlZoom']
    'LFeatureGroup': typeof import("@vue-leaflet/vue-leaflet")['LFeatureGroup']
    'LGeoJson': typeof import("@vue-leaflet/vue-leaflet")['LGeoJson']
    'LIcon': typeof import("@vue-leaflet/vue-leaflet")['LIcon']
    'LImageOverlay': typeof import("@vue-leaflet/vue-leaflet")['LImageOverlay']
    'LLayerGroup': typeof import("@vue-leaflet/vue-leaflet")['LLayerGroup']
    'LMap': typeof import("@vue-leaflet/vue-leaflet")['LMap']
    'LMarker': typeof import("@vue-leaflet/vue-leaflet")['LMarker']
    'LPolygon': typeof import("@vue-leaflet/vue-leaflet")['LPolygon']
    'LPolyline': typeof import("@vue-leaflet/vue-leaflet")['LPolyline']
    'LPopup': typeof import("@vue-leaflet/vue-leaflet")['LPopup']
    'LRectangle': typeof import("@vue-leaflet/vue-leaflet")['LRectangle']
    'LTileLayer': typeof import("@vue-leaflet/vue-leaflet")['LTileLayer']
    'LTooltip': typeof import("@vue-leaflet/vue-leaflet")['LTooltip']
    'LWmsTileLayer': typeof import("@vue-leaflet/vue-leaflet")['LWmsTileLayer']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyCommonJobSidebar': LazyComponent<typeof import("../components/common/JobSidebar.vue")['default']>
    'LazyCommonLearningFilter': LazyComponent<typeof import("../components/common/LearningFilter.vue")['default']>
    'LazyCommonSuccessfulWizard': LazyComponent<typeof import("../components/common/SuccessfulWizard.vue")['default']>
    'LazyCommonTimerView': LazyComponent<typeof import("../components/common/TimerView.vue")['default']>
    'LazyCommonBlockTapTop': LazyComponent<typeof import("../components/common/block/TapTop.vue")['default']>
    'LazyCommonBlockBreadcrumb': LazyComponent<typeof import("../components/common/block/breadcrumb.vue")['default']>
    'LazyCommonBlockCustomizerBuyNow': LazyComponent<typeof import("../components/common/block/customizer/BuyNow.vue")['default']>
    'LazyCommonBlockCustomizerCheckFeatures': LazyComponent<typeof import("../components/common/block/customizer/CheckFeatures.vue")['default']>
    'LazyCommonBlockCustomizerConfigurationView': LazyComponent<typeof import("../components/common/block/customizer/ConfigurationView.vue")['default']>
    'LazyCommonBlockCustomizerCustomColor': LazyComponent<typeof import("../components/common/block/customizer/CustomColor.vue")['default']>
    'LazyCommonBlockCustomizerCustomSetting': LazyComponent<typeof import("../components/common/block/customizer/CustomSetting.vue")['default']>
    'LazyCommonBlockCustomizerSetting': LazyComponent<typeof import("../components/common/block/customizer/CustomizerSetting.vue")['default']>
    'LazyCommonBlockCustomizerSupport': LazyComponent<typeof import("../components/common/block/customizer/CustomizerSupport.vue")['default']>
    'LazyCommonBlockCustomizerDocumentSection': LazyComponent<typeof import("../components/common/block/customizer/DocumentSection.vue")['default']>
    'LazyCommonBlockCustomizerIndexCustomizer': LazyComponent<typeof import("../components/common/block/customizer/IndexCustomizer.vue")['default']>
    'LazyCommonBlockCustomizerLayoutType': LazyComponent<typeof import("../components/common/block/customizer/LayoutType.vue")['default']>
    'LazyCommonBlockCustomizerMixLayout': LazyComponent<typeof import("../components/common/block/customizer/MixLayout.vue")['default']>
    'LazyCommonBlockCustomizerSidebarType': LazyComponent<typeof import("../components/common/block/customizer/SidebarType.vue")['default']>
    'LazyCommonBlockEmoji': LazyComponent<typeof import("../components/common/block/emoji.vue")['default']>
    'LazyCommonBlockFooterView': LazyComponent<typeof import("../components/common/block/footer/FooterView.vue")['default']>
    'LazyCommonBlockFooterLanguageView': LazyComponent<typeof import("../components/common/block/footer/LanguageView.vue")['default']>
    'LazyCommonBlockHeaderBookmarkSearch': LazyComponent<typeof import("../components/common/block/header/BookmarkSearch.vue")['default']>
    'LazyCommonBlockHeaderCart': LazyComponent<typeof import("../components/common/block/header/cart.vue")['default']>
    'LazyCommonBlockHeader': LazyComponent<typeof import("../components/common/block/header/index.vue")['default']>
    'LazyCommonBlockHeaderMessage': LazyComponent<typeof import("../components/common/block/header/message.vue")['default']>
    'LazyCommonBlockHeaderMode': LazyComponent<typeof import("../components/common/block/header/mode.vue")['default']>
    'LazyCommonBlockHeaderNotification': LazyComponent<typeof import("../components/common/block/header/notification.vue")['default']>
    'LazyCommonBlockHeaderProfile': LazyComponent<typeof import("../components/common/block/header/profile.vue")['default']>
    'LazyCommonBlockHeaderSearch': LazyComponent<typeof import("../components/common/block/header/search.vue")['default']>
    'LazyCommonBlockSidebarProfileSidebar': LazyComponent<typeof import("../components/common/block/sidebar/ProfileSidebar.vue")['default']>
    'LazyCommonBlockSidebarSearchbar': LazyComponent<typeof import("../components/common/block/sidebar/SidebarSearchbar.vue")['default']>
    'LazyCommonBlockSidebar': LazyComponent<typeof import("../components/common/block/sidebar/index.vue")['default']>
    'LazyCommonBlockSidebarNavMenu': LazyComponent<typeof import("../components/common/block/sidebar/navMenu.vue")['default']>
    'LazyCommonCard1': LazyComponent<typeof import("../components/common/card/1.vue")['default']>
    'LazyCommonCard2': LazyComponent<typeof import("../components/common/card/2.vue")['default']>
    'LazyCommonCard3': LazyComponent<typeof import("../components/common/card/3.vue")['default']>
    'LazyCommonCard4': LazyComponent<typeof import("../components/common/card/4.vue")['default']>
    'LazyCommonChartsAnnotationChart': LazyComponent<typeof import("../components/common/charts/AnnotationChart.vue")['default']>
    'LazyCommonChartsAreaSpaline': LazyComponent<typeof import("../components/common/charts/AreaSpaline.vue")['default']>
    'LazyCommonChartsBasicApex': LazyComponent<typeof import("../components/common/charts/BasicApex.vue")['default']>
    'LazyCommonChartsBasicBar': LazyComponent<typeof import("../components/common/charts/BasicBar.vue")['default']>
    'LazyCommonChartsCandlestickChart': LazyComponent<typeof import("../components/common/charts/CandlestickChart.vue")['default']>
    'LazyCommonChartsChartBubble': LazyComponent<typeof import("../components/common/charts/ChartBubble.vue")['default']>
    'LazyCommonChartsChartCrypto': LazyComponent<typeof import("../components/common/charts/ChartCrypto.vue")['default']>
    'LazyCommonChartsChartWidget13': LazyComponent<typeof import("../components/common/charts/ChartWidget13.vue")['default']>
    'LazyCommonChartsChartWidget4': LazyComponent<typeof import("../components/common/charts/ChartWidget4.vue")['default']>
    'LazyCommonChartsChartWidget6': LazyComponent<typeof import("../components/common/charts/ChartWidget6.vue")['default']>
    'LazyCommonChartsChartWidget7': LazyComponent<typeof import("../components/common/charts/ChartWidget7.vue")['default']>
    'LazyCommonChartsCircleChart': LazyComponent<typeof import("../components/common/charts/CircleChart.vue")['default']>
    'LazyCommonChartsColumnChart': LazyComponent<typeof import("../components/common/charts/ColumnChart.vue")['default']>
    'LazyCommonChartsCryptoAnnotation': LazyComponent<typeof import("../components/common/charts/CryptoAnnotation.vue")['default']>
    'LazyCommonChartsDonutChart': LazyComponent<typeof import("../components/common/charts/DonutChart.vue")['default']>
    'LazyCommonChartsEarningAverage': LazyComponent<typeof import("../components/common/charts/EarningAverage.vue")['default']>
    'LazyCommonChartsEarningChart': LazyComponent<typeof import("../components/common/charts/EarningChart.vue")['default']>
    'LazyCommonChartsFinanceChart': LazyComponent<typeof import("../components/common/charts/FinanceChart.vue")['default']>
    'LazyCommonChartsMixedChart': LazyComponent<typeof import("../components/common/charts/MixedChart.vue")['default']>
    'LazyCommonChartsMonthlySales': LazyComponent<typeof import("../components/common/charts/MonthlySales.vue")['default']>
    'LazyCommonChartsOrderStatus': LazyComponent<typeof import("../components/common/charts/OrderStatus.vue")['default']>
    'LazyCommonChartsPieChart': LazyComponent<typeof import("../components/common/charts/PieChart.vue")['default']>
    'LazyCommonChartsPipelineChart': LazyComponent<typeof import("../components/common/charts/PipelineChart.vue")['default']>
    'LazyCommonChartsPipelineChart1': LazyComponent<typeof import("../components/common/charts/PipelineChart1.vue")['default']>
    'LazyCommonChartsPolarArea': LazyComponent<typeof import("../components/common/charts/PolarArea.vue")['default']>
    'LazyCommonChartsProfitChart': LazyComponent<typeof import("../components/common/charts/ProfitChart.vue")['default']>
    'LazyCommonChartsProfitChart1': LazyComponent<typeof import("../components/common/charts/ProfitChart1.vue")['default']>
    'LazyCommonChartsProgressChart': LazyComponent<typeof import("../components/common/charts/ProgressChart.vue")['default']>
    'LazyCommonChartsProgressChart1': LazyComponent<typeof import("../components/common/charts/ProgressChart1.vue")['default']>
    'LazyCommonChartsProgressChart2': LazyComponent<typeof import("../components/common/charts/ProgressChart2.vue")['default']>
    'LazyCommonChartsProgressChart3': LazyComponent<typeof import("../components/common/charts/ProgressChart3.vue")['default']>
    'LazyCommonChartsProgressChart4': LazyComponent<typeof import("../components/common/charts/ProgressChart4.vue")['default']>
    'LazyCommonChartsProjectBar': LazyComponent<typeof import("../components/common/charts/ProjectBar.vue")['default']>
    'LazyCommonChartsProjectBar1': LazyComponent<typeof import("../components/common/charts/ProjectBar1.vue")['default']>
    'LazyCommonChartsProjectEarning': LazyComponent<typeof import("../components/common/charts/ProjectEarning.vue")['default']>
    'LazyCommonChartsRadarChart': LazyComponent<typeof import("../components/common/charts/RadarChart.vue")['default']>
    'LazyCommonChartsRadialChart': LazyComponent<typeof import("../components/common/charts/RadialChart.vue")['default']>
    'LazyCommonChartsRevenueChart': LazyComponent<typeof import("../components/common/charts/RevenueChart.vue")['default']>
    'LazyCommonChartsRevenueOrder': LazyComponent<typeof import("../components/common/charts/RevenueOrder.vue")['default']>
    'LazyCommonChartsSteplineChart': LazyComponent<typeof import("../components/common/charts/SteplineChart.vue")['default']>
    'LazyCommonChartsTotalClients': LazyComponent<typeof import("../components/common/charts/TotalClients.vue")['default']>
    'LazyCommonChartsTotalTransactionChart': LazyComponent<typeof import("../components/common/charts/TotalTransactionChart.vue")['default']>
    'LazyCommonChartsUsesChart': LazyComponent<typeof import("../components/common/charts/UsesChart.vue")['default']>
    'LazyCommonChartsWeeklyVisitor': LazyComponent<typeof import("../components/common/charts/WeeklyVisitor.vue")['default']>
    'LazyCommonChartsGooglechartAreaCharts': LazyComponent<typeof import("../components/common/charts/googlechart/AreaCharts.vue")['default']>
    'LazyCommonChartsGooglechartGoogleChart1': LazyComponent<typeof import("../components/common/charts/googlechart/GoogleChart1.vue")['default']>
    'LazyCommonChartsGooglechartGoogleChart2': LazyComponent<typeof import("../components/common/charts/googlechart/GoogleChart2.vue")['default']>
    'LazyCommonChartsGooglechartPieChart1': LazyComponent<typeof import("../components/common/charts/googlechart/PieChart1.vue")['default']>
    'LazyCommonChartsGooglechartPieChart2': LazyComponent<typeof import("../components/common/charts/googlechart/PieChart2.vue")['default']>
    'LazyCommonChartsGooglechartWordTree': LazyComponent<typeof import("../components/common/charts/googlechart/WordTree.vue")['default']>
    'LazyCommonChartsGooglechartColumnChart': LazyComponent<typeof import("../components/common/charts/googlechart/columnChart.vue")['default']>
    'LazyCommonChartsProjectOverview': LazyComponent<typeof import("../components/common/charts/projectOverview.vue")['default']>
    'LazyCommonChartsProjectOverview1': LazyComponent<typeof import("../components/common/charts/projectOverview1.vue")['default']>
    'LazyCommonInputFieldsCommonField': LazyComponent<typeof import("../components/common/inputFields/commonField.vue")['default']>
    'LazyCommonInputFieldsRadioField': LazyComponent<typeof import("../components/common/inputFields/radioField.vue")['default']>
    'LazyCommonInputFieldsSelectBox': LazyComponent<typeof import("../components/common/inputFields/selectBox.vue")['default']>
    'LazyCommonModalsAddCategory': LazyComponent<typeof import("../components/common/modals/AddCategory.vue")['default']>
    'LazyCommonModalsCareateTag': LazyComponent<typeof import("../components/common/modals/CareateTag.vue")['default']>
    'LazyCommonModalsNewContact': LazyComponent<typeof import("../components/common/modals/NewContact.vue")['default']>
    'LazyCommonModalsNewTask': LazyComponent<typeof import("../components/common/modals/NewTask.vue")['default']>
    'LazyCommonModalsAddLabel': LazyComponent<typeof import("../components/common/modals/addLabel.vue")['default']>
    'LazyCommonModalsCompose': LazyComponent<typeof import("../components/common/modals/compose.vue")['default']>
    'LazyCommonModalsNewBookmark': LazyComponent<typeof import("../components/common/modals/newBookmark.vue")['default']>
    'LazyCommonModalsQuickView': LazyComponent<typeof import("../components/common/modals/quickView.vue")['default']>
    'LazyCommonModalsTagsView': LazyComponent<typeof import("../components/common/modals/tagsView.vue")['default']>
    'LazyThemeAdvanceAnimationBox': LazyComponent<typeof import("../components/theme/advance/animation/AnimationBox.vue")['default']>
    'LazyThemeAdvanceBasicFlat': LazyComponent<typeof import("../components/theme/advance/basic/BasicFlat.vue")['default']>
    'LazyThemeAdvanceBasicDarkCard': LazyComponent<typeof import("../components/theme/advance/basic/DarkCard.vue")['default']>
    'LazyThemeAdvanceBasicFooterCard': LazyComponent<typeof import("../components/theme/advance/basic/FooterCard.vue")['default']>
    'LazyThemeAdvanceBasicIconCard': LazyComponent<typeof import("../components/theme/advance/basic/IconCard.vue")['default']>
    'LazyThemeAdvanceBasicShadowCard': LazyComponent<typeof import("../components/theme/advance/basic/ShadowCard.vue")['default']>
    'LazyThemeAdvanceBreadcrumbColoredNavigation': LazyComponent<typeof import("../components/theme/advance/breadcrumb/ColoredNavigation.vue")['default']>
    'LazyThemeAdvanceBreadcrumbDefaultBreadcrumb': LazyComponent<typeof import("../components/theme/advance/breadcrumb/DefaultBreadcrumb.vue")['default']>
    'LazyThemeAdvanceBreadcrumbDividersBreadcrumbs': LazyComponent<typeof import("../components/theme/advance/breadcrumb/DividersBreadcrumbs.vue")['default']>
    'LazyThemeAdvanceBreadcrumbIconsBreadcrumb': LazyComponent<typeof import("../components/theme/advance/breadcrumb/IconsBreadcrumb.vue")['default']>
    'LazyThemeAdvanceBreadcrumbNavBreadcrumb': LazyComponent<typeof import("../components/theme/advance/breadcrumb/NavBreadcrumb.vue")['default']>
    'LazyThemeAdvanceCreativeAbsoluteCard': LazyComponent<typeof import("../components/theme/advance/creative/AbsoluteCard.vue")['default']>
    'LazyThemeAdvanceCreativeBorderCard': LazyComponent<typeof import("../components/theme/advance/creative/BorderCard.vue")['default']>
    'LazyThemeAdvanceCreativePrimaryState': LazyComponent<typeof import("../components/theme/advance/creative/PrimaryState.vue")['default']>
    'LazyThemeAdvanceCreativeSecondaryState': LazyComponent<typeof import("../components/theme/advance/creative/SecondaryState.vue")['default']>
    'LazyThemeAdvanceCreativeWarningState': LazyComponent<typeof import("../components/theme/advance/creative/WarningState.vue")['default']>
    'LazyThemeAdvanceCropperImageCropper': LazyComponent<typeof import("../components/theme/advance/cropper/ImageCropper.vue")['default']>
    'LazyThemeAdvanceDraggableCard': LazyComponent<typeof import("../components/theme/advance/draggable/DraggableCard.vue")['default']>
    'LazyThemeAdvanceDraggableFooterCard': LazyComponent<typeof import("../components/theme/advance/draggable/FooterCard.vue")['default']>
    'LazyThemeAdvanceDropzoneDefaultDropzone': LazyComponent<typeof import("../components/theme/advance/dropzone/DefaultDropzone.vue")['default']>
    'LazyThemeAdvanceDropzoneImageDropzone': LazyComponent<typeof import("../components/theme/advance/dropzone/ImageDropzone.vue")['default']>
    'LazyThemeAdvanceDropzoneMultiDropzone': LazyComponent<typeof import("../components/theme/advance/dropzone/MultiDropzone.vue")['default']>
    'LazyThemeAdvanceDropzoneSingleDropzone': LazyComponent<typeof import("../components/theme/advance/dropzone/SingleDropzone.vue")['default']>
    'LazyThemeAdvanceOwlcarouselAutoPlay': LazyComponent<typeof import("../components/theme/advance/owlcarousel/AutoPlay.vue")['default']>
    'LazyThemeAdvanceOwlcarouselCrossFade': LazyComponent<typeof import("../components/theme/advance/owlcarousel/CrossFade.vue")['default']>
    'LazyThemeAdvanceOwlcarouselDarkVariant': LazyComponent<typeof import("../components/theme/advance/owlcarousel/DarkVariant.vue")['default']>
    'LazyThemeAdvanceOwlcarouselDisableTouch': LazyComponent<typeof import("../components/theme/advance/owlcarousel/DisableTouch.vue")['default']>
    'LazyThemeAdvanceOwlcarouselIndividualCarousel': LazyComponent<typeof import("../components/theme/advance/owlcarousel/IndividualCarousel.vue")['default']>
    'LazyThemeAdvanceOwlcarouselMouseWheel': LazyComponent<typeof import("../components/theme/advance/owlcarousel/MouseWheel.vue")['default']>
    'LazyThemeAdvanceOwlcarouselSlidesOnly': LazyComponent<typeof import("../components/theme/advance/owlcarousel/SlidesOnly.vue")['default']>
    'LazyThemeAdvanceOwlcarouselWithCaptions': LazyComponent<typeof import("../components/theme/advance/owlcarousel/WithCaptions.vue")['default']>
    'LazyThemeAdvanceOwlcarouselWithControls': LazyComponent<typeof import("../components/theme/advance/owlcarousel/WithControls.vue")['default']>
    'LazyThemeAdvanceOwlcarouselWithIndicators': LazyComponent<typeof import("../components/theme/advance/owlcarousel/WithIndicators.vue")['default']>
    'LazyThemeAdvancePaginationAlignmentsPagination': LazyComponent<typeof import("../components/theme/advance/pagination/AlignmentsPagination.vue")['default']>
    'LazyThemeAdvancePaginationDisabledPagination': LazyComponent<typeof import("../components/theme/advance/pagination/DisabledPagination.vue")['default']>
    'LazyThemeAdvancePaginationIconsPagenation': LazyComponent<typeof import("../components/theme/advance/pagination/IconsPagenation.vue")['default']>
    'LazyThemeAdvancePaginationRoundedPagination': LazyComponent<typeof import("../components/theme/advance/pagination/RoundedPagination.vue")['default']>
    'LazyThemeAdvancePaginationSimplePagination': LazyComponent<typeof import("../components/theme/advance/pagination/SimplePagination.vue")['default']>
    'LazyThemeAdvancePaginationSizingPagination': LazyComponent<typeof import("../components/theme/advance/pagination/SizingPagination.vue")['default']>
    'LazyThemeAdvanceRangsliderColorRang': LazyComponent<typeof import("../components/theme/advance/rangslider/ColorRang.vue")['default']>
    'LazyThemeAdvanceRangsliderCustomRang': LazyComponent<typeof import("../components/theme/advance/rangslider/CustomRang.vue")['default']>
    'LazyThemeAdvanceRangsliderDefultRang': LazyComponent<typeof import("../components/theme/advance/rangslider/DefultRang.vue")['default']>
    'LazyThemeAdvanceRangsliderMinMax': LazyComponent<typeof import("../components/theme/advance/rangslider/MinMax.vue")['default']>
    'LazyThemeAdvanceRangsliderNegativeRang': LazyComponent<typeof import("../components/theme/advance/rangslider/NegativeRang.vue")['default']>
    'LazyThemeAdvanceRangsliderPrefixRang': LazyComponent<typeof import("../components/theme/advance/rangslider/PrefixRang.vue")['default']>
    'LazyThemeAdvanceRangsliderPrettifyRang': LazyComponent<typeof import("../components/theme/advance/rangslider/PrettifyRang.vue")['default']>
    'LazyThemeAdvanceRangsliderStepsRange': LazyComponent<typeof import("../components/theme/advance/rangslider/StepsRange.vue")['default']>
    'LazyThemeAdvanceRatingAnimationRating': LazyComponent<typeof import("../components/theme/advance/rating/AnimationRating.vue")['default']>
    'LazyThemeAdvanceRatingClickableValue': LazyComponent<typeof import("../components/theme/advance/rating/ClickableValue.vue")['default']>
    'LazyThemeAdvanceRatingDisabledRating': LazyComponent<typeof import("../components/theme/advance/rating/DisabledRating.vue")['default']>
    'LazyThemeAdvanceRatingHeartRating': LazyComponent<typeof import("../components/theme/advance/rating/HeartRating.vue")['default']>
    'LazyThemeAdvanceRatingMovieRating': LazyComponent<typeof import("../components/theme/advance/rating/MovieRating.vue")['default']>
    'LazyThemeAdvanceRatingStarRating': LazyComponent<typeof import("../components/theme/advance/rating/StarRating.vue")['default']>
    'LazyThemeAdvanceRibbonsLeftRibbons': LazyComponent<typeof import("../components/theme/advance/ribbons/LeftRibbons.vue")['default']>
    'LazyThemeAdvanceRibbonsRightRibbons': LazyComponent<typeof import("../components/theme/advance/ribbons/RightRibbons.vue")['default']>
    'LazyThemeAdvanceScrollableBadgesScrollbar': LazyComponent<typeof import("../components/theme/advance/scrollable/BadgesScrollbar.vue")['default']>
    'LazyThemeAdvanceScrollableBothSide': LazyComponent<typeof import("../components/theme/advance/scrollable/BothSide.vue")['default']>
    'LazyThemeAdvanceScrollableCustomScrollbar': LazyComponent<typeof import("../components/theme/advance/scrollable/CustomScrollbar.vue")['default']>
    'LazyThemeAdvanceScrollableHorizontalScrollbar': LazyComponent<typeof import("../components/theme/advance/scrollable/HorizontalScrollbar.vue")['default']>
    'LazyThemeAdvanceScrollableProfileScrollable': LazyComponent<typeof import("../components/theme/advance/scrollable/ProfileScrollable.vue")['default']>
    'LazyThemeAdvanceScrollableContent': LazyComponent<typeof import("../components/theme/advance/scrollable/ScrollableContent.vue")['default']>
    'LazyThemeAdvanceScrollableSmallScroll': LazyComponent<typeof import("../components/theme/advance/scrollable/SmallScroll.vue")['default']>
    'LazyThemeAdvanceSweealertAutoClose': LazyComponent<typeof import("../components/theme/advance/sweealert/AutoClose.vue")['default']>
    'LazyThemeAdvanceSweealertBasicAlert': LazyComponent<typeof import("../components/theme/advance/sweealert/BasicAlert.vue")['default']>
    'LazyThemeAdvanceSweealertDangerAlert': LazyComponent<typeof import("../components/theme/advance/sweealert/DangerAlert.vue")['default']>
    'LazyThemeAdvanceSweealertInfoAlert': LazyComponent<typeof import("../components/theme/advance/sweealert/InfoAlert.vue")['default']>
    'LazyThemeAdvanceSweealertPikachuAlert': LazyComponent<typeof import("../components/theme/advance/sweealert/PikachuAlert.vue")['default']>
    'LazyThemeAdvanceSweealertQuestionsAlert': LazyComponent<typeof import("../components/theme/advance/sweealert/QuestionsAlert.vue")['default']>
    'LazyThemeAdvanceSweealertRequestMovie': LazyComponent<typeof import("../components/theme/advance/sweealert/RequestMovie.vue")['default']>
    'LazyThemeAdvanceSweealertSuccessMessage': LazyComponent<typeof import("../components/theme/advance/sweealert/SuccessMessage.vue")['default']>
    'LazyThemeAdvanceSweealertTextUnder': LazyComponent<typeof import("../components/theme/advance/sweealert/TextUnder.vue")['default']>
    'LazyThemeAdvanceSweealertUsernameAlert': LazyComponent<typeof import("../components/theme/advance/sweealert/UsernameAlert.vue")['default']>
    'LazyThemeAdvanceSweealertWarningAlert': LazyComponent<typeof import("../components/theme/advance/sweealert/WarningAlert.vue")['default']>
    'LazyThemeAdvanceSweealertWarningMode': LazyComponent<typeof import("../components/theme/advance/sweealert/WarningMode.vue")['default']>
    'LazyThemeAdvanceTimelineBasicTimeline': LazyComponent<typeof import("../components/theme/advance/timeline/BasicTimeline.vue")['default']>
    'LazyThemeAdvanceTimelineDesignerSlider': LazyComponent<typeof import("../components/theme/advance/timeline/DesignerSlider.vue")['default']>
    'LazyThemeAdvanceTimelineHorizontalTimeline': LazyComponent<typeof import("../components/theme/advance/timeline/HorizontalTimeline.vue")['default']>
    'LazyThemeAdvanceTimelineHoveringTimeline': LazyComponent<typeof import("../components/theme/advance/timeline/HoveringTimeline.vue")['default']>
    'LazyThemeAdvanceTimelineView': LazyComponent<typeof import("../components/theme/advance/timeline/TimelineView.vue")['default']>
    'LazyThemeAdvanceTimelineVariationTimeline': LazyComponent<typeof import("../components/theme/advance/timeline/VariationTimeline.vue")['default']>
    'LazyThemeAdvanceToastsBasicToasts': LazyComponent<typeof import("../components/theme/advance/toasts/BasicToasts.vue")['default']>
    'LazyThemeAdvanceToastsIconToasts': LazyComponent<typeof import("../components/theme/advance/toasts/IconToasts.vue")['default']>
    'LazyThemeAdvanceToastsPositionToasts': LazyComponent<typeof import("../components/theme/advance/toasts/PositionToasts.vue")['default']>
    'LazyThemeAdvanceTourFirstPost': LazyComponent<typeof import("../components/theme/advance/tour/FirstPost.vue")['default']>
    'LazyThemeAdvanceTourLastPost': LazyComponent<typeof import("../components/theme/advance/tour/LastPost.vue")['default']>
    'LazyThemeAdvanceTourSecondPost': LazyComponent<typeof import("../components/theme/advance/tour/SecondPost.vue")['default']>
    'LazyThemeAdvanceTourSociaMedia': LazyComponent<typeof import("../components/theme/advance/tour/SociaMedia.vue")['default']>
    'LazyThemeAdvanceTourThirdPost': LazyComponent<typeof import("../components/theme/advance/tour/ThirdPost.vue")['default']>
    'LazyThemeAdvanceTourUserProfile': LazyComponent<typeof import("../components/theme/advance/tour/UserProfile.vue")['default']>
    'LazyThemeAdvanceTreeBasicTree': LazyComponent<typeof import("../components/theme/advance/tree/BasicTree.vue")['default']>
    'LazyThemeAdvanceTreeCheckTree': LazyComponent<typeof import("../components/theme/advance/tree/CheckTree.vue")['default']>
    'LazyThemeAdvanceTreeDragDropTree': LazyComponent<typeof import("../components/theme/advance/tree/DragDropTree.vue")['default']>
    'LazyThemeAdvanceTreeEditTree': LazyComponent<typeof import("../components/theme/advance/tree/EditTree.vue")['default']>
    'LazyThemeAnimationAnimateBox': LazyComponent<typeof import("../components/theme/animation/animate/AnimateBox.vue")['default']>
    'LazyThemeAnimationAnimateOption': LazyComponent<typeof import("../components/theme/animation/animate/AnimateOption.vue")['default']>
    'LazyThemeAnimationAosExample': LazyComponent<typeof import("../components/theme/animation/aos/AosExample.vue")['default']>
    'LazyThemeAnimationAosInitAOS': LazyComponent<typeof import("../components/theme/animation/aos/InitAOS.vue")['default']>
    'LazyThemeAppBookmarkEditView': LazyComponent<typeof import("../components/theme/app/bookmark/editView.vue")['default']>
    'LazyThemeAppBookmark': LazyComponent<typeof import("../components/theme/app/bookmark/index.vue")['default']>
    'LazyThemeAppBookmarkList': LazyComponent<typeof import("../components/theme/app/bookmark/list/index.vue")['default']>
    'LazyThemeAppBookmarkRightContent': LazyComponent<typeof import("../components/theme/app/bookmark/rightContent.vue")['default']>
    'LazyThemeAppButtonsBlockLevel': LazyComponent<typeof import("../components/theme/app/buttons/BlockLevel.vue")['default']>
    'LazyThemeAppButtonsButtonGroup': LazyComponent<typeof import("../components/theme/app/buttons/ButtonGroup.vue")['default']>
    'LazyThemeAppButtonsButtonVariations': LazyComponent<typeof import("../components/theme/app/buttons/ButtonVariations.vue")['default']>
    'LazyThemeAppButtonsData': LazyComponent<typeof import("../components/theme/app/buttons/ButtonsData.vue")['default']>
    'LazyThemeAppButtonsHorizontalVariation': LazyComponent<typeof import("../components/theme/app/buttons/HorizontalVariation.vue")['default']>
    'LazyThemeAppButtonsRadioAndCheckbox': LazyComponent<typeof import("../components/theme/app/buttons/RadioAndCheckbox.vue")['default']>
    'LazyThemeAppCalenderView': LazyComponent<typeof import("../components/theme/app/calender/CalenderView.vue")['default']>
    'LazyThemeAppChatContacts': LazyComponent<typeof import("../components/theme/app/chat/ChatContacts.vue")['default']>
    'LazyThemeAppChatGroupAddChat': LazyComponent<typeof import("../components/theme/app/chat/group/addChat.vue")['default']>
    'LazyThemeAppChatGroup': LazyComponent<typeof import("../components/theme/app/chat/group/index.vue")['default']>
    'LazyThemeAppChatPrivateAddChat': LazyComponent<typeof import("../components/theme/app/chat/private/addChat.vue")['default']>
    'LazyThemeAppChatPrivate': LazyComponent<typeof import("../components/theme/app/chat/private/index.vue")['default']>
    'LazyThemeAppChatSidebar': LazyComponent<typeof import("../components/theme/app/chat/sidebar.vue")['default']>
    'LazyThemeAppContactMoreData': LazyComponent<typeof import("../components/theme/app/contact/MoreData.vue")['default']>
    'LazyThemeAppContactDetail': LazyComponent<typeof import("../components/theme/app/contact/detail.vue")['default']>
    'LazyThemeAppContactEdit': LazyComponent<typeof import("../components/theme/app/contact/edit.vue")['default']>
    'LazyThemeAppContactHistory': LazyComponent<typeof import("../components/theme/app/contact/history.vue")['default']>
    'LazyThemeAppContact': LazyComponent<typeof import("../components/theme/app/contact/index.vue")['default']>
    'LazyThemeAppContactOrganization': LazyComponent<typeof import("../components/theme/app/contact/organization.vue")['default']>
    'LazyThemeAppContactOrganizationDetail': LazyComponent<typeof import("../components/theme/app/contact/organizationDetail.vue")['default']>
    'LazyThemeAppContactOrganizationModal': LazyComponent<typeof import("../components/theme/app/contact/organizationModal.vue")['default']>
    'LazyThemeAppContactPersonal': LazyComponent<typeof import("../components/theme/app/contact/personal.vue")['default']>
    'LazyThemeAppContactPrint': LazyComponent<typeof import("../components/theme/app/contact/print.vue")['default']>
    'LazyThemeAppFileManegerContent': LazyComponent<typeof import("../components/theme/app/fileManeger/content.vue")['default']>
    'LazyThemeAppFileManeger': LazyComponent<typeof import("../components/theme/app/fileManeger/index.vue")['default']>
    'LazyThemeAppKanabanApi': LazyComponent<typeof import("../components/theme/app/kanaban/api.vue")['default']>
    'LazyThemeAppKanabanCustom': LazyComponent<typeof import("../components/theme/app/kanaban/custom.vue")['default']>
    'LazyThemeAppKanaban': LazyComponent<typeof import("../components/theme/app/kanaban/index.vue")['default']>
    'LazyThemeAppLetterBoxDraft': LazyComponent<typeof import("../components/theme/app/letterBox/draft.vue")['default']>
    'LazyThemeAppLetterBoxEmailDetail': LazyComponent<typeof import("../components/theme/app/letterBox/emailDetail.vue")['default']>
    'LazyThemeAppLetterBoxInbox': LazyComponent<typeof import("../components/theme/app/letterBox/inbox.vue")['default']>
    'LazyThemeAppLetterBox': LazyComponent<typeof import("../components/theme/app/letterBox/index.vue")['default']>
    'LazyThemeAppLetterBoxPrivate': LazyComponent<typeof import("../components/theme/app/letterBox/private.vue")['default']>
    'LazyThemeAppLetterBoxSent': LazyComponent<typeof import("../components/theme/app/letterBox/sent.vue")['default']>
    'LazyThemeAppLetterBoxSidebar': LazyComponent<typeof import("../components/theme/app/letterBox/sidebar.vue")['default']>
    'LazyThemeAppLetterBoxStarred': LazyComponent<typeof import("../components/theme/app/letterBox/starred.vue")['default']>
    'LazyThemeAppLetterBoxSupport': LazyComponent<typeof import("../components/theme/app/letterBox/support.vue")['default']>
    'LazyThemeAppLetterBoxTrash': LazyComponent<typeof import("../components/theme/app/letterBox/trash.vue")['default']>
    'LazyThemeAppLetterBoxWork': LazyComponent<typeof import("../components/theme/app/letterBox/work.vue")['default']>
    'LazyThemeAppTaskAssignedView': LazyComponent<typeof import("../components/theme/app/task/AssignedView.vue")['default']>
    'LazyThemeAppTaskBusinessTask': LazyComponent<typeof import("../components/theme/app/task/BusinessTask.vue")['default']>
    'LazyThemeAppTaskCreatedView': LazyComponent<typeof import("../components/theme/app/task/CreatedView.vue")['default']>
    'LazyThemeAppTaskDelayedTasks': LazyComponent<typeof import("../components/theme/app/task/DelayedTasks.vue")['default']>
    'LazyThemeAppTaskHolidaysTask': LazyComponent<typeof import("../components/theme/app/task/HolidaysTask.vue")['default']>
    'LazyThemeAppTaskMonthTasks': LazyComponent<typeof import("../components/theme/app/task/MonthTasks.vue")['default']>
    'LazyThemeAppTaskMyTasks': LazyComponent<typeof import("../components/theme/app/task/MyTasks.vue")['default']>
    'LazyThemeAppTaskNewsLetter': LazyComponent<typeof import("../components/theme/app/task/NewsLetter.vue")['default']>
    'LazyThemeAppTaskNotificationView': LazyComponent<typeof import("../components/theme/app/task/NotificationView.vue")['default']>
    'LazyThemeAppTaskSidebar': LazyComponent<typeof import("../components/theme/app/task/TaskSidebar.vue")['default']>
    'LazyThemeAppTaskTodayTask': LazyComponent<typeof import("../components/theme/app/task/TodayTask.vue")['default']>
    'LazyThemeAppTaskUpcomingTasks': LazyComponent<typeof import("../components/theme/app/task/UpcomingTasks.vue")['default']>
    'LazyThemeAppTaskWeekTasks': LazyComponent<typeof import("../components/theme/app/task/WeekTasks.vue")['default']>
    'LazyThemeAppTodoAddTask': LazyComponent<typeof import("../components/theme/app/todo/AddTask.vue")['default']>
    'LazyThemeAppTodoSidebar': LazyComponent<typeof import("../components/theme/app/todo/TodoSidebar.vue")['default']>
    'LazyThemeBlogAddpostAddPost': LazyComponent<typeof import("../components/theme/blog/addpost/AddPost.vue")['default']>
    'LazyThemeBlogDetailsBlogGrid': LazyComponent<typeof import("../components/theme/blog/details/BlogGrid.vue")['default']>
    'LazyThemeBlogDetailsBlogList': LazyComponent<typeof import("../components/theme/blog/details/BlogList.vue")['default']>
    'LazyThemeBlogDetailsBlogShadow': LazyComponent<typeof import("../components/theme/blog/details/BlogShadow.vue")['default']>
    'LazyThemeBlogSingleBlogDetails': LazyComponent<typeof import("../components/theme/blog/single/BlogDetails.vue")['default']>
    'LazyThemeBlogSingleCommentBox': LazyComponent<typeof import("../components/theme/blog/single/CommentBox.vue")['default']>
    'LazyThemeChartsApexChartApexCharts': LazyComponent<typeof import("../components/theme/charts/apexChart/ApexCharts.vue")['default']>
    'LazyThemeDashboardDefaultIndexLeftDefault': LazyComponent<typeof import("../components/theme/dashboard/default/IndexLeftDefault.vue")['default']>
    'LazyThemeDashboardDefaultTreadCards': LazyComponent<typeof import("../components/theme/dashboard/default/TreadCards.vue")['default']>
    'LazyThemeDashboardDefaultWelcomeView': LazyComponent<typeof import("../components/theme/dashboard/default/WelcomeView.vue")['default']>
    'LazyThemeDashboardDefaultCard': LazyComponent<typeof import("../components/theme/dashboard/default/card.vue")['default']>
    'LazyThemeDashboardDefault': LazyComponent<typeof import("../components/theme/dashboard/default/index.vue")['default']>
    'LazyThemeDashboardDefaultMembers': LazyComponent<typeof import("../components/theme/dashboard/default/members.vue")['default']>
    'LazyThemeDashboardDefaultReferral': LazyComponent<typeof import("../components/theme/dashboard/default/referral.vue")['default']>
    'LazyThemeDashboardDefaultRevenue': LazyComponent<typeof import("../components/theme/dashboard/default/revenue.vue")['default']>
    'LazyThemeDashboardDefaultSidebar': LazyComponent<typeof import("../components/theme/dashboard/default/sidebar.vue")['default']>
    'LazyThemeDashboardDefaultTodo': LazyComponent<typeof import("../components/theme/dashboard/default/todo.vue")['default']>
    'LazyThemeDashboardEcommerceCards': LazyComponent<typeof import("../components/theme/dashboard/ecommerce/cards.vue")['default']>
    'LazyThemeDashboardEcommerceEarning': LazyComponent<typeof import("../components/theme/dashboard/ecommerce/earning.vue")['default']>
    'LazyThemeDashboardEcommerce': LazyComponent<typeof import("../components/theme/dashboard/ecommerce/index.vue")['default']>
    'LazyThemeDashboardEcommerceRecentOrder': LazyComponent<typeof import("../components/theme/dashboard/ecommerce/recentOrder.vue")['default']>
    'LazyThemeDashboardEcommerceSidebar': LazyComponent<typeof import("../components/theme/dashboard/ecommerce/sidebar.vue")['default']>
    'LazyThemeDashboardEcommerceStock': LazyComponent<typeof import("../components/theme/dashboard/ecommerce/stock.vue")['default']>
    'LazyThemeDashboardEcommerceVisitors': LazyComponent<typeof import("../components/theme/dashboard/ecommerce/visitors.vue")['default']>
    'LazyThemeDashboardProjectAvgEarning': LazyComponent<typeof import("../components/theme/dashboard/project/avgEarning.vue")['default']>
    'LazyThemeDashboardProjectCalender': LazyComponent<typeof import("../components/theme/dashboard/project/calender.vue")['default']>
    'LazyThemeDashboardProjectChat': LazyComponent<typeof import("../components/theme/dashboard/project/chat.vue")['default']>
    'LazyThemeDashboardProjectClient': LazyComponent<typeof import("../components/theme/dashboard/project/client.vue")['default']>
    'LazyThemeDashboardProjectDailyTask': LazyComponent<typeof import("../components/theme/dashboard/project/dailyTask.vue")['default']>
    'LazyThemeDashboardProject': LazyComponent<typeof import("../components/theme/dashboard/project/index.vue")['default']>
    'LazyThemeDashboardProjectStatus': LazyComponent<typeof import("../components/theme/dashboard/project/status.vue")['default']>
    'LazyThemeDashboardProjectUpdate': LazyComponent<typeof import("../components/theme/dashboard/project/update.vue")['default']>
    'LazyThemeEcommerceAddProductCategoryModal': LazyComponent<typeof import("../components/theme/ecommerce/addProduct/CategoryModal.vue")['default']>
    'LazyThemeEcommerceAddProductAdditional': LazyComponent<typeof import("../components/theme/ecommerce/addProduct/additional.vue")['default']>
    'LazyThemeEcommerceAddProductCategory': LazyComponent<typeof import("../components/theme/ecommerce/addProduct/category.vue")['default']>
    'LazyThemeEcommerceAddProductDetails': LazyComponent<typeof import("../components/theme/ecommerce/addProduct/details.vue")['default']>
    'LazyThemeEcommerceAddProductGellery': LazyComponent<typeof import("../components/theme/ecommerce/addProduct/gellery.vue")['default']>
    'LazyThemeEcommerceAddProduct': LazyComponent<typeof import("../components/theme/ecommerce/addProduct/index.vue")['default']>
    'LazyThemeEcommerceAddProductInventory': LazyComponent<typeof import("../components/theme/ecommerce/addProduct/inventory.vue")['default']>
    'LazyThemeEcommerceAddProductSelling': LazyComponent<typeof import("../components/theme/ecommerce/addProduct/selling.vue")['default']>
    'LazyThemeEcommerceAddProductShipping': LazyComponent<typeof import("../components/theme/ecommerce/addProduct/shipping.vue")['default']>
    'LazyThemeEcommerceCart': LazyComponent<typeof import("../components/theme/ecommerce/cart/index.vue")['default']>
    'LazyThemeEcommerceCategoryFilterBlock': LazyComponent<typeof import("../components/theme/ecommerce/category/filterBlock.vue")['default']>
    'LazyThemeEcommerceCategory': LazyComponent<typeof import("../components/theme/ecommerce/category/index.vue")['default']>
    'LazyThemeEcommerceCheckoutDetails': LazyComponent<typeof import("../components/theme/ecommerce/checkout/details.vue")['default']>
    'LazyThemeEcommerceCheckout': LazyComponent<typeof import("../components/theme/ecommerce/checkout/index.vue")['default']>
    'LazyThemeEcommerceInvoice1Details': LazyComponent<typeof import("../components/theme/ecommerce/invoice/1/details.vue")['default']>
    'LazyThemeEcommerceInvoice1': LazyComponent<typeof import("../components/theme/ecommerce/invoice/1/index.vue")['default']>
    'LazyThemeEcommerceInvoice2Details': LazyComponent<typeof import("../components/theme/ecommerce/invoice/2/details.vue")['default']>
    'LazyThemeEcommerceInvoice2': LazyComponent<typeof import("../components/theme/ecommerce/invoice/2/index.vue")['default']>
    'LazyThemeEcommerceInvoice3Details': LazyComponent<typeof import("../components/theme/ecommerce/invoice/3/details.vue")['default']>
    'LazyThemeEcommerceInvoice3': LazyComponent<typeof import("../components/theme/ecommerce/invoice/3/index.vue")['default']>
    'LazyThemeEcommerceInvoice4Details': LazyComponent<typeof import("../components/theme/ecommerce/invoice/4/details.vue")['default']>
    'LazyThemeEcommerceInvoice4': LazyComponent<typeof import("../components/theme/ecommerce/invoice/4/index.vue")['default']>
    'LazyThemeEcommerceInvoice5Details': LazyComponent<typeof import("../components/theme/ecommerce/invoice/5/details.vue")['default']>
    'LazyThemeEcommerceInvoice5': LazyComponent<typeof import("../components/theme/ecommerce/invoice/5/index.vue")['default']>
    'LazyThemeEcommerceInvoice6Details': LazyComponent<typeof import("../components/theme/ecommerce/invoice/6/details.vue")['default']>
    'LazyThemeEcommerceInvoice6': LazyComponent<typeof import("../components/theme/ecommerce/invoice/6/index.vue")['default']>
    'LazyThemeEcommerceOrderHistory': LazyComponent<typeof import("../components/theme/ecommerce/orderHistory/index.vue")['default']>
    'LazyThemeEcommerceOrderHistoryTable': LazyComponent<typeof import("../components/theme/ecommerce/orderHistory/table.vue")['default']>
    'LazyThemeEcommercePaymentDetailsEmi': LazyComponent<typeof import("../components/theme/ecommerce/paymentDetails/emi.vue")['default']>
    'LazyThemeEcommercePaymentDetails': LazyComponent<typeof import("../components/theme/ecommerce/paymentDetails/index.vue")['default']>
    'LazyThemeEcommercePricing': LazyComponent<typeof import("../components/theme/ecommerce/pricing.vue")['default']>
    'LazyThemeEcommerceProductDetailsFilterblock': LazyComponent<typeof import("../components/theme/ecommerce/product/details/filterblock.vue")['default']>
    'LazyThemeEcommerceProductDetails': LazyComponent<typeof import("../components/theme/ecommerce/product/details/index.vue")['default']>
    'LazyThemeEcommerceProductDetailsSlider': LazyComponent<typeof import("../components/theme/ecommerce/product/details/slider.vue")['default']>
    'LazyThemeEcommerceProductDetailsSummery': LazyComponent<typeof import("../components/theme/ecommerce/product/details/summery.vue")['default']>
    'LazyThemeEcommerceProductDetailsTabs': LazyComponent<typeof import("../components/theme/ecommerce/product/details/tabs.vue")['default']>
    'LazyThemeEcommerceProductFilterBar': LazyComponent<typeof import("../components/theme/ecommerce/product/filterBar.vue")['default']>
    'LazyThemeEcommerceProduct': LazyComponent<typeof import("../components/theme/ecommerce/product/index.vue")['default']>
    'LazyThemeEcommerceProductLength': LazyComponent<typeof import("../components/theme/ecommerce/product/length.vue")['default']>
    'LazyThemeEcommerceProductListData': LazyComponent<typeof import("../components/theme/ecommerce/product/listData.vue")['default']>
    'LazyThemeEcommerceProductNewProduct': LazyComponent<typeof import("../components/theme/ecommerce/product/newProduct.vue")['default']>
    'LazyThemeEcommerceProductListFilterBlock': LazyComponent<typeof import("../components/theme/ecommerce/productList/filterBlock.vue")['default']>
    'LazyThemeEcommerceProductList': LazyComponent<typeof import("../components/theme/ecommerce/productList/index.vue")['default']>
    'LazyThemeEcommerceWishlist': LazyComponent<typeof import("../components/theme/ecommerce/wishlist/index.vue")['default']>
    'LazyThemeFormFormcontrolCheckboxradioAnimatedButtons': LazyComponent<typeof import("../components/theme/form/formcontrol/checkboxradio/AnimatedButtons.vue")['default']>
    'LazyThemeFormFormcontrolCheckboxradioCheckboxRadio': LazyComponent<typeof import("../components/theme/form/formcontrol/checkboxradio/CheckboxRadio.vue")['default']>
    'LazyThemeFormFormcontrolCheckboxradioCustomCheckbox': LazyComponent<typeof import("../components/theme/form/formcontrol/checkboxradio/CustomCheckbox.vue")['default']>
    'LazyThemeFormFormcontrolCheckboxradioCustumRadio': LazyComponent<typeof import("../components/theme/form/formcontrol/checkboxradio/CustumRadio.vue")['default']>
    'LazyThemeFormFormcontrolCheckboxradioDefaultCheckbox': LazyComponent<typeof import("../components/theme/form/formcontrol/checkboxradio/DefaultCheckbox.vue")['default']>
    'LazyThemeFormFormcontrolCheckboxradioDefaultRadio': LazyComponent<typeof import("../components/theme/form/formcontrol/checkboxradio/DefaultRadio.vue")['default']>
    'LazyThemeFormFormcontrolCheckboxradioDefaultSwitches': LazyComponent<typeof import("../components/theme/form/formcontrol/checkboxradio/DefaultSwitches.vue")['default']>
    'LazyThemeFormFormcontrolCheckboxradioImagesCheckbox': LazyComponent<typeof import("../components/theme/form/formcontrol/checkboxradio/ImagesCheckbox.vue")['default']>
    'LazyThemeFormFormcontrolCheckboxradioImagesRadio': LazyComponent<typeof import("../components/theme/form/formcontrol/checkboxradio/ImagesRadio.vue")['default']>
    'LazyThemeFormFormcontrolCheckboxradioInlineInput': LazyComponent<typeof import("../components/theme/form/formcontrol/checkboxradio/InlineInput.vue")['default']>
    'LazyThemeFormFormcontrolCheckboxradioRadioToggle': LazyComponent<typeof import("../components/theme/form/formcontrol/checkboxradio/RadioToggle.vue")['default']>
    'LazyThemeFormFormcontrolInputBasicForm': LazyComponent<typeof import("../components/theme/form/formcontrol/input/BasicForm.vue")['default']>
    'LazyThemeFormFormcontrolInputEdgesInput': LazyComponent<typeof import("../components/theme/form/formcontrol/input/EdgesInput.vue")['default']>
    'LazyThemeFormFormcontrolInputFileInput': LazyComponent<typeof import("../components/theme/form/formcontrol/input/FileInput.vue")['default']>
    'LazyThemeFormFormcontrolInputFlatInput': LazyComponent<typeof import("../components/theme/form/formcontrol/input/FlatInput.vue")['default']>
    'LazyThemeFormFormcontrolInputFloatingForm': LazyComponent<typeof import("../components/theme/form/formcontrol/input/FloatingForm.vue")['default']>
    'LazyThemeFormFormcontrolInputFloatingInput': LazyComponent<typeof import("../components/theme/form/formcontrol/input/FloatingInput.vue")['default']>
    'LazyThemeFormFormcontrolInputHtmlInput': LazyComponent<typeof import("../components/theme/form/formcontrol/input/HtmlInput.vue")['default']>
    'LazyThemeFormFormcontrolInputRaiseInput': LazyComponent<typeof import("../components/theme/form/formcontrol/input/RaiseInput.vue")['default']>
    'LazyThemeFormFormcontrolInputSelectSizing': LazyComponent<typeof import("../components/theme/form/formcontrol/input/SelectSizing.vue")['default']>
    'LazyThemeFormFormcontrolInputgroupsBasicInput': LazyComponent<typeof import("../components/theme/form/formcontrol/inputgroups/BasicInput.vue")['default']>
    'LazyThemeFormFormcontrolInputgroupsButtonAddons': LazyComponent<typeof import("../components/theme/form/formcontrol/inputgroups/ButtonAddons.vue")['default']>
    'LazyThemeFormFormcontrolInputgroupsButtonsDropdowns': LazyComponent<typeof import("../components/theme/form/formcontrol/inputgroups/ButtonsDropdowns.vue")['default']>
    'LazyThemeFormFormcontrolInputgroupsCheckboxesRadios': LazyComponent<typeof import("../components/theme/form/formcontrol/inputgroups/CheckboxesRadios.vue")['default']>
    'LazyThemeFormFormcontrolInputgroupsCustomForms': LazyComponent<typeof import("../components/theme/form/formcontrol/inputgroups/CustomForms.vue")['default']>
    'LazyThemeFormFormcontrolInputgroupsFileInput': LazyComponent<typeof import("../components/theme/form/formcontrol/inputgroups/FileInput.vue")['default']>
    'LazyThemeFormFormcontrolInputgroupsMultipleInputs': LazyComponent<typeof import("../components/theme/form/formcontrol/inputgroups/MultipleInputs.vue")['default']>
    'LazyThemeFormFormcontrolInputgroupsSegmentedButtons': LazyComponent<typeof import("../components/theme/form/formcontrol/inputgroups/SegmentedButtons.vue")['default']>
    'LazyThemeFormFormcontrolInputgroupsSizingInput': LazyComponent<typeof import("../components/theme/form/formcontrol/inputgroups/SizingInput.vue")['default']>
    'LazyThemeFormFormcontrolInputgroupsVariationAddons': LazyComponent<typeof import("../components/theme/form/formcontrol/inputgroups/VariationAddons.vue")['default']>
    'LazyThemeFormFormcontrolInputmaskMaskInput': LazyComponent<typeof import("../components/theme/form/formcontrol/inputmask/MaskInput.vue")['default']>
    'LazyThemeFormFormcontrolMagaoptionBorderStyle': LazyComponent<typeof import("../components/theme/form/formcontrol/magaoption/BorderStyle.vue")['default']>
    'LazyThemeFormFormcontrolMagaoptionDashedStyle': LazyComponent<typeof import("../components/theme/form/formcontrol/magaoption/DashedStyle.vue")['default']>
    'LazyThemeFormFormcontrolMagaoptionDefultStyle': LazyComponent<typeof import("../components/theme/form/formcontrol/magaoption/DefultStyle.vue")['default']>
    'LazyThemeFormFormcontrolMagaoptionHorizontalStyle': LazyComponent<typeof import("../components/theme/form/formcontrol/magaoption/HorizontalStyle.vue")['default']>
    'LazyThemeFormFormcontrolMagaoptionInlineStyle': LazyComponent<typeof import("../components/theme/form/formcontrol/magaoption/InlineStyle.vue")['default']>
    'LazyThemeFormFormcontrolMagaoptionOfferBorder': LazyComponent<typeof import("../components/theme/form/formcontrol/magaoption/OfferBorder.vue")['default']>
    'LazyThemeFormFormcontrolMagaoptionVariationCheckbox': LazyComponent<typeof import("../components/theme/form/formcontrol/magaoption/VariationCheckbox.vue")['default']>
    'LazyThemeFormFormcontrolMagaoptionVariationRadio': LazyComponent<typeof import("../components/theme/form/formcontrol/magaoption/VariationRadio.vue")['default']>
    'LazyThemeFormFormcontrolMagaoptionVerticalStyle': LazyComponent<typeof import("../components/theme/form/formcontrol/magaoption/VerticalStyle.vue")['default']>
    'LazyThemeFormFormcontrolValidationBrowserDefaults': LazyComponent<typeof import("../components/theme/form/formcontrol/validation/BrowserDefaults.vue")['default']>
    'LazyThemeFormFormcontrolValidationToltipValidation': LazyComponent<typeof import("../components/theme/form/formcontrol/validation/ToltipValidation.vue")['default']>
    'LazyThemeFormFormcontrolValidationForm': LazyComponent<typeof import("../components/theme/form/formcontrol/validation/ValidationForm.vue")['default']>
    'LazyThemeFormFormlayoutFormwizardBillingfrom': LazyComponent<typeof import("../components/theme/form/formlayout/formwizard/Billingfrom.vue")['default']>
    'LazyThemeFormFormlayoutFormwizardCurrentCart': LazyComponent<typeof import("../components/theme/form/formlayout/formwizard/CurrentCart.vue")['default']>
    'LazyThemeFormFormlayoutFormwizardFinishWizard': LazyComponent<typeof import("../components/theme/form/formlayout/formwizard/FinishWizard.vue")['default']>
    'LazyThemeFormFormlayoutFormwizardPaymentWizard': LazyComponent<typeof import("../components/theme/form/formlayout/formwizard/PaymentWizard.vue")['default']>
    'LazyThemeFormFormlayoutFormwizardShippingForm': LazyComponent<typeof import("../components/theme/form/formlayout/formwizard/ShippingForm.vue")['default']>
    'LazyThemeFormFormlayoutFormwizardShippingForms': LazyComponent<typeof import("../components/theme/form/formlayout/formwizard/ShippingForms.vue")['default']>
    'LazyThemeFormFormlayoutFormwizardShippingModel': LazyComponent<typeof import("../components/theme/form/formlayout/formwizard/ShippingModel.vue")['default']>
    'LazyThemeFormFormlayoutFormwizardSimpleWizard': LazyComponent<typeof import("../components/theme/form/formlayout/formwizard/SimpleWizard.vue")['default']>
    'LazyThemeFormFormlayoutFormwizardVerticalValidation': LazyComponent<typeof import("../components/theme/form/formlayout/formwizard/VerticalValidation.vue")['default']>
    'LazyThemeFormFormlayoutFormwizardWizardBanking': LazyComponent<typeof import("../components/theme/form/formlayout/formwizard/WizardBanking.vue")['default']>
    'LazyThemeFormFormlayoutFormwizardWizardCart': LazyComponent<typeof import("../components/theme/form/formlayout/formwizard/WizardCart.vue")['default']>
    'LazyThemeFormFormlayoutFormwizardWizardContact': LazyComponent<typeof import("../components/theme/form/formlayout/formwizard/WizardContact.vue")['default']>
    'LazyThemeFormFormlayoutFormwizard2BankWizard': LazyComponent<typeof import("../components/theme/form/formlayout/formwizard2/BankWizard.vue")['default']>
    'LazyThemeFormFormlayoutFormwizard2BusinessHorizontal': LazyComponent<typeof import("../components/theme/form/formlayout/formwizard2/BusinessHorizontal.vue")['default']>
    'LazyThemeFormFormlayoutFormwizard2BusinessSettings': LazyComponent<typeof import("../components/theme/form/formlayout/formwizard2/BusinessSettings.vue")['default']>
    'LazyThemeFormFormlayoutFormwizard2BusinessVertical': LazyComponent<typeof import("../components/theme/form/formlayout/formwizard2/BusinessVertical.vue")['default']>
    'LazyThemeFormFormlayoutFormwizard2ChooseAccount': LazyComponent<typeof import("../components/theme/form/formlayout/formwizard2/ChooseAccount.vue")['default']>
    'LazyThemeFormFormlayoutFormwizard2ContactDetails': LazyComponent<typeof import("../components/theme/form/formlayout/formwizard2/ContactDetails.vue")['default']>
    'LazyThemeFormFormlayoutFormwizard2CustomHorizontal': LazyComponent<typeof import("../components/theme/form/formlayout/formwizard2/CustomHorizontal.vue")['default']>
    'LazyThemeFormFormlayoutFormwizard2CustomVertical': LazyComponent<typeof import("../components/theme/form/formlayout/formwizard2/CustomVertical.vue")['default']>
    'LazyThemeFormFormlayoutFormwizard2InquiryWizard': LazyComponent<typeof import("../components/theme/form/formlayout/formwizard2/InquiryWizard.vue")['default']>
    'LazyThemeFormFormlayoutFormwizard2PayDetails': LazyComponent<typeof import("../components/theme/form/formlayout/formwizard2/PayDetails.vue")['default']>
    'LazyThemeFormFormlayoutFormwizard2WizardInfo': LazyComponent<typeof import("../components/theme/form/formlayout/formwizard2/WizardInfo.vue")['default']>
    'LazyThemeFormFormlayoutTwofactorAuthenticationModel': LazyComponent<typeof import("../components/theme/form/formlayout/twofactor/AuthenticationModel.vue")['default']>
    'LazyThemeFormFormlayoutTwofactorEmailVerification': LazyComponent<typeof import("../components/theme/form/formlayout/twofactor/EmailVerification.vue")['default']>
    'LazyThemeFormFormlayoutTwofactorTwoFactorAuthentication': LazyComponent<typeof import("../components/theme/form/formlayout/twofactor/TwoFactorAuthentication.vue")['default']>
    'LazyThemeFormFormlayoutTwofactorVerificationCode': LazyComponent<typeof import("../components/theme/form/formlayout/twofactor/VerificationCode.vue")['default']>
    'LazyThemeFormFormwidgetsClipboardCopyPortion': LazyComponent<typeof import("../components/theme/form/formwidgets/clipboard/CopyPortion.vue")['default']>
    'LazyThemeFormFormwidgetsClipboardParaGraph': LazyComponent<typeof import("../components/theme/form/formwidgets/clipboard/ParaGraph.vue")['default']>
    'LazyThemeFormFormwidgetsClipboardTextArea': LazyComponent<typeof import("../components/theme/form/formwidgets/clipboard/TextArea.vue")['default']>
    'LazyThemeFormFormwidgetsClipboardTextInput': LazyComponent<typeof import("../components/theme/form/formwidgets/clipboard/TextInput.vue")['default']>
    'LazyThemeFormFormwidgetsDatepickerBootstrapCalendar': LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/BootstrapCalendar.vue")['default']>
    'LazyThemeFormFormwidgetsDatepickerCustomizingConjunction': LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/CustomizingConjunction.vue")['default']>
    'LazyThemeFormFormwidgetsDatepickerDatePicker': LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/DatePicker.vue")['default']>
    'LazyThemeFormFormwidgetsDatepickerDateTime': LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/DateTime.vue")['default']>
    'LazyThemeFormFormwidgetsDatepickerDefaultCalander': LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/DefaultCalander.vue")['default']>
    'LazyThemeFormFormwidgetsDatepickerDefultDate': LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/DefultDate.vue")['default']>
    'LazyThemeFormFormwidgetsDatepickerDisabledDates': LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/DisabledDates.vue")['default']>
    'LazyThemeFormFormwidgetsDatepickerHourTimepicker': LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/HourTimepicker.vue")['default']>
    'LazyThemeFormFormwidgetsDatepickerHumanFriendly': LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/HumanFriendly.vue")['default']>
    'LazyThemeFormFormwidgetsDatepickerLimitedTimerange': LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/LimitedTimerange.vue")['default']>
    'LazyThemeFormFormwidgetsDatepickerLimitsTimepicker': LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/LimitsTimepicker.vue")['default']>
    'LazyThemeFormFormwidgetsDatepickerMainmaxTimepicker': LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/MainmaxTimepicker.vue")['default']>
    'LazyThemeFormFormwidgetsDatepickerMinmaxDate': LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/MinmaxDate.vue")['default']>
    'LazyThemeFormFormwidgetsDatepickerMultipleDate': LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/MultipleDate.vue")['default']>
    'LazyThemeFormFormwidgetsDatepickerPreloadingDates': LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/PreloadingDates.vue")['default']>
    'LazyThemeFormFormwidgetsDatepickerPreloadingTime': LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/PreloadingTime.vue")['default']>
    'LazyThemeFormFormwidgetsDatepickerRangeDate': LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/RangeDate.vue")['default']>
    'LazyThemeFormFormwidgetsDatepickerTimeOnly': LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/TimeOnly.vue")['default']>
    'LazyThemeFormFormwidgetsDatepickerTimePicker': LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/TimePicker.vue")['default']>
    'LazyThemeFormFormwidgetsSelect2FullColored': LazyComponent<typeof import("../components/theme/form/formwidgets/select2/FullColored.vue")['default']>
    'LazyThemeFormFormwidgetsSelect2OutlineColor': LazyComponent<typeof import("../components/theme/form/formwidgets/select2/OutlineColor.vue")['default']>
    'LazyThemeFormFormwidgetsSelect2SearchBox': LazyComponent<typeof import("../components/theme/form/formwidgets/select2/SearchBox.vue")['default']>
    'LazyThemeFormFormwidgetsSelect2SelectView': LazyComponent<typeof import("../components/theme/form/formwidgets/select2/SelectView.vue")['default']>
    'LazyThemeFormFormwidgetsSwitchBordersIcons': LazyComponent<typeof import("../components/theme/form/formwidgets/switch/BordersIcons.vue")['default']>
    'LazyThemeFormFormwidgetsSwitchCustomSwitch': LazyComponent<typeof import("../components/theme/form/formwidgets/switch/CustomSwitch.vue")['default']>
    'LazyThemeFormFormwidgetsSwitchDisabledOutline': LazyComponent<typeof import("../components/theme/form/formwidgets/switch/DisabledOutline.vue")['default']>
    'LazyThemeFormFormwidgetsSwitchIconsSwitch': LazyComponent<typeof import("../components/theme/form/formwidgets/switch/IconsSwitch.vue")['default']>
    'LazyThemeFormFormwidgetsSwitchIcons': LazyComponent<typeof import("../components/theme/form/formwidgets/switch/SwitchIcons.vue")['default']>
    'LazyThemeFormFormwidgetsSwitchSizing': LazyComponent<typeof import("../components/theme/form/formwidgets/switch/SwitchSizing.vue")['default']>
    'LazyThemeFormFormwidgetsSwitchUncheckedSwitch': LazyComponent<typeof import("../components/theme/form/formwidgets/switch/UncheckedSwitch.vue")['default']>
    'LazyThemeFormFormwidgetsSwitchVariationSwitches': LazyComponent<typeof import("../components/theme/form/formwidgets/switch/VariationSwitches.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinDefaultTouchspin': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/DefaultTouchspin.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinIconsTouchspin': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/IconsTouchspin.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinOutlinedTouchspin': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/OutlinedTouchspin.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinPostfixTouchspin': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/PostfixTouchspin.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinRoundedTouchspin': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/RoundedTouchspin.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinDefulttouchspinDefaultDanger': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultDanger.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinDefulttouchspinDefaultDark': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultDark.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinDefulttouchspinDefaultInfo': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultInfo.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinDefulttouchspinDefaultPrimery': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultPrimery.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinDefulttouchspinDefaultSecondary': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultSecondary.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinDefulttouchspinDefaultSuccess': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultSuccess.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinDefulttouchspinDefaultWarning': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultWarning.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineDanger': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlineDanger.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineDark': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlineDark.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineInfo': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlineInfo.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlinePrimary': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlinePrimary.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineSecondary': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlineSecondary.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineSuccess': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlineSuccess.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineWarning': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlineWarning.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedDanger': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedDanger.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedDark': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedDark.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedInfo': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedInfo.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedPrimary': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedPrimary.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedSecondary': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedSecondary.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedSuccess': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedSuccess.vue")['default']>
    'LazyThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedWarning': LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedWarning.vue")['default']>
    'LazyThemeFormFormwidgetsTypeaheadBasicTypeahead': LazyComponent<typeof import("../components/theme/form/formwidgets/typeahead/BasicTypeahead.vue")['default']>
    'LazyThemeFormFormwidgetsTypeaheadBloodhoundTyeahead': LazyComponent<typeof import("../components/theme/form/formwidgets/typeahead/BloodhoundTyeahead.vue")['default']>
    'LazyThemeFormFormwidgetsTypeaheadCustomTemplates': LazyComponent<typeof import("../components/theme/form/formwidgets/typeahead/CustomTemplates.vue")['default']>
    'LazyThemeFormFormwidgetsTypeaheadMultipleSections': LazyComponent<typeof import("../components/theme/form/formwidgets/typeahead/MultipleSections.vue")['default']>
    'LazyThemeFormFormwidgetsTypeaheadPrefetchTypeahead': LazyComponent<typeof import("../components/theme/form/formwidgets/typeahead/PrefetchTypeahead.vue")['default']>
    'LazyThemeFormFormwidgetsTypeaheadRemoteTypeahead': LazyComponent<typeof import("../components/theme/form/formwidgets/typeahead/RemoteTypeahead.vue")['default']>
    'LazyThemeFormFormwidgetsTypeaheadRtlSupport': LazyComponent<typeof import("../components/theme/form/formwidgets/typeahead/RtlSupport.vue")['default']>
    'LazyThemeFormFormwidgetsTypeaheadScrollableMenu': LazyComponent<typeof import("../components/theme/form/formwidgets/typeahead/ScrollableMenu.vue")['default']>
    'LazyThemeGalleryGridDesc': LazyComponent<typeof import("../components/theme/gallery/grid/GridDesc.vue")['default']>
    'LazyThemeGalleryGridGallery': LazyComponent<typeof import("../components/theme/gallery/grid/GridGallery.vue")['default']>
    'LazyThemeGalleryHoverEffect1': LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect1.vue")['default']>
    'LazyThemeGalleryHoverEffect10': LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect10.vue")['default']>
    'LazyThemeGalleryHoverEffect11': LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect11.vue")['default']>
    'LazyThemeGalleryHoverEffect12': LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect12.vue")['default']>
    'LazyThemeGalleryHoverEffect13': LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect13.vue")['default']>
    'LazyThemeGalleryHoverEffect14': LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect14.vue")['default']>
    'LazyThemeGalleryHoverEffect15': LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect15.vue")['default']>
    'LazyThemeGalleryHoverEffect2': LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect2.vue")['default']>
    'LazyThemeGalleryHoverEffect3': LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect3.vue")['default']>
    'LazyThemeGalleryHoverEffect4': LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect4.vue")['default']>
    'LazyThemeGalleryHoverEffect5': LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect5.vue")['default']>
    'LazyThemeGalleryHoverEffect6': LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect6.vue")['default']>
    'LazyThemeGalleryHoverEffect7': LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect7.vue")['default']>
    'LazyThemeGalleryHoverEffect8': LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect8.vue")['default']>
    'LazyThemeGalleryHoverEffect9': LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect9.vue")['default']>
    'LazyThemeGalleryMasonryDesc': LazyComponent<typeof import("../components/theme/gallery/masonry/MasonryDesc.vue")['default']>
    'LazyThemeGalleryMasonryGallery': LazyComponent<typeof import("../components/theme/gallery/masonry/MasonryGallery.vue")['default']>
    'LazyThemeIconsFontAwesomeBrandIcons': LazyComponent<typeof import("../components/theme/icons/font_awesome/BrandIcons.vue")['default']>
    'LazyThemeIconsFontAwesomeCurrencyIcons': LazyComponent<typeof import("../components/theme/icons/font_awesome/CurrencyIcons.vue")['default']>
    'LazyThemeIconsFontAwesomeDirectionalIcons': LazyComponent<typeof import("../components/theme/icons/font_awesome/DirectionalIcons.vue")['default']>
    'LazyThemeIconsFontAwesomeFormControl': LazyComponent<typeof import("../components/theme/icons/font_awesome/FormControl.vue")['default']>
    'LazyThemeIconsFontAwesomeIconsView': LazyComponent<typeof import("../components/theme/icons/font_awesome/IconsView.vue")['default']>
    'LazyThemeIconsFontAwesomeMedicalIcons': LazyComponent<typeof import("../components/theme/icons/font_awesome/MedicalIcons.vue")['default']>
    'LazyThemeIconsFontAwesomeSpinnerIcons': LazyComponent<typeof import("../components/theme/icons/font_awesome/SpinnerIcons.vue")['default']>
    'LazyThemeIconsFontAwesomeTextEditor': LazyComponent<typeof import("../components/theme/icons/font_awesome/TextEditor.vue")['default']>
    'LazyThemeIconsFontAwesomeVideoPlayer': LazyComponent<typeof import("../components/theme/icons/font_awesome/VideoPlayer.vue")['default']>
    'LazyThemeIconsFontAwesomeWebAppIcons': LazyComponent<typeof import("../components/theme/icons/font_awesome/WebAppIcons.vue")['default']>
    'LazyThemeIconsIcoIconAbstractIcon': LazyComponent<typeof import("../components/theme/icons/ico_icon/AbstractIcon.vue")['default']>
    'LazyThemeIconsIcoIconAnimalIcon': LazyComponent<typeof import("../components/theme/icons/ico_icon/AnimalIcon.vue")['default']>
    'LazyThemeIconsIcoIconBrandIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/BrandIcons.vue")['default']>
    'LazyThemeIconsIcoIconBusinessIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/BusinessIcons.vue")['default']>
    'LazyThemeIconsIcoIconChartIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/ChartIcons.vue")['default']>
    'LazyThemeIconsIcoIconConstructionIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/ConstructionIcons.vue")['default']>
    'LazyThemeIconsIcoIconCurrencyIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/CurrencyIcons.vue")['default']>
    'LazyThemeIconsIcoIconDeviceIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/DeviceIcons.vue")['default']>
    'LazyThemeIconsIcoIconDirectionalIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/DirectionalIcons.vue")['default']>
    'LazyThemeIconsIcoIconEducationIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/EducationIcons.vue")['default']>
    'LazyThemeIconsIcoIconEmoticonIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/EmoticonIcons.vue")['default']>
    'LazyThemeIconsIcoIconFiletypeIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/FiletypeIcons.vue")['default']>
    'LazyThemeIconsIcoIconFoodIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/FoodIcons.vue")['default']>
    'LazyThemeIconsIcoIconKidsIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/KidsIcons.vue")['default']>
    'LazyThemeIconsIcoIconLawIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/LawIcons.vue")['default']>
    'LazyThemeIconsIcoIconMathematicalIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/MathematicalIcons.vue")['default']>
    'LazyThemeIconsIcoIconMedicalIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/MedicalIcons.vue")['default']>
    'LazyThemeIconsIcoIconMobileIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/MobileIcons.vue")['default']>
    'LazyThemeIconsIcoIconMultimediaIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/MultimediaIcons.vue")['default']>
    'LazyThemeIconsIcoIconPaymentIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/PaymentIcons.vue")['default']>
    'LazyThemeIconsIcoIconPersonIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/PersonIcons.vue")['default']>
    'LazyThemeIconsIcoIconSearchIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/SearchIcons.vue")['default']>
    'LazyThemeIconsIcoIconSocialIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/SocialIcons.vue")['default']>
    'LazyThemeIconsIcoIconSportIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/SportIcons.vue")['default']>
    'LazyThemeIconsIcoIconTextIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/TextIcons.vue")['default']>
    'LazyThemeIconsIcoIconTransportIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/TransportIcons.vue")['default']>
    'LazyThemeIconsIcoIconTravelIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/TravelIcons.vue")['default']>
    'LazyThemeIconsIcoIconWeatherIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/WeatherIcons.vue")['default']>
    'LazyThemeIconsIcoIconWebIcons': LazyComponent<typeof import("../components/theme/icons/ico_icon/WebIcons.vue")['default']>
    'LazyThemeIconsThemifyIconBrandIcons': LazyComponent<typeof import("../components/theme/icons/themify_icon/BrandIcons.vue")['default']>
    'LazyThemeIconsThemifyIconControlIcons': LazyComponent<typeof import("../components/theme/icons/themify_icon/ControlIcons.vue")['default']>
    'LazyThemeIconsThemifyIconDirectionIcons': LazyComponent<typeof import("../components/theme/icons/themify_icon/DirectionIcons.vue")['default']>
    'LazyThemeIconsThemifyIconTextEditor': LazyComponent<typeof import("../components/theme/icons/themify_icon/TextEditor.vue")['default']>
    'LazyThemeIconsThemifyIconWebAppIcons': LazyComponent<typeof import("../components/theme/icons/themify_icon/WebAppIcons.vue")['default']>
    'LazyThemeIconsWhetherIcons': LazyComponent<typeof import("../components/theme/icons/whether/WhetherIcons.vue")['default']>
    'LazyThemeInternationalizationLanguageInternationa': LazyComponent<typeof import("../components/theme/internationalization/LanguageInternationa.vue")['default']>
    'LazyThemeInternationalizationLanguagePicker': LazyComponent<typeof import("../components/theme/internationalization/LanguagePicker.vue")['default']>
    'LazyThemeInternationalizationLanguageView': LazyComponent<typeof import("../components/theme/internationalization/LanguageView.vue")['default']>
    'LazyThemeJobApply': LazyComponent<typeof import("../components/theme/job/apply/JobApply.vue")['default']>
    'LazyThemeJobApplyPersonalBirthDate': LazyComponent<typeof import("../components/theme/job/apply/personal/BirthDate.vue")['default']>
    'LazyThemeJobApplyPersonalDateView': LazyComponent<typeof import("../components/theme/job/apply/personal/DateView.vue")['default']>
    'LazyThemeJobApplyPersonalDetails': LazyComponent<typeof import("../components/theme/job/apply/personal/PersonalDetails.vue")['default']>
    'LazyThemeJobApplyPersonalYourEducation': LazyComponent<typeof import("../components/theme/job/apply/personal/YourEducation.vue")['default']>
    'LazyThemeJobCardView': LazyComponent<typeof import("../components/theme/job/card/CardView.vue")['default']>
    'LazyThemeJobDetails': LazyComponent<typeof import("../components/theme/job/details/JobDetails.vue")['default']>
    'LazyThemeJobDetailsSimilarJobs': LazyComponent<typeof import("../components/theme/job/details/SimilarJobs.vue")['default']>
    'LazyThemeJobFiltersFilterView': LazyComponent<typeof import("../components/theme/job/filters/FilterView.vue")['default']>
    'LazyThemeJobFiltersIndustryView': LazyComponent<typeof import("../components/theme/job/filters/IndustryView.vue")['default']>
    'LazyThemeJobFiltersJobTitle': LazyComponent<typeof import("../components/theme/job/filters/JobTitle.vue")['default']>
    'LazyThemeJobFiltersLocationView': LazyComponent<typeof import("../components/theme/job/filters/LocationView.vue")['default']>
    'LazyThemeJobFiltersSpecificSkills': LazyComponent<typeof import("../components/theme/job/filters/SpecificSkills.vue")['default']>
    'LazyThemeJobListsJobList': LazyComponent<typeof import("../components/theme/job/lists/JobList.vue")['default']>
    'LazyThemeKnowledgebaseBrowseArticles': LazyComponent<typeof import("../components/theme/knowledgebase/BrowseArticles.vue")['default']>
    'LazyThemeKnowledgebaseFaqWidgets': LazyComponent<typeof import("../components/theme/knowledgebase/FaqWidgets.vue")['default']>
    'LazyThemeKnowledgebaseFeaturesFaq': LazyComponent<typeof import("../components/theme/knowledgebase/FeaturesFaq.vue")['default']>
    'LazyThemeKnowledgebaseSearch': LazyComponent<typeof import("../components/theme/knowledgebase/KnowledgebaseSearch.vue")['default']>
    'LazyThemeKnowledgebaseLatestArticles': LazyComponent<typeof import("../components/theme/knowledgebase/LatestArticles.vue")['default']>
    'LazyThemeKpkpDatatableZeroConfiguration': LazyComponent<typeof import("../components/theme/kpkp/datatable/zeroConfiguration.vue")['default']>
    'LazyThemeLearningCourseBlogBox': LazyComponent<typeof import("../components/theme/learning/course/BlogBox.vue")['default']>
    'LazyThemeLearningCourseDetail': LazyComponent<typeof import("../components/theme/learning/course/CourseDetail.vue")['default']>
    'LazyThemeLearningFiltersCategoriesView': LazyComponent<typeof import("../components/theme/learning/filters/CategoriesView.vue")['default']>
    'LazyThemeLearningFiltersFindCourse': LazyComponent<typeof import("../components/theme/learning/filters/FindCourse.vue")['default']>
    'LazyThemeLearningFiltersUpcomingCourses': LazyComponent<typeof import("../components/theme/learning/filters/UpcomingCourses.vue")['default']>
    'LazyThemeLearningListsLearningList': LazyComponent<typeof import("../components/theme/learning/lists/LearningList.vue")['default']>
    'LazyThemeMapsDraggableMarker': LazyComponent<typeof import("../components/theme/maps/DraggableMarker.vue")['default']>
    'LazyThemeMapsGooglePolyline': LazyComponent<typeof import("../components/theme/maps/GooglePolyline.vue")['default']>
    'LazyThemeMapsMarkersMap': LazyComponent<typeof import("../components/theme/maps/MarkersMap.vue")['default']>
    'LazyThemeMapsMultiLanguage': LazyComponent<typeof import("../components/theme/maps/MultiLanguage.vue")['default']>
    'LazyThemeMapsMultiLanguage2': LazyComponent<typeof import("../components/theme/maps/MultiLanguage2.vue")['default']>
    'LazyThemeMapsSimpleMap': LazyComponent<typeof import("../components/theme/maps/SimpleMap.vue")['default']>
    'LazyThemeMapsTrianglePolygon': LazyComponent<typeof import("../components/theme/maps/TrianglePolygon.vue")['default']>
    'LazyThemePagesFaqAccordion': LazyComponent<typeof import("../components/theme/pages/faq/FaqAccordion.vue")['default']>
    'LazyThemePagesFaqArticles': LazyComponent<typeof import("../components/theme/pages/faq/FaqArticles.vue")['default']>
    'LazyThemePagesFaqWidgets': LazyComponent<typeof import("../components/theme/pages/faq/FaqWidgets.vue")['default']>
    'LazyThemePagesFaqFeaturedTutorial': LazyComponent<typeof import("../components/theme/pages/faq/FeaturedTutorial.vue")['default']>
    'LazyThemePagesFaqIntellectualProperty': LazyComponent<typeof import("../components/theme/pages/faq/IntellectualProperty.vue")['default']>
    'LazyThemePagesFaqNavigationView': LazyComponent<typeof import("../components/theme/pages/faq/NavigationView.vue")['default']>
    'LazyThemePagesFaqSellingAccording': LazyComponent<typeof import("../components/theme/pages/faq/SellingAccording.vue")['default']>
    'LazyThemePagesFaqUserAccounts': LazyComponent<typeof import("../components/theme/pages/faq/UserAccounts.vue")['default']>
    'LazyThemePagesSearchAllLink': LazyComponent<typeof import("../components/theme/pages/search/AllLink.vue")['default']>
    'LazyThemePagesSearchImageLink': LazyComponent<typeof import("../components/theme/pages/search/ImageLink.vue")['default']>
    'LazyThemePagesSearchBar': LazyComponent<typeof import("../components/theme/pages/search/SearchBar.vue")['default']>
    'LazyThemePagesSearchTab': LazyComponent<typeof import("../components/theme/pages/search/SearchTab.vue")['default']>
    'LazyThemePagesSearchVideoLink': LazyComponent<typeof import("../components/theme/pages/search/VideoLink.vue")['default']>
    'LazyThemePagesSocialappActivityFeed': LazyComponent<typeof import("../components/theme/pages/socialapp/ActivityFeed.vue")['default']>
    'LazyThemePagesSocialappActivityLog': LazyComponent<typeof import("../components/theme/pages/socialapp/ActivityLog.vue")['default']>
    'LazyThemePagesSocialappAddFriend': LazyComponent<typeof import("../components/theme/pages/socialapp/AddFriend.vue")['default']>
    'LazyThemePagesSocialappEducationView': LazyComponent<typeof import("../components/theme/pages/socialapp/EducationView.vue")['default']>
    'LazyThemePagesSocialappFollowersView': LazyComponent<typeof import("../components/theme/pages/socialapp/FollowersView.vue")['default']>
    'LazyThemePagesSocialappFollowingView': LazyComponent<typeof import("../components/theme/pages/socialapp/FollowingView.vue")['default']>
    'LazyThemePagesSocialappFriendsView': LazyComponent<typeof import("../components/theme/pages/socialapp/FriendsView.vue")['default']>
    'LazyThemePagesSocialappHobbiesView': LazyComponent<typeof import("../components/theme/pages/socialapp/HobbiesView.vue")['default']>
    'LazyThemePagesSocialappIndexAbout': LazyComponent<typeof import("../components/theme/pages/socialapp/IndexAbout.vue")['default']>
    'LazyThemePagesSocialappIndexFriends': LazyComponent<typeof import("../components/theme/pages/socialapp/IndexFriends.vue")['default']>
    'LazyThemePagesSocialappIndexTimeline': LazyComponent<typeof import("../components/theme/pages/socialapp/IndexTimeline.vue")['default']>
    'LazyThemePagesSocialappLatestPhotos': LazyComponent<typeof import("../components/theme/pages/socialapp/LatestPhotos.vue")['default']>
    'LazyThemePagesSocialappMutualFriends': LazyComponent<typeof import("../components/theme/pages/socialapp/MutualFriends.vue")['default']>
    'LazyThemePagesSocialappMyProfile': LazyComponent<typeof import("../components/theme/pages/socialapp/MyProfile.vue")['default']>
    'LazyThemePagesSocialappPhotosView': LazyComponent<typeof import("../components/theme/pages/socialapp/PhotosView.vue")['default']>
    'LazyThemePagesSocialappProfileIntro': LazyComponent<typeof import("../components/theme/pages/socialapp/ProfileIntro.vue")['default']>
    'LazyThemePagesSocialappSocialHeader': LazyComponent<typeof import("../components/theme/pages/socialapp/SocialHeader.vue")['default']>
    'LazyThemePagesSocialappSociallAccording': LazyComponent<typeof import("../components/theme/pages/socialapp/SociallAccording.vue")['default']>
    'LazyThemePagesSocialappUsersSocial': LazyComponent<typeof import("../components/theme/pages/socialapp/UsersSocial.vue")['default']>
    'LazyThemePagesSocialappUsersSocial1': LazyComponent<typeof import("../components/theme/pages/socialapp/UsersSocial1.vue")['default']>
    'LazyThemePagesSocialappYourProfile': LazyComponent<typeof import("../components/theme/pages/socialapp/YourProfile.vue")['default']>
    'LazyThemePagesSupportTable': LazyComponent<typeof import("../components/theme/pages/support/SupportTable.vue")['default']>
    'LazyThemePagesSupportTicket': LazyComponent<typeof import("../components/theme/pages/support/SupportTicket.vue")['default']>
    'LazyThemeProjectCreate': LazyComponent<typeof import("../components/theme/project/create/index.vue")['default']>
    'LazyThemeProjectListData': LazyComponent<typeof import("../components/theme/project/list/data.vue")['default']>
    'LazyThemeProjectList': LazyComponent<typeof import("../components/theme/project/list/index.vue")['default']>
    'LazyThemeTableBootstrapBasicTable': LazyComponent<typeof import("../components/theme/table/bootstrap/BasicTable.vue")['default']>
    'LazyThemeTableBootstrapBreckpointSpecific': LazyComponent<typeof import("../components/theme/table/bootstrap/BreckpointSpecific.vue")['default']>
    'LazyThemeTableBootstrapCaptionTable': LazyComponent<typeof import("../components/theme/table/bootstrap/CaptionTable.vue")['default']>
    'LazyThemeTableBootstrapCustomTable': LazyComponent<typeof import("../components/theme/table/bootstrap/CustomTable.vue")['default']>
    'LazyThemeTableBootstrapDashedBorder': LazyComponent<typeof import("../components/theme/table/bootstrap/DashedBorder.vue")['default']>
    'LazyThemeTableBootstrapHeadOptions': LazyComponent<typeof import("../components/theme/table/bootstrap/HeadOptions.vue")['default']>
    'LazyThemeTableBootstrapHoverableTable': LazyComponent<typeof import("../components/theme/table/bootstrap/HoverableTable.vue")['default']>
    'LazyThemeTableBootstrapInverseTable': LazyComponent<typeof import("../components/theme/table/bootstrap/InverseTable.vue")['default']>
    'LazyThemeTableBootstrapPrimaryBackground': LazyComponent<typeof import("../components/theme/table/bootstrap/PrimaryBackground.vue")['default']>
    'LazyThemeTableBootstrapResponsiveTable': LazyComponent<typeof import("../components/theme/table/bootstrap/ResponsiveTable.vue")['default']>
    'LazyThemeTableBootstrapSizingTable': LazyComponent<typeof import("../components/theme/table/bootstrap/SizingTable.vue")['default']>
    'LazyThemeTableBootstrapStripedRow': LazyComponent<typeof import("../components/theme/table/bootstrap/StripedRow.vue")['default']>
    'LazyThemeTableDatatableZeroConfiguration': LazyComponent<typeof import("../components/theme/table/datatable/zeroConfiguration.vue")['default']>
    'LazyThemeTableTablecomponentAlertComponent': LazyComponent<typeof import("../components/theme/table/tablecomponent/AlertComponent.vue")['default']>
    'LazyThemeTableTablecomponentBadgesComponent': LazyComponent<typeof import("../components/theme/table/tablecomponent/BadgesComponent.vue")['default']>
    'LazyThemeTableTablecomponentCheckboxComponent': LazyComponent<typeof import("../components/theme/table/tablecomponent/CheckboxComponent.vue")['default']>
    'LazyThemeTableTablecomponentInputComponent': LazyComponent<typeof import("../components/theme/table/tablecomponent/InputComponent.vue")['default']>
    'LazyThemeTableTablecomponentProgressbarComponent': LazyComponent<typeof import("../components/theme/table/tablecomponent/ProgressbarComponent.vue")['default']>
    'LazyThemeTableTablecomponentRadioButtons': LazyComponent<typeof import("../components/theme/table/tablecomponent/RadioButtons.vue")['default']>
    'LazyThemeTableTablecomponentSelectComponent': LazyComponent<typeof import("../components/theme/table/tablecomponent/SelectComponent.vue")['default']>
    'LazyThemeTableTablecomponentSwitchComponent': LazyComponent<typeof import("../components/theme/table/tablecomponent/SwitchComponent.vue")['default']>
    'LazyThemeTableTablecomponentTootipComponent': LazyComponent<typeof import("../components/theme/table/tablecomponent/TootipComponent.vue")['default']>
    'LazyThemeTableTablecomponentUiTable': LazyComponent<typeof import("../components/theme/table/tablecomponent/UiTable.vue")['default']>
    'LazyThemeUikitsAccordionFlushAccordion': LazyComponent<typeof import("../components/theme/uikits/accordion/FlushAccordion.vue")['default']>
    'LazyThemeUikitsAccordionHorizontalAccordion': LazyComponent<typeof import("../components/theme/uikits/accordion/HorizontalAccordion.vue")['default']>
    'LazyThemeUikitsAccordionIconsAccordion': LazyComponent<typeof import("../components/theme/uikits/accordion/IconsAccordion.vue")['default']>
    'LazyThemeUikitsAccordionMultipleAccordion': LazyComponent<typeof import("../components/theme/uikits/accordion/MultipleAccordion.vue")['default']>
    'LazyThemeUikitsAccordionOutlineAccordion': LazyComponent<typeof import("../components/theme/uikits/accordion/OutlineAccordion.vue")['default']>
    'LazyThemeUikitsAccordionSimpleAccordion': LazyComponent<typeof import("../components/theme/uikits/accordion/SimpleAccordion.vue")['default']>
    'LazyThemeUikitsAlertAdditionalContent': LazyComponent<typeof import("../components/theme/uikits/alert/AdditionalContent.vue")['default']>
    'LazyThemeUikitsAlertAlertsSection': LazyComponent<typeof import("../components/theme/uikits/alert/AlertsSection.vue")['default']>
    'LazyThemeUikitsAlertDarkColor': LazyComponent<typeof import("../components/theme/uikits/alert/DarkColor.vue")['default']>
    'LazyThemeUikitsAlertLightClor': LazyComponent<typeof import("../components/theme/uikits/alert/LightClor.vue")['default']>
    'LazyThemeUikitsAlertTextAlert': LazyComponent<typeof import("../components/theme/uikits/alert/TextAlert.vue")['default']>
    'LazyThemeUikitsAvatarGrouping': LazyComponent<typeof import("../components/theme/uikits/avatar/AvatarGrouping.vue")['default']>
    'LazyThemeUikitsAvatarRatio': LazyComponent<typeof import("../components/theme/uikits/avatar/AvatarRatio.vue")['default']>
    'LazyThemeUikitsAvatarShapes': LazyComponent<typeof import("../components/theme/uikits/avatar/AvatarShapes.vue")['default']>
    'LazyThemeUikitsAvatarSize': LazyComponent<typeof import("../components/theme/uikits/avatar/AvatarSize.vue")['default']>
    'LazyThemeUikitsAvatarStatus': LazyComponent<typeof import("../components/theme/uikits/avatar/AvatarStatus.vue")['default']>
    'LazyThemeUikitsDropdownAlignmentsDropdown': LazyComponent<typeof import("../components/theme/uikits/dropdown/AlignmentsDropdown.vue")['default']>
    'LazyThemeUikitsDropdownBasicDropdown': LazyComponent<typeof import("../components/theme/uikits/dropdown/BasicDropdown.vue")['default']>
    'LazyThemeUikitsDropdownDividerDropdown': LazyComponent<typeof import("../components/theme/uikits/dropdown/DividerDropdown.vue")['default']>
    'LazyThemeUikitsDropdownSection': LazyComponent<typeof import("../components/theme/uikits/dropdown/DropdownSection.vue")['default']>
    'LazyThemeUikitsDropdownSizing': LazyComponent<typeof import("../components/theme/uikits/dropdown/DropdownSizing.vue")['default']>
    'LazyThemeUikitsDropdownHelperCard': LazyComponent<typeof import("../components/theme/uikits/dropdown/HelperCard.vue")['default']>
    'LazyThemeUikitsDropdownJustifyContents': LazyComponent<typeof import("../components/theme/uikits/dropdown/JustifyContents.vue")['default']>
    'LazyThemeUikitsDropdownRoundedDropdown': LazyComponent<typeof import("../components/theme/uikits/dropdown/RoundedDropdown.vue")['default']>
    'LazyThemeUikitsDropdownSplitDropdown': LazyComponent<typeof import("../components/theme/uikits/dropdown/SplitDropdown.vue")['default']>
    'LazyThemeUikitsDropdownUniqueDropdown': LazyComponent<typeof import("../components/theme/uikits/dropdown/UniqueDropdown.vue")['default']>
    'LazyThemeUikitsGridAlignment': LazyComponent<typeof import("../components/theme/uikits/grid/GridAlignment.vue")['default']>
    'LazyThemeUikitsGridColumm': LazyComponent<typeof import("../components/theme/uikits/grid/GridColumm.vue")['default']>
    'LazyThemeUikitsGridOptions': LazyComponent<typeof import("../components/theme/uikits/grid/GridOptions.vue")['default']>
    'LazyThemeUikitsGridSection': LazyComponent<typeof import("../components/theme/uikits/grid/GridSection.vue")['default']>
    'LazyThemeUikitsHelperBackgroundColors': LazyComponent<typeof import("../components/theme/uikits/helper/BackgroundColors.vue")['default']>
    'LazyThemeUikitsHelperBorderColor': LazyComponent<typeof import("../components/theme/uikits/helper/BorderColor.vue")['default']>
    'LazyThemeUikitsHelperFontStyle': LazyComponent<typeof import("../components/theme/uikits/helper/FontStyle.vue")['default']>
    'LazyThemeUikitsHelperBorders': LazyComponent<typeof import("../components/theme/uikits/helper/HelperBorders.vue")['default']>
    'LazyThemeUikitsHelperDisplays': LazyComponent<typeof import("../components/theme/uikits/helper/HelperDisplays.vue")['default']>
    'LazyThemeUikitsHelperImagesSizes': LazyComponent<typeof import("../components/theme/uikits/helper/ImagesSizes.vue")['default']>
    'LazyThemeUikitsHelperMarginPeding': LazyComponent<typeof import("../components/theme/uikits/helper/MarginPeding.vue")['default']>
    'LazyThemeUikitsHelperTextColors': LazyComponent<typeof import("../components/theme/uikits/helper/TextColors.vue")['default']>
    'LazyThemeUikitsListsActiveLists': LazyComponent<typeof import("../components/theme/uikits/lists/ActiveLists.vue")['default']>
    'LazyThemeUikitsListsBadgeList': LazyComponent<typeof import("../components/theme/uikits/lists/BadgeList.vue")['default']>
    'LazyThemeUikitsListsCheckboxRedio': LazyComponent<typeof import("../components/theme/uikits/lists/CheckboxRedio.vue")['default']>
    'LazyThemeUikitsListsContextualClasses': LazyComponent<typeof import("../components/theme/uikits/lists/ContextualClasses.vue")['default']>
    'LazyThemeUikitsListsCustomList': LazyComponent<typeof import("../components/theme/uikits/lists/CustomList.vue")['default']>
    'LazyThemeUikitsListsDefaultLists': LazyComponent<typeof import("../components/theme/uikits/lists/DefaultLists.vue")['default']>
    'LazyThemeUikitsListsDisabledLists': LazyComponent<typeof import("../components/theme/uikits/lists/DisabledLists.vue")['default']>
    'LazyThemeUikitsListsFlushLists': LazyComponent<typeof import("../components/theme/uikits/lists/FlushLists.vue")['default']>
    'LazyThemeUikitsListsHorizontalLists': LazyComponent<typeof import("../components/theme/uikits/lists/HorizontalLists.vue")['default']>
    'LazyThemeUikitsListsJavaScriptBehavior': LazyComponent<typeof import("../components/theme/uikits/lists/JavaScriptBehavior.vue")['default']>
    'LazyThemeUikitsListsNumberList': LazyComponent<typeof import("../components/theme/uikits/lists/NumberList.vue")['default']>
    'LazyThemeUikitsListsScrollableLists': LazyComponent<typeof import("../components/theme/uikits/lists/ScrollableLists.vue")['default']>
    'LazyThemeUikitsModalBasicModal': LazyComponent<typeof import("../components/theme/uikits/modal/BasicModal.vue")['default']>
    'LazyThemeUikitsModalCenteredModal': LazyComponent<typeof import("../components/theme/uikits/modal/CenteredModal.vue")['default']>
    'LazyThemeUikitsModalCustomModals': LazyComponent<typeof import("../components/theme/uikits/modal/CustomModals.vue")['default']>
    'LazyThemeUikitsModalFullscreenModal': LazyComponent<typeof import("../components/theme/uikits/modal/FullscreenModal.vue")['default']>
    'LazyThemeUikitsModalSizeModel': LazyComponent<typeof import("../components/theme/uikits/modal/SizeModel.vue")['default']>
    'LazyThemeUikitsModalStaticModal': LazyComponent<typeof import("../components/theme/uikits/modal/StaticModal.vue")['default']>
    'LazyThemeUikitsModalToggleModals': LazyComponent<typeof import("../components/theme/uikits/modal/ToggleModals.vue")['default']>
    'LazyThemeUikitsModalModalsBalanceModal': LazyComponent<typeof import("../components/theme/uikits/modal/modals/BalanceModal.vue")['default']>
    'LazyThemeUikitsModalModalsExtralargeModal': LazyComponent<typeof import("../components/theme/uikits/modal/modals/ExtralargeModal.vue")['default']>
    'LazyThemeUikitsModalModalsFullscreenLg': LazyComponent<typeof import("../components/theme/uikits/modal/modals/FullscreenLg.vue")['default']>
    'LazyThemeUikitsModalModalsFullscreenMd': LazyComponent<typeof import("../components/theme/uikits/modal/modals/FullscreenMd.vue")['default']>
    'LazyThemeUikitsModalModalsFullscreenModallabel': LazyComponent<typeof import("../components/theme/uikits/modal/modals/FullscreenModallabel.vue")['default']>
    'LazyThemeUikitsModalModalsFullscreenSm': LazyComponent<typeof import("../components/theme/uikits/modal/modals/FullscreenSm.vue")['default']>
    'LazyThemeUikitsModalModalsFullscreenXl': LazyComponent<typeof import("../components/theme/uikits/modal/modals/FullscreenXl.vue")['default']>
    'LazyThemeUikitsModalModalsFullscreenXxl': LazyComponent<typeof import("../components/theme/uikits/modal/modals/FullscreenXxl.vue")['default']>
    'LazyThemeUikitsModalModalsFullsereenModa': LazyComponent<typeof import("../components/theme/uikits/modal/modals/FullsereenModa.vue")['default']>
    'LazyThemeUikitsModalModalsLargeModal': LazyComponent<typeof import("../components/theme/uikits/modal/modals/LargeModal.vue")['default']>
    'LazyThemeUikitsModalModalsOpenModel': LazyComponent<typeof import("../components/theme/uikits/modal/modals/OpenModel.vue")['default']>
    'LazyThemeUikitsModalModalsProfileModal': LazyComponent<typeof import("../components/theme/uikits/modal/modals/ProfileModal.vue")['default']>
    'LazyThemeUikitsModalModalsResultModal': LazyComponent<typeof import("../components/theme/uikits/modal/modals/ResultModal.vue")['default']>
    'LazyThemeUikitsModalModalsScrollingModal': LazyComponent<typeof import("../components/theme/uikits/modal/modals/ScrollingModal.vue")['default']>
    'LazyThemeUikitsModalModalsSimpleModel': LazyComponent<typeof import("../components/theme/uikits/modal/modals/SimpleModel.vue")['default']>
    'LazyThemeUikitsModalModalsSmallModal': LazyComponent<typeof import("../components/theme/uikits/modal/modals/SmallModal.vue")['default']>
    'LazyThemeUikitsModalModalsTooltipsModal': LazyComponent<typeof import("../components/theme/uikits/modal/modals/TooltipsModal.vue")['default']>
    'LazyThemeUikitsPopoverBasicPopover': LazyComponent<typeof import("../components/theme/uikits/popover/BasicPopover.vue")['default']>
    'LazyThemeUikitsPopoverDirectionPopover': LazyComponent<typeof import("../components/theme/uikits/popover/DirectionPopover.vue")['default']>
    'LazyThemeUikitsPopoverOffsetPopover': LazyComponent<typeof import("../components/theme/uikits/popover/OffsetPopover.vue")['default']>
    'LazyThemeUikitsProgressBasicProgressbar': LazyComponent<typeof import("../components/theme/uikits/progress/BasicProgressbar.vue")['default']>
    'LazyThemeUikitsProgressCustomProgressbars': LazyComponent<typeof import("../components/theme/uikits/progress/CustomProgressbars.vue")['default']>
    'LazyThemeUikitsProgressHeightProgressbars': LazyComponent<typeof import("../components/theme/uikits/progress/HeightProgressbars.vue")['default']>
    'LazyThemeUikitsProgressMultipleBars': LazyComponent<typeof import("../components/theme/uikits/progress/MultipleBars.vue")['default']>
    'LazyThemeUikitsProgressSmallProgressbars': LazyComponent<typeof import("../components/theme/uikits/progress/SmallProgressbars.vue")['default']>
    'LazyThemeUikitsProgressStripedProgressbar': LazyComponent<typeof import("../components/theme/uikits/progress/StripedProgressbar.vue")['default']>
    'LazyThemeUikitsTabsBorderTabs': LazyComponent<typeof import("../components/theme/uikits/tabs/BorderTabs.vue")['default']>
    'LazyThemeUikitsTabsIconTabs': LazyComponent<typeof import("../components/theme/uikits/tabs/IconTabs.vue")['default']>
    'LazyThemeUikitsTabsJustifyTabs': LazyComponent<typeof import("../components/theme/uikits/tabs/JustifyTabs.vue")['default']>
    'LazyThemeUikitsTabsLeftTabs': LazyComponent<typeof import("../components/theme/uikits/tabs/LeftTabs.vue")['default']>
    'LazyThemeUikitsTabsMaterialTabs': LazyComponent<typeof import("../components/theme/uikits/tabs/MaterialTabs.vue")['default']>
    'LazyThemeUikitsTabsPillsTabs': LazyComponent<typeof import("../components/theme/uikits/tabs/PillsTabs.vue")['default']>
    'LazyThemeUikitsTabsSimpleTabs': LazyComponent<typeof import("../components/theme/uikits/tabs/SimpleTabs.vue")['default']>
    'LazyThemeUikitsTabsVerticalTabs': LazyComponent<typeof import("../components/theme/uikits/tabs/VerticalTabs.vue")['default']>
    'LazyThemeUikitsTagpillsBadgesContextual': LazyComponent<typeof import("../components/theme/uikits/tagpills/BadgesContextual.vue")['default']>
    'LazyThemeUikitsTagpillsNumberBadge': LazyComponent<typeof import("../components/theme/uikits/tagpills/NumberBadge.vue")['default']>
    'LazyThemeUikitsTagpillsPillsContextual': LazyComponent<typeof import("../components/theme/uikits/tagpills/PillsContextual.vue")['default']>
    'LazyThemeUikitsTagpillsTagsIcons': LazyComponent<typeof import("../components/theme/uikits/tagpills/TagsIcons.vue")['default']>
    'LazyThemeUikitsTagpillsTagsSection': LazyComponent<typeof import("../components/theme/uikits/tagpills/TagsSection.vue")['default']>
    'LazyThemeUikitsTooltipBasicTooltip': LazyComponent<typeof import("../components/theme/uikits/tooltip/BasicTooltip.vue")['default']>
    'LazyThemeUikitsTooltipColoredTooltip': LazyComponent<typeof import("../components/theme/uikits/tooltip/ColoredTooltip.vue")['default']>
    'LazyThemeUikitsTooltipDirectionsTooltip': LazyComponent<typeof import("../components/theme/uikits/tooltip/DirectionsTooltip.vue")['default']>
    'LazyThemeUikitsTooltipFilledTooltip': LazyComponent<typeof import("../components/theme/uikits/tooltip/FilledTooltip.vue")['default']>
    'LazyThemeUikitsTooltipHoverEffect': LazyComponent<typeof import("../components/theme/uikits/tooltip/HoverEffect.vue")['default']>
    'LazyThemeUikitsTypographyColoredHeadings': LazyComponent<typeof import("../components/theme/uikits/typography/ColoredHeadings.vue")['default']>
    'LazyThemeUikitsTypographyDisplayHeadings': LazyComponent<typeof import("../components/theme/uikits/typography/DisplayHeadings.vue")['default']>
    'LazyThemeUikitsTypographyFontWeight': LazyComponent<typeof import("../components/theme/uikits/typography/FontWeight.vue")['default']>
    'LazyThemeUikitsTypographyHeadingsSeaction': LazyComponent<typeof import("../components/theme/uikits/typography/HeadingsSeaction.vue")['default']>
    'LazyThemeUikitsTypographyListingTypography': LazyComponent<typeof import("../components/theme/uikits/typography/ListingTypography.vue")['default']>
    'LazyThemeUikitsTypographyTextElements': LazyComponent<typeof import("../components/theme/uikits/typography/TextElements.vue")['default']>
    'LazyThemeUserCards': LazyComponent<typeof import("../components/theme/user/cards/index.vue")['default']>
    'LazyThemeUserEdit': LazyComponent<typeof import("../components/theme/user/edit/index.vue")['default']>
    'LazyThemeUserEditProfile': LazyComponent<typeof import("../components/theme/user/edit/profile.vue")['default']>
    'LazyThemeUserEditTable': LazyComponent<typeof import("../components/theme/user/edit/table.vue")['default']>
    'LazyThemeUserProfile': LazyComponent<typeof import("../components/theme/user/profile/index.vue")['default']>
    'LazyThemeUserProfilePost': LazyComponent<typeof import("../components/theme/user/profile/post.vue")['default']>
    'LazyThemeUserProfilePost1': LazyComponent<typeof import("../components/theme/user/profile/post1.vue")['default']>
    'LazyThemeUserProfilePost2': LazyComponent<typeof import("../components/theme/user/profile/post2.vue")['default']>
    'LazyThemeUserProfilePost3': LazyComponent<typeof import("../components/theme/user/profile/post3.vue")['default']>
    'LazyThemeWidgetsChartOrderStatus': LazyComponent<typeof import("../components/theme/widgets/chart/OrderStatus.vue")['default']>
    'LazyThemeWidgetsChartTotalProduct': LazyComponent<typeof import("../components/theme/widgets/chart/TotalProduct.vue")['default']>
    'LazyThemeWidgetsChartTotalProject': LazyComponent<typeof import("../components/theme/widgets/chart/TotalProject.vue")['default']>
    'LazyThemeWidgetsChartTotalSale': LazyComponent<typeof import("../components/theme/widgets/chart/TotalSale.vue")['default']>
    'LazyThemeWidgetsChartCurrency': LazyComponent<typeof import("../components/theme/widgets/chart/currency.vue")['default']>
    'LazyThemeWidgetsChart': LazyComponent<typeof import("../components/theme/widgets/chart/index.vue")['default']>
    'LazyThemeWidgetsGeneralActivity': LazyComponent<typeof import("../components/theme/widgets/general/activity.vue")['default']>
    'LazyThemeWidgetsGeneralEarning': LazyComponent<typeof import("../components/theme/widgets/general/earning.vue")['default']>
    'LazyThemeWidgetsGeneral': LazyComponent<typeof import("../components/theme/widgets/general/index.vue")['default']>
    'LazyThemeWidgetsGeneralPipline': LazyComponent<typeof import("../components/theme/widgets/general/pipline.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyIcon': LazyComponent<typeof import("../node_modules/nuxt-icon/dist/runtime/Icon.vue")['default']>
    'LazyIconCSS': LazyComponent<typeof import("../node_modules/nuxt-icon/dist/runtime/IconCSS.vue")['default']>
    'LazyLCircle': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LCircle']>
    'LazyLCircleMarker': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LCircleMarker']>
    'LazyLControl': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControl']>
    'LazyLControlAttribution': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControlAttribution']>
    'LazyLControlLayers': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControlLayers']>
    'LazyLControlScale': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControlScale']>
    'LazyLControlZoom': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControlZoom']>
    'LazyLFeatureGroup': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LFeatureGroup']>
    'LazyLGeoJson': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LGeoJson']>
    'LazyLIcon': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LIcon']>
    'LazyLImageOverlay': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LImageOverlay']>
    'LazyLLayerGroup': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LLayerGroup']>
    'LazyLMap': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LMap']>
    'LazyLMarker': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LMarker']>
    'LazyLPolygon': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LPolygon']>
    'LazyLPolyline': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LPolyline']>
    'LazyLPopup': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LPopup']>
    'LazyLRectangle': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LRectangle']>
    'LazyLTileLayer': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LTileLayer']>
    'LazyLTooltip': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LTooltip']>
    'LazyLWmsTileLayer': LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LWmsTileLayer']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const CommonJobSidebar: typeof import("../components/common/JobSidebar.vue")['default']
export const CommonLearningFilter: typeof import("../components/common/LearningFilter.vue")['default']
export const CommonSuccessfulWizard: typeof import("../components/common/SuccessfulWizard.vue")['default']
export const CommonTimerView: typeof import("../components/common/TimerView.vue")['default']
export const CommonBlockTapTop: typeof import("../components/common/block/TapTop.vue")['default']
export const CommonBlockBreadcrumb: typeof import("../components/common/block/breadcrumb.vue")['default']
export const CommonBlockCustomizerBuyNow: typeof import("../components/common/block/customizer/BuyNow.vue")['default']
export const CommonBlockCustomizerCheckFeatures: typeof import("../components/common/block/customizer/CheckFeatures.vue")['default']
export const CommonBlockCustomizerConfigurationView: typeof import("../components/common/block/customizer/ConfigurationView.vue")['default']
export const CommonBlockCustomizerCustomColor: typeof import("../components/common/block/customizer/CustomColor.vue")['default']
export const CommonBlockCustomizerCustomSetting: typeof import("../components/common/block/customizer/CustomSetting.vue")['default']
export const CommonBlockCustomizerSetting: typeof import("../components/common/block/customizer/CustomizerSetting.vue")['default']
export const CommonBlockCustomizerSupport: typeof import("../components/common/block/customizer/CustomizerSupport.vue")['default']
export const CommonBlockCustomizerDocumentSection: typeof import("../components/common/block/customizer/DocumentSection.vue")['default']
export const CommonBlockCustomizerIndexCustomizer: typeof import("../components/common/block/customizer/IndexCustomizer.vue")['default']
export const CommonBlockCustomizerLayoutType: typeof import("../components/common/block/customizer/LayoutType.vue")['default']
export const CommonBlockCustomizerMixLayout: typeof import("../components/common/block/customizer/MixLayout.vue")['default']
export const CommonBlockCustomizerSidebarType: typeof import("../components/common/block/customizer/SidebarType.vue")['default']
export const CommonBlockEmoji: typeof import("../components/common/block/emoji.vue")['default']
export const CommonBlockFooterView: typeof import("../components/common/block/footer/FooterView.vue")['default']
export const CommonBlockFooterLanguageView: typeof import("../components/common/block/footer/LanguageView.vue")['default']
export const CommonBlockHeaderBookmarkSearch: typeof import("../components/common/block/header/BookmarkSearch.vue")['default']
export const CommonBlockHeaderCart: typeof import("../components/common/block/header/cart.vue")['default']
export const CommonBlockHeader: typeof import("../components/common/block/header/index.vue")['default']
export const CommonBlockHeaderMessage: typeof import("../components/common/block/header/message.vue")['default']
export const CommonBlockHeaderMode: typeof import("../components/common/block/header/mode.vue")['default']
export const CommonBlockHeaderNotification: typeof import("../components/common/block/header/notification.vue")['default']
export const CommonBlockHeaderProfile: typeof import("../components/common/block/header/profile.vue")['default']
export const CommonBlockHeaderSearch: typeof import("../components/common/block/header/search.vue")['default']
export const CommonBlockSidebarProfileSidebar: typeof import("../components/common/block/sidebar/ProfileSidebar.vue")['default']
export const CommonBlockSidebarSearchbar: typeof import("../components/common/block/sidebar/SidebarSearchbar.vue")['default']
export const CommonBlockSidebar: typeof import("../components/common/block/sidebar/index.vue")['default']
export const CommonBlockSidebarNavMenu: typeof import("../components/common/block/sidebar/navMenu.vue")['default']
export const CommonCard1: typeof import("../components/common/card/1.vue")['default']
export const CommonCard2: typeof import("../components/common/card/2.vue")['default']
export const CommonCard3: typeof import("../components/common/card/3.vue")['default']
export const CommonCard4: typeof import("../components/common/card/4.vue")['default']
export const CommonChartsAnnotationChart: typeof import("../components/common/charts/AnnotationChart.vue")['default']
export const CommonChartsAreaSpaline: typeof import("../components/common/charts/AreaSpaline.vue")['default']
export const CommonChartsBasicApex: typeof import("../components/common/charts/BasicApex.vue")['default']
export const CommonChartsBasicBar: typeof import("../components/common/charts/BasicBar.vue")['default']
export const CommonChartsCandlestickChart: typeof import("../components/common/charts/CandlestickChart.vue")['default']
export const CommonChartsChartBubble: typeof import("../components/common/charts/ChartBubble.vue")['default']
export const CommonChartsChartCrypto: typeof import("../components/common/charts/ChartCrypto.vue")['default']
export const CommonChartsChartWidget13: typeof import("../components/common/charts/ChartWidget13.vue")['default']
export const CommonChartsChartWidget4: typeof import("../components/common/charts/ChartWidget4.vue")['default']
export const CommonChartsChartWidget6: typeof import("../components/common/charts/ChartWidget6.vue")['default']
export const CommonChartsChartWidget7: typeof import("../components/common/charts/ChartWidget7.vue")['default']
export const CommonChartsCircleChart: typeof import("../components/common/charts/CircleChart.vue")['default']
export const CommonChartsColumnChart: typeof import("../components/common/charts/ColumnChart.vue")['default']
export const CommonChartsCryptoAnnotation: typeof import("../components/common/charts/CryptoAnnotation.vue")['default']
export const CommonChartsDonutChart: typeof import("../components/common/charts/DonutChart.vue")['default']
export const CommonChartsEarningAverage: typeof import("../components/common/charts/EarningAverage.vue")['default']
export const CommonChartsEarningChart: typeof import("../components/common/charts/EarningChart.vue")['default']
export const CommonChartsFinanceChart: typeof import("../components/common/charts/FinanceChart.vue")['default']
export const CommonChartsMixedChart: typeof import("../components/common/charts/MixedChart.vue")['default']
export const CommonChartsMonthlySales: typeof import("../components/common/charts/MonthlySales.vue")['default']
export const CommonChartsOrderStatus: typeof import("../components/common/charts/OrderStatus.vue")['default']
export const CommonChartsPieChart: typeof import("../components/common/charts/PieChart.vue")['default']
export const CommonChartsPipelineChart: typeof import("../components/common/charts/PipelineChart.vue")['default']
export const CommonChartsPipelineChart1: typeof import("../components/common/charts/PipelineChart1.vue")['default']
export const CommonChartsPolarArea: typeof import("../components/common/charts/PolarArea.vue")['default']
export const CommonChartsProfitChart: typeof import("../components/common/charts/ProfitChart.vue")['default']
export const CommonChartsProfitChart1: typeof import("../components/common/charts/ProfitChart1.vue")['default']
export const CommonChartsProgressChart: typeof import("../components/common/charts/ProgressChart.vue")['default']
export const CommonChartsProgressChart1: typeof import("../components/common/charts/ProgressChart1.vue")['default']
export const CommonChartsProgressChart2: typeof import("../components/common/charts/ProgressChart2.vue")['default']
export const CommonChartsProgressChart3: typeof import("../components/common/charts/ProgressChart3.vue")['default']
export const CommonChartsProgressChart4: typeof import("../components/common/charts/ProgressChart4.vue")['default']
export const CommonChartsProjectBar: typeof import("../components/common/charts/ProjectBar.vue")['default']
export const CommonChartsProjectBar1: typeof import("../components/common/charts/ProjectBar1.vue")['default']
export const CommonChartsProjectEarning: typeof import("../components/common/charts/ProjectEarning.vue")['default']
export const CommonChartsRadarChart: typeof import("../components/common/charts/RadarChart.vue")['default']
export const CommonChartsRadialChart: typeof import("../components/common/charts/RadialChart.vue")['default']
export const CommonChartsRevenueChart: typeof import("../components/common/charts/RevenueChart.vue")['default']
export const CommonChartsRevenueOrder: typeof import("../components/common/charts/RevenueOrder.vue")['default']
export const CommonChartsSteplineChart: typeof import("../components/common/charts/SteplineChart.vue")['default']
export const CommonChartsTotalClients: typeof import("../components/common/charts/TotalClients.vue")['default']
export const CommonChartsTotalTransactionChart: typeof import("../components/common/charts/TotalTransactionChart.vue")['default']
export const CommonChartsUsesChart: typeof import("../components/common/charts/UsesChart.vue")['default']
export const CommonChartsWeeklyVisitor: typeof import("../components/common/charts/WeeklyVisitor.vue")['default']
export const CommonChartsGooglechartAreaCharts: typeof import("../components/common/charts/googlechart/AreaCharts.vue")['default']
export const CommonChartsGooglechartGoogleChart1: typeof import("../components/common/charts/googlechart/GoogleChart1.vue")['default']
export const CommonChartsGooglechartGoogleChart2: typeof import("../components/common/charts/googlechart/GoogleChart2.vue")['default']
export const CommonChartsGooglechartPieChart1: typeof import("../components/common/charts/googlechart/PieChart1.vue")['default']
export const CommonChartsGooglechartPieChart2: typeof import("../components/common/charts/googlechart/PieChart2.vue")['default']
export const CommonChartsGooglechartWordTree: typeof import("../components/common/charts/googlechart/WordTree.vue")['default']
export const CommonChartsGooglechartColumnChart: typeof import("../components/common/charts/googlechart/columnChart.vue")['default']
export const CommonChartsProjectOverview: typeof import("../components/common/charts/projectOverview.vue")['default']
export const CommonChartsProjectOverview1: typeof import("../components/common/charts/projectOverview1.vue")['default']
export const CommonInputFieldsCommonField: typeof import("../components/common/inputFields/commonField.vue")['default']
export const CommonInputFieldsRadioField: typeof import("../components/common/inputFields/radioField.vue")['default']
export const CommonInputFieldsSelectBox: typeof import("../components/common/inputFields/selectBox.vue")['default']
export const CommonModalsAddCategory: typeof import("../components/common/modals/AddCategory.vue")['default']
export const CommonModalsCareateTag: typeof import("../components/common/modals/CareateTag.vue")['default']
export const CommonModalsNewContact: typeof import("../components/common/modals/NewContact.vue")['default']
export const CommonModalsNewTask: typeof import("../components/common/modals/NewTask.vue")['default']
export const CommonModalsAddLabel: typeof import("../components/common/modals/addLabel.vue")['default']
export const CommonModalsCompose: typeof import("../components/common/modals/compose.vue")['default']
export const CommonModalsNewBookmark: typeof import("../components/common/modals/newBookmark.vue")['default']
export const CommonModalsQuickView: typeof import("../components/common/modals/quickView.vue")['default']
export const CommonModalsTagsView: typeof import("../components/common/modals/tagsView.vue")['default']
export const ThemeAdvanceAnimationBox: typeof import("../components/theme/advance/animation/AnimationBox.vue")['default']
export const ThemeAdvanceBasicFlat: typeof import("../components/theme/advance/basic/BasicFlat.vue")['default']
export const ThemeAdvanceBasicDarkCard: typeof import("../components/theme/advance/basic/DarkCard.vue")['default']
export const ThemeAdvanceBasicFooterCard: typeof import("../components/theme/advance/basic/FooterCard.vue")['default']
export const ThemeAdvanceBasicIconCard: typeof import("../components/theme/advance/basic/IconCard.vue")['default']
export const ThemeAdvanceBasicShadowCard: typeof import("../components/theme/advance/basic/ShadowCard.vue")['default']
export const ThemeAdvanceBreadcrumbColoredNavigation: typeof import("../components/theme/advance/breadcrumb/ColoredNavigation.vue")['default']
export const ThemeAdvanceBreadcrumbDefaultBreadcrumb: typeof import("../components/theme/advance/breadcrumb/DefaultBreadcrumb.vue")['default']
export const ThemeAdvanceBreadcrumbDividersBreadcrumbs: typeof import("../components/theme/advance/breadcrumb/DividersBreadcrumbs.vue")['default']
export const ThemeAdvanceBreadcrumbIconsBreadcrumb: typeof import("../components/theme/advance/breadcrumb/IconsBreadcrumb.vue")['default']
export const ThemeAdvanceBreadcrumbNavBreadcrumb: typeof import("../components/theme/advance/breadcrumb/NavBreadcrumb.vue")['default']
export const ThemeAdvanceCreativeAbsoluteCard: typeof import("../components/theme/advance/creative/AbsoluteCard.vue")['default']
export const ThemeAdvanceCreativeBorderCard: typeof import("../components/theme/advance/creative/BorderCard.vue")['default']
export const ThemeAdvanceCreativePrimaryState: typeof import("../components/theme/advance/creative/PrimaryState.vue")['default']
export const ThemeAdvanceCreativeSecondaryState: typeof import("../components/theme/advance/creative/SecondaryState.vue")['default']
export const ThemeAdvanceCreativeWarningState: typeof import("../components/theme/advance/creative/WarningState.vue")['default']
export const ThemeAdvanceCropperImageCropper: typeof import("../components/theme/advance/cropper/ImageCropper.vue")['default']
export const ThemeAdvanceDraggableCard: typeof import("../components/theme/advance/draggable/DraggableCard.vue")['default']
export const ThemeAdvanceDraggableFooterCard: typeof import("../components/theme/advance/draggable/FooterCard.vue")['default']
export const ThemeAdvanceDropzoneDefaultDropzone: typeof import("../components/theme/advance/dropzone/DefaultDropzone.vue")['default']
export const ThemeAdvanceDropzoneImageDropzone: typeof import("../components/theme/advance/dropzone/ImageDropzone.vue")['default']
export const ThemeAdvanceDropzoneMultiDropzone: typeof import("../components/theme/advance/dropzone/MultiDropzone.vue")['default']
export const ThemeAdvanceDropzoneSingleDropzone: typeof import("../components/theme/advance/dropzone/SingleDropzone.vue")['default']
export const ThemeAdvanceOwlcarouselAutoPlay: typeof import("../components/theme/advance/owlcarousel/AutoPlay.vue")['default']
export const ThemeAdvanceOwlcarouselCrossFade: typeof import("../components/theme/advance/owlcarousel/CrossFade.vue")['default']
export const ThemeAdvanceOwlcarouselDarkVariant: typeof import("../components/theme/advance/owlcarousel/DarkVariant.vue")['default']
export const ThemeAdvanceOwlcarouselDisableTouch: typeof import("../components/theme/advance/owlcarousel/DisableTouch.vue")['default']
export const ThemeAdvanceOwlcarouselIndividualCarousel: typeof import("../components/theme/advance/owlcarousel/IndividualCarousel.vue")['default']
export const ThemeAdvanceOwlcarouselMouseWheel: typeof import("../components/theme/advance/owlcarousel/MouseWheel.vue")['default']
export const ThemeAdvanceOwlcarouselSlidesOnly: typeof import("../components/theme/advance/owlcarousel/SlidesOnly.vue")['default']
export const ThemeAdvanceOwlcarouselWithCaptions: typeof import("../components/theme/advance/owlcarousel/WithCaptions.vue")['default']
export const ThemeAdvanceOwlcarouselWithControls: typeof import("../components/theme/advance/owlcarousel/WithControls.vue")['default']
export const ThemeAdvanceOwlcarouselWithIndicators: typeof import("../components/theme/advance/owlcarousel/WithIndicators.vue")['default']
export const ThemeAdvancePaginationAlignmentsPagination: typeof import("../components/theme/advance/pagination/AlignmentsPagination.vue")['default']
export const ThemeAdvancePaginationDisabledPagination: typeof import("../components/theme/advance/pagination/DisabledPagination.vue")['default']
export const ThemeAdvancePaginationIconsPagenation: typeof import("../components/theme/advance/pagination/IconsPagenation.vue")['default']
export const ThemeAdvancePaginationRoundedPagination: typeof import("../components/theme/advance/pagination/RoundedPagination.vue")['default']
export const ThemeAdvancePaginationSimplePagination: typeof import("../components/theme/advance/pagination/SimplePagination.vue")['default']
export const ThemeAdvancePaginationSizingPagination: typeof import("../components/theme/advance/pagination/SizingPagination.vue")['default']
export const ThemeAdvanceRangsliderColorRang: typeof import("../components/theme/advance/rangslider/ColorRang.vue")['default']
export const ThemeAdvanceRangsliderCustomRang: typeof import("../components/theme/advance/rangslider/CustomRang.vue")['default']
export const ThemeAdvanceRangsliderDefultRang: typeof import("../components/theme/advance/rangslider/DefultRang.vue")['default']
export const ThemeAdvanceRangsliderMinMax: typeof import("../components/theme/advance/rangslider/MinMax.vue")['default']
export const ThemeAdvanceRangsliderNegativeRang: typeof import("../components/theme/advance/rangslider/NegativeRang.vue")['default']
export const ThemeAdvanceRangsliderPrefixRang: typeof import("../components/theme/advance/rangslider/PrefixRang.vue")['default']
export const ThemeAdvanceRangsliderPrettifyRang: typeof import("../components/theme/advance/rangslider/PrettifyRang.vue")['default']
export const ThemeAdvanceRangsliderStepsRange: typeof import("../components/theme/advance/rangslider/StepsRange.vue")['default']
export const ThemeAdvanceRatingAnimationRating: typeof import("../components/theme/advance/rating/AnimationRating.vue")['default']
export const ThemeAdvanceRatingClickableValue: typeof import("../components/theme/advance/rating/ClickableValue.vue")['default']
export const ThemeAdvanceRatingDisabledRating: typeof import("../components/theme/advance/rating/DisabledRating.vue")['default']
export const ThemeAdvanceRatingHeartRating: typeof import("../components/theme/advance/rating/HeartRating.vue")['default']
export const ThemeAdvanceRatingMovieRating: typeof import("../components/theme/advance/rating/MovieRating.vue")['default']
export const ThemeAdvanceRatingStarRating: typeof import("../components/theme/advance/rating/StarRating.vue")['default']
export const ThemeAdvanceRibbonsLeftRibbons: typeof import("../components/theme/advance/ribbons/LeftRibbons.vue")['default']
export const ThemeAdvanceRibbonsRightRibbons: typeof import("../components/theme/advance/ribbons/RightRibbons.vue")['default']
export const ThemeAdvanceScrollableBadgesScrollbar: typeof import("../components/theme/advance/scrollable/BadgesScrollbar.vue")['default']
export const ThemeAdvanceScrollableBothSide: typeof import("../components/theme/advance/scrollable/BothSide.vue")['default']
export const ThemeAdvanceScrollableCustomScrollbar: typeof import("../components/theme/advance/scrollable/CustomScrollbar.vue")['default']
export const ThemeAdvanceScrollableHorizontalScrollbar: typeof import("../components/theme/advance/scrollable/HorizontalScrollbar.vue")['default']
export const ThemeAdvanceScrollableProfileScrollable: typeof import("../components/theme/advance/scrollable/ProfileScrollable.vue")['default']
export const ThemeAdvanceScrollableContent: typeof import("../components/theme/advance/scrollable/ScrollableContent.vue")['default']
export const ThemeAdvanceScrollableSmallScroll: typeof import("../components/theme/advance/scrollable/SmallScroll.vue")['default']
export const ThemeAdvanceSweealertAutoClose: typeof import("../components/theme/advance/sweealert/AutoClose.vue")['default']
export const ThemeAdvanceSweealertBasicAlert: typeof import("../components/theme/advance/sweealert/BasicAlert.vue")['default']
export const ThemeAdvanceSweealertDangerAlert: typeof import("../components/theme/advance/sweealert/DangerAlert.vue")['default']
export const ThemeAdvanceSweealertInfoAlert: typeof import("../components/theme/advance/sweealert/InfoAlert.vue")['default']
export const ThemeAdvanceSweealertPikachuAlert: typeof import("../components/theme/advance/sweealert/PikachuAlert.vue")['default']
export const ThemeAdvanceSweealertQuestionsAlert: typeof import("../components/theme/advance/sweealert/QuestionsAlert.vue")['default']
export const ThemeAdvanceSweealertRequestMovie: typeof import("../components/theme/advance/sweealert/RequestMovie.vue")['default']
export const ThemeAdvanceSweealertSuccessMessage: typeof import("../components/theme/advance/sweealert/SuccessMessage.vue")['default']
export const ThemeAdvanceSweealertTextUnder: typeof import("../components/theme/advance/sweealert/TextUnder.vue")['default']
export const ThemeAdvanceSweealertUsernameAlert: typeof import("../components/theme/advance/sweealert/UsernameAlert.vue")['default']
export const ThemeAdvanceSweealertWarningAlert: typeof import("../components/theme/advance/sweealert/WarningAlert.vue")['default']
export const ThemeAdvanceSweealertWarningMode: typeof import("../components/theme/advance/sweealert/WarningMode.vue")['default']
export const ThemeAdvanceTimelineBasicTimeline: typeof import("../components/theme/advance/timeline/BasicTimeline.vue")['default']
export const ThemeAdvanceTimelineDesignerSlider: typeof import("../components/theme/advance/timeline/DesignerSlider.vue")['default']
export const ThemeAdvanceTimelineHorizontalTimeline: typeof import("../components/theme/advance/timeline/HorizontalTimeline.vue")['default']
export const ThemeAdvanceTimelineHoveringTimeline: typeof import("../components/theme/advance/timeline/HoveringTimeline.vue")['default']
export const ThemeAdvanceTimelineView: typeof import("../components/theme/advance/timeline/TimelineView.vue")['default']
export const ThemeAdvanceTimelineVariationTimeline: typeof import("../components/theme/advance/timeline/VariationTimeline.vue")['default']
export const ThemeAdvanceToastsBasicToasts: typeof import("../components/theme/advance/toasts/BasicToasts.vue")['default']
export const ThemeAdvanceToastsIconToasts: typeof import("../components/theme/advance/toasts/IconToasts.vue")['default']
export const ThemeAdvanceToastsPositionToasts: typeof import("../components/theme/advance/toasts/PositionToasts.vue")['default']
export const ThemeAdvanceTourFirstPost: typeof import("../components/theme/advance/tour/FirstPost.vue")['default']
export const ThemeAdvanceTourLastPost: typeof import("../components/theme/advance/tour/LastPost.vue")['default']
export const ThemeAdvanceTourSecondPost: typeof import("../components/theme/advance/tour/SecondPost.vue")['default']
export const ThemeAdvanceTourSociaMedia: typeof import("../components/theme/advance/tour/SociaMedia.vue")['default']
export const ThemeAdvanceTourThirdPost: typeof import("../components/theme/advance/tour/ThirdPost.vue")['default']
export const ThemeAdvanceTourUserProfile: typeof import("../components/theme/advance/tour/UserProfile.vue")['default']
export const ThemeAdvanceTreeBasicTree: typeof import("../components/theme/advance/tree/BasicTree.vue")['default']
export const ThemeAdvanceTreeCheckTree: typeof import("../components/theme/advance/tree/CheckTree.vue")['default']
export const ThemeAdvanceTreeDragDropTree: typeof import("../components/theme/advance/tree/DragDropTree.vue")['default']
export const ThemeAdvanceTreeEditTree: typeof import("../components/theme/advance/tree/EditTree.vue")['default']
export const ThemeAnimationAnimateBox: typeof import("../components/theme/animation/animate/AnimateBox.vue")['default']
export const ThemeAnimationAnimateOption: typeof import("../components/theme/animation/animate/AnimateOption.vue")['default']
export const ThemeAnimationAosExample: typeof import("../components/theme/animation/aos/AosExample.vue")['default']
export const ThemeAnimationAosInitAOS: typeof import("../components/theme/animation/aos/InitAOS.vue")['default']
export const ThemeAppBookmarkEditView: typeof import("../components/theme/app/bookmark/editView.vue")['default']
export const ThemeAppBookmark: typeof import("../components/theme/app/bookmark/index.vue")['default']
export const ThemeAppBookmarkList: typeof import("../components/theme/app/bookmark/list/index.vue")['default']
export const ThemeAppBookmarkRightContent: typeof import("../components/theme/app/bookmark/rightContent.vue")['default']
export const ThemeAppButtonsBlockLevel: typeof import("../components/theme/app/buttons/BlockLevel.vue")['default']
export const ThemeAppButtonsButtonGroup: typeof import("../components/theme/app/buttons/ButtonGroup.vue")['default']
export const ThemeAppButtonsButtonVariations: typeof import("../components/theme/app/buttons/ButtonVariations.vue")['default']
export const ThemeAppButtonsData: typeof import("../components/theme/app/buttons/ButtonsData.vue")['default']
export const ThemeAppButtonsHorizontalVariation: typeof import("../components/theme/app/buttons/HorizontalVariation.vue")['default']
export const ThemeAppButtonsRadioAndCheckbox: typeof import("../components/theme/app/buttons/RadioAndCheckbox.vue")['default']
export const ThemeAppCalenderView: typeof import("../components/theme/app/calender/CalenderView.vue")['default']
export const ThemeAppChatContacts: typeof import("../components/theme/app/chat/ChatContacts.vue")['default']
export const ThemeAppChatGroupAddChat: typeof import("../components/theme/app/chat/group/addChat.vue")['default']
export const ThemeAppChatGroup: typeof import("../components/theme/app/chat/group/index.vue")['default']
export const ThemeAppChatPrivateAddChat: typeof import("../components/theme/app/chat/private/addChat.vue")['default']
export const ThemeAppChatPrivate: typeof import("../components/theme/app/chat/private/index.vue")['default']
export const ThemeAppChatSidebar: typeof import("../components/theme/app/chat/sidebar.vue")['default']
export const ThemeAppContactMoreData: typeof import("../components/theme/app/contact/MoreData.vue")['default']
export const ThemeAppContactDetail: typeof import("../components/theme/app/contact/detail.vue")['default']
export const ThemeAppContactEdit: typeof import("../components/theme/app/contact/edit.vue")['default']
export const ThemeAppContactHistory: typeof import("../components/theme/app/contact/history.vue")['default']
export const ThemeAppContact: typeof import("../components/theme/app/contact/index.vue")['default']
export const ThemeAppContactOrganization: typeof import("../components/theme/app/contact/organization.vue")['default']
export const ThemeAppContactOrganizationDetail: typeof import("../components/theme/app/contact/organizationDetail.vue")['default']
export const ThemeAppContactOrganizationModal: typeof import("../components/theme/app/contact/organizationModal.vue")['default']
export const ThemeAppContactPersonal: typeof import("../components/theme/app/contact/personal.vue")['default']
export const ThemeAppContactPrint: typeof import("../components/theme/app/contact/print.vue")['default']
export const ThemeAppFileManegerContent: typeof import("../components/theme/app/fileManeger/content.vue")['default']
export const ThemeAppFileManeger: typeof import("../components/theme/app/fileManeger/index.vue")['default']
export const ThemeAppKanabanApi: typeof import("../components/theme/app/kanaban/api.vue")['default']
export const ThemeAppKanabanCustom: typeof import("../components/theme/app/kanaban/custom.vue")['default']
export const ThemeAppKanaban: typeof import("../components/theme/app/kanaban/index.vue")['default']
export const ThemeAppLetterBoxDraft: typeof import("../components/theme/app/letterBox/draft.vue")['default']
export const ThemeAppLetterBoxEmailDetail: typeof import("../components/theme/app/letterBox/emailDetail.vue")['default']
export const ThemeAppLetterBoxInbox: typeof import("../components/theme/app/letterBox/inbox.vue")['default']
export const ThemeAppLetterBox: typeof import("../components/theme/app/letterBox/index.vue")['default']
export const ThemeAppLetterBoxPrivate: typeof import("../components/theme/app/letterBox/private.vue")['default']
export const ThemeAppLetterBoxSent: typeof import("../components/theme/app/letterBox/sent.vue")['default']
export const ThemeAppLetterBoxSidebar: typeof import("../components/theme/app/letterBox/sidebar.vue")['default']
export const ThemeAppLetterBoxStarred: typeof import("../components/theme/app/letterBox/starred.vue")['default']
export const ThemeAppLetterBoxSupport: typeof import("../components/theme/app/letterBox/support.vue")['default']
export const ThemeAppLetterBoxTrash: typeof import("../components/theme/app/letterBox/trash.vue")['default']
export const ThemeAppLetterBoxWork: typeof import("../components/theme/app/letterBox/work.vue")['default']
export const ThemeAppTaskAssignedView: typeof import("../components/theme/app/task/AssignedView.vue")['default']
export const ThemeAppTaskBusinessTask: typeof import("../components/theme/app/task/BusinessTask.vue")['default']
export const ThemeAppTaskCreatedView: typeof import("../components/theme/app/task/CreatedView.vue")['default']
export const ThemeAppTaskDelayedTasks: typeof import("../components/theme/app/task/DelayedTasks.vue")['default']
export const ThemeAppTaskHolidaysTask: typeof import("../components/theme/app/task/HolidaysTask.vue")['default']
export const ThemeAppTaskMonthTasks: typeof import("../components/theme/app/task/MonthTasks.vue")['default']
export const ThemeAppTaskMyTasks: typeof import("../components/theme/app/task/MyTasks.vue")['default']
export const ThemeAppTaskNewsLetter: typeof import("../components/theme/app/task/NewsLetter.vue")['default']
export const ThemeAppTaskNotificationView: typeof import("../components/theme/app/task/NotificationView.vue")['default']
export const ThemeAppTaskSidebar: typeof import("../components/theme/app/task/TaskSidebar.vue")['default']
export const ThemeAppTaskTodayTask: typeof import("../components/theme/app/task/TodayTask.vue")['default']
export const ThemeAppTaskUpcomingTasks: typeof import("../components/theme/app/task/UpcomingTasks.vue")['default']
export const ThemeAppTaskWeekTasks: typeof import("../components/theme/app/task/WeekTasks.vue")['default']
export const ThemeAppTodoAddTask: typeof import("../components/theme/app/todo/AddTask.vue")['default']
export const ThemeAppTodoSidebar: typeof import("../components/theme/app/todo/TodoSidebar.vue")['default']
export const ThemeBlogAddpostAddPost: typeof import("../components/theme/blog/addpost/AddPost.vue")['default']
export const ThemeBlogDetailsBlogGrid: typeof import("../components/theme/blog/details/BlogGrid.vue")['default']
export const ThemeBlogDetailsBlogList: typeof import("../components/theme/blog/details/BlogList.vue")['default']
export const ThemeBlogDetailsBlogShadow: typeof import("../components/theme/blog/details/BlogShadow.vue")['default']
export const ThemeBlogSingleBlogDetails: typeof import("../components/theme/blog/single/BlogDetails.vue")['default']
export const ThemeBlogSingleCommentBox: typeof import("../components/theme/blog/single/CommentBox.vue")['default']
export const ThemeChartsApexChartApexCharts: typeof import("../components/theme/charts/apexChart/ApexCharts.vue")['default']
export const ThemeDashboardDefaultIndexLeftDefault: typeof import("../components/theme/dashboard/default/IndexLeftDefault.vue")['default']
export const ThemeDashboardDefaultTreadCards: typeof import("../components/theme/dashboard/default/TreadCards.vue")['default']
export const ThemeDashboardDefaultWelcomeView: typeof import("../components/theme/dashboard/default/WelcomeView.vue")['default']
export const ThemeDashboardDefaultCard: typeof import("../components/theme/dashboard/default/card.vue")['default']
export const ThemeDashboardDefault: typeof import("../components/theme/dashboard/default/index.vue")['default']
export const ThemeDashboardDefaultMembers: typeof import("../components/theme/dashboard/default/members.vue")['default']
export const ThemeDashboardDefaultReferral: typeof import("../components/theme/dashboard/default/referral.vue")['default']
export const ThemeDashboardDefaultRevenue: typeof import("../components/theme/dashboard/default/revenue.vue")['default']
export const ThemeDashboardDefaultSidebar: typeof import("../components/theme/dashboard/default/sidebar.vue")['default']
export const ThemeDashboardDefaultTodo: typeof import("../components/theme/dashboard/default/todo.vue")['default']
export const ThemeDashboardEcommerceCards: typeof import("../components/theme/dashboard/ecommerce/cards.vue")['default']
export const ThemeDashboardEcommerceEarning: typeof import("../components/theme/dashboard/ecommerce/earning.vue")['default']
export const ThemeDashboardEcommerce: typeof import("../components/theme/dashboard/ecommerce/index.vue")['default']
export const ThemeDashboardEcommerceRecentOrder: typeof import("../components/theme/dashboard/ecommerce/recentOrder.vue")['default']
export const ThemeDashboardEcommerceSidebar: typeof import("../components/theme/dashboard/ecommerce/sidebar.vue")['default']
export const ThemeDashboardEcommerceStock: typeof import("../components/theme/dashboard/ecommerce/stock.vue")['default']
export const ThemeDashboardEcommerceVisitors: typeof import("../components/theme/dashboard/ecommerce/visitors.vue")['default']
export const ThemeDashboardProjectAvgEarning: typeof import("../components/theme/dashboard/project/avgEarning.vue")['default']
export const ThemeDashboardProjectCalender: typeof import("../components/theme/dashboard/project/calender.vue")['default']
export const ThemeDashboardProjectChat: typeof import("../components/theme/dashboard/project/chat.vue")['default']
export const ThemeDashboardProjectClient: typeof import("../components/theme/dashboard/project/client.vue")['default']
export const ThemeDashboardProjectDailyTask: typeof import("../components/theme/dashboard/project/dailyTask.vue")['default']
export const ThemeDashboardProject: typeof import("../components/theme/dashboard/project/index.vue")['default']
export const ThemeDashboardProjectStatus: typeof import("../components/theme/dashboard/project/status.vue")['default']
export const ThemeDashboardProjectUpdate: typeof import("../components/theme/dashboard/project/update.vue")['default']
export const ThemeEcommerceAddProductCategoryModal: typeof import("../components/theme/ecommerce/addProduct/CategoryModal.vue")['default']
export const ThemeEcommerceAddProductAdditional: typeof import("../components/theme/ecommerce/addProduct/additional.vue")['default']
export const ThemeEcommerceAddProductCategory: typeof import("../components/theme/ecommerce/addProduct/category.vue")['default']
export const ThemeEcommerceAddProductDetails: typeof import("../components/theme/ecommerce/addProduct/details.vue")['default']
export const ThemeEcommerceAddProductGellery: typeof import("../components/theme/ecommerce/addProduct/gellery.vue")['default']
export const ThemeEcommerceAddProduct: typeof import("../components/theme/ecommerce/addProduct/index.vue")['default']
export const ThemeEcommerceAddProductInventory: typeof import("../components/theme/ecommerce/addProduct/inventory.vue")['default']
export const ThemeEcommerceAddProductSelling: typeof import("../components/theme/ecommerce/addProduct/selling.vue")['default']
export const ThemeEcommerceAddProductShipping: typeof import("../components/theme/ecommerce/addProduct/shipping.vue")['default']
export const ThemeEcommerceCart: typeof import("../components/theme/ecommerce/cart/index.vue")['default']
export const ThemeEcommerceCategoryFilterBlock: typeof import("../components/theme/ecommerce/category/filterBlock.vue")['default']
export const ThemeEcommerceCategory: typeof import("../components/theme/ecommerce/category/index.vue")['default']
export const ThemeEcommerceCheckoutDetails: typeof import("../components/theme/ecommerce/checkout/details.vue")['default']
export const ThemeEcommerceCheckout: typeof import("../components/theme/ecommerce/checkout/index.vue")['default']
export const ThemeEcommerceInvoice1Details: typeof import("../components/theme/ecommerce/invoice/1/details.vue")['default']
export const ThemeEcommerceInvoice1: typeof import("../components/theme/ecommerce/invoice/1/index.vue")['default']
export const ThemeEcommerceInvoice2Details: typeof import("../components/theme/ecommerce/invoice/2/details.vue")['default']
export const ThemeEcommerceInvoice2: typeof import("../components/theme/ecommerce/invoice/2/index.vue")['default']
export const ThemeEcommerceInvoice3Details: typeof import("../components/theme/ecommerce/invoice/3/details.vue")['default']
export const ThemeEcommerceInvoice3: typeof import("../components/theme/ecommerce/invoice/3/index.vue")['default']
export const ThemeEcommerceInvoice4Details: typeof import("../components/theme/ecommerce/invoice/4/details.vue")['default']
export const ThemeEcommerceInvoice4: typeof import("../components/theme/ecommerce/invoice/4/index.vue")['default']
export const ThemeEcommerceInvoice5Details: typeof import("../components/theme/ecommerce/invoice/5/details.vue")['default']
export const ThemeEcommerceInvoice5: typeof import("../components/theme/ecommerce/invoice/5/index.vue")['default']
export const ThemeEcommerceInvoice6Details: typeof import("../components/theme/ecommerce/invoice/6/details.vue")['default']
export const ThemeEcommerceInvoice6: typeof import("../components/theme/ecommerce/invoice/6/index.vue")['default']
export const ThemeEcommerceOrderHistory: typeof import("../components/theme/ecommerce/orderHistory/index.vue")['default']
export const ThemeEcommerceOrderHistoryTable: typeof import("../components/theme/ecommerce/orderHistory/table.vue")['default']
export const ThemeEcommercePaymentDetailsEmi: typeof import("../components/theme/ecommerce/paymentDetails/emi.vue")['default']
export const ThemeEcommercePaymentDetails: typeof import("../components/theme/ecommerce/paymentDetails/index.vue")['default']
export const ThemeEcommercePricing: typeof import("../components/theme/ecommerce/pricing.vue")['default']
export const ThemeEcommerceProductDetailsFilterblock: typeof import("../components/theme/ecommerce/product/details/filterblock.vue")['default']
export const ThemeEcommerceProductDetails: typeof import("../components/theme/ecommerce/product/details/index.vue")['default']
export const ThemeEcommerceProductDetailsSlider: typeof import("../components/theme/ecommerce/product/details/slider.vue")['default']
export const ThemeEcommerceProductDetailsSummery: typeof import("../components/theme/ecommerce/product/details/summery.vue")['default']
export const ThemeEcommerceProductDetailsTabs: typeof import("../components/theme/ecommerce/product/details/tabs.vue")['default']
export const ThemeEcommerceProductFilterBar: typeof import("../components/theme/ecommerce/product/filterBar.vue")['default']
export const ThemeEcommerceProduct: typeof import("../components/theme/ecommerce/product/index.vue")['default']
export const ThemeEcommerceProductLength: typeof import("../components/theme/ecommerce/product/length.vue")['default']
export const ThemeEcommerceProductListData: typeof import("../components/theme/ecommerce/product/listData.vue")['default']
export const ThemeEcommerceProductNewProduct: typeof import("../components/theme/ecommerce/product/newProduct.vue")['default']
export const ThemeEcommerceProductListFilterBlock: typeof import("../components/theme/ecommerce/productList/filterBlock.vue")['default']
export const ThemeEcommerceProductList: typeof import("../components/theme/ecommerce/productList/index.vue")['default']
export const ThemeEcommerceWishlist: typeof import("../components/theme/ecommerce/wishlist/index.vue")['default']
export const ThemeFormFormcontrolCheckboxradioAnimatedButtons: typeof import("../components/theme/form/formcontrol/checkboxradio/AnimatedButtons.vue")['default']
export const ThemeFormFormcontrolCheckboxradioCheckboxRadio: typeof import("../components/theme/form/formcontrol/checkboxradio/CheckboxRadio.vue")['default']
export const ThemeFormFormcontrolCheckboxradioCustomCheckbox: typeof import("../components/theme/form/formcontrol/checkboxradio/CustomCheckbox.vue")['default']
export const ThemeFormFormcontrolCheckboxradioCustumRadio: typeof import("../components/theme/form/formcontrol/checkboxradio/CustumRadio.vue")['default']
export const ThemeFormFormcontrolCheckboxradioDefaultCheckbox: typeof import("../components/theme/form/formcontrol/checkboxradio/DefaultCheckbox.vue")['default']
export const ThemeFormFormcontrolCheckboxradioDefaultRadio: typeof import("../components/theme/form/formcontrol/checkboxradio/DefaultRadio.vue")['default']
export const ThemeFormFormcontrolCheckboxradioDefaultSwitches: typeof import("../components/theme/form/formcontrol/checkboxradio/DefaultSwitches.vue")['default']
export const ThemeFormFormcontrolCheckboxradioImagesCheckbox: typeof import("../components/theme/form/formcontrol/checkboxradio/ImagesCheckbox.vue")['default']
export const ThemeFormFormcontrolCheckboxradioImagesRadio: typeof import("../components/theme/form/formcontrol/checkboxradio/ImagesRadio.vue")['default']
export const ThemeFormFormcontrolCheckboxradioInlineInput: typeof import("../components/theme/form/formcontrol/checkboxradio/InlineInput.vue")['default']
export const ThemeFormFormcontrolCheckboxradioRadioToggle: typeof import("../components/theme/form/formcontrol/checkboxradio/RadioToggle.vue")['default']
export const ThemeFormFormcontrolInputBasicForm: typeof import("../components/theme/form/formcontrol/input/BasicForm.vue")['default']
export const ThemeFormFormcontrolInputEdgesInput: typeof import("../components/theme/form/formcontrol/input/EdgesInput.vue")['default']
export const ThemeFormFormcontrolInputFileInput: typeof import("../components/theme/form/formcontrol/input/FileInput.vue")['default']
export const ThemeFormFormcontrolInputFlatInput: typeof import("../components/theme/form/formcontrol/input/FlatInput.vue")['default']
export const ThemeFormFormcontrolInputFloatingForm: typeof import("../components/theme/form/formcontrol/input/FloatingForm.vue")['default']
export const ThemeFormFormcontrolInputFloatingInput: typeof import("../components/theme/form/formcontrol/input/FloatingInput.vue")['default']
export const ThemeFormFormcontrolInputHtmlInput: typeof import("../components/theme/form/formcontrol/input/HtmlInput.vue")['default']
export const ThemeFormFormcontrolInputRaiseInput: typeof import("../components/theme/form/formcontrol/input/RaiseInput.vue")['default']
export const ThemeFormFormcontrolInputSelectSizing: typeof import("../components/theme/form/formcontrol/input/SelectSizing.vue")['default']
export const ThemeFormFormcontrolInputgroupsBasicInput: typeof import("../components/theme/form/formcontrol/inputgroups/BasicInput.vue")['default']
export const ThemeFormFormcontrolInputgroupsButtonAddons: typeof import("../components/theme/form/formcontrol/inputgroups/ButtonAddons.vue")['default']
export const ThemeFormFormcontrolInputgroupsButtonsDropdowns: typeof import("../components/theme/form/formcontrol/inputgroups/ButtonsDropdowns.vue")['default']
export const ThemeFormFormcontrolInputgroupsCheckboxesRadios: typeof import("../components/theme/form/formcontrol/inputgroups/CheckboxesRadios.vue")['default']
export const ThemeFormFormcontrolInputgroupsCustomForms: typeof import("../components/theme/form/formcontrol/inputgroups/CustomForms.vue")['default']
export const ThemeFormFormcontrolInputgroupsFileInput: typeof import("../components/theme/form/formcontrol/inputgroups/FileInput.vue")['default']
export const ThemeFormFormcontrolInputgroupsMultipleInputs: typeof import("../components/theme/form/formcontrol/inputgroups/MultipleInputs.vue")['default']
export const ThemeFormFormcontrolInputgroupsSegmentedButtons: typeof import("../components/theme/form/formcontrol/inputgroups/SegmentedButtons.vue")['default']
export const ThemeFormFormcontrolInputgroupsSizingInput: typeof import("../components/theme/form/formcontrol/inputgroups/SizingInput.vue")['default']
export const ThemeFormFormcontrolInputgroupsVariationAddons: typeof import("../components/theme/form/formcontrol/inputgroups/VariationAddons.vue")['default']
export const ThemeFormFormcontrolInputmaskMaskInput: typeof import("../components/theme/form/formcontrol/inputmask/MaskInput.vue")['default']
export const ThemeFormFormcontrolMagaoptionBorderStyle: typeof import("../components/theme/form/formcontrol/magaoption/BorderStyle.vue")['default']
export const ThemeFormFormcontrolMagaoptionDashedStyle: typeof import("../components/theme/form/formcontrol/magaoption/DashedStyle.vue")['default']
export const ThemeFormFormcontrolMagaoptionDefultStyle: typeof import("../components/theme/form/formcontrol/magaoption/DefultStyle.vue")['default']
export const ThemeFormFormcontrolMagaoptionHorizontalStyle: typeof import("../components/theme/form/formcontrol/magaoption/HorizontalStyle.vue")['default']
export const ThemeFormFormcontrolMagaoptionInlineStyle: typeof import("../components/theme/form/formcontrol/magaoption/InlineStyle.vue")['default']
export const ThemeFormFormcontrolMagaoptionOfferBorder: typeof import("../components/theme/form/formcontrol/magaoption/OfferBorder.vue")['default']
export const ThemeFormFormcontrolMagaoptionVariationCheckbox: typeof import("../components/theme/form/formcontrol/magaoption/VariationCheckbox.vue")['default']
export const ThemeFormFormcontrolMagaoptionVariationRadio: typeof import("../components/theme/form/formcontrol/magaoption/VariationRadio.vue")['default']
export const ThemeFormFormcontrolMagaoptionVerticalStyle: typeof import("../components/theme/form/formcontrol/magaoption/VerticalStyle.vue")['default']
export const ThemeFormFormcontrolValidationBrowserDefaults: typeof import("../components/theme/form/formcontrol/validation/BrowserDefaults.vue")['default']
export const ThemeFormFormcontrolValidationToltipValidation: typeof import("../components/theme/form/formcontrol/validation/ToltipValidation.vue")['default']
export const ThemeFormFormcontrolValidationForm: typeof import("../components/theme/form/formcontrol/validation/ValidationForm.vue")['default']
export const ThemeFormFormlayoutFormwizardBillingfrom: typeof import("../components/theme/form/formlayout/formwizard/Billingfrom.vue")['default']
export const ThemeFormFormlayoutFormwizardCurrentCart: typeof import("../components/theme/form/formlayout/formwizard/CurrentCart.vue")['default']
export const ThemeFormFormlayoutFormwizardFinishWizard: typeof import("../components/theme/form/formlayout/formwizard/FinishWizard.vue")['default']
export const ThemeFormFormlayoutFormwizardPaymentWizard: typeof import("../components/theme/form/formlayout/formwizard/PaymentWizard.vue")['default']
export const ThemeFormFormlayoutFormwizardShippingForm: typeof import("../components/theme/form/formlayout/formwizard/ShippingForm.vue")['default']
export const ThemeFormFormlayoutFormwizardShippingForms: typeof import("../components/theme/form/formlayout/formwizard/ShippingForms.vue")['default']
export const ThemeFormFormlayoutFormwizardShippingModel: typeof import("../components/theme/form/formlayout/formwizard/ShippingModel.vue")['default']
export const ThemeFormFormlayoutFormwizardSimpleWizard: typeof import("../components/theme/form/formlayout/formwizard/SimpleWizard.vue")['default']
export const ThemeFormFormlayoutFormwizardVerticalValidation: typeof import("../components/theme/form/formlayout/formwizard/VerticalValidation.vue")['default']
export const ThemeFormFormlayoutFormwizardWizardBanking: typeof import("../components/theme/form/formlayout/formwizard/WizardBanking.vue")['default']
export const ThemeFormFormlayoutFormwizardWizardCart: typeof import("../components/theme/form/formlayout/formwizard/WizardCart.vue")['default']
export const ThemeFormFormlayoutFormwizardWizardContact: typeof import("../components/theme/form/formlayout/formwizard/WizardContact.vue")['default']
export const ThemeFormFormlayoutFormwizard2BankWizard: typeof import("../components/theme/form/formlayout/formwizard2/BankWizard.vue")['default']
export const ThemeFormFormlayoutFormwizard2BusinessHorizontal: typeof import("../components/theme/form/formlayout/formwizard2/BusinessHorizontal.vue")['default']
export const ThemeFormFormlayoutFormwizard2BusinessSettings: typeof import("../components/theme/form/formlayout/formwizard2/BusinessSettings.vue")['default']
export const ThemeFormFormlayoutFormwizard2BusinessVertical: typeof import("../components/theme/form/formlayout/formwizard2/BusinessVertical.vue")['default']
export const ThemeFormFormlayoutFormwizard2ChooseAccount: typeof import("../components/theme/form/formlayout/formwizard2/ChooseAccount.vue")['default']
export const ThemeFormFormlayoutFormwizard2ContactDetails: typeof import("../components/theme/form/formlayout/formwizard2/ContactDetails.vue")['default']
export const ThemeFormFormlayoutFormwizard2CustomHorizontal: typeof import("../components/theme/form/formlayout/formwizard2/CustomHorizontal.vue")['default']
export const ThemeFormFormlayoutFormwizard2CustomVertical: typeof import("../components/theme/form/formlayout/formwizard2/CustomVertical.vue")['default']
export const ThemeFormFormlayoutFormwizard2InquiryWizard: typeof import("../components/theme/form/formlayout/formwizard2/InquiryWizard.vue")['default']
export const ThemeFormFormlayoutFormwizard2PayDetails: typeof import("../components/theme/form/formlayout/formwizard2/PayDetails.vue")['default']
export const ThemeFormFormlayoutFormwizard2WizardInfo: typeof import("../components/theme/form/formlayout/formwizard2/WizardInfo.vue")['default']
export const ThemeFormFormlayoutTwofactorAuthenticationModel: typeof import("../components/theme/form/formlayout/twofactor/AuthenticationModel.vue")['default']
export const ThemeFormFormlayoutTwofactorEmailVerification: typeof import("../components/theme/form/formlayout/twofactor/EmailVerification.vue")['default']
export const ThemeFormFormlayoutTwofactorTwoFactorAuthentication: typeof import("../components/theme/form/formlayout/twofactor/TwoFactorAuthentication.vue")['default']
export const ThemeFormFormlayoutTwofactorVerificationCode: typeof import("../components/theme/form/formlayout/twofactor/VerificationCode.vue")['default']
export const ThemeFormFormwidgetsClipboardCopyPortion: typeof import("../components/theme/form/formwidgets/clipboard/CopyPortion.vue")['default']
export const ThemeFormFormwidgetsClipboardParaGraph: typeof import("../components/theme/form/formwidgets/clipboard/ParaGraph.vue")['default']
export const ThemeFormFormwidgetsClipboardTextArea: typeof import("../components/theme/form/formwidgets/clipboard/TextArea.vue")['default']
export const ThemeFormFormwidgetsClipboardTextInput: typeof import("../components/theme/form/formwidgets/clipboard/TextInput.vue")['default']
export const ThemeFormFormwidgetsDatepickerBootstrapCalendar: typeof import("../components/theme/form/formwidgets/datepicker/BootstrapCalendar.vue")['default']
export const ThemeFormFormwidgetsDatepickerCustomizingConjunction: typeof import("../components/theme/form/formwidgets/datepicker/CustomizingConjunction.vue")['default']
export const ThemeFormFormwidgetsDatepickerDatePicker: typeof import("../components/theme/form/formwidgets/datepicker/DatePicker.vue")['default']
export const ThemeFormFormwidgetsDatepickerDateTime: typeof import("../components/theme/form/formwidgets/datepicker/DateTime.vue")['default']
export const ThemeFormFormwidgetsDatepickerDefaultCalander: typeof import("../components/theme/form/formwidgets/datepicker/DefaultCalander.vue")['default']
export const ThemeFormFormwidgetsDatepickerDefultDate: typeof import("../components/theme/form/formwidgets/datepicker/DefultDate.vue")['default']
export const ThemeFormFormwidgetsDatepickerDisabledDates: typeof import("../components/theme/form/formwidgets/datepicker/DisabledDates.vue")['default']
export const ThemeFormFormwidgetsDatepickerHourTimepicker: typeof import("../components/theme/form/formwidgets/datepicker/HourTimepicker.vue")['default']
export const ThemeFormFormwidgetsDatepickerHumanFriendly: typeof import("../components/theme/form/formwidgets/datepicker/HumanFriendly.vue")['default']
export const ThemeFormFormwidgetsDatepickerLimitedTimerange: typeof import("../components/theme/form/formwidgets/datepicker/LimitedTimerange.vue")['default']
export const ThemeFormFormwidgetsDatepickerLimitsTimepicker: typeof import("../components/theme/form/formwidgets/datepicker/LimitsTimepicker.vue")['default']
export const ThemeFormFormwidgetsDatepickerMainmaxTimepicker: typeof import("../components/theme/form/formwidgets/datepicker/MainmaxTimepicker.vue")['default']
export const ThemeFormFormwidgetsDatepickerMinmaxDate: typeof import("../components/theme/form/formwidgets/datepicker/MinmaxDate.vue")['default']
export const ThemeFormFormwidgetsDatepickerMultipleDate: typeof import("../components/theme/form/formwidgets/datepicker/MultipleDate.vue")['default']
export const ThemeFormFormwidgetsDatepickerPreloadingDates: typeof import("../components/theme/form/formwidgets/datepicker/PreloadingDates.vue")['default']
export const ThemeFormFormwidgetsDatepickerPreloadingTime: typeof import("../components/theme/form/formwidgets/datepicker/PreloadingTime.vue")['default']
export const ThemeFormFormwidgetsDatepickerRangeDate: typeof import("../components/theme/form/formwidgets/datepicker/RangeDate.vue")['default']
export const ThemeFormFormwidgetsDatepickerTimeOnly: typeof import("../components/theme/form/formwidgets/datepicker/TimeOnly.vue")['default']
export const ThemeFormFormwidgetsDatepickerTimePicker: typeof import("../components/theme/form/formwidgets/datepicker/TimePicker.vue")['default']
export const ThemeFormFormwidgetsSelect2FullColored: typeof import("../components/theme/form/formwidgets/select2/FullColored.vue")['default']
export const ThemeFormFormwidgetsSelect2OutlineColor: typeof import("../components/theme/form/formwidgets/select2/OutlineColor.vue")['default']
export const ThemeFormFormwidgetsSelect2SearchBox: typeof import("../components/theme/form/formwidgets/select2/SearchBox.vue")['default']
export const ThemeFormFormwidgetsSelect2SelectView: typeof import("../components/theme/form/formwidgets/select2/SelectView.vue")['default']
export const ThemeFormFormwidgetsSwitchBordersIcons: typeof import("../components/theme/form/formwidgets/switch/BordersIcons.vue")['default']
export const ThemeFormFormwidgetsSwitchCustomSwitch: typeof import("../components/theme/form/formwidgets/switch/CustomSwitch.vue")['default']
export const ThemeFormFormwidgetsSwitchDisabledOutline: typeof import("../components/theme/form/formwidgets/switch/DisabledOutline.vue")['default']
export const ThemeFormFormwidgetsSwitchIconsSwitch: typeof import("../components/theme/form/formwidgets/switch/IconsSwitch.vue")['default']
export const ThemeFormFormwidgetsSwitchIcons: typeof import("../components/theme/form/formwidgets/switch/SwitchIcons.vue")['default']
export const ThemeFormFormwidgetsSwitchSizing: typeof import("../components/theme/form/formwidgets/switch/SwitchSizing.vue")['default']
export const ThemeFormFormwidgetsSwitchUncheckedSwitch: typeof import("../components/theme/form/formwidgets/switch/UncheckedSwitch.vue")['default']
export const ThemeFormFormwidgetsSwitchVariationSwitches: typeof import("../components/theme/form/formwidgets/switch/VariationSwitches.vue")['default']
export const ThemeFormFormwidgetsTouchspinDefaultTouchspin: typeof import("../components/theme/form/formwidgets/touchspin/DefaultTouchspin.vue")['default']
export const ThemeFormFormwidgetsTouchspinIconsTouchspin: typeof import("../components/theme/form/formwidgets/touchspin/IconsTouchspin.vue")['default']
export const ThemeFormFormwidgetsTouchspinOutlinedTouchspin: typeof import("../components/theme/form/formwidgets/touchspin/OutlinedTouchspin.vue")['default']
export const ThemeFormFormwidgetsTouchspinPostfixTouchspin: typeof import("../components/theme/form/formwidgets/touchspin/PostfixTouchspin.vue")['default']
export const ThemeFormFormwidgetsTouchspinRoundedTouchspin: typeof import("../components/theme/form/formwidgets/touchspin/RoundedTouchspin.vue")['default']
export const ThemeFormFormwidgetsTouchspinDefulttouchspinDefaultDanger: typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultDanger.vue")['default']
export const ThemeFormFormwidgetsTouchspinDefulttouchspinDefaultDark: typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultDark.vue")['default']
export const ThemeFormFormwidgetsTouchspinDefulttouchspinDefaultInfo: typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultInfo.vue")['default']
export const ThemeFormFormwidgetsTouchspinDefulttouchspinDefaultPrimery: typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultPrimery.vue")['default']
export const ThemeFormFormwidgetsTouchspinDefulttouchspinDefaultSecondary: typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultSecondary.vue")['default']
export const ThemeFormFormwidgetsTouchspinDefulttouchspinDefaultSuccess: typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultSuccess.vue")['default']
export const ThemeFormFormwidgetsTouchspinDefulttouchspinDefaultWarning: typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultWarning.vue")['default']
export const ThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineDanger: typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlineDanger.vue")['default']
export const ThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineDark: typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlineDark.vue")['default']
export const ThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineInfo: typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlineInfo.vue")['default']
export const ThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlinePrimary: typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlinePrimary.vue")['default']
export const ThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineSecondary: typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlineSecondary.vue")['default']
export const ThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineSuccess: typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlineSuccess.vue")['default']
export const ThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineWarning: typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlineWarning.vue")['default']
export const ThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedDanger: typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedDanger.vue")['default']
export const ThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedDark: typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedDark.vue")['default']
export const ThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedInfo: typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedInfo.vue")['default']
export const ThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedPrimary: typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedPrimary.vue")['default']
export const ThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedSecondary: typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedSecondary.vue")['default']
export const ThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedSuccess: typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedSuccess.vue")['default']
export const ThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedWarning: typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedWarning.vue")['default']
export const ThemeFormFormwidgetsTypeaheadBasicTypeahead: typeof import("../components/theme/form/formwidgets/typeahead/BasicTypeahead.vue")['default']
export const ThemeFormFormwidgetsTypeaheadBloodhoundTyeahead: typeof import("../components/theme/form/formwidgets/typeahead/BloodhoundTyeahead.vue")['default']
export const ThemeFormFormwidgetsTypeaheadCustomTemplates: typeof import("../components/theme/form/formwidgets/typeahead/CustomTemplates.vue")['default']
export const ThemeFormFormwidgetsTypeaheadMultipleSections: typeof import("../components/theme/form/formwidgets/typeahead/MultipleSections.vue")['default']
export const ThemeFormFormwidgetsTypeaheadPrefetchTypeahead: typeof import("../components/theme/form/formwidgets/typeahead/PrefetchTypeahead.vue")['default']
export const ThemeFormFormwidgetsTypeaheadRemoteTypeahead: typeof import("../components/theme/form/formwidgets/typeahead/RemoteTypeahead.vue")['default']
export const ThemeFormFormwidgetsTypeaheadRtlSupport: typeof import("../components/theme/form/formwidgets/typeahead/RtlSupport.vue")['default']
export const ThemeFormFormwidgetsTypeaheadScrollableMenu: typeof import("../components/theme/form/formwidgets/typeahead/ScrollableMenu.vue")['default']
export const ThemeGalleryGridDesc: typeof import("../components/theme/gallery/grid/GridDesc.vue")['default']
export const ThemeGalleryGridGallery: typeof import("../components/theme/gallery/grid/GridGallery.vue")['default']
export const ThemeGalleryHoverEffect1: typeof import("../components/theme/gallery/hover/HoverEffect1.vue")['default']
export const ThemeGalleryHoverEffect10: typeof import("../components/theme/gallery/hover/HoverEffect10.vue")['default']
export const ThemeGalleryHoverEffect11: typeof import("../components/theme/gallery/hover/HoverEffect11.vue")['default']
export const ThemeGalleryHoverEffect12: typeof import("../components/theme/gallery/hover/HoverEffect12.vue")['default']
export const ThemeGalleryHoverEffect13: typeof import("../components/theme/gallery/hover/HoverEffect13.vue")['default']
export const ThemeGalleryHoverEffect14: typeof import("../components/theme/gallery/hover/HoverEffect14.vue")['default']
export const ThemeGalleryHoverEffect15: typeof import("../components/theme/gallery/hover/HoverEffect15.vue")['default']
export const ThemeGalleryHoverEffect2: typeof import("../components/theme/gallery/hover/HoverEffect2.vue")['default']
export const ThemeGalleryHoverEffect3: typeof import("../components/theme/gallery/hover/HoverEffect3.vue")['default']
export const ThemeGalleryHoverEffect4: typeof import("../components/theme/gallery/hover/HoverEffect4.vue")['default']
export const ThemeGalleryHoverEffect5: typeof import("../components/theme/gallery/hover/HoverEffect5.vue")['default']
export const ThemeGalleryHoverEffect6: typeof import("../components/theme/gallery/hover/HoverEffect6.vue")['default']
export const ThemeGalleryHoverEffect7: typeof import("../components/theme/gallery/hover/HoverEffect7.vue")['default']
export const ThemeGalleryHoverEffect8: typeof import("../components/theme/gallery/hover/HoverEffect8.vue")['default']
export const ThemeGalleryHoverEffect9: typeof import("../components/theme/gallery/hover/HoverEffect9.vue")['default']
export const ThemeGalleryMasonryDesc: typeof import("../components/theme/gallery/masonry/MasonryDesc.vue")['default']
export const ThemeGalleryMasonryGallery: typeof import("../components/theme/gallery/masonry/MasonryGallery.vue")['default']
export const ThemeIconsFontAwesomeBrandIcons: typeof import("../components/theme/icons/font_awesome/BrandIcons.vue")['default']
export const ThemeIconsFontAwesomeCurrencyIcons: typeof import("../components/theme/icons/font_awesome/CurrencyIcons.vue")['default']
export const ThemeIconsFontAwesomeDirectionalIcons: typeof import("../components/theme/icons/font_awesome/DirectionalIcons.vue")['default']
export const ThemeIconsFontAwesomeFormControl: typeof import("../components/theme/icons/font_awesome/FormControl.vue")['default']
export const ThemeIconsFontAwesomeIconsView: typeof import("../components/theme/icons/font_awesome/IconsView.vue")['default']
export const ThemeIconsFontAwesomeMedicalIcons: typeof import("../components/theme/icons/font_awesome/MedicalIcons.vue")['default']
export const ThemeIconsFontAwesomeSpinnerIcons: typeof import("../components/theme/icons/font_awesome/SpinnerIcons.vue")['default']
export const ThemeIconsFontAwesomeTextEditor: typeof import("../components/theme/icons/font_awesome/TextEditor.vue")['default']
export const ThemeIconsFontAwesomeVideoPlayer: typeof import("../components/theme/icons/font_awesome/VideoPlayer.vue")['default']
export const ThemeIconsFontAwesomeWebAppIcons: typeof import("../components/theme/icons/font_awesome/WebAppIcons.vue")['default']
export const ThemeIconsIcoIconAbstractIcon: typeof import("../components/theme/icons/ico_icon/AbstractIcon.vue")['default']
export const ThemeIconsIcoIconAnimalIcon: typeof import("../components/theme/icons/ico_icon/AnimalIcon.vue")['default']
export const ThemeIconsIcoIconBrandIcons: typeof import("../components/theme/icons/ico_icon/BrandIcons.vue")['default']
export const ThemeIconsIcoIconBusinessIcons: typeof import("../components/theme/icons/ico_icon/BusinessIcons.vue")['default']
export const ThemeIconsIcoIconChartIcons: typeof import("../components/theme/icons/ico_icon/ChartIcons.vue")['default']
export const ThemeIconsIcoIconConstructionIcons: typeof import("../components/theme/icons/ico_icon/ConstructionIcons.vue")['default']
export const ThemeIconsIcoIconCurrencyIcons: typeof import("../components/theme/icons/ico_icon/CurrencyIcons.vue")['default']
export const ThemeIconsIcoIconDeviceIcons: typeof import("../components/theme/icons/ico_icon/DeviceIcons.vue")['default']
export const ThemeIconsIcoIconDirectionalIcons: typeof import("../components/theme/icons/ico_icon/DirectionalIcons.vue")['default']
export const ThemeIconsIcoIconEducationIcons: typeof import("../components/theme/icons/ico_icon/EducationIcons.vue")['default']
export const ThemeIconsIcoIconEmoticonIcons: typeof import("../components/theme/icons/ico_icon/EmoticonIcons.vue")['default']
export const ThemeIconsIcoIconFiletypeIcons: typeof import("../components/theme/icons/ico_icon/FiletypeIcons.vue")['default']
export const ThemeIconsIcoIconFoodIcons: typeof import("../components/theme/icons/ico_icon/FoodIcons.vue")['default']
export const ThemeIconsIcoIconKidsIcons: typeof import("../components/theme/icons/ico_icon/KidsIcons.vue")['default']
export const ThemeIconsIcoIconLawIcons: typeof import("../components/theme/icons/ico_icon/LawIcons.vue")['default']
export const ThemeIconsIcoIconMathematicalIcons: typeof import("../components/theme/icons/ico_icon/MathematicalIcons.vue")['default']
export const ThemeIconsIcoIconMedicalIcons: typeof import("../components/theme/icons/ico_icon/MedicalIcons.vue")['default']
export const ThemeIconsIcoIconMobileIcons: typeof import("../components/theme/icons/ico_icon/MobileIcons.vue")['default']
export const ThemeIconsIcoIconMultimediaIcons: typeof import("../components/theme/icons/ico_icon/MultimediaIcons.vue")['default']
export const ThemeIconsIcoIconPaymentIcons: typeof import("../components/theme/icons/ico_icon/PaymentIcons.vue")['default']
export const ThemeIconsIcoIconPersonIcons: typeof import("../components/theme/icons/ico_icon/PersonIcons.vue")['default']
export const ThemeIconsIcoIconSearchIcons: typeof import("../components/theme/icons/ico_icon/SearchIcons.vue")['default']
export const ThemeIconsIcoIconSocialIcons: typeof import("../components/theme/icons/ico_icon/SocialIcons.vue")['default']
export const ThemeIconsIcoIconSportIcons: typeof import("../components/theme/icons/ico_icon/SportIcons.vue")['default']
export const ThemeIconsIcoIconTextIcons: typeof import("../components/theme/icons/ico_icon/TextIcons.vue")['default']
export const ThemeIconsIcoIconTransportIcons: typeof import("../components/theme/icons/ico_icon/TransportIcons.vue")['default']
export const ThemeIconsIcoIconTravelIcons: typeof import("../components/theme/icons/ico_icon/TravelIcons.vue")['default']
export const ThemeIconsIcoIconWeatherIcons: typeof import("../components/theme/icons/ico_icon/WeatherIcons.vue")['default']
export const ThemeIconsIcoIconWebIcons: typeof import("../components/theme/icons/ico_icon/WebIcons.vue")['default']
export const ThemeIconsThemifyIconBrandIcons: typeof import("../components/theme/icons/themify_icon/BrandIcons.vue")['default']
export const ThemeIconsThemifyIconControlIcons: typeof import("../components/theme/icons/themify_icon/ControlIcons.vue")['default']
export const ThemeIconsThemifyIconDirectionIcons: typeof import("../components/theme/icons/themify_icon/DirectionIcons.vue")['default']
export const ThemeIconsThemifyIconTextEditor: typeof import("../components/theme/icons/themify_icon/TextEditor.vue")['default']
export const ThemeIconsThemifyIconWebAppIcons: typeof import("../components/theme/icons/themify_icon/WebAppIcons.vue")['default']
export const ThemeIconsWhetherIcons: typeof import("../components/theme/icons/whether/WhetherIcons.vue")['default']
export const ThemeInternationalizationLanguageInternationa: typeof import("../components/theme/internationalization/LanguageInternationa.vue")['default']
export const ThemeInternationalizationLanguagePicker: typeof import("../components/theme/internationalization/LanguagePicker.vue")['default']
export const ThemeInternationalizationLanguageView: typeof import("../components/theme/internationalization/LanguageView.vue")['default']
export const ThemeJobApply: typeof import("../components/theme/job/apply/JobApply.vue")['default']
export const ThemeJobApplyPersonalBirthDate: typeof import("../components/theme/job/apply/personal/BirthDate.vue")['default']
export const ThemeJobApplyPersonalDateView: typeof import("../components/theme/job/apply/personal/DateView.vue")['default']
export const ThemeJobApplyPersonalDetails: typeof import("../components/theme/job/apply/personal/PersonalDetails.vue")['default']
export const ThemeJobApplyPersonalYourEducation: typeof import("../components/theme/job/apply/personal/YourEducation.vue")['default']
export const ThemeJobCardView: typeof import("../components/theme/job/card/CardView.vue")['default']
export const ThemeJobDetails: typeof import("../components/theme/job/details/JobDetails.vue")['default']
export const ThemeJobDetailsSimilarJobs: typeof import("../components/theme/job/details/SimilarJobs.vue")['default']
export const ThemeJobFiltersFilterView: typeof import("../components/theme/job/filters/FilterView.vue")['default']
export const ThemeJobFiltersIndustryView: typeof import("../components/theme/job/filters/IndustryView.vue")['default']
export const ThemeJobFiltersJobTitle: typeof import("../components/theme/job/filters/JobTitle.vue")['default']
export const ThemeJobFiltersLocationView: typeof import("../components/theme/job/filters/LocationView.vue")['default']
export const ThemeJobFiltersSpecificSkills: typeof import("../components/theme/job/filters/SpecificSkills.vue")['default']
export const ThemeJobListsJobList: typeof import("../components/theme/job/lists/JobList.vue")['default']
export const ThemeKnowledgebaseBrowseArticles: typeof import("../components/theme/knowledgebase/BrowseArticles.vue")['default']
export const ThemeKnowledgebaseFaqWidgets: typeof import("../components/theme/knowledgebase/FaqWidgets.vue")['default']
export const ThemeKnowledgebaseFeaturesFaq: typeof import("../components/theme/knowledgebase/FeaturesFaq.vue")['default']
export const ThemeKnowledgebaseSearch: typeof import("../components/theme/knowledgebase/KnowledgebaseSearch.vue")['default']
export const ThemeKnowledgebaseLatestArticles: typeof import("../components/theme/knowledgebase/LatestArticles.vue")['default']
export const ThemeKpkpDatatableZeroConfiguration: typeof import("../components/theme/kpkp/datatable/zeroConfiguration.vue")['default']
export const ThemeLearningCourseBlogBox: typeof import("../components/theme/learning/course/BlogBox.vue")['default']
export const ThemeLearningCourseDetail: typeof import("../components/theme/learning/course/CourseDetail.vue")['default']
export const ThemeLearningFiltersCategoriesView: typeof import("../components/theme/learning/filters/CategoriesView.vue")['default']
export const ThemeLearningFiltersFindCourse: typeof import("../components/theme/learning/filters/FindCourse.vue")['default']
export const ThemeLearningFiltersUpcomingCourses: typeof import("../components/theme/learning/filters/UpcomingCourses.vue")['default']
export const ThemeLearningListsLearningList: typeof import("../components/theme/learning/lists/LearningList.vue")['default']
export const ThemeMapsDraggableMarker: typeof import("../components/theme/maps/DraggableMarker.vue")['default']
export const ThemeMapsGooglePolyline: typeof import("../components/theme/maps/GooglePolyline.vue")['default']
export const ThemeMapsMarkersMap: typeof import("../components/theme/maps/MarkersMap.vue")['default']
export const ThemeMapsMultiLanguage: typeof import("../components/theme/maps/MultiLanguage.vue")['default']
export const ThemeMapsMultiLanguage2: typeof import("../components/theme/maps/MultiLanguage2.vue")['default']
export const ThemeMapsSimpleMap: typeof import("../components/theme/maps/SimpleMap.vue")['default']
export const ThemeMapsTrianglePolygon: typeof import("../components/theme/maps/TrianglePolygon.vue")['default']
export const ThemePagesFaqAccordion: typeof import("../components/theme/pages/faq/FaqAccordion.vue")['default']
export const ThemePagesFaqArticles: typeof import("../components/theme/pages/faq/FaqArticles.vue")['default']
export const ThemePagesFaqWidgets: typeof import("../components/theme/pages/faq/FaqWidgets.vue")['default']
export const ThemePagesFaqFeaturedTutorial: typeof import("../components/theme/pages/faq/FeaturedTutorial.vue")['default']
export const ThemePagesFaqIntellectualProperty: typeof import("../components/theme/pages/faq/IntellectualProperty.vue")['default']
export const ThemePagesFaqNavigationView: typeof import("../components/theme/pages/faq/NavigationView.vue")['default']
export const ThemePagesFaqSellingAccording: typeof import("../components/theme/pages/faq/SellingAccording.vue")['default']
export const ThemePagesFaqUserAccounts: typeof import("../components/theme/pages/faq/UserAccounts.vue")['default']
export const ThemePagesSearchAllLink: typeof import("../components/theme/pages/search/AllLink.vue")['default']
export const ThemePagesSearchImageLink: typeof import("../components/theme/pages/search/ImageLink.vue")['default']
export const ThemePagesSearchBar: typeof import("../components/theme/pages/search/SearchBar.vue")['default']
export const ThemePagesSearchTab: typeof import("../components/theme/pages/search/SearchTab.vue")['default']
export const ThemePagesSearchVideoLink: typeof import("../components/theme/pages/search/VideoLink.vue")['default']
export const ThemePagesSocialappActivityFeed: typeof import("../components/theme/pages/socialapp/ActivityFeed.vue")['default']
export const ThemePagesSocialappActivityLog: typeof import("../components/theme/pages/socialapp/ActivityLog.vue")['default']
export const ThemePagesSocialappAddFriend: typeof import("../components/theme/pages/socialapp/AddFriend.vue")['default']
export const ThemePagesSocialappEducationView: typeof import("../components/theme/pages/socialapp/EducationView.vue")['default']
export const ThemePagesSocialappFollowersView: typeof import("../components/theme/pages/socialapp/FollowersView.vue")['default']
export const ThemePagesSocialappFollowingView: typeof import("../components/theme/pages/socialapp/FollowingView.vue")['default']
export const ThemePagesSocialappFriendsView: typeof import("../components/theme/pages/socialapp/FriendsView.vue")['default']
export const ThemePagesSocialappHobbiesView: typeof import("../components/theme/pages/socialapp/HobbiesView.vue")['default']
export const ThemePagesSocialappIndexAbout: typeof import("../components/theme/pages/socialapp/IndexAbout.vue")['default']
export const ThemePagesSocialappIndexFriends: typeof import("../components/theme/pages/socialapp/IndexFriends.vue")['default']
export const ThemePagesSocialappIndexTimeline: typeof import("../components/theme/pages/socialapp/IndexTimeline.vue")['default']
export const ThemePagesSocialappLatestPhotos: typeof import("../components/theme/pages/socialapp/LatestPhotos.vue")['default']
export const ThemePagesSocialappMutualFriends: typeof import("../components/theme/pages/socialapp/MutualFriends.vue")['default']
export const ThemePagesSocialappMyProfile: typeof import("../components/theme/pages/socialapp/MyProfile.vue")['default']
export const ThemePagesSocialappPhotosView: typeof import("../components/theme/pages/socialapp/PhotosView.vue")['default']
export const ThemePagesSocialappProfileIntro: typeof import("../components/theme/pages/socialapp/ProfileIntro.vue")['default']
export const ThemePagesSocialappSocialHeader: typeof import("../components/theme/pages/socialapp/SocialHeader.vue")['default']
export const ThemePagesSocialappSociallAccording: typeof import("../components/theme/pages/socialapp/SociallAccording.vue")['default']
export const ThemePagesSocialappUsersSocial: typeof import("../components/theme/pages/socialapp/UsersSocial.vue")['default']
export const ThemePagesSocialappUsersSocial1: typeof import("../components/theme/pages/socialapp/UsersSocial1.vue")['default']
export const ThemePagesSocialappYourProfile: typeof import("../components/theme/pages/socialapp/YourProfile.vue")['default']
export const ThemePagesSupportTable: typeof import("../components/theme/pages/support/SupportTable.vue")['default']
export const ThemePagesSupportTicket: typeof import("../components/theme/pages/support/SupportTicket.vue")['default']
export const ThemeProjectCreate: typeof import("../components/theme/project/create/index.vue")['default']
export const ThemeProjectListData: typeof import("../components/theme/project/list/data.vue")['default']
export const ThemeProjectList: typeof import("../components/theme/project/list/index.vue")['default']
export const ThemeTableBootstrapBasicTable: typeof import("../components/theme/table/bootstrap/BasicTable.vue")['default']
export const ThemeTableBootstrapBreckpointSpecific: typeof import("../components/theme/table/bootstrap/BreckpointSpecific.vue")['default']
export const ThemeTableBootstrapCaptionTable: typeof import("../components/theme/table/bootstrap/CaptionTable.vue")['default']
export const ThemeTableBootstrapCustomTable: typeof import("../components/theme/table/bootstrap/CustomTable.vue")['default']
export const ThemeTableBootstrapDashedBorder: typeof import("../components/theme/table/bootstrap/DashedBorder.vue")['default']
export const ThemeTableBootstrapHeadOptions: typeof import("../components/theme/table/bootstrap/HeadOptions.vue")['default']
export const ThemeTableBootstrapHoverableTable: typeof import("../components/theme/table/bootstrap/HoverableTable.vue")['default']
export const ThemeTableBootstrapInverseTable: typeof import("../components/theme/table/bootstrap/InverseTable.vue")['default']
export const ThemeTableBootstrapPrimaryBackground: typeof import("../components/theme/table/bootstrap/PrimaryBackground.vue")['default']
export const ThemeTableBootstrapResponsiveTable: typeof import("../components/theme/table/bootstrap/ResponsiveTable.vue")['default']
export const ThemeTableBootstrapSizingTable: typeof import("../components/theme/table/bootstrap/SizingTable.vue")['default']
export const ThemeTableBootstrapStripedRow: typeof import("../components/theme/table/bootstrap/StripedRow.vue")['default']
export const ThemeTableDatatableZeroConfiguration: typeof import("../components/theme/table/datatable/zeroConfiguration.vue")['default']
export const ThemeTableTablecomponentAlertComponent: typeof import("../components/theme/table/tablecomponent/AlertComponent.vue")['default']
export const ThemeTableTablecomponentBadgesComponent: typeof import("../components/theme/table/tablecomponent/BadgesComponent.vue")['default']
export const ThemeTableTablecomponentCheckboxComponent: typeof import("../components/theme/table/tablecomponent/CheckboxComponent.vue")['default']
export const ThemeTableTablecomponentInputComponent: typeof import("../components/theme/table/tablecomponent/InputComponent.vue")['default']
export const ThemeTableTablecomponentProgressbarComponent: typeof import("../components/theme/table/tablecomponent/ProgressbarComponent.vue")['default']
export const ThemeTableTablecomponentRadioButtons: typeof import("../components/theme/table/tablecomponent/RadioButtons.vue")['default']
export const ThemeTableTablecomponentSelectComponent: typeof import("../components/theme/table/tablecomponent/SelectComponent.vue")['default']
export const ThemeTableTablecomponentSwitchComponent: typeof import("../components/theme/table/tablecomponent/SwitchComponent.vue")['default']
export const ThemeTableTablecomponentTootipComponent: typeof import("../components/theme/table/tablecomponent/TootipComponent.vue")['default']
export const ThemeTableTablecomponentUiTable: typeof import("../components/theme/table/tablecomponent/UiTable.vue")['default']
export const ThemeUikitsAccordionFlushAccordion: typeof import("../components/theme/uikits/accordion/FlushAccordion.vue")['default']
export const ThemeUikitsAccordionHorizontalAccordion: typeof import("../components/theme/uikits/accordion/HorizontalAccordion.vue")['default']
export const ThemeUikitsAccordionIconsAccordion: typeof import("../components/theme/uikits/accordion/IconsAccordion.vue")['default']
export const ThemeUikitsAccordionMultipleAccordion: typeof import("../components/theme/uikits/accordion/MultipleAccordion.vue")['default']
export const ThemeUikitsAccordionOutlineAccordion: typeof import("../components/theme/uikits/accordion/OutlineAccordion.vue")['default']
export const ThemeUikitsAccordionSimpleAccordion: typeof import("../components/theme/uikits/accordion/SimpleAccordion.vue")['default']
export const ThemeUikitsAlertAdditionalContent: typeof import("../components/theme/uikits/alert/AdditionalContent.vue")['default']
export const ThemeUikitsAlertAlertsSection: typeof import("../components/theme/uikits/alert/AlertsSection.vue")['default']
export const ThemeUikitsAlertDarkColor: typeof import("../components/theme/uikits/alert/DarkColor.vue")['default']
export const ThemeUikitsAlertLightClor: typeof import("../components/theme/uikits/alert/LightClor.vue")['default']
export const ThemeUikitsAlertTextAlert: typeof import("../components/theme/uikits/alert/TextAlert.vue")['default']
export const ThemeUikitsAvatarGrouping: typeof import("../components/theme/uikits/avatar/AvatarGrouping.vue")['default']
export const ThemeUikitsAvatarRatio: typeof import("../components/theme/uikits/avatar/AvatarRatio.vue")['default']
export const ThemeUikitsAvatarShapes: typeof import("../components/theme/uikits/avatar/AvatarShapes.vue")['default']
export const ThemeUikitsAvatarSize: typeof import("../components/theme/uikits/avatar/AvatarSize.vue")['default']
export const ThemeUikitsAvatarStatus: typeof import("../components/theme/uikits/avatar/AvatarStatus.vue")['default']
export const ThemeUikitsDropdownAlignmentsDropdown: typeof import("../components/theme/uikits/dropdown/AlignmentsDropdown.vue")['default']
export const ThemeUikitsDropdownBasicDropdown: typeof import("../components/theme/uikits/dropdown/BasicDropdown.vue")['default']
export const ThemeUikitsDropdownDividerDropdown: typeof import("../components/theme/uikits/dropdown/DividerDropdown.vue")['default']
export const ThemeUikitsDropdownSection: typeof import("../components/theme/uikits/dropdown/DropdownSection.vue")['default']
export const ThemeUikitsDropdownSizing: typeof import("../components/theme/uikits/dropdown/DropdownSizing.vue")['default']
export const ThemeUikitsDropdownHelperCard: typeof import("../components/theme/uikits/dropdown/HelperCard.vue")['default']
export const ThemeUikitsDropdownJustifyContents: typeof import("../components/theme/uikits/dropdown/JustifyContents.vue")['default']
export const ThemeUikitsDropdownRoundedDropdown: typeof import("../components/theme/uikits/dropdown/RoundedDropdown.vue")['default']
export const ThemeUikitsDropdownSplitDropdown: typeof import("../components/theme/uikits/dropdown/SplitDropdown.vue")['default']
export const ThemeUikitsDropdownUniqueDropdown: typeof import("../components/theme/uikits/dropdown/UniqueDropdown.vue")['default']
export const ThemeUikitsGridAlignment: typeof import("../components/theme/uikits/grid/GridAlignment.vue")['default']
export const ThemeUikitsGridColumm: typeof import("../components/theme/uikits/grid/GridColumm.vue")['default']
export const ThemeUikitsGridOptions: typeof import("../components/theme/uikits/grid/GridOptions.vue")['default']
export const ThemeUikitsGridSection: typeof import("../components/theme/uikits/grid/GridSection.vue")['default']
export const ThemeUikitsHelperBackgroundColors: typeof import("../components/theme/uikits/helper/BackgroundColors.vue")['default']
export const ThemeUikitsHelperBorderColor: typeof import("../components/theme/uikits/helper/BorderColor.vue")['default']
export const ThemeUikitsHelperFontStyle: typeof import("../components/theme/uikits/helper/FontStyle.vue")['default']
export const ThemeUikitsHelperBorders: typeof import("../components/theme/uikits/helper/HelperBorders.vue")['default']
export const ThemeUikitsHelperDisplays: typeof import("../components/theme/uikits/helper/HelperDisplays.vue")['default']
export const ThemeUikitsHelperImagesSizes: typeof import("../components/theme/uikits/helper/ImagesSizes.vue")['default']
export const ThemeUikitsHelperMarginPeding: typeof import("../components/theme/uikits/helper/MarginPeding.vue")['default']
export const ThemeUikitsHelperTextColors: typeof import("../components/theme/uikits/helper/TextColors.vue")['default']
export const ThemeUikitsListsActiveLists: typeof import("../components/theme/uikits/lists/ActiveLists.vue")['default']
export const ThemeUikitsListsBadgeList: typeof import("../components/theme/uikits/lists/BadgeList.vue")['default']
export const ThemeUikitsListsCheckboxRedio: typeof import("../components/theme/uikits/lists/CheckboxRedio.vue")['default']
export const ThemeUikitsListsContextualClasses: typeof import("../components/theme/uikits/lists/ContextualClasses.vue")['default']
export const ThemeUikitsListsCustomList: typeof import("../components/theme/uikits/lists/CustomList.vue")['default']
export const ThemeUikitsListsDefaultLists: typeof import("../components/theme/uikits/lists/DefaultLists.vue")['default']
export const ThemeUikitsListsDisabledLists: typeof import("../components/theme/uikits/lists/DisabledLists.vue")['default']
export const ThemeUikitsListsFlushLists: typeof import("../components/theme/uikits/lists/FlushLists.vue")['default']
export const ThemeUikitsListsHorizontalLists: typeof import("../components/theme/uikits/lists/HorizontalLists.vue")['default']
export const ThemeUikitsListsJavaScriptBehavior: typeof import("../components/theme/uikits/lists/JavaScriptBehavior.vue")['default']
export const ThemeUikitsListsNumberList: typeof import("../components/theme/uikits/lists/NumberList.vue")['default']
export const ThemeUikitsListsScrollableLists: typeof import("../components/theme/uikits/lists/ScrollableLists.vue")['default']
export const ThemeUikitsModalBasicModal: typeof import("../components/theme/uikits/modal/BasicModal.vue")['default']
export const ThemeUikitsModalCenteredModal: typeof import("../components/theme/uikits/modal/CenteredModal.vue")['default']
export const ThemeUikitsModalCustomModals: typeof import("../components/theme/uikits/modal/CustomModals.vue")['default']
export const ThemeUikitsModalFullscreenModal: typeof import("../components/theme/uikits/modal/FullscreenModal.vue")['default']
export const ThemeUikitsModalSizeModel: typeof import("../components/theme/uikits/modal/SizeModel.vue")['default']
export const ThemeUikitsModalStaticModal: typeof import("../components/theme/uikits/modal/StaticModal.vue")['default']
export const ThemeUikitsModalToggleModals: typeof import("../components/theme/uikits/modal/ToggleModals.vue")['default']
export const ThemeUikitsModalModalsBalanceModal: typeof import("../components/theme/uikits/modal/modals/BalanceModal.vue")['default']
export const ThemeUikitsModalModalsExtralargeModal: typeof import("../components/theme/uikits/modal/modals/ExtralargeModal.vue")['default']
export const ThemeUikitsModalModalsFullscreenLg: typeof import("../components/theme/uikits/modal/modals/FullscreenLg.vue")['default']
export const ThemeUikitsModalModalsFullscreenMd: typeof import("../components/theme/uikits/modal/modals/FullscreenMd.vue")['default']
export const ThemeUikitsModalModalsFullscreenModallabel: typeof import("../components/theme/uikits/modal/modals/FullscreenModallabel.vue")['default']
export const ThemeUikitsModalModalsFullscreenSm: typeof import("../components/theme/uikits/modal/modals/FullscreenSm.vue")['default']
export const ThemeUikitsModalModalsFullscreenXl: typeof import("../components/theme/uikits/modal/modals/FullscreenXl.vue")['default']
export const ThemeUikitsModalModalsFullscreenXxl: typeof import("../components/theme/uikits/modal/modals/FullscreenXxl.vue")['default']
export const ThemeUikitsModalModalsFullsereenModa: typeof import("../components/theme/uikits/modal/modals/FullsereenModa.vue")['default']
export const ThemeUikitsModalModalsLargeModal: typeof import("../components/theme/uikits/modal/modals/LargeModal.vue")['default']
export const ThemeUikitsModalModalsOpenModel: typeof import("../components/theme/uikits/modal/modals/OpenModel.vue")['default']
export const ThemeUikitsModalModalsProfileModal: typeof import("../components/theme/uikits/modal/modals/ProfileModal.vue")['default']
export const ThemeUikitsModalModalsResultModal: typeof import("../components/theme/uikits/modal/modals/ResultModal.vue")['default']
export const ThemeUikitsModalModalsScrollingModal: typeof import("../components/theme/uikits/modal/modals/ScrollingModal.vue")['default']
export const ThemeUikitsModalModalsSimpleModel: typeof import("../components/theme/uikits/modal/modals/SimpleModel.vue")['default']
export const ThemeUikitsModalModalsSmallModal: typeof import("../components/theme/uikits/modal/modals/SmallModal.vue")['default']
export const ThemeUikitsModalModalsTooltipsModal: typeof import("../components/theme/uikits/modal/modals/TooltipsModal.vue")['default']
export const ThemeUikitsPopoverBasicPopover: typeof import("../components/theme/uikits/popover/BasicPopover.vue")['default']
export const ThemeUikitsPopoverDirectionPopover: typeof import("../components/theme/uikits/popover/DirectionPopover.vue")['default']
export const ThemeUikitsPopoverOffsetPopover: typeof import("../components/theme/uikits/popover/OffsetPopover.vue")['default']
export const ThemeUikitsProgressBasicProgressbar: typeof import("../components/theme/uikits/progress/BasicProgressbar.vue")['default']
export const ThemeUikitsProgressCustomProgressbars: typeof import("../components/theme/uikits/progress/CustomProgressbars.vue")['default']
export const ThemeUikitsProgressHeightProgressbars: typeof import("../components/theme/uikits/progress/HeightProgressbars.vue")['default']
export const ThemeUikitsProgressMultipleBars: typeof import("../components/theme/uikits/progress/MultipleBars.vue")['default']
export const ThemeUikitsProgressSmallProgressbars: typeof import("../components/theme/uikits/progress/SmallProgressbars.vue")['default']
export const ThemeUikitsProgressStripedProgressbar: typeof import("../components/theme/uikits/progress/StripedProgressbar.vue")['default']
export const ThemeUikitsTabsBorderTabs: typeof import("../components/theme/uikits/tabs/BorderTabs.vue")['default']
export const ThemeUikitsTabsIconTabs: typeof import("../components/theme/uikits/tabs/IconTabs.vue")['default']
export const ThemeUikitsTabsJustifyTabs: typeof import("../components/theme/uikits/tabs/JustifyTabs.vue")['default']
export const ThemeUikitsTabsLeftTabs: typeof import("../components/theme/uikits/tabs/LeftTabs.vue")['default']
export const ThemeUikitsTabsMaterialTabs: typeof import("../components/theme/uikits/tabs/MaterialTabs.vue")['default']
export const ThemeUikitsTabsPillsTabs: typeof import("../components/theme/uikits/tabs/PillsTabs.vue")['default']
export const ThemeUikitsTabsSimpleTabs: typeof import("../components/theme/uikits/tabs/SimpleTabs.vue")['default']
export const ThemeUikitsTabsVerticalTabs: typeof import("../components/theme/uikits/tabs/VerticalTabs.vue")['default']
export const ThemeUikitsTagpillsBadgesContextual: typeof import("../components/theme/uikits/tagpills/BadgesContextual.vue")['default']
export const ThemeUikitsTagpillsNumberBadge: typeof import("../components/theme/uikits/tagpills/NumberBadge.vue")['default']
export const ThemeUikitsTagpillsPillsContextual: typeof import("../components/theme/uikits/tagpills/PillsContextual.vue")['default']
export const ThemeUikitsTagpillsTagsIcons: typeof import("../components/theme/uikits/tagpills/TagsIcons.vue")['default']
export const ThemeUikitsTagpillsTagsSection: typeof import("../components/theme/uikits/tagpills/TagsSection.vue")['default']
export const ThemeUikitsTooltipBasicTooltip: typeof import("../components/theme/uikits/tooltip/BasicTooltip.vue")['default']
export const ThemeUikitsTooltipColoredTooltip: typeof import("../components/theme/uikits/tooltip/ColoredTooltip.vue")['default']
export const ThemeUikitsTooltipDirectionsTooltip: typeof import("../components/theme/uikits/tooltip/DirectionsTooltip.vue")['default']
export const ThemeUikitsTooltipFilledTooltip: typeof import("../components/theme/uikits/tooltip/FilledTooltip.vue")['default']
export const ThemeUikitsTooltipHoverEffect: typeof import("../components/theme/uikits/tooltip/HoverEffect.vue")['default']
export const ThemeUikitsTypographyColoredHeadings: typeof import("../components/theme/uikits/typography/ColoredHeadings.vue")['default']
export const ThemeUikitsTypographyDisplayHeadings: typeof import("../components/theme/uikits/typography/DisplayHeadings.vue")['default']
export const ThemeUikitsTypographyFontWeight: typeof import("../components/theme/uikits/typography/FontWeight.vue")['default']
export const ThemeUikitsTypographyHeadingsSeaction: typeof import("../components/theme/uikits/typography/HeadingsSeaction.vue")['default']
export const ThemeUikitsTypographyListingTypography: typeof import("../components/theme/uikits/typography/ListingTypography.vue")['default']
export const ThemeUikitsTypographyTextElements: typeof import("../components/theme/uikits/typography/TextElements.vue")['default']
export const ThemeUserCards: typeof import("../components/theme/user/cards/index.vue")['default']
export const ThemeUserEdit: typeof import("../components/theme/user/edit/index.vue")['default']
export const ThemeUserEditProfile: typeof import("../components/theme/user/edit/profile.vue")['default']
export const ThemeUserEditTable: typeof import("../components/theme/user/edit/table.vue")['default']
export const ThemeUserProfile: typeof import("../components/theme/user/profile/index.vue")['default']
export const ThemeUserProfilePost: typeof import("../components/theme/user/profile/post.vue")['default']
export const ThemeUserProfilePost1: typeof import("../components/theme/user/profile/post1.vue")['default']
export const ThemeUserProfilePost2: typeof import("../components/theme/user/profile/post2.vue")['default']
export const ThemeUserProfilePost3: typeof import("../components/theme/user/profile/post3.vue")['default']
export const ThemeWidgetsChartOrderStatus: typeof import("../components/theme/widgets/chart/OrderStatus.vue")['default']
export const ThemeWidgetsChartTotalProduct: typeof import("../components/theme/widgets/chart/TotalProduct.vue")['default']
export const ThemeWidgetsChartTotalProject: typeof import("../components/theme/widgets/chart/TotalProject.vue")['default']
export const ThemeWidgetsChartTotalSale: typeof import("../components/theme/widgets/chart/TotalSale.vue")['default']
export const ThemeWidgetsChartCurrency: typeof import("../components/theme/widgets/chart/currency.vue")['default']
export const ThemeWidgetsChart: typeof import("../components/theme/widgets/chart/index.vue")['default']
export const ThemeWidgetsGeneralActivity: typeof import("../components/theme/widgets/general/activity.vue")['default']
export const ThemeWidgetsGeneralEarning: typeof import("../components/theme/widgets/general/earning.vue")['default']
export const ThemeWidgetsGeneral: typeof import("../components/theme/widgets/general/index.vue")['default']
export const ThemeWidgetsGeneralPipline: typeof import("../components/theme/widgets/general/pipline.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const Icon: typeof import("../node_modules/nuxt-icon/dist/runtime/Icon.vue")['default']
export const IconCSS: typeof import("../node_modules/nuxt-icon/dist/runtime/IconCSS.vue")['default']
export const LCircle: typeof import("@vue-leaflet/vue-leaflet")['LCircle']
export const LCircleMarker: typeof import("@vue-leaflet/vue-leaflet")['LCircleMarker']
export const LControl: typeof import("@vue-leaflet/vue-leaflet")['LControl']
export const LControlAttribution: typeof import("@vue-leaflet/vue-leaflet")['LControlAttribution']
export const LControlLayers: typeof import("@vue-leaflet/vue-leaflet")['LControlLayers']
export const LControlScale: typeof import("@vue-leaflet/vue-leaflet")['LControlScale']
export const LControlZoom: typeof import("@vue-leaflet/vue-leaflet")['LControlZoom']
export const LFeatureGroup: typeof import("@vue-leaflet/vue-leaflet")['LFeatureGroup']
export const LGeoJson: typeof import("@vue-leaflet/vue-leaflet")['LGeoJson']
export const LIcon: typeof import("@vue-leaflet/vue-leaflet")['LIcon']
export const LImageOverlay: typeof import("@vue-leaflet/vue-leaflet")['LImageOverlay']
export const LLayerGroup: typeof import("@vue-leaflet/vue-leaflet")['LLayerGroup']
export const LMap: typeof import("@vue-leaflet/vue-leaflet")['LMap']
export const LMarker: typeof import("@vue-leaflet/vue-leaflet")['LMarker']
export const LPolygon: typeof import("@vue-leaflet/vue-leaflet")['LPolygon']
export const LPolyline: typeof import("@vue-leaflet/vue-leaflet")['LPolyline']
export const LPopup: typeof import("@vue-leaflet/vue-leaflet")['LPopup']
export const LRectangle: typeof import("@vue-leaflet/vue-leaflet")['LRectangle']
export const LTileLayer: typeof import("@vue-leaflet/vue-leaflet")['LTileLayer']
export const LTooltip: typeof import("@vue-leaflet/vue-leaflet")['LTooltip']
export const LWmsTileLayer: typeof import("@vue-leaflet/vue-leaflet")['LWmsTileLayer']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyCommonJobSidebar: LazyComponent<typeof import("../components/common/JobSidebar.vue")['default']>
export const LazyCommonLearningFilter: LazyComponent<typeof import("../components/common/LearningFilter.vue")['default']>
export const LazyCommonSuccessfulWizard: LazyComponent<typeof import("../components/common/SuccessfulWizard.vue")['default']>
export const LazyCommonTimerView: LazyComponent<typeof import("../components/common/TimerView.vue")['default']>
export const LazyCommonBlockTapTop: LazyComponent<typeof import("../components/common/block/TapTop.vue")['default']>
export const LazyCommonBlockBreadcrumb: LazyComponent<typeof import("../components/common/block/breadcrumb.vue")['default']>
export const LazyCommonBlockCustomizerBuyNow: LazyComponent<typeof import("../components/common/block/customizer/BuyNow.vue")['default']>
export const LazyCommonBlockCustomizerCheckFeatures: LazyComponent<typeof import("../components/common/block/customizer/CheckFeatures.vue")['default']>
export const LazyCommonBlockCustomizerConfigurationView: LazyComponent<typeof import("../components/common/block/customizer/ConfigurationView.vue")['default']>
export const LazyCommonBlockCustomizerCustomColor: LazyComponent<typeof import("../components/common/block/customizer/CustomColor.vue")['default']>
export const LazyCommonBlockCustomizerCustomSetting: LazyComponent<typeof import("../components/common/block/customizer/CustomSetting.vue")['default']>
export const LazyCommonBlockCustomizerSetting: LazyComponent<typeof import("../components/common/block/customizer/CustomizerSetting.vue")['default']>
export const LazyCommonBlockCustomizerSupport: LazyComponent<typeof import("../components/common/block/customizer/CustomizerSupport.vue")['default']>
export const LazyCommonBlockCustomizerDocumentSection: LazyComponent<typeof import("../components/common/block/customizer/DocumentSection.vue")['default']>
export const LazyCommonBlockCustomizerIndexCustomizer: LazyComponent<typeof import("../components/common/block/customizer/IndexCustomizer.vue")['default']>
export const LazyCommonBlockCustomizerLayoutType: LazyComponent<typeof import("../components/common/block/customizer/LayoutType.vue")['default']>
export const LazyCommonBlockCustomizerMixLayout: LazyComponent<typeof import("../components/common/block/customizer/MixLayout.vue")['default']>
export const LazyCommonBlockCustomizerSidebarType: LazyComponent<typeof import("../components/common/block/customizer/SidebarType.vue")['default']>
export const LazyCommonBlockEmoji: LazyComponent<typeof import("../components/common/block/emoji.vue")['default']>
export const LazyCommonBlockFooterView: LazyComponent<typeof import("../components/common/block/footer/FooterView.vue")['default']>
export const LazyCommonBlockFooterLanguageView: LazyComponent<typeof import("../components/common/block/footer/LanguageView.vue")['default']>
export const LazyCommonBlockHeaderBookmarkSearch: LazyComponent<typeof import("../components/common/block/header/BookmarkSearch.vue")['default']>
export const LazyCommonBlockHeaderCart: LazyComponent<typeof import("../components/common/block/header/cart.vue")['default']>
export const LazyCommonBlockHeader: LazyComponent<typeof import("../components/common/block/header/index.vue")['default']>
export const LazyCommonBlockHeaderMessage: LazyComponent<typeof import("../components/common/block/header/message.vue")['default']>
export const LazyCommonBlockHeaderMode: LazyComponent<typeof import("../components/common/block/header/mode.vue")['default']>
export const LazyCommonBlockHeaderNotification: LazyComponent<typeof import("../components/common/block/header/notification.vue")['default']>
export const LazyCommonBlockHeaderProfile: LazyComponent<typeof import("../components/common/block/header/profile.vue")['default']>
export const LazyCommonBlockHeaderSearch: LazyComponent<typeof import("../components/common/block/header/search.vue")['default']>
export const LazyCommonBlockSidebarProfileSidebar: LazyComponent<typeof import("../components/common/block/sidebar/ProfileSidebar.vue")['default']>
export const LazyCommonBlockSidebarSearchbar: LazyComponent<typeof import("../components/common/block/sidebar/SidebarSearchbar.vue")['default']>
export const LazyCommonBlockSidebar: LazyComponent<typeof import("../components/common/block/sidebar/index.vue")['default']>
export const LazyCommonBlockSidebarNavMenu: LazyComponent<typeof import("../components/common/block/sidebar/navMenu.vue")['default']>
export const LazyCommonCard1: LazyComponent<typeof import("../components/common/card/1.vue")['default']>
export const LazyCommonCard2: LazyComponent<typeof import("../components/common/card/2.vue")['default']>
export const LazyCommonCard3: LazyComponent<typeof import("../components/common/card/3.vue")['default']>
export const LazyCommonCard4: LazyComponent<typeof import("../components/common/card/4.vue")['default']>
export const LazyCommonChartsAnnotationChart: LazyComponent<typeof import("../components/common/charts/AnnotationChart.vue")['default']>
export const LazyCommonChartsAreaSpaline: LazyComponent<typeof import("../components/common/charts/AreaSpaline.vue")['default']>
export const LazyCommonChartsBasicApex: LazyComponent<typeof import("../components/common/charts/BasicApex.vue")['default']>
export const LazyCommonChartsBasicBar: LazyComponent<typeof import("../components/common/charts/BasicBar.vue")['default']>
export const LazyCommonChartsCandlestickChart: LazyComponent<typeof import("../components/common/charts/CandlestickChart.vue")['default']>
export const LazyCommonChartsChartBubble: LazyComponent<typeof import("../components/common/charts/ChartBubble.vue")['default']>
export const LazyCommonChartsChartCrypto: LazyComponent<typeof import("../components/common/charts/ChartCrypto.vue")['default']>
export const LazyCommonChartsChartWidget13: LazyComponent<typeof import("../components/common/charts/ChartWidget13.vue")['default']>
export const LazyCommonChartsChartWidget4: LazyComponent<typeof import("../components/common/charts/ChartWidget4.vue")['default']>
export const LazyCommonChartsChartWidget6: LazyComponent<typeof import("../components/common/charts/ChartWidget6.vue")['default']>
export const LazyCommonChartsChartWidget7: LazyComponent<typeof import("../components/common/charts/ChartWidget7.vue")['default']>
export const LazyCommonChartsCircleChart: LazyComponent<typeof import("../components/common/charts/CircleChart.vue")['default']>
export const LazyCommonChartsColumnChart: LazyComponent<typeof import("../components/common/charts/ColumnChart.vue")['default']>
export const LazyCommonChartsCryptoAnnotation: LazyComponent<typeof import("../components/common/charts/CryptoAnnotation.vue")['default']>
export const LazyCommonChartsDonutChart: LazyComponent<typeof import("../components/common/charts/DonutChart.vue")['default']>
export const LazyCommonChartsEarningAverage: LazyComponent<typeof import("../components/common/charts/EarningAverage.vue")['default']>
export const LazyCommonChartsEarningChart: LazyComponent<typeof import("../components/common/charts/EarningChart.vue")['default']>
export const LazyCommonChartsFinanceChart: LazyComponent<typeof import("../components/common/charts/FinanceChart.vue")['default']>
export const LazyCommonChartsMixedChart: LazyComponent<typeof import("../components/common/charts/MixedChart.vue")['default']>
export const LazyCommonChartsMonthlySales: LazyComponent<typeof import("../components/common/charts/MonthlySales.vue")['default']>
export const LazyCommonChartsOrderStatus: LazyComponent<typeof import("../components/common/charts/OrderStatus.vue")['default']>
export const LazyCommonChartsPieChart: LazyComponent<typeof import("../components/common/charts/PieChart.vue")['default']>
export const LazyCommonChartsPipelineChart: LazyComponent<typeof import("../components/common/charts/PipelineChart.vue")['default']>
export const LazyCommonChartsPipelineChart1: LazyComponent<typeof import("../components/common/charts/PipelineChart1.vue")['default']>
export const LazyCommonChartsPolarArea: LazyComponent<typeof import("../components/common/charts/PolarArea.vue")['default']>
export const LazyCommonChartsProfitChart: LazyComponent<typeof import("../components/common/charts/ProfitChart.vue")['default']>
export const LazyCommonChartsProfitChart1: LazyComponent<typeof import("../components/common/charts/ProfitChart1.vue")['default']>
export const LazyCommonChartsProgressChart: LazyComponent<typeof import("../components/common/charts/ProgressChart.vue")['default']>
export const LazyCommonChartsProgressChart1: LazyComponent<typeof import("../components/common/charts/ProgressChart1.vue")['default']>
export const LazyCommonChartsProgressChart2: LazyComponent<typeof import("../components/common/charts/ProgressChart2.vue")['default']>
export const LazyCommonChartsProgressChart3: LazyComponent<typeof import("../components/common/charts/ProgressChart3.vue")['default']>
export const LazyCommonChartsProgressChart4: LazyComponent<typeof import("../components/common/charts/ProgressChart4.vue")['default']>
export const LazyCommonChartsProjectBar: LazyComponent<typeof import("../components/common/charts/ProjectBar.vue")['default']>
export const LazyCommonChartsProjectBar1: LazyComponent<typeof import("../components/common/charts/ProjectBar1.vue")['default']>
export const LazyCommonChartsProjectEarning: LazyComponent<typeof import("../components/common/charts/ProjectEarning.vue")['default']>
export const LazyCommonChartsRadarChart: LazyComponent<typeof import("../components/common/charts/RadarChart.vue")['default']>
export const LazyCommonChartsRadialChart: LazyComponent<typeof import("../components/common/charts/RadialChart.vue")['default']>
export const LazyCommonChartsRevenueChart: LazyComponent<typeof import("../components/common/charts/RevenueChart.vue")['default']>
export const LazyCommonChartsRevenueOrder: LazyComponent<typeof import("../components/common/charts/RevenueOrder.vue")['default']>
export const LazyCommonChartsSteplineChart: LazyComponent<typeof import("../components/common/charts/SteplineChart.vue")['default']>
export const LazyCommonChartsTotalClients: LazyComponent<typeof import("../components/common/charts/TotalClients.vue")['default']>
export const LazyCommonChartsTotalTransactionChart: LazyComponent<typeof import("../components/common/charts/TotalTransactionChart.vue")['default']>
export const LazyCommonChartsUsesChart: LazyComponent<typeof import("../components/common/charts/UsesChart.vue")['default']>
export const LazyCommonChartsWeeklyVisitor: LazyComponent<typeof import("../components/common/charts/WeeklyVisitor.vue")['default']>
export const LazyCommonChartsGooglechartAreaCharts: LazyComponent<typeof import("../components/common/charts/googlechart/AreaCharts.vue")['default']>
export const LazyCommonChartsGooglechartGoogleChart1: LazyComponent<typeof import("../components/common/charts/googlechart/GoogleChart1.vue")['default']>
export const LazyCommonChartsGooglechartGoogleChart2: LazyComponent<typeof import("../components/common/charts/googlechart/GoogleChart2.vue")['default']>
export const LazyCommonChartsGooglechartPieChart1: LazyComponent<typeof import("../components/common/charts/googlechart/PieChart1.vue")['default']>
export const LazyCommonChartsGooglechartPieChart2: LazyComponent<typeof import("../components/common/charts/googlechart/PieChart2.vue")['default']>
export const LazyCommonChartsGooglechartWordTree: LazyComponent<typeof import("../components/common/charts/googlechart/WordTree.vue")['default']>
export const LazyCommonChartsGooglechartColumnChart: LazyComponent<typeof import("../components/common/charts/googlechart/columnChart.vue")['default']>
export const LazyCommonChartsProjectOverview: LazyComponent<typeof import("../components/common/charts/projectOverview.vue")['default']>
export const LazyCommonChartsProjectOverview1: LazyComponent<typeof import("../components/common/charts/projectOverview1.vue")['default']>
export const LazyCommonInputFieldsCommonField: LazyComponent<typeof import("../components/common/inputFields/commonField.vue")['default']>
export const LazyCommonInputFieldsRadioField: LazyComponent<typeof import("../components/common/inputFields/radioField.vue")['default']>
export const LazyCommonInputFieldsSelectBox: LazyComponent<typeof import("../components/common/inputFields/selectBox.vue")['default']>
export const LazyCommonModalsAddCategory: LazyComponent<typeof import("../components/common/modals/AddCategory.vue")['default']>
export const LazyCommonModalsCareateTag: LazyComponent<typeof import("../components/common/modals/CareateTag.vue")['default']>
export const LazyCommonModalsNewContact: LazyComponent<typeof import("../components/common/modals/NewContact.vue")['default']>
export const LazyCommonModalsNewTask: LazyComponent<typeof import("../components/common/modals/NewTask.vue")['default']>
export const LazyCommonModalsAddLabel: LazyComponent<typeof import("../components/common/modals/addLabel.vue")['default']>
export const LazyCommonModalsCompose: LazyComponent<typeof import("../components/common/modals/compose.vue")['default']>
export const LazyCommonModalsNewBookmark: LazyComponent<typeof import("../components/common/modals/newBookmark.vue")['default']>
export const LazyCommonModalsQuickView: LazyComponent<typeof import("../components/common/modals/quickView.vue")['default']>
export const LazyCommonModalsTagsView: LazyComponent<typeof import("../components/common/modals/tagsView.vue")['default']>
export const LazyThemeAdvanceAnimationBox: LazyComponent<typeof import("../components/theme/advance/animation/AnimationBox.vue")['default']>
export const LazyThemeAdvanceBasicFlat: LazyComponent<typeof import("../components/theme/advance/basic/BasicFlat.vue")['default']>
export const LazyThemeAdvanceBasicDarkCard: LazyComponent<typeof import("../components/theme/advance/basic/DarkCard.vue")['default']>
export const LazyThemeAdvanceBasicFooterCard: LazyComponent<typeof import("../components/theme/advance/basic/FooterCard.vue")['default']>
export const LazyThemeAdvanceBasicIconCard: LazyComponent<typeof import("../components/theme/advance/basic/IconCard.vue")['default']>
export const LazyThemeAdvanceBasicShadowCard: LazyComponent<typeof import("../components/theme/advance/basic/ShadowCard.vue")['default']>
export const LazyThemeAdvanceBreadcrumbColoredNavigation: LazyComponent<typeof import("../components/theme/advance/breadcrumb/ColoredNavigation.vue")['default']>
export const LazyThemeAdvanceBreadcrumbDefaultBreadcrumb: LazyComponent<typeof import("../components/theme/advance/breadcrumb/DefaultBreadcrumb.vue")['default']>
export const LazyThemeAdvanceBreadcrumbDividersBreadcrumbs: LazyComponent<typeof import("../components/theme/advance/breadcrumb/DividersBreadcrumbs.vue")['default']>
export const LazyThemeAdvanceBreadcrumbIconsBreadcrumb: LazyComponent<typeof import("../components/theme/advance/breadcrumb/IconsBreadcrumb.vue")['default']>
export const LazyThemeAdvanceBreadcrumbNavBreadcrumb: LazyComponent<typeof import("../components/theme/advance/breadcrumb/NavBreadcrumb.vue")['default']>
export const LazyThemeAdvanceCreativeAbsoluteCard: LazyComponent<typeof import("../components/theme/advance/creative/AbsoluteCard.vue")['default']>
export const LazyThemeAdvanceCreativeBorderCard: LazyComponent<typeof import("../components/theme/advance/creative/BorderCard.vue")['default']>
export const LazyThemeAdvanceCreativePrimaryState: LazyComponent<typeof import("../components/theme/advance/creative/PrimaryState.vue")['default']>
export const LazyThemeAdvanceCreativeSecondaryState: LazyComponent<typeof import("../components/theme/advance/creative/SecondaryState.vue")['default']>
export const LazyThemeAdvanceCreativeWarningState: LazyComponent<typeof import("../components/theme/advance/creative/WarningState.vue")['default']>
export const LazyThemeAdvanceCropperImageCropper: LazyComponent<typeof import("../components/theme/advance/cropper/ImageCropper.vue")['default']>
export const LazyThemeAdvanceDraggableCard: LazyComponent<typeof import("../components/theme/advance/draggable/DraggableCard.vue")['default']>
export const LazyThemeAdvanceDraggableFooterCard: LazyComponent<typeof import("../components/theme/advance/draggable/FooterCard.vue")['default']>
export const LazyThemeAdvanceDropzoneDefaultDropzone: LazyComponent<typeof import("../components/theme/advance/dropzone/DefaultDropzone.vue")['default']>
export const LazyThemeAdvanceDropzoneImageDropzone: LazyComponent<typeof import("../components/theme/advance/dropzone/ImageDropzone.vue")['default']>
export const LazyThemeAdvanceDropzoneMultiDropzone: LazyComponent<typeof import("../components/theme/advance/dropzone/MultiDropzone.vue")['default']>
export const LazyThemeAdvanceDropzoneSingleDropzone: LazyComponent<typeof import("../components/theme/advance/dropzone/SingleDropzone.vue")['default']>
export const LazyThemeAdvanceOwlcarouselAutoPlay: LazyComponent<typeof import("../components/theme/advance/owlcarousel/AutoPlay.vue")['default']>
export const LazyThemeAdvanceOwlcarouselCrossFade: LazyComponent<typeof import("../components/theme/advance/owlcarousel/CrossFade.vue")['default']>
export const LazyThemeAdvanceOwlcarouselDarkVariant: LazyComponent<typeof import("../components/theme/advance/owlcarousel/DarkVariant.vue")['default']>
export const LazyThemeAdvanceOwlcarouselDisableTouch: LazyComponent<typeof import("../components/theme/advance/owlcarousel/DisableTouch.vue")['default']>
export const LazyThemeAdvanceOwlcarouselIndividualCarousel: LazyComponent<typeof import("../components/theme/advance/owlcarousel/IndividualCarousel.vue")['default']>
export const LazyThemeAdvanceOwlcarouselMouseWheel: LazyComponent<typeof import("../components/theme/advance/owlcarousel/MouseWheel.vue")['default']>
export const LazyThemeAdvanceOwlcarouselSlidesOnly: LazyComponent<typeof import("../components/theme/advance/owlcarousel/SlidesOnly.vue")['default']>
export const LazyThemeAdvanceOwlcarouselWithCaptions: LazyComponent<typeof import("../components/theme/advance/owlcarousel/WithCaptions.vue")['default']>
export const LazyThemeAdvanceOwlcarouselWithControls: LazyComponent<typeof import("../components/theme/advance/owlcarousel/WithControls.vue")['default']>
export const LazyThemeAdvanceOwlcarouselWithIndicators: LazyComponent<typeof import("../components/theme/advance/owlcarousel/WithIndicators.vue")['default']>
export const LazyThemeAdvancePaginationAlignmentsPagination: LazyComponent<typeof import("../components/theme/advance/pagination/AlignmentsPagination.vue")['default']>
export const LazyThemeAdvancePaginationDisabledPagination: LazyComponent<typeof import("../components/theme/advance/pagination/DisabledPagination.vue")['default']>
export const LazyThemeAdvancePaginationIconsPagenation: LazyComponent<typeof import("../components/theme/advance/pagination/IconsPagenation.vue")['default']>
export const LazyThemeAdvancePaginationRoundedPagination: LazyComponent<typeof import("../components/theme/advance/pagination/RoundedPagination.vue")['default']>
export const LazyThemeAdvancePaginationSimplePagination: LazyComponent<typeof import("../components/theme/advance/pagination/SimplePagination.vue")['default']>
export const LazyThemeAdvancePaginationSizingPagination: LazyComponent<typeof import("../components/theme/advance/pagination/SizingPagination.vue")['default']>
export const LazyThemeAdvanceRangsliderColorRang: LazyComponent<typeof import("../components/theme/advance/rangslider/ColorRang.vue")['default']>
export const LazyThemeAdvanceRangsliderCustomRang: LazyComponent<typeof import("../components/theme/advance/rangslider/CustomRang.vue")['default']>
export const LazyThemeAdvanceRangsliderDefultRang: LazyComponent<typeof import("../components/theme/advance/rangslider/DefultRang.vue")['default']>
export const LazyThemeAdvanceRangsliderMinMax: LazyComponent<typeof import("../components/theme/advance/rangslider/MinMax.vue")['default']>
export const LazyThemeAdvanceRangsliderNegativeRang: LazyComponent<typeof import("../components/theme/advance/rangslider/NegativeRang.vue")['default']>
export const LazyThemeAdvanceRangsliderPrefixRang: LazyComponent<typeof import("../components/theme/advance/rangslider/PrefixRang.vue")['default']>
export const LazyThemeAdvanceRangsliderPrettifyRang: LazyComponent<typeof import("../components/theme/advance/rangslider/PrettifyRang.vue")['default']>
export const LazyThemeAdvanceRangsliderStepsRange: LazyComponent<typeof import("../components/theme/advance/rangslider/StepsRange.vue")['default']>
export const LazyThemeAdvanceRatingAnimationRating: LazyComponent<typeof import("../components/theme/advance/rating/AnimationRating.vue")['default']>
export const LazyThemeAdvanceRatingClickableValue: LazyComponent<typeof import("../components/theme/advance/rating/ClickableValue.vue")['default']>
export const LazyThemeAdvanceRatingDisabledRating: LazyComponent<typeof import("../components/theme/advance/rating/DisabledRating.vue")['default']>
export const LazyThemeAdvanceRatingHeartRating: LazyComponent<typeof import("../components/theme/advance/rating/HeartRating.vue")['default']>
export const LazyThemeAdvanceRatingMovieRating: LazyComponent<typeof import("../components/theme/advance/rating/MovieRating.vue")['default']>
export const LazyThemeAdvanceRatingStarRating: LazyComponent<typeof import("../components/theme/advance/rating/StarRating.vue")['default']>
export const LazyThemeAdvanceRibbonsLeftRibbons: LazyComponent<typeof import("../components/theme/advance/ribbons/LeftRibbons.vue")['default']>
export const LazyThemeAdvanceRibbonsRightRibbons: LazyComponent<typeof import("../components/theme/advance/ribbons/RightRibbons.vue")['default']>
export const LazyThemeAdvanceScrollableBadgesScrollbar: LazyComponent<typeof import("../components/theme/advance/scrollable/BadgesScrollbar.vue")['default']>
export const LazyThemeAdvanceScrollableBothSide: LazyComponent<typeof import("../components/theme/advance/scrollable/BothSide.vue")['default']>
export const LazyThemeAdvanceScrollableCustomScrollbar: LazyComponent<typeof import("../components/theme/advance/scrollable/CustomScrollbar.vue")['default']>
export const LazyThemeAdvanceScrollableHorizontalScrollbar: LazyComponent<typeof import("../components/theme/advance/scrollable/HorizontalScrollbar.vue")['default']>
export const LazyThemeAdvanceScrollableProfileScrollable: LazyComponent<typeof import("../components/theme/advance/scrollable/ProfileScrollable.vue")['default']>
export const LazyThemeAdvanceScrollableContent: LazyComponent<typeof import("../components/theme/advance/scrollable/ScrollableContent.vue")['default']>
export const LazyThemeAdvanceScrollableSmallScroll: LazyComponent<typeof import("../components/theme/advance/scrollable/SmallScroll.vue")['default']>
export const LazyThemeAdvanceSweealertAutoClose: LazyComponent<typeof import("../components/theme/advance/sweealert/AutoClose.vue")['default']>
export const LazyThemeAdvanceSweealertBasicAlert: LazyComponent<typeof import("../components/theme/advance/sweealert/BasicAlert.vue")['default']>
export const LazyThemeAdvanceSweealertDangerAlert: LazyComponent<typeof import("../components/theme/advance/sweealert/DangerAlert.vue")['default']>
export const LazyThemeAdvanceSweealertInfoAlert: LazyComponent<typeof import("../components/theme/advance/sweealert/InfoAlert.vue")['default']>
export const LazyThemeAdvanceSweealertPikachuAlert: LazyComponent<typeof import("../components/theme/advance/sweealert/PikachuAlert.vue")['default']>
export const LazyThemeAdvanceSweealertQuestionsAlert: LazyComponent<typeof import("../components/theme/advance/sweealert/QuestionsAlert.vue")['default']>
export const LazyThemeAdvanceSweealertRequestMovie: LazyComponent<typeof import("../components/theme/advance/sweealert/RequestMovie.vue")['default']>
export const LazyThemeAdvanceSweealertSuccessMessage: LazyComponent<typeof import("../components/theme/advance/sweealert/SuccessMessage.vue")['default']>
export const LazyThemeAdvanceSweealertTextUnder: LazyComponent<typeof import("../components/theme/advance/sweealert/TextUnder.vue")['default']>
export const LazyThemeAdvanceSweealertUsernameAlert: LazyComponent<typeof import("../components/theme/advance/sweealert/UsernameAlert.vue")['default']>
export const LazyThemeAdvanceSweealertWarningAlert: LazyComponent<typeof import("../components/theme/advance/sweealert/WarningAlert.vue")['default']>
export const LazyThemeAdvanceSweealertWarningMode: LazyComponent<typeof import("../components/theme/advance/sweealert/WarningMode.vue")['default']>
export const LazyThemeAdvanceTimelineBasicTimeline: LazyComponent<typeof import("../components/theme/advance/timeline/BasicTimeline.vue")['default']>
export const LazyThemeAdvanceTimelineDesignerSlider: LazyComponent<typeof import("../components/theme/advance/timeline/DesignerSlider.vue")['default']>
export const LazyThemeAdvanceTimelineHorizontalTimeline: LazyComponent<typeof import("../components/theme/advance/timeline/HorizontalTimeline.vue")['default']>
export const LazyThemeAdvanceTimelineHoveringTimeline: LazyComponent<typeof import("../components/theme/advance/timeline/HoveringTimeline.vue")['default']>
export const LazyThemeAdvanceTimelineView: LazyComponent<typeof import("../components/theme/advance/timeline/TimelineView.vue")['default']>
export const LazyThemeAdvanceTimelineVariationTimeline: LazyComponent<typeof import("../components/theme/advance/timeline/VariationTimeline.vue")['default']>
export const LazyThemeAdvanceToastsBasicToasts: LazyComponent<typeof import("../components/theme/advance/toasts/BasicToasts.vue")['default']>
export const LazyThemeAdvanceToastsIconToasts: LazyComponent<typeof import("../components/theme/advance/toasts/IconToasts.vue")['default']>
export const LazyThemeAdvanceToastsPositionToasts: LazyComponent<typeof import("../components/theme/advance/toasts/PositionToasts.vue")['default']>
export const LazyThemeAdvanceTourFirstPost: LazyComponent<typeof import("../components/theme/advance/tour/FirstPost.vue")['default']>
export const LazyThemeAdvanceTourLastPost: LazyComponent<typeof import("../components/theme/advance/tour/LastPost.vue")['default']>
export const LazyThemeAdvanceTourSecondPost: LazyComponent<typeof import("../components/theme/advance/tour/SecondPost.vue")['default']>
export const LazyThemeAdvanceTourSociaMedia: LazyComponent<typeof import("../components/theme/advance/tour/SociaMedia.vue")['default']>
export const LazyThemeAdvanceTourThirdPost: LazyComponent<typeof import("../components/theme/advance/tour/ThirdPost.vue")['default']>
export const LazyThemeAdvanceTourUserProfile: LazyComponent<typeof import("../components/theme/advance/tour/UserProfile.vue")['default']>
export const LazyThemeAdvanceTreeBasicTree: LazyComponent<typeof import("../components/theme/advance/tree/BasicTree.vue")['default']>
export const LazyThemeAdvanceTreeCheckTree: LazyComponent<typeof import("../components/theme/advance/tree/CheckTree.vue")['default']>
export const LazyThemeAdvanceTreeDragDropTree: LazyComponent<typeof import("../components/theme/advance/tree/DragDropTree.vue")['default']>
export const LazyThemeAdvanceTreeEditTree: LazyComponent<typeof import("../components/theme/advance/tree/EditTree.vue")['default']>
export const LazyThemeAnimationAnimateBox: LazyComponent<typeof import("../components/theme/animation/animate/AnimateBox.vue")['default']>
export const LazyThemeAnimationAnimateOption: LazyComponent<typeof import("../components/theme/animation/animate/AnimateOption.vue")['default']>
export const LazyThemeAnimationAosExample: LazyComponent<typeof import("../components/theme/animation/aos/AosExample.vue")['default']>
export const LazyThemeAnimationAosInitAOS: LazyComponent<typeof import("../components/theme/animation/aos/InitAOS.vue")['default']>
export const LazyThemeAppBookmarkEditView: LazyComponent<typeof import("../components/theme/app/bookmark/editView.vue")['default']>
export const LazyThemeAppBookmark: LazyComponent<typeof import("../components/theme/app/bookmark/index.vue")['default']>
export const LazyThemeAppBookmarkList: LazyComponent<typeof import("../components/theme/app/bookmark/list/index.vue")['default']>
export const LazyThemeAppBookmarkRightContent: LazyComponent<typeof import("../components/theme/app/bookmark/rightContent.vue")['default']>
export const LazyThemeAppButtonsBlockLevel: LazyComponent<typeof import("../components/theme/app/buttons/BlockLevel.vue")['default']>
export const LazyThemeAppButtonsButtonGroup: LazyComponent<typeof import("../components/theme/app/buttons/ButtonGroup.vue")['default']>
export const LazyThemeAppButtonsButtonVariations: LazyComponent<typeof import("../components/theme/app/buttons/ButtonVariations.vue")['default']>
export const LazyThemeAppButtonsData: LazyComponent<typeof import("../components/theme/app/buttons/ButtonsData.vue")['default']>
export const LazyThemeAppButtonsHorizontalVariation: LazyComponent<typeof import("../components/theme/app/buttons/HorizontalVariation.vue")['default']>
export const LazyThemeAppButtonsRadioAndCheckbox: LazyComponent<typeof import("../components/theme/app/buttons/RadioAndCheckbox.vue")['default']>
export const LazyThemeAppCalenderView: LazyComponent<typeof import("../components/theme/app/calender/CalenderView.vue")['default']>
export const LazyThemeAppChatContacts: LazyComponent<typeof import("../components/theme/app/chat/ChatContacts.vue")['default']>
export const LazyThemeAppChatGroupAddChat: LazyComponent<typeof import("../components/theme/app/chat/group/addChat.vue")['default']>
export const LazyThemeAppChatGroup: LazyComponent<typeof import("../components/theme/app/chat/group/index.vue")['default']>
export const LazyThemeAppChatPrivateAddChat: LazyComponent<typeof import("../components/theme/app/chat/private/addChat.vue")['default']>
export const LazyThemeAppChatPrivate: LazyComponent<typeof import("../components/theme/app/chat/private/index.vue")['default']>
export const LazyThemeAppChatSidebar: LazyComponent<typeof import("../components/theme/app/chat/sidebar.vue")['default']>
export const LazyThemeAppContactMoreData: LazyComponent<typeof import("../components/theme/app/contact/MoreData.vue")['default']>
export const LazyThemeAppContactDetail: LazyComponent<typeof import("../components/theme/app/contact/detail.vue")['default']>
export const LazyThemeAppContactEdit: LazyComponent<typeof import("../components/theme/app/contact/edit.vue")['default']>
export const LazyThemeAppContactHistory: LazyComponent<typeof import("../components/theme/app/contact/history.vue")['default']>
export const LazyThemeAppContact: LazyComponent<typeof import("../components/theme/app/contact/index.vue")['default']>
export const LazyThemeAppContactOrganization: LazyComponent<typeof import("../components/theme/app/contact/organization.vue")['default']>
export const LazyThemeAppContactOrganizationDetail: LazyComponent<typeof import("../components/theme/app/contact/organizationDetail.vue")['default']>
export const LazyThemeAppContactOrganizationModal: LazyComponent<typeof import("../components/theme/app/contact/organizationModal.vue")['default']>
export const LazyThemeAppContactPersonal: LazyComponent<typeof import("../components/theme/app/contact/personal.vue")['default']>
export const LazyThemeAppContactPrint: LazyComponent<typeof import("../components/theme/app/contact/print.vue")['default']>
export const LazyThemeAppFileManegerContent: LazyComponent<typeof import("../components/theme/app/fileManeger/content.vue")['default']>
export const LazyThemeAppFileManeger: LazyComponent<typeof import("../components/theme/app/fileManeger/index.vue")['default']>
export const LazyThemeAppKanabanApi: LazyComponent<typeof import("../components/theme/app/kanaban/api.vue")['default']>
export const LazyThemeAppKanabanCustom: LazyComponent<typeof import("../components/theme/app/kanaban/custom.vue")['default']>
export const LazyThemeAppKanaban: LazyComponent<typeof import("../components/theme/app/kanaban/index.vue")['default']>
export const LazyThemeAppLetterBoxDraft: LazyComponent<typeof import("../components/theme/app/letterBox/draft.vue")['default']>
export const LazyThemeAppLetterBoxEmailDetail: LazyComponent<typeof import("../components/theme/app/letterBox/emailDetail.vue")['default']>
export const LazyThemeAppLetterBoxInbox: LazyComponent<typeof import("../components/theme/app/letterBox/inbox.vue")['default']>
export const LazyThemeAppLetterBox: LazyComponent<typeof import("../components/theme/app/letterBox/index.vue")['default']>
export const LazyThemeAppLetterBoxPrivate: LazyComponent<typeof import("../components/theme/app/letterBox/private.vue")['default']>
export const LazyThemeAppLetterBoxSent: LazyComponent<typeof import("../components/theme/app/letterBox/sent.vue")['default']>
export const LazyThemeAppLetterBoxSidebar: LazyComponent<typeof import("../components/theme/app/letterBox/sidebar.vue")['default']>
export const LazyThemeAppLetterBoxStarred: LazyComponent<typeof import("../components/theme/app/letterBox/starred.vue")['default']>
export const LazyThemeAppLetterBoxSupport: LazyComponent<typeof import("../components/theme/app/letterBox/support.vue")['default']>
export const LazyThemeAppLetterBoxTrash: LazyComponent<typeof import("../components/theme/app/letterBox/trash.vue")['default']>
export const LazyThemeAppLetterBoxWork: LazyComponent<typeof import("../components/theme/app/letterBox/work.vue")['default']>
export const LazyThemeAppTaskAssignedView: LazyComponent<typeof import("../components/theme/app/task/AssignedView.vue")['default']>
export const LazyThemeAppTaskBusinessTask: LazyComponent<typeof import("../components/theme/app/task/BusinessTask.vue")['default']>
export const LazyThemeAppTaskCreatedView: LazyComponent<typeof import("../components/theme/app/task/CreatedView.vue")['default']>
export const LazyThemeAppTaskDelayedTasks: LazyComponent<typeof import("../components/theme/app/task/DelayedTasks.vue")['default']>
export const LazyThemeAppTaskHolidaysTask: LazyComponent<typeof import("../components/theme/app/task/HolidaysTask.vue")['default']>
export const LazyThemeAppTaskMonthTasks: LazyComponent<typeof import("../components/theme/app/task/MonthTasks.vue")['default']>
export const LazyThemeAppTaskMyTasks: LazyComponent<typeof import("../components/theme/app/task/MyTasks.vue")['default']>
export const LazyThemeAppTaskNewsLetter: LazyComponent<typeof import("../components/theme/app/task/NewsLetter.vue")['default']>
export const LazyThemeAppTaskNotificationView: LazyComponent<typeof import("../components/theme/app/task/NotificationView.vue")['default']>
export const LazyThemeAppTaskSidebar: LazyComponent<typeof import("../components/theme/app/task/TaskSidebar.vue")['default']>
export const LazyThemeAppTaskTodayTask: LazyComponent<typeof import("../components/theme/app/task/TodayTask.vue")['default']>
export const LazyThemeAppTaskUpcomingTasks: LazyComponent<typeof import("../components/theme/app/task/UpcomingTasks.vue")['default']>
export const LazyThemeAppTaskWeekTasks: LazyComponent<typeof import("../components/theme/app/task/WeekTasks.vue")['default']>
export const LazyThemeAppTodoAddTask: LazyComponent<typeof import("../components/theme/app/todo/AddTask.vue")['default']>
export const LazyThemeAppTodoSidebar: LazyComponent<typeof import("../components/theme/app/todo/TodoSidebar.vue")['default']>
export const LazyThemeBlogAddpostAddPost: LazyComponent<typeof import("../components/theme/blog/addpost/AddPost.vue")['default']>
export const LazyThemeBlogDetailsBlogGrid: LazyComponent<typeof import("../components/theme/blog/details/BlogGrid.vue")['default']>
export const LazyThemeBlogDetailsBlogList: LazyComponent<typeof import("../components/theme/blog/details/BlogList.vue")['default']>
export const LazyThemeBlogDetailsBlogShadow: LazyComponent<typeof import("../components/theme/blog/details/BlogShadow.vue")['default']>
export const LazyThemeBlogSingleBlogDetails: LazyComponent<typeof import("../components/theme/blog/single/BlogDetails.vue")['default']>
export const LazyThemeBlogSingleCommentBox: LazyComponent<typeof import("../components/theme/blog/single/CommentBox.vue")['default']>
export const LazyThemeChartsApexChartApexCharts: LazyComponent<typeof import("../components/theme/charts/apexChart/ApexCharts.vue")['default']>
export const LazyThemeDashboardDefaultIndexLeftDefault: LazyComponent<typeof import("../components/theme/dashboard/default/IndexLeftDefault.vue")['default']>
export const LazyThemeDashboardDefaultTreadCards: LazyComponent<typeof import("../components/theme/dashboard/default/TreadCards.vue")['default']>
export const LazyThemeDashboardDefaultWelcomeView: LazyComponent<typeof import("../components/theme/dashboard/default/WelcomeView.vue")['default']>
export const LazyThemeDashboardDefaultCard: LazyComponent<typeof import("../components/theme/dashboard/default/card.vue")['default']>
export const LazyThemeDashboardDefault: LazyComponent<typeof import("../components/theme/dashboard/default/index.vue")['default']>
export const LazyThemeDashboardDefaultMembers: LazyComponent<typeof import("../components/theme/dashboard/default/members.vue")['default']>
export const LazyThemeDashboardDefaultReferral: LazyComponent<typeof import("../components/theme/dashboard/default/referral.vue")['default']>
export const LazyThemeDashboardDefaultRevenue: LazyComponent<typeof import("../components/theme/dashboard/default/revenue.vue")['default']>
export const LazyThemeDashboardDefaultSidebar: LazyComponent<typeof import("../components/theme/dashboard/default/sidebar.vue")['default']>
export const LazyThemeDashboardDefaultTodo: LazyComponent<typeof import("../components/theme/dashboard/default/todo.vue")['default']>
export const LazyThemeDashboardEcommerceCards: LazyComponent<typeof import("../components/theme/dashboard/ecommerce/cards.vue")['default']>
export const LazyThemeDashboardEcommerceEarning: LazyComponent<typeof import("../components/theme/dashboard/ecommerce/earning.vue")['default']>
export const LazyThemeDashboardEcommerce: LazyComponent<typeof import("../components/theme/dashboard/ecommerce/index.vue")['default']>
export const LazyThemeDashboardEcommerceRecentOrder: LazyComponent<typeof import("../components/theme/dashboard/ecommerce/recentOrder.vue")['default']>
export const LazyThemeDashboardEcommerceSidebar: LazyComponent<typeof import("../components/theme/dashboard/ecommerce/sidebar.vue")['default']>
export const LazyThemeDashboardEcommerceStock: LazyComponent<typeof import("../components/theme/dashboard/ecommerce/stock.vue")['default']>
export const LazyThemeDashboardEcommerceVisitors: LazyComponent<typeof import("../components/theme/dashboard/ecommerce/visitors.vue")['default']>
export const LazyThemeDashboardProjectAvgEarning: LazyComponent<typeof import("../components/theme/dashboard/project/avgEarning.vue")['default']>
export const LazyThemeDashboardProjectCalender: LazyComponent<typeof import("../components/theme/dashboard/project/calender.vue")['default']>
export const LazyThemeDashboardProjectChat: LazyComponent<typeof import("../components/theme/dashboard/project/chat.vue")['default']>
export const LazyThemeDashboardProjectClient: LazyComponent<typeof import("../components/theme/dashboard/project/client.vue")['default']>
export const LazyThemeDashboardProjectDailyTask: LazyComponent<typeof import("../components/theme/dashboard/project/dailyTask.vue")['default']>
export const LazyThemeDashboardProject: LazyComponent<typeof import("../components/theme/dashboard/project/index.vue")['default']>
export const LazyThemeDashboardProjectStatus: LazyComponent<typeof import("../components/theme/dashboard/project/status.vue")['default']>
export const LazyThemeDashboardProjectUpdate: LazyComponent<typeof import("../components/theme/dashboard/project/update.vue")['default']>
export const LazyThemeEcommerceAddProductCategoryModal: LazyComponent<typeof import("../components/theme/ecommerce/addProduct/CategoryModal.vue")['default']>
export const LazyThemeEcommerceAddProductAdditional: LazyComponent<typeof import("../components/theme/ecommerce/addProduct/additional.vue")['default']>
export const LazyThemeEcommerceAddProductCategory: LazyComponent<typeof import("../components/theme/ecommerce/addProduct/category.vue")['default']>
export const LazyThemeEcommerceAddProductDetails: LazyComponent<typeof import("../components/theme/ecommerce/addProduct/details.vue")['default']>
export const LazyThemeEcommerceAddProductGellery: LazyComponent<typeof import("../components/theme/ecommerce/addProduct/gellery.vue")['default']>
export const LazyThemeEcommerceAddProduct: LazyComponent<typeof import("../components/theme/ecommerce/addProduct/index.vue")['default']>
export const LazyThemeEcommerceAddProductInventory: LazyComponent<typeof import("../components/theme/ecommerce/addProduct/inventory.vue")['default']>
export const LazyThemeEcommerceAddProductSelling: LazyComponent<typeof import("../components/theme/ecommerce/addProduct/selling.vue")['default']>
export const LazyThemeEcommerceAddProductShipping: LazyComponent<typeof import("../components/theme/ecommerce/addProduct/shipping.vue")['default']>
export const LazyThemeEcommerceCart: LazyComponent<typeof import("../components/theme/ecommerce/cart/index.vue")['default']>
export const LazyThemeEcommerceCategoryFilterBlock: LazyComponent<typeof import("../components/theme/ecommerce/category/filterBlock.vue")['default']>
export const LazyThemeEcommerceCategory: LazyComponent<typeof import("../components/theme/ecommerce/category/index.vue")['default']>
export const LazyThemeEcommerceCheckoutDetails: LazyComponent<typeof import("../components/theme/ecommerce/checkout/details.vue")['default']>
export const LazyThemeEcommerceCheckout: LazyComponent<typeof import("../components/theme/ecommerce/checkout/index.vue")['default']>
export const LazyThemeEcommerceInvoice1Details: LazyComponent<typeof import("../components/theme/ecommerce/invoice/1/details.vue")['default']>
export const LazyThemeEcommerceInvoice1: LazyComponent<typeof import("../components/theme/ecommerce/invoice/1/index.vue")['default']>
export const LazyThemeEcommerceInvoice2Details: LazyComponent<typeof import("../components/theme/ecommerce/invoice/2/details.vue")['default']>
export const LazyThemeEcommerceInvoice2: LazyComponent<typeof import("../components/theme/ecommerce/invoice/2/index.vue")['default']>
export const LazyThemeEcommerceInvoice3Details: LazyComponent<typeof import("../components/theme/ecommerce/invoice/3/details.vue")['default']>
export const LazyThemeEcommerceInvoice3: LazyComponent<typeof import("../components/theme/ecommerce/invoice/3/index.vue")['default']>
export const LazyThemeEcommerceInvoice4Details: LazyComponent<typeof import("../components/theme/ecommerce/invoice/4/details.vue")['default']>
export const LazyThemeEcommerceInvoice4: LazyComponent<typeof import("../components/theme/ecommerce/invoice/4/index.vue")['default']>
export const LazyThemeEcommerceInvoice5Details: LazyComponent<typeof import("../components/theme/ecommerce/invoice/5/details.vue")['default']>
export const LazyThemeEcommerceInvoice5: LazyComponent<typeof import("../components/theme/ecommerce/invoice/5/index.vue")['default']>
export const LazyThemeEcommerceInvoice6Details: LazyComponent<typeof import("../components/theme/ecommerce/invoice/6/details.vue")['default']>
export const LazyThemeEcommerceInvoice6: LazyComponent<typeof import("../components/theme/ecommerce/invoice/6/index.vue")['default']>
export const LazyThemeEcommerceOrderHistory: LazyComponent<typeof import("../components/theme/ecommerce/orderHistory/index.vue")['default']>
export const LazyThemeEcommerceOrderHistoryTable: LazyComponent<typeof import("../components/theme/ecommerce/orderHistory/table.vue")['default']>
export const LazyThemeEcommercePaymentDetailsEmi: LazyComponent<typeof import("../components/theme/ecommerce/paymentDetails/emi.vue")['default']>
export const LazyThemeEcommercePaymentDetails: LazyComponent<typeof import("../components/theme/ecommerce/paymentDetails/index.vue")['default']>
export const LazyThemeEcommercePricing: LazyComponent<typeof import("../components/theme/ecommerce/pricing.vue")['default']>
export const LazyThemeEcommerceProductDetailsFilterblock: LazyComponent<typeof import("../components/theme/ecommerce/product/details/filterblock.vue")['default']>
export const LazyThemeEcommerceProductDetails: LazyComponent<typeof import("../components/theme/ecommerce/product/details/index.vue")['default']>
export const LazyThemeEcommerceProductDetailsSlider: LazyComponent<typeof import("../components/theme/ecommerce/product/details/slider.vue")['default']>
export const LazyThemeEcommerceProductDetailsSummery: LazyComponent<typeof import("../components/theme/ecommerce/product/details/summery.vue")['default']>
export const LazyThemeEcommerceProductDetailsTabs: LazyComponent<typeof import("../components/theme/ecommerce/product/details/tabs.vue")['default']>
export const LazyThemeEcommerceProductFilterBar: LazyComponent<typeof import("../components/theme/ecommerce/product/filterBar.vue")['default']>
export const LazyThemeEcommerceProduct: LazyComponent<typeof import("../components/theme/ecommerce/product/index.vue")['default']>
export const LazyThemeEcommerceProductLength: LazyComponent<typeof import("../components/theme/ecommerce/product/length.vue")['default']>
export const LazyThemeEcommerceProductListData: LazyComponent<typeof import("../components/theme/ecommerce/product/listData.vue")['default']>
export const LazyThemeEcommerceProductNewProduct: LazyComponent<typeof import("../components/theme/ecommerce/product/newProduct.vue")['default']>
export const LazyThemeEcommerceProductListFilterBlock: LazyComponent<typeof import("../components/theme/ecommerce/productList/filterBlock.vue")['default']>
export const LazyThemeEcommerceProductList: LazyComponent<typeof import("../components/theme/ecommerce/productList/index.vue")['default']>
export const LazyThemeEcommerceWishlist: LazyComponent<typeof import("../components/theme/ecommerce/wishlist/index.vue")['default']>
export const LazyThemeFormFormcontrolCheckboxradioAnimatedButtons: LazyComponent<typeof import("../components/theme/form/formcontrol/checkboxradio/AnimatedButtons.vue")['default']>
export const LazyThemeFormFormcontrolCheckboxradioCheckboxRadio: LazyComponent<typeof import("../components/theme/form/formcontrol/checkboxradio/CheckboxRadio.vue")['default']>
export const LazyThemeFormFormcontrolCheckboxradioCustomCheckbox: LazyComponent<typeof import("../components/theme/form/formcontrol/checkboxradio/CustomCheckbox.vue")['default']>
export const LazyThemeFormFormcontrolCheckboxradioCustumRadio: LazyComponent<typeof import("../components/theme/form/formcontrol/checkboxradio/CustumRadio.vue")['default']>
export const LazyThemeFormFormcontrolCheckboxradioDefaultCheckbox: LazyComponent<typeof import("../components/theme/form/formcontrol/checkboxradio/DefaultCheckbox.vue")['default']>
export const LazyThemeFormFormcontrolCheckboxradioDefaultRadio: LazyComponent<typeof import("../components/theme/form/formcontrol/checkboxradio/DefaultRadio.vue")['default']>
export const LazyThemeFormFormcontrolCheckboxradioDefaultSwitches: LazyComponent<typeof import("../components/theme/form/formcontrol/checkboxradio/DefaultSwitches.vue")['default']>
export const LazyThemeFormFormcontrolCheckboxradioImagesCheckbox: LazyComponent<typeof import("../components/theme/form/formcontrol/checkboxradio/ImagesCheckbox.vue")['default']>
export const LazyThemeFormFormcontrolCheckboxradioImagesRadio: LazyComponent<typeof import("../components/theme/form/formcontrol/checkboxradio/ImagesRadio.vue")['default']>
export const LazyThemeFormFormcontrolCheckboxradioInlineInput: LazyComponent<typeof import("../components/theme/form/formcontrol/checkboxradio/InlineInput.vue")['default']>
export const LazyThemeFormFormcontrolCheckboxradioRadioToggle: LazyComponent<typeof import("../components/theme/form/formcontrol/checkboxradio/RadioToggle.vue")['default']>
export const LazyThemeFormFormcontrolInputBasicForm: LazyComponent<typeof import("../components/theme/form/formcontrol/input/BasicForm.vue")['default']>
export const LazyThemeFormFormcontrolInputEdgesInput: LazyComponent<typeof import("../components/theme/form/formcontrol/input/EdgesInput.vue")['default']>
export const LazyThemeFormFormcontrolInputFileInput: LazyComponent<typeof import("../components/theme/form/formcontrol/input/FileInput.vue")['default']>
export const LazyThemeFormFormcontrolInputFlatInput: LazyComponent<typeof import("../components/theme/form/formcontrol/input/FlatInput.vue")['default']>
export const LazyThemeFormFormcontrolInputFloatingForm: LazyComponent<typeof import("../components/theme/form/formcontrol/input/FloatingForm.vue")['default']>
export const LazyThemeFormFormcontrolInputFloatingInput: LazyComponent<typeof import("../components/theme/form/formcontrol/input/FloatingInput.vue")['default']>
export const LazyThemeFormFormcontrolInputHtmlInput: LazyComponent<typeof import("../components/theme/form/formcontrol/input/HtmlInput.vue")['default']>
export const LazyThemeFormFormcontrolInputRaiseInput: LazyComponent<typeof import("../components/theme/form/formcontrol/input/RaiseInput.vue")['default']>
export const LazyThemeFormFormcontrolInputSelectSizing: LazyComponent<typeof import("../components/theme/form/formcontrol/input/SelectSizing.vue")['default']>
export const LazyThemeFormFormcontrolInputgroupsBasicInput: LazyComponent<typeof import("../components/theme/form/formcontrol/inputgroups/BasicInput.vue")['default']>
export const LazyThemeFormFormcontrolInputgroupsButtonAddons: LazyComponent<typeof import("../components/theme/form/formcontrol/inputgroups/ButtonAddons.vue")['default']>
export const LazyThemeFormFormcontrolInputgroupsButtonsDropdowns: LazyComponent<typeof import("../components/theme/form/formcontrol/inputgroups/ButtonsDropdowns.vue")['default']>
export const LazyThemeFormFormcontrolInputgroupsCheckboxesRadios: LazyComponent<typeof import("../components/theme/form/formcontrol/inputgroups/CheckboxesRadios.vue")['default']>
export const LazyThemeFormFormcontrolInputgroupsCustomForms: LazyComponent<typeof import("../components/theme/form/formcontrol/inputgroups/CustomForms.vue")['default']>
export const LazyThemeFormFormcontrolInputgroupsFileInput: LazyComponent<typeof import("../components/theme/form/formcontrol/inputgroups/FileInput.vue")['default']>
export const LazyThemeFormFormcontrolInputgroupsMultipleInputs: LazyComponent<typeof import("../components/theme/form/formcontrol/inputgroups/MultipleInputs.vue")['default']>
export const LazyThemeFormFormcontrolInputgroupsSegmentedButtons: LazyComponent<typeof import("../components/theme/form/formcontrol/inputgroups/SegmentedButtons.vue")['default']>
export const LazyThemeFormFormcontrolInputgroupsSizingInput: LazyComponent<typeof import("../components/theme/form/formcontrol/inputgroups/SizingInput.vue")['default']>
export const LazyThemeFormFormcontrolInputgroupsVariationAddons: LazyComponent<typeof import("../components/theme/form/formcontrol/inputgroups/VariationAddons.vue")['default']>
export const LazyThemeFormFormcontrolInputmaskMaskInput: LazyComponent<typeof import("../components/theme/form/formcontrol/inputmask/MaskInput.vue")['default']>
export const LazyThemeFormFormcontrolMagaoptionBorderStyle: LazyComponent<typeof import("../components/theme/form/formcontrol/magaoption/BorderStyle.vue")['default']>
export const LazyThemeFormFormcontrolMagaoptionDashedStyle: LazyComponent<typeof import("../components/theme/form/formcontrol/magaoption/DashedStyle.vue")['default']>
export const LazyThemeFormFormcontrolMagaoptionDefultStyle: LazyComponent<typeof import("../components/theme/form/formcontrol/magaoption/DefultStyle.vue")['default']>
export const LazyThemeFormFormcontrolMagaoptionHorizontalStyle: LazyComponent<typeof import("../components/theme/form/formcontrol/magaoption/HorizontalStyle.vue")['default']>
export const LazyThemeFormFormcontrolMagaoptionInlineStyle: LazyComponent<typeof import("../components/theme/form/formcontrol/magaoption/InlineStyle.vue")['default']>
export const LazyThemeFormFormcontrolMagaoptionOfferBorder: LazyComponent<typeof import("../components/theme/form/formcontrol/magaoption/OfferBorder.vue")['default']>
export const LazyThemeFormFormcontrolMagaoptionVariationCheckbox: LazyComponent<typeof import("../components/theme/form/formcontrol/magaoption/VariationCheckbox.vue")['default']>
export const LazyThemeFormFormcontrolMagaoptionVariationRadio: LazyComponent<typeof import("../components/theme/form/formcontrol/magaoption/VariationRadio.vue")['default']>
export const LazyThemeFormFormcontrolMagaoptionVerticalStyle: LazyComponent<typeof import("../components/theme/form/formcontrol/magaoption/VerticalStyle.vue")['default']>
export const LazyThemeFormFormcontrolValidationBrowserDefaults: LazyComponent<typeof import("../components/theme/form/formcontrol/validation/BrowserDefaults.vue")['default']>
export const LazyThemeFormFormcontrolValidationToltipValidation: LazyComponent<typeof import("../components/theme/form/formcontrol/validation/ToltipValidation.vue")['default']>
export const LazyThemeFormFormcontrolValidationForm: LazyComponent<typeof import("../components/theme/form/formcontrol/validation/ValidationForm.vue")['default']>
export const LazyThemeFormFormlayoutFormwizardBillingfrom: LazyComponent<typeof import("../components/theme/form/formlayout/formwizard/Billingfrom.vue")['default']>
export const LazyThemeFormFormlayoutFormwizardCurrentCart: LazyComponent<typeof import("../components/theme/form/formlayout/formwizard/CurrentCart.vue")['default']>
export const LazyThemeFormFormlayoutFormwizardFinishWizard: LazyComponent<typeof import("../components/theme/form/formlayout/formwizard/FinishWizard.vue")['default']>
export const LazyThemeFormFormlayoutFormwizardPaymentWizard: LazyComponent<typeof import("../components/theme/form/formlayout/formwizard/PaymentWizard.vue")['default']>
export const LazyThemeFormFormlayoutFormwizardShippingForm: LazyComponent<typeof import("../components/theme/form/formlayout/formwizard/ShippingForm.vue")['default']>
export const LazyThemeFormFormlayoutFormwizardShippingForms: LazyComponent<typeof import("../components/theme/form/formlayout/formwizard/ShippingForms.vue")['default']>
export const LazyThemeFormFormlayoutFormwizardShippingModel: LazyComponent<typeof import("../components/theme/form/formlayout/formwizard/ShippingModel.vue")['default']>
export const LazyThemeFormFormlayoutFormwizardSimpleWizard: LazyComponent<typeof import("../components/theme/form/formlayout/formwizard/SimpleWizard.vue")['default']>
export const LazyThemeFormFormlayoutFormwizardVerticalValidation: LazyComponent<typeof import("../components/theme/form/formlayout/formwizard/VerticalValidation.vue")['default']>
export const LazyThemeFormFormlayoutFormwizardWizardBanking: LazyComponent<typeof import("../components/theme/form/formlayout/formwizard/WizardBanking.vue")['default']>
export const LazyThemeFormFormlayoutFormwizardWizardCart: LazyComponent<typeof import("../components/theme/form/formlayout/formwizard/WizardCart.vue")['default']>
export const LazyThemeFormFormlayoutFormwizardWizardContact: LazyComponent<typeof import("../components/theme/form/formlayout/formwizard/WizardContact.vue")['default']>
export const LazyThemeFormFormlayoutFormwizard2BankWizard: LazyComponent<typeof import("../components/theme/form/formlayout/formwizard2/BankWizard.vue")['default']>
export const LazyThemeFormFormlayoutFormwizard2BusinessHorizontal: LazyComponent<typeof import("../components/theme/form/formlayout/formwizard2/BusinessHorizontal.vue")['default']>
export const LazyThemeFormFormlayoutFormwizard2BusinessSettings: LazyComponent<typeof import("../components/theme/form/formlayout/formwizard2/BusinessSettings.vue")['default']>
export const LazyThemeFormFormlayoutFormwizard2BusinessVertical: LazyComponent<typeof import("../components/theme/form/formlayout/formwizard2/BusinessVertical.vue")['default']>
export const LazyThemeFormFormlayoutFormwizard2ChooseAccount: LazyComponent<typeof import("../components/theme/form/formlayout/formwizard2/ChooseAccount.vue")['default']>
export const LazyThemeFormFormlayoutFormwizard2ContactDetails: LazyComponent<typeof import("../components/theme/form/formlayout/formwizard2/ContactDetails.vue")['default']>
export const LazyThemeFormFormlayoutFormwizard2CustomHorizontal: LazyComponent<typeof import("../components/theme/form/formlayout/formwizard2/CustomHorizontal.vue")['default']>
export const LazyThemeFormFormlayoutFormwizard2CustomVertical: LazyComponent<typeof import("../components/theme/form/formlayout/formwizard2/CustomVertical.vue")['default']>
export const LazyThemeFormFormlayoutFormwizard2InquiryWizard: LazyComponent<typeof import("../components/theme/form/formlayout/formwizard2/InquiryWizard.vue")['default']>
export const LazyThemeFormFormlayoutFormwizard2PayDetails: LazyComponent<typeof import("../components/theme/form/formlayout/formwizard2/PayDetails.vue")['default']>
export const LazyThemeFormFormlayoutFormwizard2WizardInfo: LazyComponent<typeof import("../components/theme/form/formlayout/formwizard2/WizardInfo.vue")['default']>
export const LazyThemeFormFormlayoutTwofactorAuthenticationModel: LazyComponent<typeof import("../components/theme/form/formlayout/twofactor/AuthenticationModel.vue")['default']>
export const LazyThemeFormFormlayoutTwofactorEmailVerification: LazyComponent<typeof import("../components/theme/form/formlayout/twofactor/EmailVerification.vue")['default']>
export const LazyThemeFormFormlayoutTwofactorTwoFactorAuthentication: LazyComponent<typeof import("../components/theme/form/formlayout/twofactor/TwoFactorAuthentication.vue")['default']>
export const LazyThemeFormFormlayoutTwofactorVerificationCode: LazyComponent<typeof import("../components/theme/form/formlayout/twofactor/VerificationCode.vue")['default']>
export const LazyThemeFormFormwidgetsClipboardCopyPortion: LazyComponent<typeof import("../components/theme/form/formwidgets/clipboard/CopyPortion.vue")['default']>
export const LazyThemeFormFormwidgetsClipboardParaGraph: LazyComponent<typeof import("../components/theme/form/formwidgets/clipboard/ParaGraph.vue")['default']>
export const LazyThemeFormFormwidgetsClipboardTextArea: LazyComponent<typeof import("../components/theme/form/formwidgets/clipboard/TextArea.vue")['default']>
export const LazyThemeFormFormwidgetsClipboardTextInput: LazyComponent<typeof import("../components/theme/form/formwidgets/clipboard/TextInput.vue")['default']>
export const LazyThemeFormFormwidgetsDatepickerBootstrapCalendar: LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/BootstrapCalendar.vue")['default']>
export const LazyThemeFormFormwidgetsDatepickerCustomizingConjunction: LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/CustomizingConjunction.vue")['default']>
export const LazyThemeFormFormwidgetsDatepickerDatePicker: LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/DatePicker.vue")['default']>
export const LazyThemeFormFormwidgetsDatepickerDateTime: LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/DateTime.vue")['default']>
export const LazyThemeFormFormwidgetsDatepickerDefaultCalander: LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/DefaultCalander.vue")['default']>
export const LazyThemeFormFormwidgetsDatepickerDefultDate: LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/DefultDate.vue")['default']>
export const LazyThemeFormFormwidgetsDatepickerDisabledDates: LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/DisabledDates.vue")['default']>
export const LazyThemeFormFormwidgetsDatepickerHourTimepicker: LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/HourTimepicker.vue")['default']>
export const LazyThemeFormFormwidgetsDatepickerHumanFriendly: LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/HumanFriendly.vue")['default']>
export const LazyThemeFormFormwidgetsDatepickerLimitedTimerange: LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/LimitedTimerange.vue")['default']>
export const LazyThemeFormFormwidgetsDatepickerLimitsTimepicker: LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/LimitsTimepicker.vue")['default']>
export const LazyThemeFormFormwidgetsDatepickerMainmaxTimepicker: LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/MainmaxTimepicker.vue")['default']>
export const LazyThemeFormFormwidgetsDatepickerMinmaxDate: LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/MinmaxDate.vue")['default']>
export const LazyThemeFormFormwidgetsDatepickerMultipleDate: LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/MultipleDate.vue")['default']>
export const LazyThemeFormFormwidgetsDatepickerPreloadingDates: LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/PreloadingDates.vue")['default']>
export const LazyThemeFormFormwidgetsDatepickerPreloadingTime: LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/PreloadingTime.vue")['default']>
export const LazyThemeFormFormwidgetsDatepickerRangeDate: LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/RangeDate.vue")['default']>
export const LazyThemeFormFormwidgetsDatepickerTimeOnly: LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/TimeOnly.vue")['default']>
export const LazyThemeFormFormwidgetsDatepickerTimePicker: LazyComponent<typeof import("../components/theme/form/formwidgets/datepicker/TimePicker.vue")['default']>
export const LazyThemeFormFormwidgetsSelect2FullColored: LazyComponent<typeof import("../components/theme/form/formwidgets/select2/FullColored.vue")['default']>
export const LazyThemeFormFormwidgetsSelect2OutlineColor: LazyComponent<typeof import("../components/theme/form/formwidgets/select2/OutlineColor.vue")['default']>
export const LazyThemeFormFormwidgetsSelect2SearchBox: LazyComponent<typeof import("../components/theme/form/formwidgets/select2/SearchBox.vue")['default']>
export const LazyThemeFormFormwidgetsSelect2SelectView: LazyComponent<typeof import("../components/theme/form/formwidgets/select2/SelectView.vue")['default']>
export const LazyThemeFormFormwidgetsSwitchBordersIcons: LazyComponent<typeof import("../components/theme/form/formwidgets/switch/BordersIcons.vue")['default']>
export const LazyThemeFormFormwidgetsSwitchCustomSwitch: LazyComponent<typeof import("../components/theme/form/formwidgets/switch/CustomSwitch.vue")['default']>
export const LazyThemeFormFormwidgetsSwitchDisabledOutline: LazyComponent<typeof import("../components/theme/form/formwidgets/switch/DisabledOutline.vue")['default']>
export const LazyThemeFormFormwidgetsSwitchIconsSwitch: LazyComponent<typeof import("../components/theme/form/formwidgets/switch/IconsSwitch.vue")['default']>
export const LazyThemeFormFormwidgetsSwitchIcons: LazyComponent<typeof import("../components/theme/form/formwidgets/switch/SwitchIcons.vue")['default']>
export const LazyThemeFormFormwidgetsSwitchSizing: LazyComponent<typeof import("../components/theme/form/formwidgets/switch/SwitchSizing.vue")['default']>
export const LazyThemeFormFormwidgetsSwitchUncheckedSwitch: LazyComponent<typeof import("../components/theme/form/formwidgets/switch/UncheckedSwitch.vue")['default']>
export const LazyThemeFormFormwidgetsSwitchVariationSwitches: LazyComponent<typeof import("../components/theme/form/formwidgets/switch/VariationSwitches.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinDefaultTouchspin: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/DefaultTouchspin.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinIconsTouchspin: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/IconsTouchspin.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinOutlinedTouchspin: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/OutlinedTouchspin.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinPostfixTouchspin: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/PostfixTouchspin.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinRoundedTouchspin: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/RoundedTouchspin.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinDefulttouchspinDefaultDanger: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultDanger.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinDefulttouchspinDefaultDark: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultDark.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinDefulttouchspinDefaultInfo: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultInfo.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinDefulttouchspinDefaultPrimery: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultPrimery.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinDefulttouchspinDefaultSecondary: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultSecondary.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinDefulttouchspinDefaultSuccess: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultSuccess.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinDefulttouchspinDefaultWarning: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/defulttouchspin/DefaultWarning.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineDanger: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlineDanger.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineDark: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlineDark.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineInfo: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlineInfo.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlinePrimary: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlinePrimary.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineSecondary: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlineSecondary.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineSuccess: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlineSuccess.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinOutlinedtouchspinOutlineWarning: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/outlinedtouchspin/OutlineWarning.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedDanger: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedDanger.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedDark: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedDark.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedInfo: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedInfo.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedPrimary: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedPrimary.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedSecondary: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedSecondary.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedSuccess: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedSuccess.vue")['default']>
export const LazyThemeFormFormwidgetsTouchspinRoundedtouchspinRoundedWarning: LazyComponent<typeof import("../components/theme/form/formwidgets/touchspin/roundedtouchspin/RoundedWarning.vue")['default']>
export const LazyThemeFormFormwidgetsTypeaheadBasicTypeahead: LazyComponent<typeof import("../components/theme/form/formwidgets/typeahead/BasicTypeahead.vue")['default']>
export const LazyThemeFormFormwidgetsTypeaheadBloodhoundTyeahead: LazyComponent<typeof import("../components/theme/form/formwidgets/typeahead/BloodhoundTyeahead.vue")['default']>
export const LazyThemeFormFormwidgetsTypeaheadCustomTemplates: LazyComponent<typeof import("../components/theme/form/formwidgets/typeahead/CustomTemplates.vue")['default']>
export const LazyThemeFormFormwidgetsTypeaheadMultipleSections: LazyComponent<typeof import("../components/theme/form/formwidgets/typeahead/MultipleSections.vue")['default']>
export const LazyThemeFormFormwidgetsTypeaheadPrefetchTypeahead: LazyComponent<typeof import("../components/theme/form/formwidgets/typeahead/PrefetchTypeahead.vue")['default']>
export const LazyThemeFormFormwidgetsTypeaheadRemoteTypeahead: LazyComponent<typeof import("../components/theme/form/formwidgets/typeahead/RemoteTypeahead.vue")['default']>
export const LazyThemeFormFormwidgetsTypeaheadRtlSupport: LazyComponent<typeof import("../components/theme/form/formwidgets/typeahead/RtlSupport.vue")['default']>
export const LazyThemeFormFormwidgetsTypeaheadScrollableMenu: LazyComponent<typeof import("../components/theme/form/formwidgets/typeahead/ScrollableMenu.vue")['default']>
export const LazyThemeGalleryGridDesc: LazyComponent<typeof import("../components/theme/gallery/grid/GridDesc.vue")['default']>
export const LazyThemeGalleryGridGallery: LazyComponent<typeof import("../components/theme/gallery/grid/GridGallery.vue")['default']>
export const LazyThemeGalleryHoverEffect1: LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect1.vue")['default']>
export const LazyThemeGalleryHoverEffect10: LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect10.vue")['default']>
export const LazyThemeGalleryHoverEffect11: LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect11.vue")['default']>
export const LazyThemeGalleryHoverEffect12: LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect12.vue")['default']>
export const LazyThemeGalleryHoverEffect13: LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect13.vue")['default']>
export const LazyThemeGalleryHoverEffect14: LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect14.vue")['default']>
export const LazyThemeGalleryHoverEffect15: LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect15.vue")['default']>
export const LazyThemeGalleryHoverEffect2: LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect2.vue")['default']>
export const LazyThemeGalleryHoverEffect3: LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect3.vue")['default']>
export const LazyThemeGalleryHoverEffect4: LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect4.vue")['default']>
export const LazyThemeGalleryHoverEffect5: LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect5.vue")['default']>
export const LazyThemeGalleryHoverEffect6: LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect6.vue")['default']>
export const LazyThemeGalleryHoverEffect7: LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect7.vue")['default']>
export const LazyThemeGalleryHoverEffect8: LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect8.vue")['default']>
export const LazyThemeGalleryHoverEffect9: LazyComponent<typeof import("../components/theme/gallery/hover/HoverEffect9.vue")['default']>
export const LazyThemeGalleryMasonryDesc: LazyComponent<typeof import("../components/theme/gallery/masonry/MasonryDesc.vue")['default']>
export const LazyThemeGalleryMasonryGallery: LazyComponent<typeof import("../components/theme/gallery/masonry/MasonryGallery.vue")['default']>
export const LazyThemeIconsFontAwesomeBrandIcons: LazyComponent<typeof import("../components/theme/icons/font_awesome/BrandIcons.vue")['default']>
export const LazyThemeIconsFontAwesomeCurrencyIcons: LazyComponent<typeof import("../components/theme/icons/font_awesome/CurrencyIcons.vue")['default']>
export const LazyThemeIconsFontAwesomeDirectionalIcons: LazyComponent<typeof import("../components/theme/icons/font_awesome/DirectionalIcons.vue")['default']>
export const LazyThemeIconsFontAwesomeFormControl: LazyComponent<typeof import("../components/theme/icons/font_awesome/FormControl.vue")['default']>
export const LazyThemeIconsFontAwesomeIconsView: LazyComponent<typeof import("../components/theme/icons/font_awesome/IconsView.vue")['default']>
export const LazyThemeIconsFontAwesomeMedicalIcons: LazyComponent<typeof import("../components/theme/icons/font_awesome/MedicalIcons.vue")['default']>
export const LazyThemeIconsFontAwesomeSpinnerIcons: LazyComponent<typeof import("../components/theme/icons/font_awesome/SpinnerIcons.vue")['default']>
export const LazyThemeIconsFontAwesomeTextEditor: LazyComponent<typeof import("../components/theme/icons/font_awesome/TextEditor.vue")['default']>
export const LazyThemeIconsFontAwesomeVideoPlayer: LazyComponent<typeof import("../components/theme/icons/font_awesome/VideoPlayer.vue")['default']>
export const LazyThemeIconsFontAwesomeWebAppIcons: LazyComponent<typeof import("../components/theme/icons/font_awesome/WebAppIcons.vue")['default']>
export const LazyThemeIconsIcoIconAbstractIcon: LazyComponent<typeof import("../components/theme/icons/ico_icon/AbstractIcon.vue")['default']>
export const LazyThemeIconsIcoIconAnimalIcon: LazyComponent<typeof import("../components/theme/icons/ico_icon/AnimalIcon.vue")['default']>
export const LazyThemeIconsIcoIconBrandIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/BrandIcons.vue")['default']>
export const LazyThemeIconsIcoIconBusinessIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/BusinessIcons.vue")['default']>
export const LazyThemeIconsIcoIconChartIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/ChartIcons.vue")['default']>
export const LazyThemeIconsIcoIconConstructionIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/ConstructionIcons.vue")['default']>
export const LazyThemeIconsIcoIconCurrencyIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/CurrencyIcons.vue")['default']>
export const LazyThemeIconsIcoIconDeviceIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/DeviceIcons.vue")['default']>
export const LazyThemeIconsIcoIconDirectionalIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/DirectionalIcons.vue")['default']>
export const LazyThemeIconsIcoIconEducationIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/EducationIcons.vue")['default']>
export const LazyThemeIconsIcoIconEmoticonIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/EmoticonIcons.vue")['default']>
export const LazyThemeIconsIcoIconFiletypeIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/FiletypeIcons.vue")['default']>
export const LazyThemeIconsIcoIconFoodIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/FoodIcons.vue")['default']>
export const LazyThemeIconsIcoIconKidsIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/KidsIcons.vue")['default']>
export const LazyThemeIconsIcoIconLawIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/LawIcons.vue")['default']>
export const LazyThemeIconsIcoIconMathematicalIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/MathematicalIcons.vue")['default']>
export const LazyThemeIconsIcoIconMedicalIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/MedicalIcons.vue")['default']>
export const LazyThemeIconsIcoIconMobileIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/MobileIcons.vue")['default']>
export const LazyThemeIconsIcoIconMultimediaIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/MultimediaIcons.vue")['default']>
export const LazyThemeIconsIcoIconPaymentIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/PaymentIcons.vue")['default']>
export const LazyThemeIconsIcoIconPersonIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/PersonIcons.vue")['default']>
export const LazyThemeIconsIcoIconSearchIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/SearchIcons.vue")['default']>
export const LazyThemeIconsIcoIconSocialIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/SocialIcons.vue")['default']>
export const LazyThemeIconsIcoIconSportIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/SportIcons.vue")['default']>
export const LazyThemeIconsIcoIconTextIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/TextIcons.vue")['default']>
export const LazyThemeIconsIcoIconTransportIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/TransportIcons.vue")['default']>
export const LazyThemeIconsIcoIconTravelIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/TravelIcons.vue")['default']>
export const LazyThemeIconsIcoIconWeatherIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/WeatherIcons.vue")['default']>
export const LazyThemeIconsIcoIconWebIcons: LazyComponent<typeof import("../components/theme/icons/ico_icon/WebIcons.vue")['default']>
export const LazyThemeIconsThemifyIconBrandIcons: LazyComponent<typeof import("../components/theme/icons/themify_icon/BrandIcons.vue")['default']>
export const LazyThemeIconsThemifyIconControlIcons: LazyComponent<typeof import("../components/theme/icons/themify_icon/ControlIcons.vue")['default']>
export const LazyThemeIconsThemifyIconDirectionIcons: LazyComponent<typeof import("../components/theme/icons/themify_icon/DirectionIcons.vue")['default']>
export const LazyThemeIconsThemifyIconTextEditor: LazyComponent<typeof import("../components/theme/icons/themify_icon/TextEditor.vue")['default']>
export const LazyThemeIconsThemifyIconWebAppIcons: LazyComponent<typeof import("../components/theme/icons/themify_icon/WebAppIcons.vue")['default']>
export const LazyThemeIconsWhetherIcons: LazyComponent<typeof import("../components/theme/icons/whether/WhetherIcons.vue")['default']>
export const LazyThemeInternationalizationLanguageInternationa: LazyComponent<typeof import("../components/theme/internationalization/LanguageInternationa.vue")['default']>
export const LazyThemeInternationalizationLanguagePicker: LazyComponent<typeof import("../components/theme/internationalization/LanguagePicker.vue")['default']>
export const LazyThemeInternationalizationLanguageView: LazyComponent<typeof import("../components/theme/internationalization/LanguageView.vue")['default']>
export const LazyThemeJobApply: LazyComponent<typeof import("../components/theme/job/apply/JobApply.vue")['default']>
export const LazyThemeJobApplyPersonalBirthDate: LazyComponent<typeof import("../components/theme/job/apply/personal/BirthDate.vue")['default']>
export const LazyThemeJobApplyPersonalDateView: LazyComponent<typeof import("../components/theme/job/apply/personal/DateView.vue")['default']>
export const LazyThemeJobApplyPersonalDetails: LazyComponent<typeof import("../components/theme/job/apply/personal/PersonalDetails.vue")['default']>
export const LazyThemeJobApplyPersonalYourEducation: LazyComponent<typeof import("../components/theme/job/apply/personal/YourEducation.vue")['default']>
export const LazyThemeJobCardView: LazyComponent<typeof import("../components/theme/job/card/CardView.vue")['default']>
export const LazyThemeJobDetails: LazyComponent<typeof import("../components/theme/job/details/JobDetails.vue")['default']>
export const LazyThemeJobDetailsSimilarJobs: LazyComponent<typeof import("../components/theme/job/details/SimilarJobs.vue")['default']>
export const LazyThemeJobFiltersFilterView: LazyComponent<typeof import("../components/theme/job/filters/FilterView.vue")['default']>
export const LazyThemeJobFiltersIndustryView: LazyComponent<typeof import("../components/theme/job/filters/IndustryView.vue")['default']>
export const LazyThemeJobFiltersJobTitle: LazyComponent<typeof import("../components/theme/job/filters/JobTitle.vue")['default']>
export const LazyThemeJobFiltersLocationView: LazyComponent<typeof import("../components/theme/job/filters/LocationView.vue")['default']>
export const LazyThemeJobFiltersSpecificSkills: LazyComponent<typeof import("../components/theme/job/filters/SpecificSkills.vue")['default']>
export const LazyThemeJobListsJobList: LazyComponent<typeof import("../components/theme/job/lists/JobList.vue")['default']>
export const LazyThemeKnowledgebaseBrowseArticles: LazyComponent<typeof import("../components/theme/knowledgebase/BrowseArticles.vue")['default']>
export const LazyThemeKnowledgebaseFaqWidgets: LazyComponent<typeof import("../components/theme/knowledgebase/FaqWidgets.vue")['default']>
export const LazyThemeKnowledgebaseFeaturesFaq: LazyComponent<typeof import("../components/theme/knowledgebase/FeaturesFaq.vue")['default']>
export const LazyThemeKnowledgebaseSearch: LazyComponent<typeof import("../components/theme/knowledgebase/KnowledgebaseSearch.vue")['default']>
export const LazyThemeKnowledgebaseLatestArticles: LazyComponent<typeof import("../components/theme/knowledgebase/LatestArticles.vue")['default']>
export const LazyThemeKpkpDatatableZeroConfiguration: LazyComponent<typeof import("../components/theme/kpkp/datatable/zeroConfiguration.vue")['default']>
export const LazyThemeLearningCourseBlogBox: LazyComponent<typeof import("../components/theme/learning/course/BlogBox.vue")['default']>
export const LazyThemeLearningCourseDetail: LazyComponent<typeof import("../components/theme/learning/course/CourseDetail.vue")['default']>
export const LazyThemeLearningFiltersCategoriesView: LazyComponent<typeof import("../components/theme/learning/filters/CategoriesView.vue")['default']>
export const LazyThemeLearningFiltersFindCourse: LazyComponent<typeof import("../components/theme/learning/filters/FindCourse.vue")['default']>
export const LazyThemeLearningFiltersUpcomingCourses: LazyComponent<typeof import("../components/theme/learning/filters/UpcomingCourses.vue")['default']>
export const LazyThemeLearningListsLearningList: LazyComponent<typeof import("../components/theme/learning/lists/LearningList.vue")['default']>
export const LazyThemeMapsDraggableMarker: LazyComponent<typeof import("../components/theme/maps/DraggableMarker.vue")['default']>
export const LazyThemeMapsGooglePolyline: LazyComponent<typeof import("../components/theme/maps/GooglePolyline.vue")['default']>
export const LazyThemeMapsMarkersMap: LazyComponent<typeof import("../components/theme/maps/MarkersMap.vue")['default']>
export const LazyThemeMapsMultiLanguage: LazyComponent<typeof import("../components/theme/maps/MultiLanguage.vue")['default']>
export const LazyThemeMapsMultiLanguage2: LazyComponent<typeof import("../components/theme/maps/MultiLanguage2.vue")['default']>
export const LazyThemeMapsSimpleMap: LazyComponent<typeof import("../components/theme/maps/SimpleMap.vue")['default']>
export const LazyThemeMapsTrianglePolygon: LazyComponent<typeof import("../components/theme/maps/TrianglePolygon.vue")['default']>
export const LazyThemePagesFaqAccordion: LazyComponent<typeof import("../components/theme/pages/faq/FaqAccordion.vue")['default']>
export const LazyThemePagesFaqArticles: LazyComponent<typeof import("../components/theme/pages/faq/FaqArticles.vue")['default']>
export const LazyThemePagesFaqWidgets: LazyComponent<typeof import("../components/theme/pages/faq/FaqWidgets.vue")['default']>
export const LazyThemePagesFaqFeaturedTutorial: LazyComponent<typeof import("../components/theme/pages/faq/FeaturedTutorial.vue")['default']>
export const LazyThemePagesFaqIntellectualProperty: LazyComponent<typeof import("../components/theme/pages/faq/IntellectualProperty.vue")['default']>
export const LazyThemePagesFaqNavigationView: LazyComponent<typeof import("../components/theme/pages/faq/NavigationView.vue")['default']>
export const LazyThemePagesFaqSellingAccording: LazyComponent<typeof import("../components/theme/pages/faq/SellingAccording.vue")['default']>
export const LazyThemePagesFaqUserAccounts: LazyComponent<typeof import("../components/theme/pages/faq/UserAccounts.vue")['default']>
export const LazyThemePagesSearchAllLink: LazyComponent<typeof import("../components/theme/pages/search/AllLink.vue")['default']>
export const LazyThemePagesSearchImageLink: LazyComponent<typeof import("../components/theme/pages/search/ImageLink.vue")['default']>
export const LazyThemePagesSearchBar: LazyComponent<typeof import("../components/theme/pages/search/SearchBar.vue")['default']>
export const LazyThemePagesSearchTab: LazyComponent<typeof import("../components/theme/pages/search/SearchTab.vue")['default']>
export const LazyThemePagesSearchVideoLink: LazyComponent<typeof import("../components/theme/pages/search/VideoLink.vue")['default']>
export const LazyThemePagesSocialappActivityFeed: LazyComponent<typeof import("../components/theme/pages/socialapp/ActivityFeed.vue")['default']>
export const LazyThemePagesSocialappActivityLog: LazyComponent<typeof import("../components/theme/pages/socialapp/ActivityLog.vue")['default']>
export const LazyThemePagesSocialappAddFriend: LazyComponent<typeof import("../components/theme/pages/socialapp/AddFriend.vue")['default']>
export const LazyThemePagesSocialappEducationView: LazyComponent<typeof import("../components/theme/pages/socialapp/EducationView.vue")['default']>
export const LazyThemePagesSocialappFollowersView: LazyComponent<typeof import("../components/theme/pages/socialapp/FollowersView.vue")['default']>
export const LazyThemePagesSocialappFollowingView: LazyComponent<typeof import("../components/theme/pages/socialapp/FollowingView.vue")['default']>
export const LazyThemePagesSocialappFriendsView: LazyComponent<typeof import("../components/theme/pages/socialapp/FriendsView.vue")['default']>
export const LazyThemePagesSocialappHobbiesView: LazyComponent<typeof import("../components/theme/pages/socialapp/HobbiesView.vue")['default']>
export const LazyThemePagesSocialappIndexAbout: LazyComponent<typeof import("../components/theme/pages/socialapp/IndexAbout.vue")['default']>
export const LazyThemePagesSocialappIndexFriends: LazyComponent<typeof import("../components/theme/pages/socialapp/IndexFriends.vue")['default']>
export const LazyThemePagesSocialappIndexTimeline: LazyComponent<typeof import("../components/theme/pages/socialapp/IndexTimeline.vue")['default']>
export const LazyThemePagesSocialappLatestPhotos: LazyComponent<typeof import("../components/theme/pages/socialapp/LatestPhotos.vue")['default']>
export const LazyThemePagesSocialappMutualFriends: LazyComponent<typeof import("../components/theme/pages/socialapp/MutualFriends.vue")['default']>
export const LazyThemePagesSocialappMyProfile: LazyComponent<typeof import("../components/theme/pages/socialapp/MyProfile.vue")['default']>
export const LazyThemePagesSocialappPhotosView: LazyComponent<typeof import("../components/theme/pages/socialapp/PhotosView.vue")['default']>
export const LazyThemePagesSocialappProfileIntro: LazyComponent<typeof import("../components/theme/pages/socialapp/ProfileIntro.vue")['default']>
export const LazyThemePagesSocialappSocialHeader: LazyComponent<typeof import("../components/theme/pages/socialapp/SocialHeader.vue")['default']>
export const LazyThemePagesSocialappSociallAccording: LazyComponent<typeof import("../components/theme/pages/socialapp/SociallAccording.vue")['default']>
export const LazyThemePagesSocialappUsersSocial: LazyComponent<typeof import("../components/theme/pages/socialapp/UsersSocial.vue")['default']>
export const LazyThemePagesSocialappUsersSocial1: LazyComponent<typeof import("../components/theme/pages/socialapp/UsersSocial1.vue")['default']>
export const LazyThemePagesSocialappYourProfile: LazyComponent<typeof import("../components/theme/pages/socialapp/YourProfile.vue")['default']>
export const LazyThemePagesSupportTable: LazyComponent<typeof import("../components/theme/pages/support/SupportTable.vue")['default']>
export const LazyThemePagesSupportTicket: LazyComponent<typeof import("../components/theme/pages/support/SupportTicket.vue")['default']>
export const LazyThemeProjectCreate: LazyComponent<typeof import("../components/theme/project/create/index.vue")['default']>
export const LazyThemeProjectListData: LazyComponent<typeof import("../components/theme/project/list/data.vue")['default']>
export const LazyThemeProjectList: LazyComponent<typeof import("../components/theme/project/list/index.vue")['default']>
export const LazyThemeTableBootstrapBasicTable: LazyComponent<typeof import("../components/theme/table/bootstrap/BasicTable.vue")['default']>
export const LazyThemeTableBootstrapBreckpointSpecific: LazyComponent<typeof import("../components/theme/table/bootstrap/BreckpointSpecific.vue")['default']>
export const LazyThemeTableBootstrapCaptionTable: LazyComponent<typeof import("../components/theme/table/bootstrap/CaptionTable.vue")['default']>
export const LazyThemeTableBootstrapCustomTable: LazyComponent<typeof import("../components/theme/table/bootstrap/CustomTable.vue")['default']>
export const LazyThemeTableBootstrapDashedBorder: LazyComponent<typeof import("../components/theme/table/bootstrap/DashedBorder.vue")['default']>
export const LazyThemeTableBootstrapHeadOptions: LazyComponent<typeof import("../components/theme/table/bootstrap/HeadOptions.vue")['default']>
export const LazyThemeTableBootstrapHoverableTable: LazyComponent<typeof import("../components/theme/table/bootstrap/HoverableTable.vue")['default']>
export const LazyThemeTableBootstrapInverseTable: LazyComponent<typeof import("../components/theme/table/bootstrap/InverseTable.vue")['default']>
export const LazyThemeTableBootstrapPrimaryBackground: LazyComponent<typeof import("../components/theme/table/bootstrap/PrimaryBackground.vue")['default']>
export const LazyThemeTableBootstrapResponsiveTable: LazyComponent<typeof import("../components/theme/table/bootstrap/ResponsiveTable.vue")['default']>
export const LazyThemeTableBootstrapSizingTable: LazyComponent<typeof import("../components/theme/table/bootstrap/SizingTable.vue")['default']>
export const LazyThemeTableBootstrapStripedRow: LazyComponent<typeof import("../components/theme/table/bootstrap/StripedRow.vue")['default']>
export const LazyThemeTableDatatableZeroConfiguration: LazyComponent<typeof import("../components/theme/table/datatable/zeroConfiguration.vue")['default']>
export const LazyThemeTableTablecomponentAlertComponent: LazyComponent<typeof import("../components/theme/table/tablecomponent/AlertComponent.vue")['default']>
export const LazyThemeTableTablecomponentBadgesComponent: LazyComponent<typeof import("../components/theme/table/tablecomponent/BadgesComponent.vue")['default']>
export const LazyThemeTableTablecomponentCheckboxComponent: LazyComponent<typeof import("../components/theme/table/tablecomponent/CheckboxComponent.vue")['default']>
export const LazyThemeTableTablecomponentInputComponent: LazyComponent<typeof import("../components/theme/table/tablecomponent/InputComponent.vue")['default']>
export const LazyThemeTableTablecomponentProgressbarComponent: LazyComponent<typeof import("../components/theme/table/tablecomponent/ProgressbarComponent.vue")['default']>
export const LazyThemeTableTablecomponentRadioButtons: LazyComponent<typeof import("../components/theme/table/tablecomponent/RadioButtons.vue")['default']>
export const LazyThemeTableTablecomponentSelectComponent: LazyComponent<typeof import("../components/theme/table/tablecomponent/SelectComponent.vue")['default']>
export const LazyThemeTableTablecomponentSwitchComponent: LazyComponent<typeof import("../components/theme/table/tablecomponent/SwitchComponent.vue")['default']>
export const LazyThemeTableTablecomponentTootipComponent: LazyComponent<typeof import("../components/theme/table/tablecomponent/TootipComponent.vue")['default']>
export const LazyThemeTableTablecomponentUiTable: LazyComponent<typeof import("../components/theme/table/tablecomponent/UiTable.vue")['default']>
export const LazyThemeUikitsAccordionFlushAccordion: LazyComponent<typeof import("../components/theme/uikits/accordion/FlushAccordion.vue")['default']>
export const LazyThemeUikitsAccordionHorizontalAccordion: LazyComponent<typeof import("../components/theme/uikits/accordion/HorizontalAccordion.vue")['default']>
export const LazyThemeUikitsAccordionIconsAccordion: LazyComponent<typeof import("../components/theme/uikits/accordion/IconsAccordion.vue")['default']>
export const LazyThemeUikitsAccordionMultipleAccordion: LazyComponent<typeof import("../components/theme/uikits/accordion/MultipleAccordion.vue")['default']>
export const LazyThemeUikitsAccordionOutlineAccordion: LazyComponent<typeof import("../components/theme/uikits/accordion/OutlineAccordion.vue")['default']>
export const LazyThemeUikitsAccordionSimpleAccordion: LazyComponent<typeof import("../components/theme/uikits/accordion/SimpleAccordion.vue")['default']>
export const LazyThemeUikitsAlertAdditionalContent: LazyComponent<typeof import("../components/theme/uikits/alert/AdditionalContent.vue")['default']>
export const LazyThemeUikitsAlertAlertsSection: LazyComponent<typeof import("../components/theme/uikits/alert/AlertsSection.vue")['default']>
export const LazyThemeUikitsAlertDarkColor: LazyComponent<typeof import("../components/theme/uikits/alert/DarkColor.vue")['default']>
export const LazyThemeUikitsAlertLightClor: LazyComponent<typeof import("../components/theme/uikits/alert/LightClor.vue")['default']>
export const LazyThemeUikitsAlertTextAlert: LazyComponent<typeof import("../components/theme/uikits/alert/TextAlert.vue")['default']>
export const LazyThemeUikitsAvatarGrouping: LazyComponent<typeof import("../components/theme/uikits/avatar/AvatarGrouping.vue")['default']>
export const LazyThemeUikitsAvatarRatio: LazyComponent<typeof import("../components/theme/uikits/avatar/AvatarRatio.vue")['default']>
export const LazyThemeUikitsAvatarShapes: LazyComponent<typeof import("../components/theme/uikits/avatar/AvatarShapes.vue")['default']>
export const LazyThemeUikitsAvatarSize: LazyComponent<typeof import("../components/theme/uikits/avatar/AvatarSize.vue")['default']>
export const LazyThemeUikitsAvatarStatus: LazyComponent<typeof import("../components/theme/uikits/avatar/AvatarStatus.vue")['default']>
export const LazyThemeUikitsDropdownAlignmentsDropdown: LazyComponent<typeof import("../components/theme/uikits/dropdown/AlignmentsDropdown.vue")['default']>
export const LazyThemeUikitsDropdownBasicDropdown: LazyComponent<typeof import("../components/theme/uikits/dropdown/BasicDropdown.vue")['default']>
export const LazyThemeUikitsDropdownDividerDropdown: LazyComponent<typeof import("../components/theme/uikits/dropdown/DividerDropdown.vue")['default']>
export const LazyThemeUikitsDropdownSection: LazyComponent<typeof import("../components/theme/uikits/dropdown/DropdownSection.vue")['default']>
export const LazyThemeUikitsDropdownSizing: LazyComponent<typeof import("../components/theme/uikits/dropdown/DropdownSizing.vue")['default']>
export const LazyThemeUikitsDropdownHelperCard: LazyComponent<typeof import("../components/theme/uikits/dropdown/HelperCard.vue")['default']>
export const LazyThemeUikitsDropdownJustifyContents: LazyComponent<typeof import("../components/theme/uikits/dropdown/JustifyContents.vue")['default']>
export const LazyThemeUikitsDropdownRoundedDropdown: LazyComponent<typeof import("../components/theme/uikits/dropdown/RoundedDropdown.vue")['default']>
export const LazyThemeUikitsDropdownSplitDropdown: LazyComponent<typeof import("../components/theme/uikits/dropdown/SplitDropdown.vue")['default']>
export const LazyThemeUikitsDropdownUniqueDropdown: LazyComponent<typeof import("../components/theme/uikits/dropdown/UniqueDropdown.vue")['default']>
export const LazyThemeUikitsGridAlignment: LazyComponent<typeof import("../components/theme/uikits/grid/GridAlignment.vue")['default']>
export const LazyThemeUikitsGridColumm: LazyComponent<typeof import("../components/theme/uikits/grid/GridColumm.vue")['default']>
export const LazyThemeUikitsGridOptions: LazyComponent<typeof import("../components/theme/uikits/grid/GridOptions.vue")['default']>
export const LazyThemeUikitsGridSection: LazyComponent<typeof import("../components/theme/uikits/grid/GridSection.vue")['default']>
export const LazyThemeUikitsHelperBackgroundColors: LazyComponent<typeof import("../components/theme/uikits/helper/BackgroundColors.vue")['default']>
export const LazyThemeUikitsHelperBorderColor: LazyComponent<typeof import("../components/theme/uikits/helper/BorderColor.vue")['default']>
export const LazyThemeUikitsHelperFontStyle: LazyComponent<typeof import("../components/theme/uikits/helper/FontStyle.vue")['default']>
export const LazyThemeUikitsHelperBorders: LazyComponent<typeof import("../components/theme/uikits/helper/HelperBorders.vue")['default']>
export const LazyThemeUikitsHelperDisplays: LazyComponent<typeof import("../components/theme/uikits/helper/HelperDisplays.vue")['default']>
export const LazyThemeUikitsHelperImagesSizes: LazyComponent<typeof import("../components/theme/uikits/helper/ImagesSizes.vue")['default']>
export const LazyThemeUikitsHelperMarginPeding: LazyComponent<typeof import("../components/theme/uikits/helper/MarginPeding.vue")['default']>
export const LazyThemeUikitsHelperTextColors: LazyComponent<typeof import("../components/theme/uikits/helper/TextColors.vue")['default']>
export const LazyThemeUikitsListsActiveLists: LazyComponent<typeof import("../components/theme/uikits/lists/ActiveLists.vue")['default']>
export const LazyThemeUikitsListsBadgeList: LazyComponent<typeof import("../components/theme/uikits/lists/BadgeList.vue")['default']>
export const LazyThemeUikitsListsCheckboxRedio: LazyComponent<typeof import("../components/theme/uikits/lists/CheckboxRedio.vue")['default']>
export const LazyThemeUikitsListsContextualClasses: LazyComponent<typeof import("../components/theme/uikits/lists/ContextualClasses.vue")['default']>
export const LazyThemeUikitsListsCustomList: LazyComponent<typeof import("../components/theme/uikits/lists/CustomList.vue")['default']>
export const LazyThemeUikitsListsDefaultLists: LazyComponent<typeof import("../components/theme/uikits/lists/DefaultLists.vue")['default']>
export const LazyThemeUikitsListsDisabledLists: LazyComponent<typeof import("../components/theme/uikits/lists/DisabledLists.vue")['default']>
export const LazyThemeUikitsListsFlushLists: LazyComponent<typeof import("../components/theme/uikits/lists/FlushLists.vue")['default']>
export const LazyThemeUikitsListsHorizontalLists: LazyComponent<typeof import("../components/theme/uikits/lists/HorizontalLists.vue")['default']>
export const LazyThemeUikitsListsJavaScriptBehavior: LazyComponent<typeof import("../components/theme/uikits/lists/JavaScriptBehavior.vue")['default']>
export const LazyThemeUikitsListsNumberList: LazyComponent<typeof import("../components/theme/uikits/lists/NumberList.vue")['default']>
export const LazyThemeUikitsListsScrollableLists: LazyComponent<typeof import("../components/theme/uikits/lists/ScrollableLists.vue")['default']>
export const LazyThemeUikitsModalBasicModal: LazyComponent<typeof import("../components/theme/uikits/modal/BasicModal.vue")['default']>
export const LazyThemeUikitsModalCenteredModal: LazyComponent<typeof import("../components/theme/uikits/modal/CenteredModal.vue")['default']>
export const LazyThemeUikitsModalCustomModals: LazyComponent<typeof import("../components/theme/uikits/modal/CustomModals.vue")['default']>
export const LazyThemeUikitsModalFullscreenModal: LazyComponent<typeof import("../components/theme/uikits/modal/FullscreenModal.vue")['default']>
export const LazyThemeUikitsModalSizeModel: LazyComponent<typeof import("../components/theme/uikits/modal/SizeModel.vue")['default']>
export const LazyThemeUikitsModalStaticModal: LazyComponent<typeof import("../components/theme/uikits/modal/StaticModal.vue")['default']>
export const LazyThemeUikitsModalToggleModals: LazyComponent<typeof import("../components/theme/uikits/modal/ToggleModals.vue")['default']>
export const LazyThemeUikitsModalModalsBalanceModal: LazyComponent<typeof import("../components/theme/uikits/modal/modals/BalanceModal.vue")['default']>
export const LazyThemeUikitsModalModalsExtralargeModal: LazyComponent<typeof import("../components/theme/uikits/modal/modals/ExtralargeModal.vue")['default']>
export const LazyThemeUikitsModalModalsFullscreenLg: LazyComponent<typeof import("../components/theme/uikits/modal/modals/FullscreenLg.vue")['default']>
export const LazyThemeUikitsModalModalsFullscreenMd: LazyComponent<typeof import("../components/theme/uikits/modal/modals/FullscreenMd.vue")['default']>
export const LazyThemeUikitsModalModalsFullscreenModallabel: LazyComponent<typeof import("../components/theme/uikits/modal/modals/FullscreenModallabel.vue")['default']>
export const LazyThemeUikitsModalModalsFullscreenSm: LazyComponent<typeof import("../components/theme/uikits/modal/modals/FullscreenSm.vue")['default']>
export const LazyThemeUikitsModalModalsFullscreenXl: LazyComponent<typeof import("../components/theme/uikits/modal/modals/FullscreenXl.vue")['default']>
export const LazyThemeUikitsModalModalsFullscreenXxl: LazyComponent<typeof import("../components/theme/uikits/modal/modals/FullscreenXxl.vue")['default']>
export const LazyThemeUikitsModalModalsFullsereenModa: LazyComponent<typeof import("../components/theme/uikits/modal/modals/FullsereenModa.vue")['default']>
export const LazyThemeUikitsModalModalsLargeModal: LazyComponent<typeof import("../components/theme/uikits/modal/modals/LargeModal.vue")['default']>
export const LazyThemeUikitsModalModalsOpenModel: LazyComponent<typeof import("../components/theme/uikits/modal/modals/OpenModel.vue")['default']>
export const LazyThemeUikitsModalModalsProfileModal: LazyComponent<typeof import("../components/theme/uikits/modal/modals/ProfileModal.vue")['default']>
export const LazyThemeUikitsModalModalsResultModal: LazyComponent<typeof import("../components/theme/uikits/modal/modals/ResultModal.vue")['default']>
export const LazyThemeUikitsModalModalsScrollingModal: LazyComponent<typeof import("../components/theme/uikits/modal/modals/ScrollingModal.vue")['default']>
export const LazyThemeUikitsModalModalsSimpleModel: LazyComponent<typeof import("../components/theme/uikits/modal/modals/SimpleModel.vue")['default']>
export const LazyThemeUikitsModalModalsSmallModal: LazyComponent<typeof import("../components/theme/uikits/modal/modals/SmallModal.vue")['default']>
export const LazyThemeUikitsModalModalsTooltipsModal: LazyComponent<typeof import("../components/theme/uikits/modal/modals/TooltipsModal.vue")['default']>
export const LazyThemeUikitsPopoverBasicPopover: LazyComponent<typeof import("../components/theme/uikits/popover/BasicPopover.vue")['default']>
export const LazyThemeUikitsPopoverDirectionPopover: LazyComponent<typeof import("../components/theme/uikits/popover/DirectionPopover.vue")['default']>
export const LazyThemeUikitsPopoverOffsetPopover: LazyComponent<typeof import("../components/theme/uikits/popover/OffsetPopover.vue")['default']>
export const LazyThemeUikitsProgressBasicProgressbar: LazyComponent<typeof import("../components/theme/uikits/progress/BasicProgressbar.vue")['default']>
export const LazyThemeUikitsProgressCustomProgressbars: LazyComponent<typeof import("../components/theme/uikits/progress/CustomProgressbars.vue")['default']>
export const LazyThemeUikitsProgressHeightProgressbars: LazyComponent<typeof import("../components/theme/uikits/progress/HeightProgressbars.vue")['default']>
export const LazyThemeUikitsProgressMultipleBars: LazyComponent<typeof import("../components/theme/uikits/progress/MultipleBars.vue")['default']>
export const LazyThemeUikitsProgressSmallProgressbars: LazyComponent<typeof import("../components/theme/uikits/progress/SmallProgressbars.vue")['default']>
export const LazyThemeUikitsProgressStripedProgressbar: LazyComponent<typeof import("../components/theme/uikits/progress/StripedProgressbar.vue")['default']>
export const LazyThemeUikitsTabsBorderTabs: LazyComponent<typeof import("../components/theme/uikits/tabs/BorderTabs.vue")['default']>
export const LazyThemeUikitsTabsIconTabs: LazyComponent<typeof import("../components/theme/uikits/tabs/IconTabs.vue")['default']>
export const LazyThemeUikitsTabsJustifyTabs: LazyComponent<typeof import("../components/theme/uikits/tabs/JustifyTabs.vue")['default']>
export const LazyThemeUikitsTabsLeftTabs: LazyComponent<typeof import("../components/theme/uikits/tabs/LeftTabs.vue")['default']>
export const LazyThemeUikitsTabsMaterialTabs: LazyComponent<typeof import("../components/theme/uikits/tabs/MaterialTabs.vue")['default']>
export const LazyThemeUikitsTabsPillsTabs: LazyComponent<typeof import("../components/theme/uikits/tabs/PillsTabs.vue")['default']>
export const LazyThemeUikitsTabsSimpleTabs: LazyComponent<typeof import("../components/theme/uikits/tabs/SimpleTabs.vue")['default']>
export const LazyThemeUikitsTabsVerticalTabs: LazyComponent<typeof import("../components/theme/uikits/tabs/VerticalTabs.vue")['default']>
export const LazyThemeUikitsTagpillsBadgesContextual: LazyComponent<typeof import("../components/theme/uikits/tagpills/BadgesContextual.vue")['default']>
export const LazyThemeUikitsTagpillsNumberBadge: LazyComponent<typeof import("../components/theme/uikits/tagpills/NumberBadge.vue")['default']>
export const LazyThemeUikitsTagpillsPillsContextual: LazyComponent<typeof import("../components/theme/uikits/tagpills/PillsContextual.vue")['default']>
export const LazyThemeUikitsTagpillsTagsIcons: LazyComponent<typeof import("../components/theme/uikits/tagpills/TagsIcons.vue")['default']>
export const LazyThemeUikitsTagpillsTagsSection: LazyComponent<typeof import("../components/theme/uikits/tagpills/TagsSection.vue")['default']>
export const LazyThemeUikitsTooltipBasicTooltip: LazyComponent<typeof import("../components/theme/uikits/tooltip/BasicTooltip.vue")['default']>
export const LazyThemeUikitsTooltipColoredTooltip: LazyComponent<typeof import("../components/theme/uikits/tooltip/ColoredTooltip.vue")['default']>
export const LazyThemeUikitsTooltipDirectionsTooltip: LazyComponent<typeof import("../components/theme/uikits/tooltip/DirectionsTooltip.vue")['default']>
export const LazyThemeUikitsTooltipFilledTooltip: LazyComponent<typeof import("../components/theme/uikits/tooltip/FilledTooltip.vue")['default']>
export const LazyThemeUikitsTooltipHoverEffect: LazyComponent<typeof import("../components/theme/uikits/tooltip/HoverEffect.vue")['default']>
export const LazyThemeUikitsTypographyColoredHeadings: LazyComponent<typeof import("../components/theme/uikits/typography/ColoredHeadings.vue")['default']>
export const LazyThemeUikitsTypographyDisplayHeadings: LazyComponent<typeof import("../components/theme/uikits/typography/DisplayHeadings.vue")['default']>
export const LazyThemeUikitsTypographyFontWeight: LazyComponent<typeof import("../components/theme/uikits/typography/FontWeight.vue")['default']>
export const LazyThemeUikitsTypographyHeadingsSeaction: LazyComponent<typeof import("../components/theme/uikits/typography/HeadingsSeaction.vue")['default']>
export const LazyThemeUikitsTypographyListingTypography: LazyComponent<typeof import("../components/theme/uikits/typography/ListingTypography.vue")['default']>
export const LazyThemeUikitsTypographyTextElements: LazyComponent<typeof import("../components/theme/uikits/typography/TextElements.vue")['default']>
export const LazyThemeUserCards: LazyComponent<typeof import("../components/theme/user/cards/index.vue")['default']>
export const LazyThemeUserEdit: LazyComponent<typeof import("../components/theme/user/edit/index.vue")['default']>
export const LazyThemeUserEditProfile: LazyComponent<typeof import("../components/theme/user/edit/profile.vue")['default']>
export const LazyThemeUserEditTable: LazyComponent<typeof import("../components/theme/user/edit/table.vue")['default']>
export const LazyThemeUserProfile: LazyComponent<typeof import("../components/theme/user/profile/index.vue")['default']>
export const LazyThemeUserProfilePost: LazyComponent<typeof import("../components/theme/user/profile/post.vue")['default']>
export const LazyThemeUserProfilePost1: LazyComponent<typeof import("../components/theme/user/profile/post1.vue")['default']>
export const LazyThemeUserProfilePost2: LazyComponent<typeof import("../components/theme/user/profile/post2.vue")['default']>
export const LazyThemeUserProfilePost3: LazyComponent<typeof import("../components/theme/user/profile/post3.vue")['default']>
export const LazyThemeWidgetsChartOrderStatus: LazyComponent<typeof import("../components/theme/widgets/chart/OrderStatus.vue")['default']>
export const LazyThemeWidgetsChartTotalProduct: LazyComponent<typeof import("../components/theme/widgets/chart/TotalProduct.vue")['default']>
export const LazyThemeWidgetsChartTotalProject: LazyComponent<typeof import("../components/theme/widgets/chart/TotalProject.vue")['default']>
export const LazyThemeWidgetsChartTotalSale: LazyComponent<typeof import("../components/theme/widgets/chart/TotalSale.vue")['default']>
export const LazyThemeWidgetsChartCurrency: LazyComponent<typeof import("../components/theme/widgets/chart/currency.vue")['default']>
export const LazyThemeWidgetsChart: LazyComponent<typeof import("../components/theme/widgets/chart/index.vue")['default']>
export const LazyThemeWidgetsGeneralActivity: LazyComponent<typeof import("../components/theme/widgets/general/activity.vue")['default']>
export const LazyThemeWidgetsGeneralEarning: LazyComponent<typeof import("../components/theme/widgets/general/earning.vue")['default']>
export const LazyThemeWidgetsGeneral: LazyComponent<typeof import("../components/theme/widgets/general/index.vue")['default']>
export const LazyThemeWidgetsGeneralPipline: LazyComponent<typeof import("../components/theme/widgets/general/pipline.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyIcon: LazyComponent<typeof import("../node_modules/nuxt-icon/dist/runtime/Icon.vue")['default']>
export const LazyIconCSS: LazyComponent<typeof import("../node_modules/nuxt-icon/dist/runtime/IconCSS.vue")['default']>
export const LazyLCircle: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LCircle']>
export const LazyLCircleMarker: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LCircleMarker']>
export const LazyLControl: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControl']>
export const LazyLControlAttribution: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControlAttribution']>
export const LazyLControlLayers: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControlLayers']>
export const LazyLControlScale: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControlScale']>
export const LazyLControlZoom: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LControlZoom']>
export const LazyLFeatureGroup: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LFeatureGroup']>
export const LazyLGeoJson: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LGeoJson']>
export const LazyLIcon: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LIcon']>
export const LazyLImageOverlay: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LImageOverlay']>
export const LazyLLayerGroup: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LLayerGroup']>
export const LazyLMap: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LMap']>
export const LazyLMarker: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LMarker']>
export const LazyLPolygon: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LPolygon']>
export const LazyLPolyline: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LPolyline']>
export const LazyLPopup: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LPopup']>
export const LazyLRectangle: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LRectangle']>
export const LazyLTileLayer: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LTileLayer']>
export const LazyLTooltip: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LTooltip']>
export const LazyLWmsTileLayer: LazyComponent<typeof import("@vue-leaflet/vue-leaflet")['LWmsTileLayer']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
