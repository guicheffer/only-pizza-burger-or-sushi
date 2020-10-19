import { useDispatch, useSelector } from 'react-redux';
import React, { FunctionComponent, ReactElement, useCallback, useMemo } from 'react';

import { CategoryId, setActiveCategory } from '../../store/categories/categories.slices';
import { getActiveCategory, getCategoriesList } from '../../store/categories/categories.selectors';
import { RootState } from '../../store/store';
import CONFIGS from '../../app/configs';
import styles from './PickCategory.module.scss';

interface PickCategoryProps {}

const makeGetCategoriesList = () => getCategoriesList;

/**
 *
 * This is also dumb but it will require access to state
 * in order to display the current selected category;
 */

export const PickCategory: FunctionComponent<PickCategoryProps> = ({ children, ...props }): ReactElement => {
  const dispatch = useDispatch();

  const activeCategory = useSelector(getActiveCategory);

  const categoriesListState = useMemo(makeGetCategoriesList, []);
  const categoriesList = useSelector((state: RootState) => categoriesListState(state));

  const handleCategorySelection = useCallback((event: React.SyntheticEvent<HTMLInputElement>) => {
    const selectedCategory = event.currentTarget.value as CategoryId;
    dispatch(setActiveCategory(selectedCategory));
  }, [dispatch]);

  return (
    <section className={`row ${styles.categoryPickAdvice}`}>
      <p>
        {CONFIGS.APP.TRANSLATIONS?.CHOOSE_CATEGORY}:
      </p>

      <nav role='navigation'>
        <ul className={styles.nav}>
          {categoriesList.length && categoriesList.map((category) => (
            <li key={category.id}>
              <input
                type='radio'
                id={category.id}
                value={category.id}
                checked={category.id === activeCategory.id}
                name='unique-category'
                onChange={handleCategorySelection}
                data-testid={`category-${category.id}`}
              />

              <label className={styles.itemLogo} htmlFor={category.id} title={category.title}>
                <span role='img' aria-label={category.title}>{category.emojiSymbol}</span>
              </label>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
