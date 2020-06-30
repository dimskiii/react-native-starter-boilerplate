import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

// Import all locales
import en from './en.json';
import id from './id.json';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
    en,
    id
};

const currentLocale = I18n.currentLocale();

// The method we'll use instead of a regular string
export function strings(name){
  return I18n.t(name);
};

export default I18n;