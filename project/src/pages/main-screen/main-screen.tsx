import type {HotelType} from '../../types/hotel';
import Header from '../../components/header/header';
import MainCities from '../../components/main-cities/main-cities';
import MainEmpty from '../../components/main-empty/main-empty';
import {AuthorizationStatus} from '../../const';

type MainPageProps = {
  hotels: HotelType[];
  authStatus: AuthorizationStatus;
  cities: string[];
}

function MainScreen({hotels, authStatus, cities}: MainPageProps): JSX.Element {
  const hasHotels = !!hotels.length;

  return (
    <div className="page page--gray page--main">
      <Header authStatus={authStatus}/>
      <main className={`page__main page__main--index ${hasHotels ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {
                cities.map((city, index) =>
                  (
                    <li className="locations__item" key={city}>
                      <a className={`locations__item-link tabs__item ${index === 0 ? 'tabs__item--active' : ''}`} href="/#">
                        <span>{city}</span>
                      </a>
                    </li>
                  )
                )
              }
            </ul>
          </section>
        </div>
        {hasHotels ?
          <MainCities hotels={hotels} cities={cities}/>
          : <MainEmpty/>}
      </main>
    </div>
  );
}

export default MainScreen;
