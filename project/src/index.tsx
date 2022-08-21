import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {hotels} from './mocks/hotels';
import {comments} from './mocks/comments';
import {Cities} from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      hotels={hotels}
      comments={comments}
      cities={Cities}
    />
  </React.StrictMode>,
);
