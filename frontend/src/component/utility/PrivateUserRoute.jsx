import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
const PrivateUserRoute = ({ children }) => {
  const location = useLocation();
  const auth = useSelector((store) => {
    return store.userLoginReducer.isAuth;
  });
  return !auth ? (
    children
  ) : (
    <Navigate to={"/login"} state={location.pathname} replace />
  );
};

export default PrivateUserRoute;
