import en from './en.json';
import fr from './fr.json';

export const DEFAULT_LANG = 'en';
export const AVAILABLE_LANGS = ['fr', 'en'];

const i18n = new Map([
  ['fr', fr],
  ['en', en],
]);

export default i18n;
