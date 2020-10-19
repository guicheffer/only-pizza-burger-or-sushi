import { call, take, race } from 'redux-saga/effects';

import {
  setPollingStarted,
  setPollingStopped,
} from '../polling.slices';
import { Location } from '../../location/location.slices';
import { pollingWorker } from './polling-worker';

type Term = 'restaurants';

export interface ExpectedRequestPayload {
  location: Location;
  categories: string;
  readonly term: Term;
}

export type WatchedPollingActionType = {
  type: typeof setPollingStarted.type;
  payload: ExpectedRequestPayload;
};

export function* pollingWatcher() {
  while (true) {
    const action: WatchedPollingActionType = yield take(setPollingStarted.type);

    yield race([
      call(() => pollingWorker(action)),
      take(setPollingStopped.type),
    ]);
  }
}
