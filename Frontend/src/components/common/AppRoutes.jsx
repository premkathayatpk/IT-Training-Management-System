import React from "react";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/cart" element={<Home />} />
        <Route path="/product" element={<Home />} />
        <Route path="/productDetail" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
