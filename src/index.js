import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './Redux/app/store';
import Routers from './Routers/Routers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/css/index.css'
import 'aos/dist/aos.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routers />
    </Provider>
  </React.StrictMode>
);
