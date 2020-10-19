import { createSelector } from 'reselect';

import { RootState } from '../store';

export const getUpdatedResults = createSelector(
  (state: RootState) => state,
  (state) => state.results.list,
);
