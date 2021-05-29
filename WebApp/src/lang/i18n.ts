import en from './en.json';
import fr from './fr.json';

const DEFAULT_LANG = 'en';
const AVAILABLE_LANGS = ['fr', 'en'];

const i18n = new Map([
  ['fr', fr],
  ['en', en]
]);

export {DEFAULT_LANG, AVAILABLE_LANGS};
export default i18n;