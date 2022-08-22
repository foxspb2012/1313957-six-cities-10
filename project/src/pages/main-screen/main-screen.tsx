import type {Hotel} from '../../types/hotel';
import Header from '../../components/header/header';
import MainCities from '../../components/main-cities/main-cities';
import MainEmpty from '../../components/main-empty/main-empty';
import {AuthorizationStatus} from '../../const';
import classNames from 'classnames';

type MainPageProps = {
  hotels: Hotel[];
  authStatus: AuthorizationStatus;
  cities: string[];
}

function MainScreen({hotels, authStatus, cities}: MainPageProps): JSX.Element {

  const hasHotels = Boolean(hotels.length > 0);

  const mainClass = classNames('page__main', 'page__main--index', {'page__main--index-empty': hasHotels});

  const citiesList = () => (
    cities.map((city, index) =>
      (
        <li className="locations__item" key={city}>
          <a className={`locations__item-link tabs__item ${index === 0 ? 'tabs__item--active' : ''}`} href="/#">
            <span>{city}</span>
          </a>
        </li>
      )
    )
  );

  const citiesHotel = () => (
    hasHotels ?
      <MainCities hotels={hotels} cities={cities}/>
      :
      <MainEmpty/>
  );

  return (
    <div className="page page--gray page--main">
      <Header authStatus={authStatus}/>
      <main className={mainClass}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {
                citiesList()
              }
            </ul>
          </section>
        </div>
        {citiesHotel()}
      </main>
    </div>
  );
}

export default MainScreen;
