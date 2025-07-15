<template>
    <CommonCard3 colClass="col-md-6" cardClass="title-line" pre="true" preClass="f-m-light mt-1" cardbodyClass="common-flex"
        headerTitle="true" title="Square Buttons" :desc="desc">
        <button class="btn btn-square " data-bs-toggle="tooltip" :title="'btn btn-square ' + item.classes"
            :class="item.classes" v-for="(item, index) in button " :key="index" type="button">{{
                item.title }}</button>
    </CommonCard3>
    <CommonCard3 colClass="col-md-6" cardClass="title-line" cardbodyClass="common-flex" headerTitle="true" pre="true"
        preClass="f-m-light mt-1" title="Default buttons" :desc="desc1">
        <button class="btn " :class="item.classes" v-for="(item, index) in button " :key="index" type="button">{{
            item.title }}</button>
    </CommonCard3>
    <CommonCard3 colClass="col-md-6" cardClass="title-line" cardbodyClass="common-flex align-items-center buttons-box"
        headerTitle="true" pre="true" preClass="f-m-light mt-1" title="Button Sizes" :desc="desc2">
        <button class="btn " :class="item.classes" v-for="(item, index) in size " :key="index" type="button">{{
            item.title }}</button>
    </CommonCard3>
    <CommonCard3 colClass="col-md-6" cardClass="title-line" cardbodyClass="common-flex  align-items-center"
        headerTitle="true" pre="true" preClass="f-m-light mt-1" title="Outline Button Sizes" :desc="desc3">
        <button class="btn " :class="item.classes" v-for="(item, index) in outline " :key="index" type="button">{{
            item.title }}</button>
    </CommonCard3>
    <CommonCard3 colClass="col-md-6" cardClass="title-line" cardbodyClass="common-flex buttons-box" headerTitle="true"
        pre="true" preClass="f-m-light mt-1" title="Rounded Buttons" :desc="desc4">
        <button class="btn btn-pill " :class="item.classes" v-for="(item, index) in rounded " :key="index" type="button">{{
            item.title }}</button>
    </CommonCard3>
    <CommonCard3 colClass="col-md-6" cardClass="title-line" cardbodyClass="common-flex" headerTitle="true" pre="true"
        preClass="f-m-light mt-1" title="Outline Rounded Buttons" :desc="desc5">
        <button class="btn btn-pill " :class="item.classes" v-for="(item, index) in outline1 " :key="index" type="button">{{
            item.title }}</button>
    </CommonCard3>
    <CommonCard3 colClass="col-md-6" cardClass="title-line" cardbodyClass="common-flex align-items-center"
        headerTitle="true" pre="true" preClass="f-m-light mt-1" title="Rounded Sizes" :desc="desc6">
        <button class="btn btn-pill" :class="item.classes" v-for="(item, index) in size1 " :key="index" type="button">{{
            item.title }}</button>
    </CommonCard3>
    <CommonCard3 colClass="col-md-6" cardClass="title-line" cardbodyClass="common-flex  align-items-center"
        headerTitle="true" pre="true" preClass="f-m-light mt-1" title="Outline Rounded Sizes" :desc="desc7">
        <button class="btn btn-pill " :class="item.classes" v-for="(item, index) in outline " :key="index" type="button">{{
            item.title }}</button>
    </CommonCard3>
    <CommonCard3 colClass="col-md-6" cardClass="title-line" cardbodyClass="common-flex  " headerTitle="true" pre="true"
        preClass="f-m-light mt-1" title="Disabled Buttons" :desc="desc8">
        <button class="btn " :class="item.classes" v-for="(item, index) in Disabled " :key="index" type="button">{{
            item.title }}</button>
    </CommonCard3>
    <CommonCard3 colClass="col-md-6" cardClass="title-line" cardbodyClass="common-flex common-flex icon-button "
        headerTitle="true" pre="true" preClass="f-m-light mt-1" title="Icons Buttons" :desc="desc9">
        <button :class="item.classes" v-for="(item, index) in icons " :key="index" type="button">
            <Icon :name="item.title" size="30px" />
        </button>
    </CommonCard3>
    <ThemeAppButtonsButtonGroup />
    <ThemeAppButtonsBlockLevel />
    <ThemeAppButtonsButtonVariations />
    <CommonCard3 colClass="col-12" cardClass="title-line" headerTitle="true" pre="true" cardbodyClass="common-flex  "
        preClass="f-m-light mt-1" title="Bold Border Outline Buttons" :desc="desc10">
        <button class="btn " :class="item.classes" v-for="(item, index) in border" :key="index">{{ item.title }}</button>
    </CommonCard3>
    <ThemeAppButtonsRadioAndCheckbox />
    <CommonCard3 colClass="col-12" cardClass="title-line" headerTitle="true" pre="true" preClass="f-m-light mt-1"
        title="Gradient Buttons" :desc="desc11">
        <div class="row g-3">
            <div class="col-xl-4 col-sm-6" v-for="(item, index) in gradien" :key="index">
                <div class="card-wrapper border rounded-3 bg-light">
                    <h6 class="sub-title fw-bold">{{ item.title }}</h6>
                    <div class="common-flex">
                        <button class="btn " :class="items.classes" v-for="(items, index) in item.children" :key="index">{{
                            items.title }}</button>

                    </div>
                </div>
            </div>
        </div>
    </CommonCard3>
</template>
<script lang="ts" setup>
import { button, size, outline, rounded, outline1, size1, Disabled, icons, border, gradien } from "~/core/data/buttons"
let desc = ref<string>("Used<code>.btn-square</code> class to square button.")
let desc1 = ref<string>("Use the<code>.btn </code>class for set default buttons and set background color like this : <code>.bg-* [primary/secondary..]. </code>")
let desc2 = ref<string>("Use the <code>.btn-lg,.btn-sm,.btn-xs </code>for sizes of buttons")
let desc3 = ref<string>("Use the <code>.btn-lg,.btn-sm,.btn-xs </code>for sizes of buttons")
let desc4 = ref<string>("Add <code>.btn-pill</code> class for rounded buttons.")
let desc5 = ref<string>("Add <code>.btn-pill</code> and <code>.btn-outline-*</code> class for outline with buttons.")
let desc6 = ref<string>("Use the <code>.btn-lg,.btn-sm,.btn-xs </code>for sizes of buttons")
let desc7 = ref<string>("Use the <code>.btn-lg,.btn-sm,.btn-xs </code>for sizes of buttons")
let desc8 = ref<string>("Add <code>.disabled</code> class or <code>disabled='disabled'</code> attribute for disabled button")
let desc9 = ref<string>("Used all variation of icons. like this : <code>.btn-square/.btn-pill</code>.")
let desc10 = ref<string>("Add <code>.btn-outline-*-2x</code> class for bold outline buttons.")
let desc11 = ref<string>("Add <code>.btn-*-gradien</code> class for gradien buttons.")
</script>