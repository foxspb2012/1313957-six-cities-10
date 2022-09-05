import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import Loading from './loading';

it('Component Loader: should render correctly', () => {
  render(
    <BrowserRouter>
      <Loading/>
    </BrowserRouter>
  );

  expect(screen.getByText('Loading....')).toBeInTheDocument();
});
