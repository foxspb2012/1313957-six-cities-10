import type {CityType} from '../../types/city';
import type {OfferType} from '../../types/offer';
import PlacesList from '../places-list/places-list';
import Map from '../../components/map/map';

type MainCitiesProps = {
  offers: OfferType[];
  cities: CityType[];
}

const CITY_ID = 4;

function MainCities({offers, cities}: MainCitiesProps): JSX.Element {

  const currentCity = cities.find((city) => city.id === CITY_ID) as CityType;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {currentCity.name}</b>
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
          <PlacesList offers={offers}/>
        </section>
        <div className="cities__right-section">
          <section style={{ width: '100%' }} >
            <Map city={currentCity} offers={offers}/>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MainCities;
