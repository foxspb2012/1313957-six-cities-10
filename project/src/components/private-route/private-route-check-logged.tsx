import {AuthorizationStatus} from '../../const';

type PrivateRouteNotLoggedProps = {
  authorizationStatus: AuthorizationStatus;
  publicElement: JSX.Element;
  privateElement: JSX.Element;
}

function PrivateRouteCheckLogged(props: PrivateRouteNotLoggedProps ): JSX.Element {
  const {authorizationStatus, publicElement, privateElement} = props;

  return (
    authorizationStatus === AuthorizationStatus.NoAuth
      ? publicElement
      : privateElement
  );
}

export default PrivateRouteCheckLogged;
