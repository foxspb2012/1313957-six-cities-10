import type {State} from '../types/state';
import {AnyAction} from 'redux';
import {redirect} from './redirect';
import thunk from 'redux-thunk';
import {redirectToRoute} from './action';
import {AppRoute} from '../const';
import {configureMockStore} from '@jedmao/redux-mock-store';

const fakeHistory = {
  location: {pathname: ''},
  push(path: string) {
    this.location.pathname = path;
  },
};

jest.mock('../browser-history', () => fakeHistory);

const middlewares = [redirect, thunk];
const mockStore = configureMockStore<State, AnyAction>(middlewares);
const store = mockStore();

describe('Middleware: redirect', () => {
  beforeEach(() => {
    fakeHistory.push('');
  });

  it('should be redirect to /login', () => {
    store.dispatch(redirectToRoute(AppRoute.Login));
    expect(store.getActions()).toEqual([
      redirectToRoute(AppRoute.Login),
    ]);
  });

  it('should not to be redirect /favorites because bad action', () => {
    store.dispatch({type: 'UNKNOWN_ACTION', payload: AppRoute.Favorites});
    expect(fakeHistory.location.pathname).not.toBe(AppRoute.Favorites);
  });
});
