import {Link} from 'react-router-dom';
import classNames from 'classnames';

type CitiesListProps = {
  cityItem: string;
  currentCity: string;
  onClick: (city: string) => void;
}

function CityItem({cityItem, currentCity, onClick}: CitiesListProps): JSX.Element {

  const linkClass = classNames('locations__item-link', 'tabs__item', {'tabs__item--active': currentCity === cityItem});

  return (
    <li className="locations__item" key={cityItem} onClick={() => onClick(cityItem)}>
      <Link className={linkClass} to={`?tab=${cityItem}`}>
        <span>{cityItem}</span>
      </Link>
    </li>
  );
}

export default CityItem;
