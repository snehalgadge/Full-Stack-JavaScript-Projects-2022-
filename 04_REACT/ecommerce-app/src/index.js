import React from 'react';
import { createRoot } from 'react-dom/client';
import "slick-carousel/slick/slick.css";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import firebaseConfig from './firebase.config';
import {store, persistor} from './redux/store'
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    document.getElementById('root')
  )

