import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {HistoryRoute} from '../history-route/history-route';
import CitiesList from './cities-list';
import {NameSpace, DEFAULT_CITY, Cities} from '../../const';

const history = createMemoryHistory();
const store = configureMockStore();

const fakeStore = store({
  [NameSpace.Data]: {
    currentCity: DEFAULT_CITY
  }
});

describe('Component: CityList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={fakeStore}>
        <HistoryRoute history={history}>
          <CitiesList currentCity={DEFAULT_CITY} cities={Cities}/>
        </HistoryRoute>
      </Provider>
    );

    expect(screen.getByText(new RegExp(Cities[0], 'i'))).toBeInTheDocument();
  });
});
