import { createSlice } from '@reduxjs/toolkit';

import { ExpectedRequestPayload } from './middlewares/polling-watcher';

export enum PollingState { COMPLETE, FAILED, STARTED, STOPPED };

const initialState: { progress: PollingState } = {
  progress: PollingState.STOPPED,
};

const pollingSlice = createSlice({
  name: 'polling',
  initialState,
  reducers: {
    setPollingComplete(state) {
      state.progress = PollingState.COMPLETE;
    },
    setPollingFailed(state) {
      state.progress = PollingState.FAILED;
    },
    setPollingStarted(state, _: { payload: ExpectedRequestPayload }) {
      state.progress = PollingState.STARTED;
    },
    setPollingStopped(state) {
      state.progress = PollingState.STOPPED;
    },
  },
});

export const {
  setPollingComplete,
  setPollingFailed,
  setPollingStarted,
  setPollingStopped,
} = pollingSlice.actions;

export default pollingSlice.reducer;
