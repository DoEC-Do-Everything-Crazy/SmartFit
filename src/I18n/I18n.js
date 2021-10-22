import I18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {useSelector} from 'react-redux';

import en from './en';
import vi from './vi';

const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

I18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

// export default I18n  ;
