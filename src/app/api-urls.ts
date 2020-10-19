import { Env } from './configs';

export type DefaultApiUrlsType = {
  [key in string | Env]: any | Env | string | DefaultApiUrlsType;
}

const DEFAULT_API_URL = 'https://api.yelp.com/v3/businesses/search';

export default {
  proxyApi: {
    key: 'oSJvaTmFtYVCEJcMsLFA4uRljDOILtEfp0sTWflSWclozapMP1rCZ6uttKPOoYnrdUGcTXI0ztOf3rTPVSBRa1JjngqcoTKD30YUp7yKxhZCNzS4bsZV_DqzzkAwXXYx',
    development: `http://localhost:8080/${DEFAULT_API_URL}`,
    production: `https://only-pizza-burger-sushi-proxy.herokuapp.com/${DEFAULT_API_URL}`,
  }
} as DefaultApiUrlsType;
