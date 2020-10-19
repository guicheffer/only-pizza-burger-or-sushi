import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

import { Result, updateResults } from '../../../store/results/results.slices';
import { store } from '../../../store/store';
import OnlyPizzaBurgerOrSushiApp from '../MainApp';
import storeMocks from '../../../store/__mocks__/store.mocks';

const state = store.getState();

const getTestComponent = () => (
  <Provider store={store}>
    <OnlyPizzaBurgerOrSushiApp />
  </Provider>
);

describe('MainApp', () => {
  it('renders main OPBOS app container', () => {
    const { getByTestId, getByText } = render(getTestComponent());

    expect(getByTestId('main-app')).toBeTruthy();
    expect(getByText(/Choose your category/i)).toBeInTheDocument();
  });
});

describe('ITest the app "OnlyPizzaBurgerOrSushiApp"', () => {
  it('users can change the location', () => {
    const { getAllByTestId } = render(getTestComponent());

    expect(getAllByTestId('change-location')).toBeTruthy();
  });

  it('contains 3 categories for users to choose', () => {
    const { getAllByTestId } = render(getTestComponent());

    expect(getAllByTestId('category-pizza').length).toBe(1);
    expect(getAllByTestId('category-burger').length).toBe(1);
    expect(getAllByTestId('category-sushi').length).toBe(1);
  });

  it('fetches the correct category when "PickCategory" component is triggered', async () => {
    const { getAllByTestId, getByTestId } = render(getTestComponent());

    expect(getAllByTestId('loading-image').length).toBe(1);

    const pizzaElement = getByTestId('category-pizza');
    userEvent.click(pizzaElement);

    // @ts-ignore
    const updateWithResults = storeMocks.results.list[0] as Result;
    updateResults([{ ...updateWithResults }]);

    expect(getAllByTestId('loading-image').length).toBe(1);
  });
});
