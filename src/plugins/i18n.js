import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '../langs/en'
import pl from '../langs/pl'

Vue.use(VueI18n)

export const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'pl',
    silentTranslationWarn: process.env.NODE_ENV === 'production',
    messages: {
        en: en,
        pl: pl
    }
})