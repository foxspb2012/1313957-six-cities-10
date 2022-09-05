import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Route, Routes} from 'react-router-dom';
import {AuthorizationStatus, Cities} from '../../const';
import {hotels} from '../../mocks/hotels';
import {HistoryRoute} from '../history-route/history-route';
import FavoriteItem from './favorite-item';

const history = createMemoryHistory();
const makeStore = configureMockStore();

describe('Component: Favorite list', () => {
  it('rendered Favorites', () => {
    const store = makeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NoAuth,
      }
    });
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <Routes>
            <Route path='/' element={<FavoriteItem favorites={hotels} city={Cities[0]}/>}/>
          </Routes>
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByText(Cities[0])).toBeInTheDocument();
  });
});
