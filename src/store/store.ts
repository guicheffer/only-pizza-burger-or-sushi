import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';

import categoriesSlice from './categories/categories.slices';
import locationSlice from './location/location.slices';
import resultsSlice from './results/results.slices';

import pollingSlices from './polling/polling.slices';

import { sagaMiddleware, pollingWatcher } from './polling/middlewares/polling-sagas';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    location: locationSlice,
    results: resultsSlice,

    // This will be essentially for handling UI errors around the app
    polling: pollingSlices,
  },
  middleware: [sagaMiddleware, ...getDefaultMiddleware()],
});

// @ts-ignore as it does not take saga types
// (I preferred to skip it for now to be a bit faster and agile)
sagaMiddleware.run(pollingWatcher);

// RootState giving its return type (in order to be accessed across the application)
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
