import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./providers/AuthProvider/index.tsx";
import { BrowserRouter } from "react-router-dom";
import { CurrentProfileProvider } from "./providers/CurrentProfileProvider/index.tsx";
import { setupI18n } from "./lang/setup.ts";

const queryClient = new QueryClient();

setupI18n();


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <CurrentProfileProvider>
            <App />
          </CurrentProfileProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
