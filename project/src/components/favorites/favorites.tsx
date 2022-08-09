import {OfferType} from '../../types/offer';
import FavoriteItem from '../favorite-item/favorite-item';

type FavoritesProps = {
  cities: string[];
  offers: OfferType[];
}

function Favorites({cities, offers}: FavoritesProps): JSX.Element {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          cities.map((city) => (
            <FavoriteItem key={city} city={city} offers={offers} />
          ))
        }
      </ul>
    </section>
  );
}

export default Favorites;
