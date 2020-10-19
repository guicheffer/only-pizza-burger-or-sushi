import { call, put } from 'redux-saga/effects';

import { WatchedPollingActionType } from './polling-watcher';
import { fetchForexRates } from '../services/fetch-forex-rates';
import { setPollingComplete, setPollingFailed } from '../polling.slices';
// import { updateForexRates } from '../../exchange/rates/rates.slices';

export const thisFunctionIsSuperDummyFakeLog = console.error;

export function* pollingWorker({ payload: baseCurrency }: WatchedPollingActionType) {
  while (true) {
    try {
      const restaurantsResponse = yield call(() => fetchForexRates(baseCurrency));
      console.log(restaurantsResponse);
      yield put(setPollingComplete());
      // yield put(updateForexRates(rates));
    } catch (err) {
      // We could use kibana here, for instance, to track errors
      // For now let's stick with these fake ones haha...
      thisFunctionIsSuperDummyFakeLog(err);

      yield put(setPollingFailed());
    }
  }
}
