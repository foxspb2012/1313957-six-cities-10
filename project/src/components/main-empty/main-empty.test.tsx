import {render, screen} from '@testing-library/react';
import {Cities} from '../../const';
import MainEmpty from './main-empty';

describe('CitiesEmpty test', () => {

  it('should render "CitiesEmpty" with name prop', async () => {
    render(<MainEmpty currentCity={Cities[0]}/>);
    expect(screen.getByText(`We could not find any property available at the moment in ${Cities[0]}`)).toBeInTheDocument();
  });
});
