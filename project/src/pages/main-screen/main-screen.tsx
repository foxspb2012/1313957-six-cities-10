import type {CityType} from '../../types/city';
import type {OfferType} from '../../types/offer';
import Header from '../../components/header/header';
import MainCities from '../../components/main-cities/main-cities';
import MainEmpty from '../../components/main-empty/main-empty';
import {AuthorizationStatus} from '../../const';

type MainPageProps = {
  offers: OfferType[];
  authStatus: AuthorizationStatus;
  cities: CityType[];
}

function MainScreen({offers, authStatus, cities}: MainPageProps): JSX.Element {
  const hasOffers = !!offers.length;

  return (
    <div className="page page--gray page--main">
      <Header authStatus={authStatus}/>
      <main className={`page__main page__main--index ${hasOffers ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {
                cities.map((city, index) =>
                  (
                    <li className="locations__item" key={city.id}>
                      <a className={`locations__item-link tabs__item ${index === 0 ? 'tabs__item--active' : ''}`} href="/#">
                        <span>{city.name}</span>
                      </a>
                    </li>
                  )
                )
              }
            </ul>
          </section>
        </div>
        {hasOffers ?
          <MainCities offers={offers} cities={cities}/>
          : <MainEmpty/>}
      </main>
    </div>
  );
}

export default MainScreen;
