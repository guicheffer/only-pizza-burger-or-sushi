import CONFIGS, { Env } from '../../../app/configs';
import { ExpectedRequestPayload } from '../middlewares/polling-watcher';

const { NODE_ENV = 'production' }: { NODE_ENV: Env } = process.env;
export const API_URL = CONFIGS.APP.API_URLS.proxyApi[NODE_ENV] as string;

export const fetchResults = async (params: ExpectedRequestPayload) => {
  const { categories, location, term } = params;
  const { coordinates } = location;

  const rawIncludeQueryParams = new URLSearchParams({
    term,
    categories,
    latitude: coordinates.latitude.toString(),
    longitude: coordinates.longitude.toString(),
  });

  const queryParams = rawIncludeQueryParams.toString();
  const url = `${API_URL}${queryParams ? `?${queryParams}` : ''}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${CONFIGS.APP.API_URLS.proxyApi.key}`,
      },
      method: 'GET',
    });
    const { status } = response;

    if (status === 201 || status === 200) {
      const data = await response.json();
      return data;
    }

    // I know, we could improve error handling a bit here
    throw new Error('Request failed to some reason :(');
  } catch (error) {
    throw new Error(error);
  }
};
