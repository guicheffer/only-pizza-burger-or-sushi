import React, { FunctionComponent, ReactElement } from 'react';

import { Result } from '../../store/results/results.slices';
import { ResultItem } from '../shared/ResultItem/ResultItem';

import styles from './ResultsList.module.scss';

interface ResultsListProps {
  results: Result[];
}

export const ResultsList: FunctionComponent<ResultsListProps> = ({ children, ...props }): ReactElement => {
  const { results = [] } = props;

  const { PUBLIC_URL } = process.env;

  return (
    <section className={`row ${styles.results}`}>
      {!results.length && (
        <img className={styles.loading} src={`${PUBLIC_URL}/loading.gif`} alt='Loading...'/>
      )}

      {
        !!results.length && (
          <>
            <ol className={styles.resultsList}>
              {results.map(result => (<li><ResultItem result={result}/></li>))}
            </ol>
          </>
        )
      }
    </section>
  );
}
