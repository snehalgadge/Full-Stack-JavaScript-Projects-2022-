import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home';
import Signin from './pages/Signin';
import Registration from './pages/Registration';
import Cart from './pages/Cart';

// API
import { productsData } from './api/api';

const RootLayout = () => {
  return (
    <React.Fragment className="bg-gray-100">
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} loader={productsData}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        {/* <Route path="/checkout" element={<Checkout />}></Route> */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
