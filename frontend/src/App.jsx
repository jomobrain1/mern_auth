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
import SignupEloop from "./pages/Eloop/EloopSignup";
import ForgotPassword from "./pages/ForgotPassword";
import DashboardEloop from "./pages/Eloop/ELoopDashboard";
import VerifyOtp from "./pages/VerifyOtp";
import VerifyOTP from "./pages/VerifyOtp";
import ChangePassword from "./pages/ChangePassword";

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
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/verify-otp/:email",
    element: <VerifyOTP />,
  },
  {
    path: "/change-password/:email",
    element: <ChangePassword />,
  },
  {
    path: "/elooplogin",
    element: <LoginEloop />,
  },
  {
    path: "/eloopsignup",
    element: <SignupEloop />,
  },
  {
    path: "/edash",
    element: <DashboardEloop />,
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
