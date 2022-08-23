import {Link} from 'react-router-dom';
import {changeCity, getHotels} from '../../store/action';
import classNames from 'classnames';
import {store} from '../../store';

type CitiesListProps = {
  cityItem: string;
  currentCity: string;
}

function CityItem({cityItem, currentCity}: CitiesListProps): JSX.Element {

  const onCityClick = (city: string) => {
    store.dispatch(changeCity(city));
    store.dispatch(getHotels());
  };

  const linkClass = classNames('locations__item-link', 'tabs__item', {'tabs__item--active': currentCity === cityItem});

  return (
    <li className="locations__item" key={cityItem} onClick={() => onCityClick(cityItem)}>
      <Link className={linkClass} to={`?tab=${cityItem}`}>
        <span>{cityItem}</span>
      </Link>
    </li>
  );
}

export default CityItem;
