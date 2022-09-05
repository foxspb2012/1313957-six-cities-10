import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {AuthorizationStatus} from '../../const';
import {hotels} from '../../mocks/hotels';
import {HistoryRoute} from '../history-route/history-route';
import {render, screen} from '@testing-library/react';
import thunk from 'redux-thunk';
import {comments} from '../../mocks/comments';
import Offer from './offer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockHotels = hotels.slice(-1);

const store = mockStore({
  DATA: {
    isDataLoaded: false,
    hotelsByCity: mockHotels,
    favoriteHotels: mockHotels,
    hotel: mockHotels[0],
    comments: comments,
    nearHotels: mockHotels
  },
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  OFFERS: {},
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRoute history={history}>
      <Offer hotel={mockHotels[0]} nearHotels={[]} comments={[]}/>
    </HistoryRoute>
  </Provider>
);

describe('Component: Room', () => {
  it('should render correctly', async () => {

    history.push('/offer/1');

    render(fakeApp);


    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });
});
