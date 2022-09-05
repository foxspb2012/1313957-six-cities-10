import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {Route, Routes} from 'react-router-dom';
import {APIRoute, AuthorizationStatus, CardType} from '../../const';
import {hotels} from '../../mocks/hotels';
import {HistoryRoute} from '../history-route/history-route';
import PlaceCard from './place-card';

const makeStore = configureMockStore();
const history = createMemoryHistory();
const hotel = hotels[0];

describe('Component: Place card', () => {
  it('Place card', () => {
    history.push(APIRoute.Hotels);
    const store = makeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth
      }
    });

    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <Routes>
            <Route path={APIRoute.Hotels}
              element={<PlaceCard hotel={hotel} cardType={CardType.CITIES}/>}
            >
            </Route>
          </Routes>
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByText(hotel.title)).toBeInTheDocument();
  });
});
