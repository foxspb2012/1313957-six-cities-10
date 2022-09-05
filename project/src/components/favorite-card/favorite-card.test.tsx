import {render, screen} from '@testing-library/react';
import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {HistoryRoute} from '../history-route/history-route';
import FavoriteCard from './favorite-card';
import {NameSpace, AuthorizationStatus, AppRoute} from '../../const';
import {hotels} from '../../mocks/hotels';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const fakeStore = mockStore({
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.NoAuth,
  }
});

describe('Component: FavoriteCard', () => {
  it('should render correctly', () => {
    render(
      <Provider store={fakeStore}>
        <HistoryRoute history={history}>
          <FavoriteCard hotel={hotels[0]} />
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByText(new RegExp(hotels[0].title, 'i'))).toBeInTheDocument();
  });

  it('should redirect to offer url when user clicked to link', async () => {
    render(
      <Provider store={fakeStore}>
        <HistoryRoute history={history}>
          <Routes>
            <Route
              path={`${AppRoute.Room}/${hotels[0].id}`}
              element={<h1>This is offer page</h1>}
            />
            <Route
              path='*'
              element={<FavoriteCard hotel={hotels[0]} />}
            />
          </Routes>
        </HistoryRoute>
      </Provider>
    );

    expect(screen.queryByText(/This is offer page/i)).not.toBeInTheDocument();

  });
});
