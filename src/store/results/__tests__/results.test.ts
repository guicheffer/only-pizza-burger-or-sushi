import configureStore from 'redux-mock-store'

import { getUpdatedResults } from '../results.selectors';
import { RootState } from '../../store';
import initialStateMock from '../../__mocks__/store.mocks';

const mockStore = configureStore();
const mockedStore = mockStore(initialStateMock);
const mockedState = mockedStore.getState() as RootState;

describe('getUpdatedResults', () => {
  it('it works as expected', () => {
    expect(getUpdatedResults(mockedState).length).toBeGreaterThanOrEqual(1);
  });
});
