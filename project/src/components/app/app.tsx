import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import FavoriteScreen from '../../pages/favorite-screen/favorite-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import Loading from '../loading/loading';
import {useAppSelector} from '../../hooks';
import {getIsDataLoadedValue} from '../../store/hotels-data/selectors';

function App(): JSX.Element {

  const isDataLoaded = useAppSelector(getIsDataLoadedValue);

  if (isDataLoaded) {
    return (
      <Loading/>
    );
  }

  return (
    <Routes>
      <Route
        path={AppRoute.Login}
        element={<LoginScreen/>}
      />
      <Route
        path={AppRoute.Main}
        element={<MainScreen/>}
      />
      <Route
        path={AppRoute.Room}
        element={
          <OfferScreen/>
        }
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute>
            <FavoriteScreen/>
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.NotFoundPage}
        element={<NotFoundScreen/>}
      />
    </Routes>
  );
}

export default App;
