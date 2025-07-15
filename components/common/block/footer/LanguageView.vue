<template>
    <div class="translate_wrapper" :class="active ? 'active' : ''">
        <div class="current_lang">
            <div class="lang" @click="openDropDown()">
                <span class="lang-txt f-light f-w-500">{{ selectedLanguage.lan }}</span><span class="ms-2"> <i
                        class="fa fa-caret-down txt-primary"> </i></span>
            </div>
        </div>
        <div class="more_lang" :class="active ? 'active' : ''">
        <div class="lang selected" v-for="(lang, index) in data" :key="index" @click.prevent="selectLanguage(lang)"><span
                class="lang-txt">{{ lang.lan }}<span>
                    {{ lang.span }}</span></span></div>
    </div>
    </div>
    
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { language } from "~/core/data/language"
import { useI18n } from "vue-i18n";
interface lang {
    lan: string,
    txt: string,
    icon: string,
}
const i18n = useI18n()
const active = ref<boolean>(false)
const selectedLanguage = ref<lang>({
    lan: 'English',
    txt: 'EN',
    icon: 'flag-icon-gb'
})
const data = language

function selectLanguage(language: lang) {
    active.value = false;
    i18n.locale.value = language.lan;
    selectedLanguage.value = language;
}

function openDropDown() {
    active.value = !active.value;
}

function hideDropdown() {
    active.value = false;
}
</script>