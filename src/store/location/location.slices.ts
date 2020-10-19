import { createSlice, /*PayloadAction*/ } from '@reduxjs/toolkit';

import CONFIGS from '../../app/configs';

type LocationId = string;

export type Location = {
  id: LocationId;
  title: string;
}

type LocationState = {
  active: Location;
}

const initialState: LocationState = {
  active: {
    id: 'berlin',
    title: CONFIGS.APP.TRANSLATIONS?.DEFAULT_LOCATION as string, // YES, it's pretty hack!
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
