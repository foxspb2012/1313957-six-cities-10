import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import OfferNotLoggedScreen from '../../pages/offer-not-logged-screen/offer-not-logged-screen';
import FavoriteScreen from '../../pages/favorite-screen/favorite-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import PrivateRouteCheckLogged from '../private-route/private-route-check-logged';

type AppScreenProps = {
  cardCount: number;
}

function App({cardCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen cardCount={cardCount}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen/>}
        />
        <Route
          path={AppRoute.Room}
          element={
            <PrivateRouteCheckLogged
              authorizationStatus={AuthorizationStatus.NoAuth}
              publicElement={<OfferNotLoggedScreen/>}
              privateElement={<OfferScreen/>}
            />
          }
        />
        <Route
          path={'/favorite'}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoriteScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
