import FavoritesEmpty from './favorites-empty';
import {render, screen} from '@testing-library/react';

describe('Component: FavoritesEmpty', () => {
  it('should render correctly', () => {
    render(<FavoritesEmpty/>);

    expect(screen.getByText(/Nothing yet saved/i)).toBeInTheDocument();
  });
});
