import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../login_signup/Login";
import Signup from "../login_signup/Signup";
import AdminLogin from "../admin/login_signup/AdminLogin";
import AdminSignup from "../admin/login_signup/AdminSignup";
import Landing from "../landingPage/Landing";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/adminsignup" element={<AdminSignup />} />
      <Route path="/" element={<Landing />} />
    </Routes>
  );
};

export default AllRoutes;