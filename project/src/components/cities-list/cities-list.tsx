import CityItem from '../city-item/city-item';
import {selectCityAction, setOffersByCityAction, sortValueAction} from '../../store/hotels-data/hotels-data';
import {useAppDispatch} from '../../hooks';
import { SortOptions } from '../../const';

type CitiesListProps = {
  cities: string[];
  currentCity: string;
}

function CitiesList({currentCity, cities}: CitiesListProps): JSX.Element {

  const dispatch = useAppDispatch();

  const onCityClick = (city: string) => {
    dispatch(selectCityAction(city));
    dispatch(setOffersByCityAction());
    dispatch(sortValueAction(SortOptions.POPULAR));
  };

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {
              cities.map((city) =>
                <CityItem key={city} cityItem={city} currentCity={currentCity} onCityClick={onCityClick}/>
              )
            }
          </ul>
        </section>
      </div>
    </>
  );
}

export default CitiesList;
