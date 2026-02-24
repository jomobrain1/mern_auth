import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import VerifyEmail from "./pages/VerifyEmail";
import Verify from "./pages/Verify";
import Navbar from "./components/Navbar";
import LoginEloop from "./pages/eloop/EloopLogin";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ProtectedRoute>
          <Navbar /> <Home />
        </ProtectedRoute>
      </>
    ),
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/verify",
    element: <VerifyEmail />,
  },
  {
    path: "/verify/:token",
    element: <Verify />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/elooplogin",
    element: <LoginEloop />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
