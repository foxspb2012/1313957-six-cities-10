import Header from '../../components/header/header';
import CitiesList from '../../components/cities-list/cities-list';
import MainCities from '../../components/main-cities/main-cities';
import MainEmpty from '../../components/main-empty/main-empty';
import {Cities} from '../../const';
import {useAppSelector} from '../../hooks';
import {getHotelsByChoosenCity, getSelectedCity} from '../../store/hotels-data/selectors';
import {getActiveOffer} from '../../store/offers-process/selectors';
import classNames from 'classnames';

function MainScreen(): JSX.Element {

  const currentCity = useAppSelector(getSelectedCity);
  const hotelsByCity = useAppSelector(getHotelsByChoosenCity);
  const cityHover = useAppSelector(getActiveOffer);
  const selectedHotel = hotelsByCity.find((hotel) => hotel.id === cityHover);

  const hasHotels = Boolean(hotelsByCity.length > 0);

  const mainClass = classNames('page__main', 'page__main--index', {'page__main--index-empty': !hasHotels});

  const citiesHotel = () => (
    hasHotels ?
      <MainCities hotels={hotelsByCity} city={currentCity} selectedHotel={selectedHotel}/>
      :
      <MainEmpty currentCity={currentCity}/>
  );

  return (
    <div className="page page--gray page--main">
      <Header isNavVisible/>
      <main className={mainClass}>
        <CitiesList currentCity={currentCity} cities={Cities}/>
        {citiesHotel()}
      </main>
    </div>
  );
}

export default MainScreen;
