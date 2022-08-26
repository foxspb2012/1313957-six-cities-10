import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {hotels} from './mocks/hotels';
import {comments} from './mocks/comments';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App
        hotels={hotels}
        comments={comments}
      />
    </React.StrictMode>
  </Provider>
);
