import React, { FunctionComponent, ReactElement } from 'react';

import { Result } from '../../store/results/results.slices';
import { ResultItem } from '../shared/ResultItem/ResultItem';

import styles from './ResultsList.module.scss';

interface ResultsListProps {
  isFailed: boolean;
  isLoading: boolean;
  results: Result[];
}

export const ResultsList: FunctionComponent<ResultsListProps> = ({ children, ...props }): ReactElement => {
  const { isFailed, isLoading, results = [] } = props;

  const { PUBLIC_URL } = process.env;
  const shouldShowResults = !isFailed && !isLoading && !!results.length;

  return (
    <section className={`row ${styles.results}`}>
      {!shouldShowResults && (
        <img data-testid='loading-image' className={styles.loading} src={`${PUBLIC_URL}/loading.gif`} alt='Loading...'/>
      )}

      { shouldShowResults && (
        <>
          <ol className={styles.resultsList}>
            {results.map(result => (<li key={result.id}><ResultItem result={result}/></li>))}
          </ol>
        </>
      )}
    </section>
  );
}
