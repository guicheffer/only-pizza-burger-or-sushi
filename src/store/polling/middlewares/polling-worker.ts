import { call, put } from 'redux-saga/effects';

import { WatchedPollingActionType } from './polling-watcher';
import { fetchResults } from '../services/fetch-results';
import { setPollingComplete, setPollingFailed } from '../polling.slices';
import { updateResults } from '../../results/results.slices';
import CONFIGS from '../../../app/configs';

// We could use kibana here, for instance, to track errors
// For now let's stick with these fake ones haha...
export const thisFunctionIsSuperDummyFakeLog = console.error;

export function* pollingWorker({ payload: params }: WatchedPollingActionType) {
  try {
    const resultsResponse = yield call(() => fetchResults(params));
    const { businesses } = resultsResponse;

    const firstTenResults = businesses.slice(0, CONFIGS.APP.MAX_RESULTS);

    yield put(setPollingComplete());
    yield put(updateResults(firstTenResults));
  } catch (err) {
    thisFunctionIsSuperDummyFakeLog(err);

    yield put(setPollingFailed());
  }
}
