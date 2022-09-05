import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {HistoryRoute} from '../history-route/history-route';
import PlacesList from './places-list';
import {NameSpace, AuthorizationStatus, CardType} from '../../const';
import {hotels} from '../../mocks/hotels';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const fakeStore = mockStore({
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.NoAuth
  }
});

const hotel = hotels.slice(0,1);

describe('Component: PlaceList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={fakeStore}>
        <HistoryRoute history={history}>
          <PlacesList hotels={hotel} type={CardType.CITIES}/>
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByText(new RegExp(hotel[0].title, 'i'))).toBeInTheDocument();
  });
});
