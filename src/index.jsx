import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./layout/Layout";
import { StoreProvider } from "./hooks/useGlobalReducer";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Main = () => {
  return (
    <React.StrictMode>
      <StoreProvider>
        <Layout />
      </StoreProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
