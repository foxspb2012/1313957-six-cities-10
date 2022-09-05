import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import {Cities} from '../../const';
import {hotels} from '../../mocks/hotels';
import {HistoryRoute} from '../history-route/history-route';
import Map from './map';

const makeStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: map', () => {
  it('Map Rendered', () => {
    history.push('/map');
    const store = makeStore({
      FILTER: {
        city: Cities[0],
      }
    });
    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <Routes>
            <Route
              path='/map'
              element={<Map hotels={hotels}/>}
            />
          </Routes>
        </HistoryRoute>
      </Provider>,
    );

    expect(screen.getByText('Leaflet')).toBeInTheDocument();
  });
});
