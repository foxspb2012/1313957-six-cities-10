import type {HotelType} from '../../types/hotel';
import PlaceCard from '../place-card/place-card';

type PlacesListProps = {
  hotels: HotelType[];
}

function PlacesList({hotels}: PlacesListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        hotels.map((hotel) => (
          <PlaceCard
            key={hotel.id}
            hotel={hotel}
            isNear
          />
        ))
      }
    </div>
  );
}

export default PlacesList;
