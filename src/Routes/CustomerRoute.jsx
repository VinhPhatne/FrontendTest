import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from '../components/footer/AppFooter';
import Header from '../components/header/AppHeader';
import Home from "../components/Home";

import PageNotFound from './PageNotFound';

const CustomerRoute = () => {
  const jwt = localStorage.getItem("jwt");
  const storedRole = localStorage.getItem("role") || "";
  const location = useLocation();

  const isNotFound = ![
    '/',
    '/profile',
    '/cart',
    '/checkout',
    '/success',
    '/about',
    '/promotion',
    '/otp',
    '/detail/:id',
  ].some((path) => location.pathname === path || location.pathname.startsWith(path.replace(':id', '')));

  return (
      <div>
        {/* {!isNotFound && <Header />} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* {!isNotFound && <Footer />} */}
      </div>
  );
};

export default CustomerRoute;
