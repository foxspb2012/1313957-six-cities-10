import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {HistoryRoute} from '../history-route/history-route';
import {AppRoute} from '../../const';
import Login from './login';
import {Route, Routes} from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';

const history = createMemoryHistory();
const mockStore = configureMockStore();

describe('Component: Login', () => {
  it('should render Login', () => {
    const store = mockStore({
      USER: {formLoginError: null},
    });

    history.push('/login');
    render(
      <Provider store={store}>
        <HistoryRoute history={history}>
          <Routes>
            <Route path={AppRoute.Login} element={<Login/>}/>
          </Routes>
        </HistoryRoute>
      </Provider>,
    );

    const email = screen.getByText(/E-mail/i);
    const password = screen.getByText(/Password/i);

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });
});
