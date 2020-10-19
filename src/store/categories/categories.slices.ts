import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import CONFIGS from '../../app/configs';

export type EmojiString = '🍕' | '🍔' | '🍣';
export type CategoryId = 'pizza' | 'burger' | 'sushi';

export type Category = {
  emojiSymbol: EmojiString;
  id: CategoryId;
  title: string;
  variations: string;
}

type CategoryState = {
  active: CategoryId;
  list: Category[];
}

const initialState: CategoryState = {
  active: CONFIGS.APP.DEFAULT_ACTIVE_CATEGORY as CategoryId,
  list: [
    {
      emojiSymbol: '🍕',
      id: 'pizza',
      title: CONFIGS.APP.TRANSLATIONS?.CATEGORY_PIZZA as string,
      variations: 'pizza,pizzas,calzone',
    },
    {
      emojiSymbol: '🍔',
      id: 'burger',
      title: CONFIGS.APP.TRANSLATIONS?.CATEGORY_BURGER as string,
      variations: 'burgers,bürger,bürgers,burguer,burguers',
    },
    {
      emojiSymbol: '🍣',
      id: 'sushi',
      title: CONFIGS.APP.TRANSLATIONS?.CATEGORY_SUSHI as string,
      variations: 'sushi,viet,vietnamese',
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
