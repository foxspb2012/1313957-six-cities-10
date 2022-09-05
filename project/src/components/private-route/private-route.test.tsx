import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {AppRoute, AuthorizationStatus} from '../../const';
import {hotels} from '../../mocks/hotels';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {HistoryRoute} from '../history-route/history-route';
import {Route, Routes} from 'react-router-dom';
import PrivateRoute from './private-route';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: PrivateRouter', () => {
  beforeEach(() => {
    history.push('/private');
  });

  it('should render component for public route, when user not authorized', () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NoAuth},
      MAIN: {hotels: hotels},
      HOTEL: {hotel: hotels[0]},
      FAVORITE: {favorites: []},
    });

    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <Routes>
            <Route
              path={AppRoute.Login}
              element={<h1>Public Route</h1>}
            />
            <Route
              path='/private'
              element={
                <PrivateRoute>
                  <h1>Private Route</h1>
                </PrivateRoute>
              }
            />
          </Routes>
        </HistoryRoute>
      </Provider>,
    );

    expect(screen.getByText(/Public Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private Route/i)).not.toBeInTheDocument();
  });

  it('should render component for private route, when user authorized', () => {
    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.Auth},
      MAIN: {hotels: hotels},
      HOTEL: {hotel: hotels[0]},
      FAVORITE: {favorites: []},
    });

    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <Routes>
            <Route
              path={AppRoute.Login}
              element={<h1>Public Route</h1>}
            />
            <Route
              path='/private'
              element={
                <PrivateRoute>
                  <h1>Private Route</h1>
                </PrivateRoute>
              }
            />
          </Routes>
        </HistoryRoute>
      </Provider>,
    );

    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public Route/i)).not.toBeInTheDocument();
  });
});
