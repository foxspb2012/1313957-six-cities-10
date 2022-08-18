import {HotelType} from '../../types/hotel';
import FavoriteItem from '../favorite-item/favorite-item';

type FavoritesProps = {
  cities: string[];
  favorites: HotelType[];
}

function Favorites({cities, favorites}: FavoritesProps): JSX.Element {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          cities.map((city) => (
            <FavoriteItem key={city} city={city} favorites={favorites} />
          ))
        }
      </ul>
    </section>
  );
}

export default Favorites;
