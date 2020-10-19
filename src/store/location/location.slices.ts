import { createSlice, /*PayloadAction*/ } from '@reduxjs/toolkit';

import CONFIGS from '../../app/configs';

type LocationId = string;

interface LocationCoordinates {
  readonly latitude: number;
  readonly longitude: number;
}

export type Location = {
  id: LocationId;
  title: string;
  coordinates: LocationCoordinates;
}

type LocationState = {
  active: Location;
}

const initialState: LocationState = {
  // YES, this is pretty hack!
  active: {
    id: 'berlin',
    title: CONFIGS.APP.TRANSLATIONS?.DEFAULT_LOCATION as string,
    coordinates: {
      latitude: 52.5200,
      longitude: 13.4050,
    },
  },
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    /* I gave up updating the location city / neighbor – would be a lot of work for four hours */

    // setActiveLocation: (state, { payload: newLocation }: PayloadAction<Location>) => {
    //   state.active = newLocation;
    // },
  },
});


// const { setActiveCategory } = locationSlice.actions;
// export { setActiveCategory };

export default locationSlice.reducer;
