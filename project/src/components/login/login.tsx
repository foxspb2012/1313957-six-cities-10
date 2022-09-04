import type {AuthData} from '../../types/auth';
import {FormEvent, useState, ChangeEvent} from 'react';
import {useAppDispatch} from '../../hooks';
import {loginAction} from '../../store/api-action';
import {toast} from 'react-toastify';

const checkEmailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
const checkPasswordPattern = /^((?=\S*?[A-Za-z])(?=\S*?[0-9]).{1,})\S$/;

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!checkEmailPattern.test(loginForm.email)) {
      toast('Please enter a valid email');
      return;
    }

    if (!checkPasswordPattern.test(loginForm.password)) {
      toast('Please enter at least one letter and number');
      return;
    }

    onSubmit({
      login: loginForm.email,
      password: loginForm.password,
    });
  };

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form
        className="login__form form"
        action=""
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input className="login__input form__input" type="email" name="email" placeholder="Email"
            required value={loginForm.email}
            onChange={({target}: ChangeEvent<HTMLInputElement>) => {
              setLoginForm({...loginForm, email: target.value});
            }}
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input className="login__input form__input" type="password" name="password" placeholder="Password"
            required value={loginForm.password}
            onChange={({target}: ChangeEvent<HTMLInputElement>) => {
              setLoginForm({...loginForm, password: target.value});
            }}
          />
        </div>
        <button className="login__submit form__submit button" type="submit">Sign in</button>
      </form>
    </section>
  );
}


export default Login;
