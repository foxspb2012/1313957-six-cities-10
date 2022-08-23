import CityItem from '../city-item/city-item';

type CitiesListProps = {
  cities: string[];
  currentCity: string;
}

function CitiesList({currentCity, cities}: CitiesListProps): JSX.Element {

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {
              cities.map((city) =>
                <CityItem key={city} cityItem={city} currentCity={currentCity} />
              )
            }
          </ul>
        </section>
      </div>
    </>
  );
}

export default CitiesList;
