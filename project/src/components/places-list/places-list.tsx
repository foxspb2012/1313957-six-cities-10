import type {OfferType} from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlacesListProps = {
  offers: OfferType[];
}

function PlacesList({offers}: PlacesListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            isNear
          />
        ))
      }
    </div>
  );
}

export default PlacesList;
