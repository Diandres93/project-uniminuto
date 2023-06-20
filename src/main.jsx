import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import {App} from "./App.jsx";
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={App}/>
    </Provider>
  </React.StrictMode>
);
