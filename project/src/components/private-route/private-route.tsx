import {AppRoute, AuthorizationStatus} from '../../const';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? <Navigate to={AppRoute.Main} />
      : children
  );
}

export default PrivateRoute;
