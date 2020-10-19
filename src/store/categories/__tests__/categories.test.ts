import configureStore from 'redux-mock-store'

import { getActiveCategory, getCategoriesList } from '../categories.selectors';
import { RootState } from '../../store';
import initialStateMock from '../../__mocks__/store.mocks';

const mockStore = configureStore();
const mockedStore = mockStore(initialStateMock);
const mockedState = mockedStore.getState() as RootState;

describe('getActiveCategory', () => {
  it('it works as expected', () => {
    expect(getActiveCategory(mockedState).emojiSymbol).toEqual('🍔');
    expect(getActiveCategory(mockedState).variations).toEqual('burgers,bürger,bürgers,burguer,burguers');
  });
});

describe('getCategoriesList', () => {
  it('it works as expected', () => {
    expect(getCategoriesList(mockedState)).toEqual(mockedState.categories.list);
  });
});
