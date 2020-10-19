import React, { FunctionComponent, ReactElement } from 'react';

import CONFIGS from '../../app/configs';
import styles from './LocationContext.module.scss';

interface LocationContextProps {
  name: string;
}

/**
 *
 * Self contained component (dumb one)
 *
 */

export const LocationContext: FunctionComponent<LocationContextProps> = ({ children, ...props }): ReactElement => {
  // TODO: Remove this, (in a prod version), since in a real world app we would not have a "default location"
  const { name = CONFIGS.APP.TRANSLATIONS?.DEFAULT_LOCATION } = props;

  return (
    <section className={`row ${styles.location}`}>
      <h2 className={styles.title} title={CONFIGS.APP.TRANSLATIONS?.CLICK_TO_CHANGE_COPY}>
        <span role="img" aria-label='Location Point'>📍</span> {CONFIGS.APP.TRANSLATIONS?.ADVICE_SEARCHING} <strong data-testid='change-location' className={styles.locationKey}>{name}</strong>!
      </h2>
    </section>
  );
}
