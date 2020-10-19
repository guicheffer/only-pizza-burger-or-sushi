import React, { FunctionComponent, ReactElement } from 'react';
import CONFIGS from '../../../app/configs';

import { Result } from '../../../store/results/results.slices';

import styles from './ResultItem.module.scss';

interface ResultProps {
  result: Result;
}

/**
 *
 * I know, I could have named it in a better way;
 * I don't think it's a good one for now, we should pick something related to `business` or similars...
 */
export const ResultItem: FunctionComponent<ResultProps> = ({ children, ...props }): ReactElement => {
  const { result } = props;

  return (
    <a
      className={styles.result}
      href='#whatever-yelp-url'
      onClick={e => e.preventDefault()}
      title={`Go to ${result.name}`}
    >
      {/* TODO: Ideally, in a real world app, we could use srcset for different sizes to improve performance! */}
      <figure className={styles.photo}>
        <img src={result.image_url} alt={result.name} title={result.name} />
      </figure>

      <article className={styles.resultInfo}>
        <h4 className={styles.resultTitle}>{result.name}</h4>

        <p className={styles.resultDetails}>
          <span className={styles.resultDetailsItem}>{result.price || '?'}</span>
          <span className={styles.resultDetailsItem}>
            <span role='img' aria-label={`Rating: ${result.rating}`} className={styles.resultDetailsIcon}>⭐️</span> {result.rating}
          </span>
        </p>

        <p className={styles.isOpenIcon}>
          <span role='img' aria-label={result.is_closed ? CONFIGS.APP.TRANSLATIONS?.CLOSED_TEXT : CONFIGS.APP.TRANSLATIONS?.OPEN_TEXT}>{result.is_closed ? '🔴' : '🟢'}</span>
        </p>
      </article>
    </a>
  );
}
