import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Address = {
  fullAddress: string;
}

export type Result = {
  name: string;
  photo: string;
  style: string;
  address?: Address;
  howExpensive?: number;
}

type ResultsListState = {
  list: Result[];
}

const initialState: ResultsListState = {
  list: [
    {
      name: 'Stadtklause',
      photo: 'https://s3-media0.fl.yelpcdn.com/bphoto/6V3_xCFK2xEpTktQaumnpQ/ls.jpg',
      style: 'German',
    },
    {
      name: 'elephant',
      photo: 'https://s3-media0.fl.yelpcdn.com/bphoto/D6-sJ4_5N0XzQEx9tSgxVA/ls.jpg',
      style: 'German',
    },
    {
      name: 'elephant',
      photo: 'https://s3-media0.fl.yelpcdn.com/bphoto/D6-sJ4_5N0XzQEx9tSgxVA/ls.jpg',
      style: 'German',
    },
    {
      name: 'elephant',
      photo: 'https://s3-media0.fl.yelpcdn.com/bphoto/D6-sJ4_5N0XzQEx9tSgxVA/ls.jpg',
      style: 'German',
    },
    {
      name: 'elephant',
      photo: 'https://s3-media0.fl.yelpcdn.com/bphoto/D6-sJ4_5N0XzQEx9tSgxVA/ls.jpg',
      style: 'German',
    },
    {
      name: 'elephant',
      photo: 'https://s3-media0.fl.yelpcdn.com/bphoto/D6-sJ4_5N0XzQEx9tSgxVA/ls.jpg',
      style: 'German',
    },
    {
      name: 'elephant',
      photo: 'https://s3-media0.fl.yelpcdn.com/bphoto/D6-sJ4_5N0XzQEx9tSgxVA/ls.jpg',
      style: 'German',
    },
    {
      name: 'elephant',
      photo: 'https://s3-media0.fl.yelpcdn.com/bphoto/D6-sJ4_5N0XzQEx9tSgxVA/ls.jpg',
      style: 'German',
    },
    {
      name: 'elephant',
      photo: 'https://s3-media0.fl.yelpcdn.com/bphoto/D6-sJ4_5N0XzQEx9tSgxVA/ls.jpg',
      style: 'German',
    },
    {
      name: 'elephant',
      photo: 'https://s3-media0.fl.yelpcdn.com/bphoto/D6-sJ4_5N0XzQEx9tSgxVA/ls.jpg',
      style: 'German',
    },
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
