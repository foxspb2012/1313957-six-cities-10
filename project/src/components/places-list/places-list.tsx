import type {Hotel} from '../../types/hotel';
import PlaceCard from '../place-card/place-card';
import {useAppDispatch} from '../../hooks';
import {hoverOnCard} from '../../store/action';

type PlacesListProps = {
  hotels: Hotel[];
}

function PlacesList({hotels}: PlacesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const onMouseOver = (id: number) => dispatch(hoverOnCard(id));
  const onMouseLeave = () => dispatch(hoverOnCard(null));

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        hotels.map((hotel) => (
          <PlaceCard
            key={hotel.id}
            hotel={hotel}
            isNear
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
          />
        ))
      }
    </div>
  );
}

export default PlacesList;
