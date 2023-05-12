import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
const PrivateUserRoute = ({ children }) => {
  const location = useLocation();
  const { isAuth } = useSelector((store) => {
    return store.userLoginReducer;
  });
  return isAuth ? (
    children
  ) : (
    <Navigate to={"/login"} state={location.pathname} replace />
  );
};

export default PrivateUserRoute;
