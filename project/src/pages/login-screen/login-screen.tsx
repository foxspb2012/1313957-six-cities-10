import { Link, Navigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Login from '../../components/login/login';
import {useAppSelector} from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

function LoginScreen(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main}/>;
  }

  return (
    <div className="page page--gray page--login">
      <Header isNavVisible={false}/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <Login/>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
