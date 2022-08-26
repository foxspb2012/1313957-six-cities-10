import type {Hotel} from '../../types/hotel';
import FavoritesPlaces from '../favorites-places/favorites-places';

type FavoriteItemProps = {
  city: string;
  favorites: Hotel[];
}

function FavoriteItem({favorites, city}: FavoriteItemProps): JSX.Element {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <FavoritesPlaces favorites={favorites} city={city}/>
    </li>
  );
}

export default FavoriteItem;
