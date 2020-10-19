import { useSelector } from 'react-redux';
import React, { FunctionComponent, ReactElement, useMemo } from 'react';

import { getActiveLocation } from '../../store/location/location.selectors';
import { getUpdatedResults } from '../../store/results/results.selectors';
import { LocationContext } from '../LocationContext/LocationContext';
import { PickCategory } from '../PickCategory/PickCategory';
import { ResultsList } from '../ResultsList/ResultsList';
import { RootState } from '../../store/store';

const makeGetActiveLocation = () => getActiveLocation;

export const MainApp: FunctionComponent = ({ children, ...props }): ReactElement => {
  const activeLocationState = useMemo(makeGetActiveLocation, []);
  const activeLocation = useSelector((state: RootState) => activeLocationState(state));

  const updatedResults = useSelector(getUpdatedResults);

  return (
    <div className='OnlyPizzaBurgerOrSushiApp' data-testid='main-app'>
      <div className='container'>
        <LocationContext name={activeLocation.title} />

        <PickCategory />
        <hr className='fade-rule'/>

        <ResultsList results={updatedResults}/>

        <hr className='fade-scrolling'/>
      </div>
    </div>
  );
};

export default MainApp;
