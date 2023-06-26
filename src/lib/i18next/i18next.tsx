import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { LocalStorage } from '../../storage/LocalStorage';

import translationEnglish from '../resources/english/en.json';
import translationEnglish2 from '../resources/english/en2.json';

import translationFrench from '../resources/french/fr.json';

const userLang = LocalStorage.getAppLang().appLang || navigator.language || (navigator as any).userLanguage;

const lng = userLang?.includes('-') ? userLang.split('-')[0] : userLang;

if (lng) {
  LocalStorage.storeAppLang(lng);
}

const resources = {
  en: {
    main: translationEnglish,
    home: translationEnglish2,
  },
  fr: {
    main: translationFrench,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;