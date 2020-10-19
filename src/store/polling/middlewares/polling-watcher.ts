import { call, take, race } from 'redux-saga/effects';

import {
  setPollingStarted,
  setPollingStopped,
} from '../polling.slices';
import { pollingWorker } from './polling-worker';

export type WatchedPollingActionType = {
  type: typeof setPollingStarted.type;
  payload: string; // TODO: Check payload string
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
