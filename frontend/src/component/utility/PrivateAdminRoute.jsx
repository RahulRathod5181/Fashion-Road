import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const PrivateAdminRoute = ({ children }) => {
  const auth = useSelector((store) => {
    return store.adminLoginReducer.isAuth;
  });
  return (!auth ? <Navigate to={"/adminlogin"} /> : children)
};

export default PrivateAdminRoute;
