import API_URLS, { DefaultApiUrlsType } from './api-urls';
import TRANSLATIONS, { DefaultTranslationsType } from './translations';

export type Env = 'development' | 'test' | 'production';

interface ConfigsInterface {
  APP: {
    API_URLS: DefaultApiUrlsType;
    LOCALE_STRING: string;
    TERM: string;
    TRANSLATIONS?: DefaultTranslationsType;
    DEFAULT_ACTIVE_CATEGORY: string;
    MAX_RESULTS: number;
  },
  KEYCODES: {
    [key: string]: number;
  },
}

const CONFIGS = {
  APP: {
    API_URLS,
    LOCALE_STRING: 'de-DE',
    TERM: 'restaurants',
    TRANSLATIONS,
    DEFAULT_ACTIVE_CATEGORY: 'burger',
    MAX_RESULTS: 10,
  },
} as ConfigsInterface;

export default CONFIGS;
