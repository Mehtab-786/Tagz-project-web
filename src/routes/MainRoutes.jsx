import React from "react";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";
import About from "../pages/About";
import ProductDetails from "../pages/ProductDetails";
import PageNotFound from "../pages/PageNotFound";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/products-details" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
