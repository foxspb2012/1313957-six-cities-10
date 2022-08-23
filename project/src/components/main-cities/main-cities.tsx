import type {Hotel} from '../../types/hotel';
import PlacesList from '../places-list/places-list';
import Map from '../../components/map/map';

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
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width={7} height={4}>
                <use xlinkHref="#icon-arrow-select"/>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>
                Popular
              </li>
              <li className="places__option" tabIndex={0}>
                Price: low to high
              </li>
              <li className="places__option" tabIndex={0}>
                Price: high to low
              </li>
              <li className="places__option" tabIndex={0}>
                Top rated first
              </li>
            </ul>
          </form>
          <PlacesList hotels={hotels}/>
        </section>
        <div className="cities__right-section">
          <section style={{ width: '100%' }} >
            <Map hotels={hotels}/>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MainCities;
