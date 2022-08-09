import FavoriteCard from '../favorite-card/favorite-card';
import {OfferType} from '../../types/offer';

type FavoriteItemProps = {
  city: string;
  offers: OfferType[];
}

function FavoriteItem(props: FavoriteItemProps) : JSX.Element {
  const {offers, city} = props;
  const places = offers.filter((offer) => offer.city === city);

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
          places.map((offer) => (
            <FavoriteCard key={offer.id} offer={offer} />
          ))
        }
      </div>
    </li>
  );
}

export default FavoriteItem;
