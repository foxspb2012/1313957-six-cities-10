import type {Hotel} from '../../types/hotel';
import FavoriteCard from '../favorite-card/favorite-card';

type FavoriteItemProps = {
  city: string;
  favorites: Hotel[];
}

function FavoriteItem(props: FavoriteItemProps): JSX.Element {
  const {favorites, city} = props;

  const favoriteCard = () =>
    favorites.filter((hotel) =>
      hotel.city.name === city).map((hotel) =>
      (
        <FavoriteCard key={hotel.id} hotel={hotel}/>
      ));

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
          favoriteCard()
        }
      </div>
    </li>
  );
}

export default FavoriteItem;
