import type {Hotel} from '../../types/hotel';
import SortList from '../sort-list/sort-list';
import PlacesList from '../places-list/places-list';
import Map from '../../components/map/map';
import {CardType} from '../../const';

type MainCitiesProps = {
  hotels: Hotel[];
  city: string;
}

function MainCities({hotels, city}: MainCitiesProps): JSX.Element {

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{hotels.length} places to stay in {city}</b>
          <SortList/>
          <PlacesList hotels={hotels} type={CardType.CITIES}/>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map hotels={hotels}/>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MainCities;
