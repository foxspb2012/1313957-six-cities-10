import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, getFavoriteHotelsAction, getHotelsAction} from './store/api-action';
import {ToastContainer} from 'react-toastify';

store.dispatch(checkAuthAction());
store.dispatch(getHotelsAction());
store.dispatch(getFavoriteHotelsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App/>
    </Provider>
  </React.StrictMode>,
);

