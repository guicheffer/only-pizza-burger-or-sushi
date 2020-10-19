import { useDispatch, useSelector } from 'react-redux';
import React, { FunctionComponent, ReactElement, useCallback, useEffect, useMemo } from 'react';

import { CategoryId, setActiveCategory } from '../../store/categories/categories.slices';
import { ExpectedRequestPayload } from '../../store/polling/middlewares/polling-watcher';
import { getActiveCategory, getCategoriesList } from '../../store/categories/categories.selectors';
import { getActiveLocation } from '../../store/location/location.selectors';
import { RootState } from '../../store/store';
import { setPollingStarted } from '../../store/polling/polling.slices';
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
  const activeLocation = useSelector(getActiveLocation);

  const categoriesListState = useMemo(makeGetCategoriesList, []);
  const categoriesList = useSelector((state: RootState) => categoriesListState(state));

  /**
   *
   * Ideally, this would come by default from our UI application and APIs.
   *
   */
  /* BEGIN OF HACKY/HARD-CODED PLACE */
  const commonRequestPayload = useMemo(() => ({
    term: CONFIGS.APP.TERM,
    location: activeLocation,
    categories: activeCategory.variations,
  } as ExpectedRequestPayload), [activeCategory, activeLocation]);
  /* END OF HACKY/HARD-CODED PLACE */

  // This will start polling on the first rendering
  // **ps**. this will also ignore eslint since it takes `dispatch` as modifiers only
  // eslint-disable-next-line
  useEffect(() => { dispatch(setPollingStarted(commonRequestPayload)) }, [dispatch]);

  const handleCategorySelection = useCallback((event: React.SyntheticEvent<HTMLInputElement>) => {
    const selectedCategoryId = event.currentTarget.value as CategoryId;
    const selectedCategories = event.currentTarget.dataset.categories as string;

    dispatch(setActiveCategory(selectedCategoryId));
    dispatch(setPollingStarted({ ...commonRequestPayload, categories: selectedCategories }));
  }, [commonRequestPayload, dispatch]);

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
                data-categories={category.variations}
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
