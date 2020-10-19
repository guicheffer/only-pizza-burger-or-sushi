import { createSelector } from 'reselect';

import { Category } from './categories.slices';
import { RootState } from '../store';

export const getActiveCategory = createSelector(
  (state: RootState) => state,
  (state) => {
    const categoriesList = state.categories.list;
    return categoriesList.find(category => category.id === state.categories.active) as Category;
  },
);

export const getCategoriesList = createSelector(
  (state: RootState) => state,
  (state) => state.categories.list,
);
