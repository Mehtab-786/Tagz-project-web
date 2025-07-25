import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Register = lazy(() => import("../pages/Register"))
const Profile = lazy(() => import("../pages/Profile"));
const Home = lazy(() => import("../pages/Home"));
const Cart = lazy(() => import("../pages/Cart"));
const Products = lazy(() => import("../pages/Products"));
const Login = lazy(() => import("../pages/Login"));
const About = lazy(() => import("../pages/About"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const Layout = lazy(() => import("../components/Layout"));

function MainRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default MainRoutes;
