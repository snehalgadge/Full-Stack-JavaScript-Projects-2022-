import React from 'react';
import { createRoot } from 'react-dom/client';

import 'slick-carousel/slick/slick.css';

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <PersistGate loading={'loading'} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  container
);
