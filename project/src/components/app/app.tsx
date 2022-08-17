import type {OfferType} from '../../types/offer';
import type {ReviewType} from '../../types/review';
import type {CityType} from '../../types/city';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import FavoriteScreen from '../../pages/favorite-screen/favorite-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ScrollToTop} from '../../utils';
import {AppRoute, AuthorizationStatus} from '../../const';

type AppScreenProps = {
  offers: OfferType[];
  reviews: ReviewType[];
  cities: CityType[];
}

function App(props: AppScreenProps): JSX.Element {
  const {offers, reviews, cities} = props;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen offers={offers} cities={cities} authStatus={AuthorizationStatus.Auth} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Room}
          element={
            <OfferScreen offers={offers} reviews={reviews} authStatus={AuthorizationStatus.Auth} />
          }
        />
        <Route
          path={'/favorite'}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth} >
              <FavoriteScreen offers={offers} authStatus={AuthorizationStatus.Auth} />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
