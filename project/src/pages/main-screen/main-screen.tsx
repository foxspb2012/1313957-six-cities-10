import Header from '../../components/header/header';
import CitiesList from '../../components/cities-list/cities-list';
import MainCities from '../../components/main-cities/main-cities';
import MainEmpty from '../../components/main-empty/main-empty';
import {AuthorizationStatus} from '../../const';
import {Cities} from '../../const';
import {useAppSelector} from '../../hooks';
import classNames from 'classnames';

type MainPageProps = {
  authStatus: AuthorizationStatus;
}

function MainScreen({authStatus}: MainPageProps): JSX.Element {

  const hotels = useAppSelector((state) => state.hotels);
  const currentCity = useAppSelector((state) => state.city);
  const hotelsByCity = useAppSelector((state) => state.hotelsByCity);

  const hasHotels = Boolean(hotelsByCity.length > 0);

  const mainClass = classNames('page__main', 'page__main--index', {'page__main--index-empty': !hasHotels});

  const citiesHotel = () => (
    hasHotels ?
      <MainCities hotels={hotelsByCity} city={currentCity}/>
      :
      <MainEmpty currentCity={currentCity}/>
  );

  return (
    <div className="page page--gray page--main">
      <Header hotels={hotels} authStatus={authStatus}/>
      <main className={mainClass}>
        <CitiesList currentCity={currentCity} cities={Cities} hotels={hotels}/>
        {citiesHotel()}
      </main>
    </div>
  );
}

export default MainScreen;
