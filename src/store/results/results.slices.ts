import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Location = {
  address1?: string;
}

export type Result = {
  id: string;
  name: string;
  image_url: string;
  style: string;
  location: Location;
  price: string;
  is_closed: Boolean;
  rating: number;
  howExpensive?: number;
}

type ResultsListState = {
  list: Result[];
}

const initialState: ResultsListState = {
  list: [
    // {
    //   name: 'Stadtklause',
    //   image_url: 'https://s3-media0.fl.yelpcdn.com/bphoto/6V3_xCFK2xEpTktQaumnpQ/ls.jpg',
    // },
    // {
    //   name: 'elephant',
    //   image_url: 'https://s3-media0.fl.yelpcdn.com/bphoto/D6-sJ4_5N0XzQEx9tSgxVA/ls.jpg',
    // },
  ],
};

export const resultsSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    updateResults: (state, { payload: results }: PayloadAction<Result[]>) => {
      state.list = results;
    },
  },
});


const { updateResults } = resultsSlice.actions;
export { updateResults };

export default resultsSlice.reducer;
