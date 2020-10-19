import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import CONFIGS from '../../app/configs';

export type EmojiString = '🍕' | '🍔' | '🍣';
export type CategoryId = 'pizza' | 'burger' | 'sushi';

export type Category = {
  emojiSymbol: EmojiString;
  id: CategoryId;
  title: string;
}

type CategoryState = {
  active: CategoryId;
  list: Category[];
}

const initialState: CategoryState = {
  active: 'burger',
  list: [
    {
      emojiSymbol: '🍕',
      id: 'pizza',
      title: CONFIGS.APP.TRANSLATIONS?.CATEGORY_PIZZA as string,
    },
    {
      emojiSymbol: '🍔',
      id: 'burger',
      title: CONFIGS.APP.TRANSLATIONS?.CATEGORY_BURGER as string,
    },
    {
      emojiSymbol: '🍣',
      id: 'sushi',
      title: CONFIGS.APP.TRANSLATIONS?.CATEGORY_SUSHI as string,
    },
  ]
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setActiveCategory: (state, { payload }: PayloadAction<CategoryId>) => {
      state.active = payload;
    },
  },
});


const { setActiveCategory } = categoriesSlice.actions;
export { setActiveCategory };

export default categoriesSlice.reducer;
