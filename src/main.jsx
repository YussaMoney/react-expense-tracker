import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        duration: 3000,
        style: {
          background: "#1f2937",
          color: "#fff",
          borderRadius: "10px",
          padding: "14px",
        },
        success: {
          iconTheme: {
            primary: "#22c55e",
            secondary: "#fff",
          },
        },
        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: "#fff",
          },
        },
      }}
    />
    <App />
  </StrictMode>,
);
