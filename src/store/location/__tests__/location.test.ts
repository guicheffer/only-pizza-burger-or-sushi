import configureStore from 'redux-mock-store'

import { getActiveLocation } from '../location.selectors';
import { RootState } from '../../store';
import initialStateMock from '../../__mocks__/store.mocks';

const mockStore = configureStore();
const mockedStore = mockStore(initialStateMock);
const mockedState = mockedStore.getState() as RootState;

describe('getActiveLocation', () => {
  it('it works as expected', () => {
    // Since it's Berlin related (only for now)
    expect(getActiveLocation(mockedState).title).toEqual('Berlin, Germany');
  });
});
