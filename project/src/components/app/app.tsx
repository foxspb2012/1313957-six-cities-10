import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import FavoriteScreen from '../../pages/favorite-screen/favorite-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {Route, Routes} from 'react-router-dom';
import {ScrollToTop} from '../../utils';
import {AppRoute} from '../../const';
import {browserHistory} from '../../browser-history';
import {HistoryRouter} from '../history-route/history-route';
import Loading from '../loading/loading';
import {useAppSelector} from '../../hooks';

function App(): JSX.Element {

  const {isDataLoaded} = useAppSelector((state) => state);

  if (isDataLoaded) {
    return (
      <Loading/>
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <ScrollToTop/>
      <Routes>
        <Route
          path={AppRoute.Login}
          element={
            <PrivateRoute>
              <LoginScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Main}
          element={<MainScreen/>}
        />
        <Route
          path={AppRoute.Room}
          element={
            <OfferScreen />
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoriteScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFoundScreen/>}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
