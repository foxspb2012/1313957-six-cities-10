import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {HistoryRoute} from '../history-route/history-route';
import Header from './header';
import {hotels} from '../../mocks/hotels';
import {user} from '../../mocks/user';

const history = createMemoryHistory();
const makeStore = configureMockStore();

describe('Component: user-name', () => {
  it('User Auth', () => {
    const store = makeStore({
      DATA: {
        hotels: [hotels],
      },
      USER: {
        user: user,
        authorizationStatus: AuthorizationStatus.Auth
      },
      FAVORITE: {
        favorite: [],
      }
    });
    store.dispatch = jest.fn();
    const navVisible = true;

    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <Routes>
            <Route path={AppRoute.Main} element={<Header isNavVisible={navVisible}/>}/>
          </Routes>
        </HistoryRoute>,
      </Provider>
    );

    expect(screen.getByText(`${user.email}`)).toBeInTheDocument();
  });

  it('User noAuth', () => {
    const store = makeStore({
      DATA: {
        hotels: [hotels],
      },
      USER: {
        user: user,
        authorizationStatus: AuthorizationStatus.NoAuth
      },
      FAVORITE: {
        favorite: [],
      }
    });
    store.dispatch = jest.fn();
    const navVisible = true;

    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <Routes>
            <Route path={AppRoute.Main} element={<Header isNavVisible={navVisible}/>}/>
          </Routes>
        </HistoryRoute>,
      </Provider>
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

});
