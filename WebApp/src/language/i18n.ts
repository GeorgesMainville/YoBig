import en from './en.json';
import fr from './fr.json';

export const DEFAULT_LANGUAGE = 'en';
export const AVAILABLE_LANGUAGES = ['fr', 'en'];

const i18n = new Map([
  ['fr', fr],
  ['en', en],
]);

export default i18n;
