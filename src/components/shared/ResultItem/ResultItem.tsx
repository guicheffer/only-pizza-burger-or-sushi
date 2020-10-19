import React, { FunctionComponent, ReactElement } from 'react';

import { Result } from '../../../store/results/results.slices';

import styles from './ResultItem.module.scss';

interface ResultProps {
  result: Result;
}

export const ResultItem: FunctionComponent<ResultProps> = ({ children, ...props }): ReactElement => {
  const { result } = props;

  return (
    <a
      className={styles.result}
      href='#whatever-yelp-url'
      onClick={e => e.preventDefault()}
      title={`Go to ${result.name}`}
    >
      {/* TODO: In a real world app, we could use srcset for different sizes to improve performance! */}
      <figure className={styles.photo}>
        <img src={result.photo} alt={result.name} title={result.name} />
      </figure>

      <article className={styles.resultInfo}>
        <h4 className={styles.resultTitle}>{result.name}</h4>

        <p className={styles.resultDetails}>
          <span>insert more info here</span>
        </p>
      </article>
    </a>
  );
}
