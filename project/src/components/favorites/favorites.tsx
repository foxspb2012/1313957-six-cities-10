import {Hotel} from '../../types/hotel';
import FavoriteItem from '../favorite-item/favorite-item';

type FavoritesProps = {
  favorites: Hotel[];
}

function Favorites({favorites}: FavoritesProps): JSX.Element {

  const cities = favorites.map((item) => item.city.name)
    .reduce((acc: string[], item) => (acc.includes(item) ? acc : [...acc, item]), []).sort();

  const favoriteItems = () => cities.map((city) => (
    <FavoriteItem key={city} city={city} favorites={favorites}/>
  ));

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          favoriteItems()
        }
      </ul>
    </section>
  );
}

export default Favorites;
