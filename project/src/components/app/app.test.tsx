import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import {hotels} from '../../mocks/hotels';
import {HistoryRoute} from '../history-route/history-route';
import App from './app';
import {render, screen} from '@testing-library/react';
import thunk from 'redux-thunk';
import {comments} from '../../mocks/comments';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockOffers = hotels.slice(-1);

const store = mockStore({
  DATA: {
    isDataLoaded: false,
    hotelsByCity: mockOffers,
    favoriteHotels: mockOffers,
    hotel: mockOffers[0],
    comments: comments,
    nearOffers: mockOffers
  },
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  OFFERS: {},
});

const storeForLoginPage = mockStore({
  DATA: {isDataLoaded: false, offersByCity: mockOffers, favoriteOffers: mockOffers, offer: mockOffers[0]},
  USER: {authorizationStatus: AuthorizationStatus.NoAuth},
  OFFERS: {},
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRoute history={history}>
      <App/>
    </HistoryRoute>
  </Provider>
);

describe('Application Routing', () => {
  it('should render main page when user navigate to "/"', () => {
    history.push(AppRoute.Main);

    render(fakeApp);

    expect(screen.getByText(/places to stay in/i)).toBeInTheDocument();
  });

  it('should render login page when user navigate to "/login"', () => {
    history.push(AppRoute.Login);

    render(
      <Provider store={storeForLoginPage}>
        <HistoryRoute history={history}>
          <App/>
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });

  it('should render favorites page when user navigate to "/favorites"', () => {
    history.push(AppRoute.Favorites);

    render(fakeApp);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });

  it('should render room page when user navigate to "/offer"', () => {
    history.push('/offer/1');

    render(fakeApp);

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
  });

  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('Page not found')).toBeInTheDocument();
  });
});
