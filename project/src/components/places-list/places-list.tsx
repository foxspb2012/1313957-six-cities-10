import type {Hotel} from '../../types/hotel';
import PlaceCard from '../place-card/place-card';
import {useAppDispatch} from '../../hooks';
import {setHoverCityIdAction} from '../../store/offers-process/offers-process';
import classNames from 'classnames';
import {CardType} from '../../const';

type PlacesListProps = {
  hotels: Hotel[];
  type: string;
}

function PlacesList({hotels, type}: PlacesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const onMouseOver = (id: number) => dispatch(setHoverCityIdAction(id));
  const onMouseLeave = () => dispatch(setHoverCityIdAction(null));

  const cardListClass = classNames(
    {
      'favorites__places': type === CardType.FAVORITES,
      'cities__places-list places__list tabs__content': type === CardType.CITIES,
      'near-places__list places__list': type === CardType.NEAR_PLACES,
    });

  return (
    <div className={cardListClass}>
      {
        hotels.map((hotel) => (
          <PlaceCard
            key={hotel.id}
            hotel={hotel}
            cardType={type}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
          />
        ))
      }
    </div>
  );
}

export default PlacesList;
