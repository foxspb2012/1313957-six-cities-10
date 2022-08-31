import {AppRoute, AuthorizationStatus} from '../../const';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {

  const isAuth = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

  return (
    isAuth
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;
