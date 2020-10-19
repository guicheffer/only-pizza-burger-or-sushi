import API_URLS, { DefaultApiUrlsType } from './api-urls';
import TRANSLATIONS, { DefaultTranslationsType } from './translations';

export type Env = 'development' | 'test' | 'production';

interface ConfigsInterface {
  APP: {
    API_URLS: DefaultApiUrlsType;
    LOCALE_STRING: string;
    TRANSLATIONS?: DefaultTranslationsType;
  },
  KEYCODES: {
    [key: string]: number;
  },
}

const CONFIGS = {
  APP: {
    API_URLS,
    LOCALE_STRING: 'de-DE',
    TRANSLATIONS,
  },
} as ConfigsInterface;

export default CONFIGS;
