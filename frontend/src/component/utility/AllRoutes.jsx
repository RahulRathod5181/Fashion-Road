import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../login_signup/Login";
import Signup from "../login_signup/Signup";
import AdminLogin from "../admin/login_signup/AdminLogin";
import AdminSignup from "../admin/login_signup/AdminSignup";
import Landing from "../landingPage/Landing";
import Addproduct from "../admin/addProduct/Addproduct";
import Dashboard from "../admin/dashboard/Dashboard";
import Product from "../admin/admin product/Product";
import EditProduct from "../admin/admin product/EditProduct";
import Shirt from "../landingPage/shirt list/Shirt";
import Sarees from "../landingPage/sarees list/Sarees";
import Kurta from "../landingPage/kurta list/Kurta";
import Footwere from "../landingPage/footware list/Footwere";
import Dress from "../landingPage/dresses list/Dress";
import Accessories from "../landingPage/accessories list/Accessories";




import CartPage from "../Rahul/Cart/CartPage";
import PaymentPage from "../Rahul/PaymentPage/PaymentPage";
import OrderSucess from "../Rahul/PaymentPage/OrderSucess";


import PrivateUserRoute from "./PrivateUserRoute";

import MensProduct from "../ProductPage/MensProduct";
import WomensProduct from "../ProductPage/WomensProduct";
import SingleWomen from "../ProductPage/SingleWomen";
import SingleMen from "../ProductPage/SingleMen";

const AllRoutes = () => {
  return (
    <Routes>

      <Route path="/mens" element={<MensProduct/>}></Route>
      <Route path="/womens" element={<WomensProduct/>}></Route>
      <Route path="womens/:id" element={<SingleWomen/>}></Route>
      <Route path="mens/:id" element={<SingleMen/>}></Route>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/adminsignup" element={<AdminSignup />} />
      <Route path="/" element={<Landing />} />
      <Route path="/adminAddproduct" element={<Addproduct />} />
      <Route path="/adminDashboard" element={<Dashboard />}  />
      <Route path="/adminProduct" element={<Product />} />
      <Route path="/editProduct/:id" element={<EditProduct />} />
      <Route path="/shirtProduct" element={<Shirt />} />
      <Route path="/sareeProduct" element={<Sarees />} />
      <Route path="/kurtaProduct" element={<Kurta />} />
      <Route path="/footwereProduct" element={<Footwere />}  />
      <Route path="/dressProduct" element={<Dress />} />
      <Route path="/accessoriesProduct" element={<Accessories />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/paymentPage" element={<PaymentPage />} />
      <Route path="/orderSuccess" element={<OrderSucess />} />
    </Routes>
  );
};

export default AllRoutes;
