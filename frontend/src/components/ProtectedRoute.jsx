import React from "react";
import { Navigate } from "react-router-dom";
import { getData } from "./context/userContext";

const ProtectedRoute = ({ children }) => {
  const { user } = getData();
  return <div>{user ? children : <Navigate to={"/login"} />}</div>;
};

export default ProtectedRoute;
