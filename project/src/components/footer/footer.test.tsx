import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {HistoryRoute} from '../history-route/history-route';
import Footer from './footer';

const history = createMemoryHistory();

describe('Component: Footer', () => {
  it('should render correctly', () => {
    render(
      <HistoryRoute history={history}>
        <Footer/>
      </HistoryRoute>
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByAltText('6 cities logo')).toBeInTheDocument();
  });
});
