import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "sonner";
import { UserProvider } from "./components/context/userContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <Toaster />
      <App />
    </UserProvider>
  </StrictMode>,
);
