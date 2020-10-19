import { createSelector } from 'reselect';

import { RootState } from '../store';

export const getActiveLocation = createSelector(
  (state: RootState) => state,
  (state) => state.location.active,
);

