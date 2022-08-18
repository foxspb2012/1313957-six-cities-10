import type {HotelType} from '../../types/hotel';
import FavoriteCard from '../favorite-card/favorite-card';

type FavoriteItemProps = {
  city: string;
  favorites: HotelType[];
}

function FavoriteItem(props: FavoriteItemProps) : JSX.Element {
  const {favorites, city} = props;
  const places = favorites.filter((hotel) => hotel.city.name === city);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{props.city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {
          places.map((hotel) => (
            <FavoriteCard key={hotel.id} hotel={hotel} />
          ))
        }
      </div>
    </li>
  );
}

export default FavoriteItem;
