import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import React from 'react';

import { store } from '../../store/store';
import OnlyPizzaBurgerOrSushiApp from './MainApp';

describe('MainApp', () => {
  it('renders main OPBOS app container', () => {
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <OnlyPizzaBurgerOrSushiApp />
      </Provider>
    );

    expect(getByTestId('main-app')).toBeTruthy();
    expect(getByText(/Choose your category/i)).toBeInTheDocument();
  });
});
