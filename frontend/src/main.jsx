import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider, theme } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#000",
          borderRadius: 2,
          colorBgContainer: "#fff",
        },
      }}
    ></ConfigProvider>
    <App />
  </React.StrictMode>
);
