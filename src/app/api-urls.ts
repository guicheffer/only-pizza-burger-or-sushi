import { Env } from './configs';

export type DefaultApiUrlsType = {
  [key in string | Env]: any | Env | string | DefaultApiUrlsType;
}

export default {
  proxyApi: {
    development: '#',
    production: '#',
  }
} as DefaultApiUrlsType;
