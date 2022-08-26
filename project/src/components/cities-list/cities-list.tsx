import type {Hotel} from '../../types/hotel';
import CityItem from '../city-item/city-item';
import {store} from '../../store';
import {changeCity} from '../../store/action';

type CitiesListProps = {
  cities: string[];
  currentCity: string;
  hotels: Hotel[];
}

function CitiesList({currentCity, cities, hotels}: CitiesListProps): JSX.Element {

  const onCityClick = (cityItem: string, hotelsItem: Hotel[]) => {
    store.dispatch(changeCity(cityItem, hotelsItem));
  };

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {
              cities.map((city) =>
                <CityItem key={city} cityItem={city} currentCity={currentCity} hotelsItem={hotels} onCityClick={onCityClick}/>
              )
            }
          </ul>
        </section>
      </div>
    </>
  );
}

export default CitiesList;
