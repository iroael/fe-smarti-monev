import { createI18n } from 'vue-i18n'
import English from "~/core/locales/en.json"
import Russian from "~/core/locales/ru.json"
import Arabic from "~/core/locales/ar.json"
import German from "~/core/locales/ge.json"
import لعربية from "~/core/locales/ae.json"
import 简体中文 from "~/core/locales/cn.json"
import Português from "~/core/locales/pt.json"
import Français from "~/core/locales/fr.json"
import Deutsch from "~/core/locales/de.json"
import Español from "~/core/locales/es.json"
import eng from "~/core/locales/eng.json"

export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy: false,
        locale: 'English',
        messages: {
            English: English,
            German: German,
            Russian: Russian,
            Arabic: Arabic,
            Español: Español,
            Deutsch: Deutsch,
            Français: Français,
            Português: Português,
            简体中文: 简体中文,
            لعربية: لعربية,
            eng: eng
        }
    })
    vueApp.use(i18n)
})