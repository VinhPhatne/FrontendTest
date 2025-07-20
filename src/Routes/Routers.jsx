import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerRoute from "./CustomerRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/*" element={<CustomerRoute />} />
    </Routes>
  );
};

export default Routers;
